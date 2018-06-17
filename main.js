const BoardingService = require('./dist/boarding.service');
const lettersAdapter =  require('./dist/adapter/letters.client.js');

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
    },
    {
        name: 'Adam',
        ticket: {
            row: 2,
            sector: 'F'
        }
    },
    {
        name: 'Adam',
        ticket: {
            row: 15,
            sector: 'C'
        }
    },
    {
        name: 'Adam',
        ticket: {
            row: 3,
            sector: 'B'
        }
    },
    {
        name: 'Adam',
        ticket: {
            row: 2,
            sector: 'E'
        }
    }
];

const boarding = new BoardingService.create();
console.log('Sort by rows');
console.log(boarding.sort(paxes));

const newAdapter = new lettersAdapter.create();

const boarding2 = new BoardingService.create([newAdapter], 'letters');
console.log('sort by letters');
console.log(boarding2.sort(paxes));
