import './SlTabPanel.js';
import './SlTab.js';
// import './SlTabs.css';
import stylesheet from './SlTabs.css?inline' with { type: 'css' };

import {KEYCODE} from "../../helpers/keycode.js";
// import styleText from './SlTabs.css' with { type: 'css' };
//
const sheet = new CSSStyleSheet();
sheet.replaceSync(stylesheet);
// sheet.replace("@import('./SlTabs.css');");



// import './SlTabs.css';
//
// class SlTabs extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//           <div class="tabs"></div>
//           <div class="content">
//             <slot></slot>
//           </div>
//         `;
//     }
//
//     connectedCallback() {
//         this.tabs = Array.from(this.querySelectorAll('[slot="tab"]'));
//         this.contents = Array.from(this.querySelectorAll('[slot="content"]'));
//         this.renderTabs();
//         this.selectTab(0);
//     }
//
//     renderTabs() {
//         const tabsContainer = this.shadowRoot.querySelector('.tabs');
//         tabsContainer.innerHTML = '';
//         this.tabs.forEach((tab, index) => {
//             const tabElement = document.createElement('div');
//             tabElement.classList.add('tab');
//             tabElement.textContent = tab.textContent;
//             tabElement.addEventListener('click', () => this.selectTab(index));
//             tabsContainer.appendChild(tabElement);
//         });
//     }
//
//     selectTab(index) {
//         this.tabs.forEach((tab, i) => {
//             this.shadowRoot.querySelectorAll('.tab')[i].classList.toggle('active', i === index);
//             this.contents[i].classList.toggle('active', i === index);
//         });
//     }
// }
//
// customElements.get('sl-tabs') || customElements.define('sl-tabs', SlTabs);
//
// export { SlTabs };

// To avoid invoking the parser with `.innerHTML` for every new instance, a
// template for the contents of the shadow DOM is shared by all
// `<sl-tabs>` instances.
const template = document.createElement('template');
template.innerHTML = `
    <div role="tablist">
        <slot name="tab" part="tab"></slot>
    </div>
    <div part="panel">
        <slot name="panel"></slot>
    </div>
  `;


export class SlTabs extends HTMLElement {
    constructor() {
        super();

        // Event handlers that are not attached to this element need to be bound
        // if they need access to `this`.
        this._onSlotChange = this._onSlotChange.bind(this);

        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        shadowRoot.adoptedStyleSheets = [sheet];

        this._tabSlot = shadowRoot.querySelector('slot[name=tab]');
        this._panelSlot = shadowRoot.querySelector('slot[name=panel]');

        // This element needs to react to new children as it links up tabs and
        // panel semantically using `aria-labelledby` and `aria-controls`.
        // New children will get slotted automatically and cause `slotchange`
        // to fire, so not `MutationObserver` is needed.
        this._tabSlot.addEventListener('slotchange', this._onSlotChange);
        this._panelSlot.addEventListener('slotchange', this._onSlotChange);
    }

    /**
     * `connectedCallback()` groups tabs and panels by reordering and makes sure
     * exactly one tab is active.
     */
    connectedCallback() {

        // The element needs to do some manual input event handling to allow
        // switching with arrow keys and Home/End.
        this.addEventListener('keydown', this._onKeyDown);
        this.addEventListener('click', this._onClick);


        // Up until recently, `slotchange` events did not fire when an element was
        // upgraded by the parser. For this reason, the element invokes the
        // handler manually. Once the new behavior lands in all browsers, the code
        // below can be removed.
        Promise.all([
            customElements.whenDefined('sl-tab'),
            customElements.whenDefined('sl-panel'),
        ])
            .then(_ => this._linkPanels());
    }

    /**
     * `disconnectedCallback()` removes the event listeners that
     * `connectedCallback` added.
     */
    disconnectedCallback() {
        this.removeEventListener('keydown', this._onKeyDown);
        this.removeEventListener('click', this._onClick);
    }

    /**
     * `_onSlotChange()` is called whenever an element is added or removed from
     * one of the shadow DOM slots.
     */
    _onSlotChange() {
        this._linkPanels();
    }

    /**
     * `_linkPanels()` links up tabs with their adjacent panels using
     * `aria-controls` and `aria-labelledby`. Additionally, the method makes
     * sure only one tab is active.
     *
     * If this function becomes a bottleneck, it can be easily optimized by
     * only handling the new elements instead of iterating over all the
     * element’s children.
     */
    _linkPanels() {
        const tabs = this._allTabs();
        // Give each panel a `aria-labelledby` attribute that refers to the tab
        // that controls it.
        tabs.forEach(tab => {
            const panel = tab.nextElementSibling;
            if (panel.tagName.toLowerCase() !== 'sl-panel') {
                console.error(`Tab #${tab.id} is not a` +
                    `sibling of a <sl-panel>`);
                return;
            }

            tab.setAttribute('aria-controls', panel.id);
            panel.setAttribute('aria-labelledby', tab.id);
        });

        // The element checks if any of the tabs have been marked as selected.
        // If not, the first tab is now selected.
        const selectedTab =
            tabs.find(tab => tab.selected) || tabs[0];

        // Next, switch to the selected tab. `selectTab()` takes care of
        // marking all other tabs as deselected and hiding all other panels.
        this._selectTab(selectedTab);
    }

