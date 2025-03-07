import './SlAlert.css'

// import '@shoelace-style/shoelace/dist/themes/light.css';
// import '@shoelace-style/shoelace/dist/themes/dark.css';
// import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import {default as SlAlert} from '@shoelace-style/shoelace/dist/components/alert/alert.js';
// import {default as SlIcon} from '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('../../..');

export {
    SlAlert as default
};

