const sum = require('./sum');

test('Should convert 32 F to 0 C', () => {
    expect(sum.fahrenheitToCelsius(32)).toBe(0);
})

test('Should convert 0 C to 32 F', () => {
    expect(sum.celsiusToFahrenheit(0)).toBe(32);
})

test('should add two numbeers', ( done) => {
    sum.add(2,3).then((sum ) => {
        expect(sum).toBe(5);
        done();
    })
})