    /**
     * `_allPanels()` returns all the panels in the tab panel. This function
     * could memoize the result if the DOM queries ever become a performance
     * issue. The downside of memoization is that dynamically added tabs and
     * panels will not be handled.
     *
     * This is a method and not a getter, because a getter implies that it is
     * cheap to read.
     */
    _allPanels() {
        return Array.from(this.querySelectorAll('sl-panel'));
    }

    /**
     * `_allTabs()` returns all the tabs in the tab panel.
     */
    _allTabs() {
        return Array.from(this.querySelectorAll('sl-tab'));
    }

    /**
     * `_panelForTab()` returns the panel that the given tab controls.
     */
    _panelForTab(tab) {
        const panelId = tab.getAttribute('aria-controls');
        return this.querySelector(`#${panelId}`);
    }

    /**
     * `_prevTab()` returns the tab that comes before the currently selected
     * one, wrapping around when reaching the first one.
     */
    _prevTab() {
        const tabs = this._allTabs();
        // Use `findIndex()` to find the index of the currently
        // selected element and subtracts one to get the index of the previous
        // element.
        let newIdx =
            tabs.findIndex(tab => tab.selected) - 1;
        // Add `tabs.length` to make sure the index is a positive number
        // and get the modulus to wrap around if necessary.
        return tabs[(newIdx + tabs.length) % tabs.length];
    }

    /**
     * `_firstTab()` returns the first tab.
     */
    _firstTab() {
        const tabs = this._allTabs();
        return tabs[0];
    }

    /**
     * `_lastTab()` returns the last tab.
     */
    _lastTab() {
        const tabs = this._allTabs();
        return tabs[tabs.length - 1];
    }

    /**
     * `_nextTab()` gets the tab that comes after the currently selected one,
     * wrapping around when reaching the last tab.
     */
    _nextTab() {
        const tabs = this._allTabs();
        let newIdx = tabs.findIndex(tab => tab.selected) + 1;
        return tabs[newIdx % tabs.length];
    }

    /**
     * `reset()` marks all tabs as deselected and hides all the panels.
     */
    reset() {
        const tabs = this._allTabs();
        const panels = this._allPanels();

        tabs.forEach(tab => tab.selected = false);
        panels.forEach(panel => panel.hidden = true);
    }


    /**
     * `_selectTab()` marks the given tab as selected.
     * Additionally, it unhides the panel corresponding to the given tab.
     */
    _selectTab(newTab) {
        // Deselect all tabs and hide all panels.
        this.reset();

        // Get the panel that the `newTab` is associated with.
        const newPanel = this._panelForTab(newTab);
        // If that panel doesn’t exist, abort.
        if (!newPanel)
            throw new Error(`No panel with id ${newPanelId}`);
        newTab.selected = true;
        newPanel.hidden = false;
        newTab.focus();
    }

    /**
     * `_onKeyDown()` handles key presses inside the tab panel.
     */
    _onKeyDown(event) {
        // If the keypress did not originate from a tab element itself,
        // it was a keypress inside the panel or on empty space. Nothing to do.
        if (event.target.getAttribute('role') !== 'tab')
            return;
        // Don’t handle modifier shortcuts typically used by assistive technology.
        if (event.altKey)
            return;

        // The switch-case will determine which tab should be marked as active
        // depending on the key that was pressed.
        let newTab;
        switch (event.keyCode) {
            case KEYCODE.LEFT:
            case KEYCODE.UP:
                newTab = this._prevTab();
                break;

            case KEYCODE.RIGHT:
            case KEYCODE.DOWN:
                newTab = this._nextTab();
                break;

            case KEYCODE.HOME:
                newTab = this._firstTab();
                break;

            case KEYCODE.END:
                newTab = this._lastTab();
                break;
            // Any other key press is ignored and passed back to the browser.
            default:
                return;
        }

        // The browser might have some native functionality bound to the arrow
        // keys, home or end. The element calls `preventDefault()` to prevent the
        // browser from taking any actions.
        event.preventDefault();
        // Select the new tab, that has been determined in the switch-case.
        this._selectTab(newTab);
    }

    /**
     * `_onClick()` handles clicks inside the tab panel.
     */
    _onClick(event) {
        // If the click was not targeted on a tab element itself,
        // it was a click inside the panel or on empty space. Nothing to do.
        if (event.target.getAttribute('role') !== 'tab')
            return;
        // If it was on a tab element, though, select that tab.
        this._selectTab(event.target);
    }
}

customElements.define('sl-tabs', SlTabs);