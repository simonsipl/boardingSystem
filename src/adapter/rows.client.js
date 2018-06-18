class RowsClient {
    constructor(type) {
        this.type = type;
    }

    isSatisfiedBy(type) {
        return type === 'rows';
    }

    sort(arr) {
        let sortedSeats = arr.sort(function(a, b) {
            var seatA = a.ticket.row;
            var seatB = b.ticket.row;
            if (seatA < seatB) {
                return -1;
            } else if (seatA > seatB) {
                return 1;
            } else {
                return 0;
            }
        });

        return sortedSeats.reverse();
    }
}

export const create = (type = 'rows') => new RowsClient(type)
