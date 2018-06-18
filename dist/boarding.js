'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _seatStrategies = require('./seatStrategies');

var _seatStrategies2 = _interopRequireDefault(_seatStrategies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boarding = function () {
    function Boarding() {
        _classCallCheck(this, Boarding);

        this.strategy = _seatStrategies2.default.default;
    }

    _createClass(Boarding, [{
        key: 'selectStrategy',
        value: function selectStrategy(type) {

            if (_seatStrategies2.default[type] === undefined) {
                throw Error('Boarding system is not available in configuration');
            }

            this.strategy = _seatStrategies2.default[type];
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