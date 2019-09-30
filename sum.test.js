const sum = require('./sum');

test('check 2 numbers add properly', () => {
    expect(sum(1,2)).toBe(3)
});