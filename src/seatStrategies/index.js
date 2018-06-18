// All available seating strategies

module.exports = {
    default: require('./ByRowStrategy'),
    ByRowStrategy: require('./ByRowStrategy'),
    BySectorStrategy: require('./BySectorStrategy')
};
