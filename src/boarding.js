const seatingStrategies = require('./seatStrategies');

class Boarding {
    constructor() {
        this.strategy = seatingStrategies.default;
    }

    selectStrategy(type) {
       this.strategy = seatingStrategies[type];
       return this;
    }

    startBoarding(paxes) {
        const x = this.strategy;
        return x.sortSeats(paxes);
    }
}

module.exports = Boarding;
