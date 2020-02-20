const sum = require('./sum');

test('Should convert 32 F to 0 C', () => {
    expect(sum.fahrenheitToCelsius(32)).toBe(0);
})

test('Should convert 0 C to 32 F', () => {
    expect(sum.celsiusToFahrenheit(0)).toBe(32);
})



// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"