import './SlButton.css'

// import '@shoelace-style/shoelace/dist/themes/light.css';
// import '@shoelace-style/shoelace/dist/themes/dark.css';
// import '@shoelace-style/shoelace/dist/components/button/button.js';
import {default as SlButton} from '@shoelace-style/shoelace/dist/components/button/button.js';
// import {default as SlIcon} from '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('../../..');

export {
    SlButton as default
};

