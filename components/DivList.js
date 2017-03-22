import Component from 'ui/Component.js';

export default class DivList extends Component {

  static TEMPLATE =
    /*`<ul class="ui list">
        <li each="item of data"
          click=":updateOnClick"
          data-value=":item.id">
          {{item}}
          <ListItemSelector
          value="{{item.id}}"
          pattern="{{value}}"
          hideCheckbox="false"
          >
          <span>{{item.name}}</span>
          </ListItemSelector>
          </li>
        <block if="data.length">
          <else><small class="empty">:emptyMessage</small></else>
        </block>
    </ul>`;
    */

`<div each="note of notes">{{note}}
<block if="data.length">
  <else><small class="empty">:emptyMessage</small></else>
</block>
 </div>`;


  static PROPS = {
    value: { default: null },
    valueChanged:{ },
    notes: { default: [1, 2, 3, 4] },
    emptyMessage: { default: 'Empty list' }
  }
}

Component.registerType(DivList);
