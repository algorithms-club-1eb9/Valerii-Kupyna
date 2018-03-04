const should = require('should');
const algo = require('../index.js');

describe('Binary search', () => {
    it('shoud return searched number ()', () => {
        const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 8, 9], 4);

        should(elementIndex).be.eql(3);
    });

    //      it('shoud return -1', () => {
    //     const elementIndex = algo.binarySearch([], 4);

    //     should(elementIndex).be.eql(-1);
    // });

    //  it('shoud return -1', () => {
    //     const elementIndex = algo.binarySearch([], 4);

    //     should(elementIndex).be.eql(-1);
    // });
});