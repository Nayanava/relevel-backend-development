const { expect } = require("expect")
const { sum } = require("../sum")

test('testing sum', () => {
    var result = sum(2, 3);
    expect(result).toBe(5);
})