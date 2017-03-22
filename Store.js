import Observable from 'concepts/Observable.js';

class Store extends Observable {

  constructor() {

    super();

    this.notesList = [];
  }

  get counter() {

    return this.notesList.length;
  }

  update(delta) {

    Object.assign(this, delta);

    this.notify(delta);
  }

  addNewNote(newNote) {

    if (newNote) {
      this.notesList.push(newNote);
    }
    this.update( this.notesList );
  }

  delAllNotes() {

    this.notesList = [];
    this.update( this.notesList );
  }

  restoreHotReload() {
    const hot = module && module.hot;
    if (hot) {

      hot.addStatusHandler(function (d) {});
      // hot.accept();
      hot.dispose( data2 => {
        data2.list = this.list;
      });
      const data = hot.data;
      if (data) {
        return data.list || [];
      }
    }
    return [];
  }
}

const store = new Store();

export default store;
