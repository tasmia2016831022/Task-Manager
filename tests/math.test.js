const {add,fahrenheitToCelsius,celsiusToFahrenheit} = require('./sum');

test('Should convert 32 F to 0 C', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
})

test('Should convert 0 C to 32 F', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
})

test('should add two numbeers', ( done) => {
    add(2,3).then((sum ) => {
        expect(sum).toBe(5);
        done();
    })
})

test('Should add two number s async/ await', async() => {
    const res = await add(22,2);
    expect(res).toBe(24);
})