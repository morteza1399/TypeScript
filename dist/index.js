"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
let result = echo(new Customer("samira"));
console.log(result);
//# sourceMappingURL=index.js.map