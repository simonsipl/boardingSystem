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
        const boardingStrategy = this.strategy;
        return boardingStrategy.sortSeats(paxes);
    }
}

module.exports = Boarding;
