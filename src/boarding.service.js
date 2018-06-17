import {create as createRowsAdapter} from './adapter/rows.client.js';

class BoardingService {
    constructor(type, defaultAdapters) {
        this.type = type;

        this.availableAdapters = defaultAdapters;
    }


    sort(prop,array) {
        const adapter = this.getAdapter();

        return adapter.sort(prop, array);
    }

    getAdapter() {
        const adapter = this.availableAdapters.find((adapter) => adapter.isSatisfiedBy(this.type));

        if (adapter === undefined) {
            throw Error('Boarding system is not available in configuration');
        }
        return adapter;
    }
}

const rowsAdapter = createRowsAdapter();

export const create = (defaultAdapters = [rowsAdapter], type = 'rows') => new BoardingService(type, defaultAdapters);
