const vendingMachine = require("../lib/vending-machine.js");
let vending = new vendingMachine();
const coins = require("../lib/coins");
const inventory = require("../lib/inventory");

describe("vendingMachine", () => {
  describe("Print vending machine inventory", () => {
    it("should return all inventories", () => {
      expect(vending.printStock()).toEqual(true);
    });
  });
});
