'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var seatingStrategies = require('./seatStrategies');

var Boarding = function () {
    function Boarding() {
        _classCallCheck(this, Boarding);

        this.strategy = seatingStrategies.default;
    }

    _createClass(Boarding, [{
        key: 'selectStrategy',
        value: function selectStrategy(type) {
            this.strategy = seatingStrategies[type];
            return this;
        }
    }, {
        key: 'startBoarding',
        value: function startBoarding(paxes) {
            var boardingStrategy = this.strategy;
            return boardingStrategy.sortSeats(paxes);
        }
    }]);

    return Boarding;
}();

module.exports = Boarding;