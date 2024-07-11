"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.add({ name: "b", price: 2 });
store.find("name", "a");
console.log(store.find("price", 2));
//# sourceMappingURL=index.js.map