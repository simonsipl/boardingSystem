class ByRowStrategy {
    sortSeats(paxes) {
        if(!Array.isArray(paxes)){
            throw Error('Seat list is not an array');
        }

        return paxes.sort(function(a, b) {
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

module.exports = new ByRowStrategy();
