const romanNumeral = require("./romanNumeral")

test("input of 1 will give output of I", () => {
  expect(romanNumeral(1)).toBe("I")
})
