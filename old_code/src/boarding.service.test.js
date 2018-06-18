import { create } from "./boarding.service";

test('Boarding Service', () => {
    const fakerAdapter = {
        isSatisfiedBy: (type) => true
    };

    const fakeType = 'test';

    const boardingService = create([fakerAdapter], fakeType );

    expect(boardingService.getAdapter()).toEqual(fakerAdapter);

});


test('throw error if adapter not found', () => {
   const fakeType = 'fake';

   const boardingService = create([], fakeType);

   expect(() => boardingService.getAdapter()).toThrow('Boarding system is not available in configuration');
});

test('Adds new adapter', () => {
    const fakerAdapter = {
        isSatisfiedBy: (type) => true
    };

    const fakeType = 'newAdapter';

    const boardingService = create([], fakeType);

    expect(() => boardingService.getAdapter()).toThrow('Boarding system is not available in configuration');

    boardingService.addAdapter(fakerAdapter);

    expect(boardingService.getAdapter()).toEqual(fakerAdapter);
});

test('it calls adapter sort method', (done) => {
    const paxes = [
        {
            name: 'Adam',
            ticket: {
                row: 1,
                sector: 'A'
            }
        },
        {
            name: 'Adam',
            ticket: {
                row: 20,
                sector: 'D'
            }
        }
    ];

    const fakerAdapter = {
        isSatisfiedBy: (type) => true,
        sort: (paxes) =>  Promise.resolve([
                { name: 'Adam', ticket: { row: 1, sector: 'A' } },
                { name: 'Adam', ticket: { row: 20, sector: 'D' } }
            ])
    };
    const fakeType = 'newAdapter';

    const boardingService = create([fakerAdapter], fakeType);

    boardingService.sort(paxes).then((result) => {
        expect(result).toEqual(
            [
                { name: 'Adam', ticket: { row: 1, sector: 'A' } },
                { name: 'Adam', ticket: { row: 20, sector: 'D' } }
            ]
        );
        done();
    })
});

