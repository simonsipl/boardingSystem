import { create } from "./rows.client";

test('sorting', () => {
    const rowsClient = create('rows')
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

    expect(rowsClient.sort(paxes)).toEqual(
        [{name: 'Adam', ticket: {row: 20, sector: 'D'}},
            {name: 'Adam', ticket: {row: 1, sector: 'A'}}]
    )
});

test('is satisfiedBy type', () => {
    const rowsClient = create();
    expect(rowsClient.isSatisfiedBy('rows')).toEqual(true)
});

test('Error if not satisfiedBy type', () => {
    const rowsClient = create();
    expect(rowsClient.isSatisfiedBy('letters')).toEqual(false)
});
