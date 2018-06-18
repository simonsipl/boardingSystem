'use strict';

var _boarding = require('./boarding.service');

test('Boarding Service', function () {
    var fakerAdapter = {
        isSatisfiedBy: function isSatisfiedBy(type) {
            return true;
        }
    };

    var fakeType = 'test';

    var boardingService = (0, _boarding.create)([fakerAdapter], fakeType);

    expect(boardingService.getAdapter()).toEqual(fakerAdapter);
});

test('throw error if adapter not found', function () {
    var fakeType = 'fake';

    var boardingService = (0, _boarding.create)([], fakeType);

    expect(function () {
        return boardingService.getAdapter();
    }).toThrow('Boarding system is not available in configuration');
});

test('Adds new adapter', function () {
    var fakerAdapter = {
        isSatisfiedBy: function isSatisfiedBy(type) {
            return true;
        }
    };

    var fakeType = 'newAdapter';

    var boardingService = (0, _boarding.create)([], fakeType);

    expect(function () {
        return boardingService.getAdapter();
    }).toThrow('Boarding system is not available in configuration');

    boardingService.addAdapter(fakerAdapter);

    expect(boardingService.getAdapter()).toEqual(fakerAdapter);
});

test('it calls adapter sort method', function (done) {
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

    var fakerAdapter = {
        isSatisfiedBy: function isSatisfiedBy(type) {
            return true;
        },
        sort: function sort(paxes) {
            return Promise.resolve([{ name: 'Adam', ticket: { row: 1, sector: 'A' } }, { name: 'Adam', ticket: { row: 20, sector: 'D' } }]);
        }
    };
    var fakeType = 'newAdapter';

    var boardingService = (0, _boarding.create)([fakerAdapter], fakeType);

    boardingService.sort(paxes).then(function (result) {
        expect(result).toEqual([{ name: 'Adam', ticket: { row: 1, sector: 'A' } }, { name: 'Adam', ticket: { row: 20, sector: 'D' } }]);
        done();
    });
});