'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var seatingStrategies = require('./seatStrategies');

var Boarding = function () {
    function Boarding(type) {
        _classCallCheck(this, Boarding);

        this.type = type;
        this.strategy = seatingStrategies.default;
    }

    _createClass(Boarding, [{
        key: 'selectStrategy',
        value: function selectStrategy() {
            this.strategy = seatingStrategies[this.type];
        }
    }, {
        key: 'start',
        value: function start(paxes) {
            var x = this.strategy;
            return x.sortSeats(paxes);
        }
    }]);

    return Boarding;
}();

module.exports = new Boarding();