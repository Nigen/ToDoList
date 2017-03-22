import Component from 'ui/Component.js';

export default class DeleteItem extends Component {

  static TEMPLATE =
    <span
      click=":click"
      name=":name"> ×</span>
    ;

  static PROPS = {
    caption: { default: '...' },
    click: {  },
     name: { default: 'bttn'}
  };
}

Component.registerType(DeleteItem);
