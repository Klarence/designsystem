import './SlBadge.css'

// import '@shoelace-style/shoelace/dist/themes/light.css';
// import '@shoelace-style/shoelace/dist/themes/dark.css';
// import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import {default as SlBadge} from '@shoelace-style/shoelace/dist/components/badge/badge.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('../../..');

export {
    SlBadge as default
};

