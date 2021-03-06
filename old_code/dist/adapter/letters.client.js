'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LettersClient = function () {
    function LettersClient(type) {
        _classCallCheck(this, LettersClient);

        this.type = type;
    }

    _createClass(LettersClient, [{
        key: 'isSatisfiedBy',
        value: function isSatisfiedBy(type) {
            return type === 'letters';
        }
    }, {
        key: 'sort',
        value: function sort(arr) {

            var sortedSeats = arr.sort(function (a, b) {
                var seatA = a.ticket.sector;
                var seatB = b.ticket.sector;
                if (seatA === 'A' && seatB !== 'F' || seatA === 'F' && seatB !== 'A' || seatA === 'B' && seatB !== 'A' && seatB !== 'F' && seatB !== 'E' || seatA === 'E' && seatB !== 'A' && seatB !== 'F' && seatB !== 'B') {
                    return -1;
                } else if (seatB === 'A' || seatB === 'A' && seatA !== 'F' || seatB === 'F' && seatA !== 'A' || seatB === 'B' && seatA !== 'A' && seatA !== 'F' && seatA !== 'E' || seatB === 'E' && seatA !== 'A' && seatA !== 'F' && seatA !== 'B' || seatB === 'D' && seatA !== 'A' && seatA !== 'F' && seatA !== 'E' && seatA == 'B' || seatB === 'C' && seatA !== 'A' && seatA !== 'F' && seatA !== 'E' && seatA == 'B') {
                    return 1;
                } else {
                    return 0;
                }
            });

            return sortedSeats;
        }
    }]);

    return LettersClient;
}();

var create = exports.create = function create() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'letters';
    return new LettersClient(type);
};