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
  describe(`Refill vending machine inventory`, () => {
    it(`should refill stock`, () => {
      expect(vending.refillStock()).toEqual(true);
    });
  });
  describe("when no coin is inserted, but the user selected an item", () => {
    it("should return an error", () => {
      expect(() => {
        vending.resupplyChange("coin");
      }).toThrow(Error);
    });
  });
});
