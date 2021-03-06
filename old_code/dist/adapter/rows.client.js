'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowsClient = function () {
    function RowsClient(type) {
        _classCallCheck(this, RowsClient);

        this.type = type;
    }

    _createClass(RowsClient, [{
        key: 'isSatisfiedBy',
        value: function isSatisfiedBy(type) {
            return type === 'rows';
        }
    }, {
        key: 'sort',
        value: function sort(arr) {
            return arr.sort(function (a, b) {
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

    return RowsClient;
}();

var create = exports.create = function create() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rows';
    return new RowsClient(type);
};