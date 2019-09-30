const subtract = require('./subtract');

test('check 2 numbers subtract properly', () => {
    expect(subtract(1,2)).toBe(-1)
});