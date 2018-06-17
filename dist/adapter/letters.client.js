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
        value: function sort() {

            return [{ name: 'Adam', ticket: { row: 1, sector: 'A' } }, { name: 'Adam', ticket: { row: 2, sector: 'F' } }, { name: 'Adam', ticket: { row: 3, sector: 'B' } }, { name: 'Adam', ticket: { row: 2, sector: 'E' } }, { name: 'Adam', ticket: { row: 20, sector: 'D' } }, { name: 'Adam', ticket: { row: 15, sector: 'C' } }];
        }
    }]);

    return LettersClient;
}();

var create = exports.create = function create() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'letters';
    return new LettersClient(type);
};