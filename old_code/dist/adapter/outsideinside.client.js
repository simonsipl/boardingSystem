'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OutsideInsideClient = function () {
    function OutsideInsideClient(requestClient, type) {
        _classCallCheck(this, OutsideInsideClient);

        this.requestClient = requestClient;
        this.type = config;
    }

    _createClass(OutsideInsideClient, [{
        key: 'isSatisfiedBy',
        value: function isSatisfiedBy(type) {
            return type === 'outsideinside';
        }
    }, {
        key: 'sort',
        value: function sort() {}
    }]);

    return OutsideInsideClient;
}();