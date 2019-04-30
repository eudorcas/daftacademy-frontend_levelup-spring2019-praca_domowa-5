const fib = require('./script');

test('it should return an empty array', () => {
    expect(fib(0)).toEqual(expect.arrayContaining([]));
});

test('it should return an array of following Fibonacci sequence numbers', () => {
    expect(fib(11)).toEqual(expect.arrayContaining([0,1,1,2,3,5,8,13,21,34,55]));
});

test('it should return an array with length equal to argument', () => {
    expect(fib(5)).toHaveLength(5);
});

test('it should throw an error if the number is not an integrer', () => {
    expect(() => fib(3.5)).toThrow("The argument is not a natural number");
});

test('it should throw an error if the number is negative', () => {
    expect(() => fib(-3)).toThrow("The argument is not a natural number");
});

test('it should throw an error if the argument is not a number', () => {
    expect(() => fib('hello')).toThrow("The argument is not a natural number");
});

