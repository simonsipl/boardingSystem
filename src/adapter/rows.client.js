class RowsClient {
    constructor(type) {
        this.type = type;
    }

    isSatisfiedBy(type) {
        return type === 'rows';
    }

    sort(arr) {
        return arr.sort(function(a, b) {
            var seatA = a.ticket.row;
            var seatB = b.ticket.row;
            if (seatA > seatB) {
                return -1;
            } else if (seatA < seatB) {
                return 1;
            } else {
                return 0;
            }
        });

    }
}

export const create = (type = 'rows') => new RowsClient(type)
