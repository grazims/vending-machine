class vendingMachine {
  constructor(inventory) {
    this.inventory = inventory;
  }

  printStock() {
    console.table(this.inventory);
    return true;
  }
}
let vending = new vendingMachine();
module.exports = vendingMachine;
