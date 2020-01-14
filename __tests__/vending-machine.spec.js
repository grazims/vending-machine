const currency = require("../lib/vending-machine.js");

//exemplo

// describe('functionName', () => {
//   describe('when passed a certain type of argument', () => {
//     // Test here
//   });
// });

//inventory is a property

describe("currency", () => {
  describe("when the machine is empty", () => {
    it("should return 'sorry, no drinks' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when there's insuficient money", () => {
    it("should return 'insuficient funds, add more or cancel?' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when a button is pressed, but no money is in", () => {
    it("should return 'add balance xxx' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when the machine is out of change", () => {
    it("should return 'debit/credit card only' or 'cash not acepted' ", () => {
      expect(currency("cash")).toEqual(false);
      expect(currency("debit", "credit")).toEqual(true);
    });
  });

  describe("when there's low stock", () => {
    it("should return '' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when the card is not accepted/different type card", () => {
    it("should return 'card not accepted, try a diferent one?' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when the card is declined", () => {
    it("should return 'card declined' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when the money is fake or different currency", () => {
    it("should return the money back 'currency not accepted' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });

  describe("when theres low stock", () => {
    it("should return 'insuficient funds, add more or cancel?' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });
  //1 more
  describe("when there's", () => {
    it("should return 'insuficient funds, add more or cancel?' ", () => {
      //expect(oneAway("pale", "ple")).toEqual(true);
    });
  });
});
