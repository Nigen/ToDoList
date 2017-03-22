import Component from 'ui/Component.js';
import Store from './Store.js';
import TEMPLATE from './Application.html';

export default class Application extends Component {

  static TEMPLATE = TEMPLATE;

  static PROPS = {
    name: {},
    tmpNote: {},
    current: {}
  };

  onInit() {

    Store.addObserver((event)=>this.invalidate(), this._id);
  }

  onDone() {

    Store.removeObserver(this._id);
  }

  get counter() {

    return Store.counter;
  }

  get notesList() {

    return Store.notesList;
  }

  inc( { value } ) {

    this.tmpNote = value;
  }

  addNote() {

    var a = this.tmpNote
    Store.addNewNote(a);
  }

  delAll() {

    Store.delAllNotes();
  }

  onItemSelected({ value }) {
    alert(value)
    this.current = value;
    alert(this.current  )
  }
}

Component.registerType(Application);
