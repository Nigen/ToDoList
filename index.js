import { bootstrap } from 'ui/Framework.js';
// import { renderer } from '../string/StringRenderer.js';
import { renderer } from 'ui/dom/DOMRenderer.js';

export { default as Application } from './Application.js';

import './components';
import './index.scss';

const render = bootstrap({
  renderer,
  markup:`<Application />`,
  componentTypes: [],
  parentElt: document.body
});

render();

// webpack hot reload
if (module && module.hot) {
  module.hot.accept();
}
