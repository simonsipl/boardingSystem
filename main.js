const BoardingService = require('./dist/boarding.service');
const lettersAdapter = require('./dist/adapter/letters.client.js');

function start(array) {
    const boarding = new BoardingService.create();
    console.log('Sort by rows');
    console.log(boarding.sort(paxes));

    const newAdapter = new lettersAdapter.create();

    let boarding2 = new BoardingService.create([],'letters');
    boarding2.addAdapter(newAdapter);

    console.log('sort by letters');
    console.log(boarding2.sort(paxes));

}

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


start(paxes);
