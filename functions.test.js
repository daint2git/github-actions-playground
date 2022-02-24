const { sum, mul, div } = require("./functions");

describe("functions", () => {
  test("sum: 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("mul: 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  test("div: 4 / 2 to equal 2", () => {
    expect(mul(4, 2)).toBe(2);
  });
});
