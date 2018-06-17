class LettersClient {
    constructor(type) {
        this.type = type;
    }

    isSatisfiedBy(type) {
        return type === 'letters';
    }

    sort(arr) {

        let sortedSeats = arr.sort(function(a, b) {
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

export const create = (type = 'letters') => new LettersClient(type)
