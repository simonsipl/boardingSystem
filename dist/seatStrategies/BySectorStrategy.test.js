'use strict';

var _BySectorStrategy = require('./BySectorStrategy');

var _BySectorStrategy2 = _interopRequireDefault(_BySectorStrategy);

var _paxes = require('../../paxes');

var _paxes2 = _interopRequireDefault(_paxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('is sorting arrays properly', function () {
    var SectorStrategy = _BySectorStrategy2.default;
    expect(SectorStrategy.sortSeats(_paxes2.default)).toEqual([{ name: 'Adam', ticket: { row: 1, sector: 'A' } }, { name: 'Adam', ticket: { row: 2, sector: 'F' } }, { name: 'Adam', ticket: { row: 3, sector: 'B' } }, { name: 'Adam', ticket: { row: 2, sector: 'E' } }, { name: 'Adam', ticket: { row: 20, sector: 'D' } }, { name: 'Adam', ticket: { row: 15, sector: 'C' } }]);
});

test('throws error if not array', function () {
    var SectorStrategy = _BySectorStrategy2.default;
    expect(function () {
        return SectorStrategy.sortSeats('test');
    }).toThrow('Seat list is not an array');
});