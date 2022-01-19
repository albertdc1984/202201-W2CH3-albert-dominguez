function testCalc(number1, number2) {
  if (
    (typeof number1 === "string" && typeof number1 === "string") ||
    (number1 === "" && number2 === "")
  ) {
    return "un numero";
  }

  if (
    typeof number1 === "string" ||
    (number1 === undefined && !Number.isNaN(number2))
  ) {
    return "arrel";
  }
  if (
    typeof number2 === "string" ||
    (number2 === undefined && !Number.isNaN(number1))
  ) {
    return "arrel";
  }
  return "no work";
}

describe("Given the funtion testCalc", () => {
  describe("When values are 1 and 'hola'", () => {
    test("Then it should return 'arrel", () => {
      // Arrange
      const firstNumber = 1;
      const secondNumber = "hola";
      const expectedOutput = "arrel";
      // Act
      const result = testCalc(firstNumber, secondNumber);
      // Assert
      expect(result).toBe(expectedOutput);
    });
  });
});
