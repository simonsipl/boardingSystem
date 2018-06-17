'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rowsClient = require('./adapter/rows.client.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoardingService = function () {
    function BoardingService(type, defaultAdapters) {
        _classCallCheck(this, BoardingService);

        this.type = type;

        this.availableAdapters = defaultAdapters;
    }

    _createClass(BoardingService, [{
        key: 'sort',
        value: function sort(prop, array) {
            var adapter = this.getAdapter();

            return adapter.sort(prop, array);
        }
    }, {
        key: 'getAdapter',
        value: function getAdapter() {
            var _this = this;

            var adapter = this.availableAdapters.find(function (adapter) {
                return adapter.isSatisfiedBy(_this.type);
            });

            if (adapter === undefined) {
                throw Error('Boarding system is not available in configuration');
            }
            return adapter;
        }
    }]);

    return BoardingService;
}();

var rowsAdapter = (0, _rowsClient.create)();

var create = exports.create = function create() {
    var defaultAdapters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [rowsAdapter];
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rows';
    return new BoardingService(type, defaultAdapters);
};