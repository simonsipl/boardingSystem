'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ByRowStrategy = function () {
    function ByRowStrategy() {
        _classCallCheck(this, ByRowStrategy);
    }

    _createClass(ByRowStrategy, [{
        key: 'sortSeats',
        value: function sortSeats(paxes) {
            if (!Array.isArray(paxes)) {
                throw Error('Seat list is not an array');
            }

            return paxes.sort(function (a, b) {
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
    }]);

    return ByRowStrategy;
}();

module.exports = new ByRowStrategy();