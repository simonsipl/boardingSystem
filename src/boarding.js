const seatingStrategies = require('./seatStrategies');

class Boarding {
    constructor(type) {
        this.type = type;
        this.strategy = seatingStrategies.default;
    }

    selectStrategy() {
       this.strategy = seatingStrategies[this.type]
    }

    start(paxes) {
        const x = this.strategy;
        return x.sortSeats(paxes);
    }
}

module.exports = new Boarding();
