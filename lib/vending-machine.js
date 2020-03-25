const coins = require("../lib/coins");
const inventory = require("../lib/inventory");

class vendingMachine {
  constructor(inventory, coins) {
    this.inventory = inventory;
    this.coins = coins;
  }

  printStock() {
    console.table(this.inventory);
    return true;
  }

  refillStock() {
    this.inventory = inventory;
    return true;
  }
}
let vending = new vendingMachine();
module.exports = vendingMachine;
