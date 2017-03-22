import Component from 'ui/Component.js';

export default class List extends Component {

  static TEMPLATE =
    `<ul class="ui list">
        <li each="item of data"
          data-value=":item">
          <ListItemSelector
          value="{{item}}"
          pattern="{{value}}"
          hideCheckbox="false"
          >

          </ListItemSelector>
          {{item}}
          </li>
        <block if="data.length">
          <else><small class="empty">:emptyMessage</small></else>
        </block>
    </ul>`;

  static PROPS = {
    value: { default: null },
    valueChanged:{ },
    data: { default: [] },
    emptyMessage: { default: 'Empty... yet' }
  }
}

Component.registerType(List);
