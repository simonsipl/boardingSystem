class LettersClient {
    constructor(type) {
        this.type = type;
    }

    isSatisfiedBy(type) {
        return type === 'letters';
    }

    sort() {

        return [
            { name: 'Adam', ticket: { row: 1, sector: 'A' } },
            { name: 'Adam', ticket: { row: 2, sector: 'F' } },
            { name: 'Adam', ticket: { row: 3, sector: 'B' } },
            { name: 'Adam', ticket: { row: 2, sector: 'E' } },
            { name: 'Adam', ticket: { row: 20, sector: 'D' } },
            { name: 'Adam', ticket: { row: 15, sector: 'C' } }
        ]

    }
}
export const create = (type = 'letters') => new LettersClient(type)
