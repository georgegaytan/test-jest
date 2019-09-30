const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array) //same array
    expect(cloneArray(array)).not.toBe(array) //diff mem addr
});