const sum = require('./sum');

test('Should convert 32 F to 0 C', () => {
    expect(sum.fahrenheitToCelsius(32)).toBe(0);
})

test('Should convert 0 C to 32 F', () => {
    expect(sum.celsiusToFahrenheit(0)).toBe(32);
})

test('Async', (done) => {
    setTimeout(() => {
        expect(1).toBe(9);
        done();
    },2000)
})