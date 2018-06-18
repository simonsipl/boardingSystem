const boarding = require('./dist/boarding');
const paxes = require('./paxes');

class start {
    start(paxes) {

        console.log('Strategia Defaultowa = ByRowStrategy');

        let test = new boarding();
        console.log(test.startBoarding(paxes));

        console.log('Strategia ustawiana = BySectorStrategy');


        test = test.selectStrategy('BySectorStrategy');
        console.log(test.startBoarding(paxes));
    }

}


const run = new start();
run.start(paxes);
