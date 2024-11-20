const Car = require("./car");

function foo() {
  return "the foo";
}

// Test away!
describe("our first tests", () => {
  test("sanity", () => {
    expect(5).toBe(5);
    expect(5).toBe(3 + 2);
    expect(5).toBeDefined();
  });
  test("objects", () => {
    const o = { a: 1 };
    const oo = { a: 1 };
    const ooo = oo;
    expect(o).toBe(o);
    expect(oo).toBe(ooo);
  });
  test("objects again", () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });
  describe("foo function", () => {
    test("foo returns the foo", () => {
      expect(foo()).toBe("the foo");
      expect(foo()).toHaveLength(7);
    });
  });
});
describe("Car class", () => {
  test("it is defined", () => {
    expect(Car).toBeDefined();
    expect(Car).toBeInstanceOf(Function);
  });
  test("has model and make", () => {
    const prius = new Car("toyota", "prius");
    expect(prius).toHaveProperty("make");
    expect(prius).toHaveProperty("model");
    expect(prius.make).toBeDefined();
    expect(prius.model).toBeDefined();
    expect(prius).toEqual({ make: "toyota", model: "prius" });
  });
});
