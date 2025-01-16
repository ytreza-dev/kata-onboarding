function fizzBuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "fizzbuzz";
  }

  if (number % 3 == 0) {
    return 'fizz'
  }

  if (number % 5 == 0) {
    return 'buzz'
  }

  return `${number}`;
}

describe("tto", () => {
  it("give number when number is not a multiple of special number", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("give number when number is not a multiple of special number", () => {
    expect(fizzBuzz(2)).toBe("2");
  });

  it("it should print fizz when the number is 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });


  it("it should print 4 when the number is 4", () => {
    expect(fizzBuzz(4)).toBe("4");
  });

  it("it should print buzz when the number is 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("it should print fizz when the number is 6", () => {
    expect(fizzBuzz(6)).toBe("fizz");
  });

  it("give number when number is not a multiple of special number", () => {
    expect(fizzBuzz(7)).toBe("7");
  });

  it("it should print 8 when the number is 8", () => {
    expect(fizzBuzz(8)).toBe("8");
  });

  it("it should print fizz when the number is 9", () => {
    expect(fizzBuzz(9)).toBe("fizz");
  });

  it("it should print buzz when the number is 10", () => {
    expect(fizzBuzz(10)).toBe("buzz");
  });

  it("it should print 11 when the number is 11", () => {
    expect(fizzBuzz(11)).toBe("11");
  });

  it("it should print fizz when the number is 12", () => {
    expect(fizzBuzz(12)).toBe("fizz");
  });

  it("it should print 13 when the number is 13", () => {
    expect(fizzBuzz(13)).toBe("13");
  });

  it("it should print 14 when the number is 14", () => {
    expect(fizzBuzz(14)).toBe("14");
  });

  it("it should print fizzbuzz when the number is 15", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });

});

// to discuss :
// - pourquoi on ne devrait pas mettre le test sur une valeur 4517114
// - refactor des tests à la fin (ça y est, c'est bon !)
// - discuter du cas du 6
// - qu'est-ce que ça signifie qu'un test soit vert ?
