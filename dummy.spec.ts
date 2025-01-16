function fizzBuzz(number) {
  return `${number}`;
}

describe("tto", () => {
  it("it should print 1 when the number is 1", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("it should print 2 when the number is 2", () => {
    expect(fizzBuzz(2)).toBe("2");
  });

});