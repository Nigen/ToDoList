import Component from 'ui/Component.js';

export default class Input extends Component {

  static TEMPLATE =
    <input
         id=":id"
         type="text"
         placeholder=":placeholder"
         value=":value"
         input=":input"

      ></input>;

  static PROPS = {
    id: { },
    placeholder: { default: '...' },
    value: {  },
    valueChanged: { },
    input: { default: function() {
                        return this.value = document.getElementById(this.id).value;
                        //alert(this.value);
                      }
           }
  };
}

Component.registerType(Input);
