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
