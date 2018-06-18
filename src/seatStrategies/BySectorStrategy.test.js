import sorting from './BySectorStrategy';
import paxes from '../../paxes';

test('is sorting arrays properly', () => {
    const SectorStrategy = sorting;
    expect(SectorStrategy.sortSeats(paxes)).toEqual(
        [
            {name: 'Adam', ticket: {row: 1, sector: 'A'}},
            {name: 'Adam', ticket: {row: 2, sector: 'F'}},
            {name: 'Adam', ticket: {row: 3, sector: 'B'}},
            {name: 'Adam', ticket: {row: 2, sector: 'E'}},
            {name: 'Adam', ticket: {row: 20, sector: 'D'}},
            {name: 'Adam', ticket: {row: 15, sector: 'C'}}
        ]
    )
});

test('throws error if not array', () => {
    const SectorStrategy = sorting;
    expect(() => SectorStrategy.sortSeats('test')).toThrow('Seat list is not an array');

});
