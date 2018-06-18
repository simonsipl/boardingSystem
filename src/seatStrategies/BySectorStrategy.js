class BySectorStrategy {
    sortSeats(paxes) {
        if(!Array.isArray(paxes)){
            throw Error('Seat list is not an array');
        }

        let sortedSeats = paxes.sort(function(a, b) {
            let seatA = a.ticket.sector;
            let seatB = b.ticket.sector;
            if (
                seatA === 'A' && seatB !== 'F' ||
                seatA === 'F' && seatB !== 'A' ||
                seatA === 'B' && seatB !== 'A' && seatB !== 'F' && seatB !== 'E' ||
                seatA === 'E' && seatB !== 'A' && seatB !== 'F' && seatB !== 'B'
            ) {
                return -1;
            } else if (
                seatB === 'A' ||
                seatB === 'A' && seatA !== 'F' ||
                seatB === 'F' && seatA !== 'A' ||
                seatB === 'B' && seatA !== 'A' && seatA !== 'F' && seatA !== 'E' ||
                seatB === 'E' && seatA !== 'A' && seatA !== 'F' && seatA !== 'B' ||
                seatB === 'D' && seatA !== 'A' && seatA !== 'F' && seatA !== 'E' && seatA == 'B' ||
                seatB === 'C' && seatA !== 'A' && seatA !== 'F' && seatA !== 'E' && seatA == 'B'

            ) {
                return 1;
            }
            else {
                return 0;
            }
        });

        return sortedSeats;
    }
}

module.exports = new BySectorStrategy();
