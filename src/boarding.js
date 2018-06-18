import seatingStrategies from './seatStrategies';

class Boarding {
    constructor() {
        this.strategy = seatingStrategies.default;
    }

    selectStrategy(type) {

        if(seatingStrategies[type] === undefined){
            throw Error('Boarding system is not available in configuration');
        }

       this.strategy = seatingStrategies[type];
       return this;
    }

    startBoarding(paxes) {
        const boardingStrategy = this.strategy;
        return boardingStrategy.sortSeats(paxes);
    }
}

module.exports = Boarding;
