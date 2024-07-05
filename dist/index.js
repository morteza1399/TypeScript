"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    despoit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    calculateTax() {
        return "calculate tax";
    }
}
let account = new Account(1, "Morteza", 0);
account.despoit(100);
console.log(account.getBalance());
console.log(account.calculateTax());
//# sourceMappingURL=index.js.map