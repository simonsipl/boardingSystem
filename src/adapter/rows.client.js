class RowsClient {
    constructor(type) {
        this.type = type;
    }

    isSatisfiedBy(type) {
        return type === 'rows';
    }

    sort(prop = 'ticket.row', arr) {
        // add sub function for get value from obj (1/2)
        var getValue = function(o, key) {
            var v = o;
            var k = key.split(".");
            for (var i in k) {
                v = v[k[i]];
            }
            return v;
        }
        return arr.sort(function(a, b) {
            // get value from obj a, b before sort (2/2)
            var aVal = getValue(a, prop);
            var bVal = getValue(b, prop);
            if (aVal < bVal) {
                return -1;
            } else if (aVal > bVal) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}

export const create = (type = 'rows') => new RowsClient(type)
