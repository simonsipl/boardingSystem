const boarding = require('./boarding');

test('If strategy is not available throw error ', () => {
    const fakerStrategy = {
         strategy: undefined
    };
    const strategy = new boarding();

    expect(() => strategy.selectStrategy('test')).toThrow('Boarding system is not available in configuration');

});

test('If no strategy picked return default', () => {
    // default strategy function
    const defaultStrategy = {
        strategy: {}
    };

    const strategy = new boarding();

    expect(strategy).toEqual(defaultStrategy);
});
