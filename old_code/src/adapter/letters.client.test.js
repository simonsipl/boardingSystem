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

test('is satisfiedBy type', () => {
    const lettersClient = create();
    expect(lettersClient.isSatisfiedBy('letters')).toEqual(true)
});

test('Error if not satisfiedBy type', () => {
    const lettersClient = create();
    expect(lettersClient.isSatisfiedBy('rows')).toEqual(false)
});
