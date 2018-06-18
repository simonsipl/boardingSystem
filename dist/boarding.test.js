'use strict';

var boarding = require('./boarding');

test('If strategy is not available throw error ', function () {
    var fakerStrategy = {
        strategy: undefined
    };
    var strategy = new boarding();

    expect(function () {
        return strategy.selectStrategy('test');
    }).toThrow('Boarding system is not available in configuration');
});

test('If no strategy picked return default', function () {
    // default strategy function
    var defaultStrategy = {
        strategy: {}
    };

    var strategy = new boarding();

    expect(strategy).toEqual(defaultStrategy);
});