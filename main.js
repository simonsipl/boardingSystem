const BoardingService = require('./dist/boarding.service');


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

console.log(boarding.sort('ticket.row', paxes));
