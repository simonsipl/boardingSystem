import { create } from "./letters.client";

test('sorting letters', () => {
    const lettersClient = create('letters')
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

    expect(lettersClient.sort(paxes)).toEqual(
        [ { name: 'Adam', ticket: { row: 1, sector: 'A' } },
            { name: 'Adam', ticket: { row: 20, sector: 'D' } } ]
    )
});
