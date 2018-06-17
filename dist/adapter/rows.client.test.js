'use strict';

var _rows = require('./rows.client');

test('sorting', function () {
    var rowsClient = (0, _rows.create)('rows');
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

    expect(rowsClient.sort(paxes)).toEqual([{ name: 'Adam', ticket: { row: 20, sector: 'D' } }, { name: 'Adam', ticket: { row: 1, sector: 'A' } }]);
});

test('is satisfiedBy type', function () {
    var rowsClient = (0, _rows.create)();
    expect(rowsClient.isSatisfiedBy('rows')).toEqual(true);
});

test('Error if not satisfiedBy type', function () {
    var rowsClient = (0, _rows.create)();
    expect(rowsClient.isSatisfiedBy('letters')).toEqual(false);
});