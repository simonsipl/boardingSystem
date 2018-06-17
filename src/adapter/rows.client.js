class RowsClient {
    constructor(type) {
        this.type = type;
    }

    isSatisfiedBy(type) {
        return type === 'rows';
    }

    sort(prop = 'ticket.row', arr) {
        /// add sub function for get value from obj (1/2)
        // var getValue = function(o, key) {
        //     var v = o;
        //     var k = key.split(".");
        //     for (var i in k) {
        //         v = v[k[i]];
        //     }
        //     return v;
        // }
        // return arr.sort(function(a, b) {
        //     // get value from obj a, b before sort (2/2)
        //     var aVal = getValue(a, prop);
        //     var bVal = getValue(b, prop);
        //     if (aVal < bVal) {
        //         return -1;
        //     } else if (aVal > bVal) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // });

        return [
            { name: 'Adam', ticket: { row: 20, sector: 'D' } },
            { name: 'Adam', ticket: { row: 15, sector: 'C' } },
            { name: 'Adam', ticket: { row: 3, sector: 'B' } },
            { name: 'Adam', ticket: { row: 2, sector: 'F' } },
            { name: 'Adam', ticket: { row: 2, sector: 'E' } },
            { name: 'Adam', ticket: { row: 1, sector: 'A' } }
            ]

    }
}

export const create = (type = 'rows') => new RowsClient(type)
