'use strict';

var _letters = require('./letters.client');

test('sorting letters', function () {
    var lettersClient = (0, _letters.create)('letters');
    var paxes = [{
        name: 'Adam',
        ticket: {
            row: 1,
            sector: 'A'
        }
    }, {
        name: 'Adam',
        ticket: {
            row: 20,
            sector: 'D'
        }
    }];

    expect(lettersClient.sort(paxes)).toEqual([{ name: 'Adam', ticket: { row: 1, sector: 'A' } }, { name: 'Adam', ticket: { row: 20, sector: 'D' } }]);
});

test('is satisfiedBy type', function () {
    var lettersClient = (0, _letters.create)();
    expect(lettersClient.isSatisfiedBy('letters')).toEqual(true);
});

test('Error if not satisfiedBy type', function () {
    var lettersClient = (0, _letters.create)();
    expect(lettersClient.isSatisfiedBy('rows')).toEqual(false);
});