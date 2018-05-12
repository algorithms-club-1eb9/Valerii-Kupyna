'use strict';

const Heap = require('../index').binaryHeap;

function compareNumbers(a, b) {
    return a - b > 0;
}

describe('Heap', function () {
        it('should add elements in correct order', function () {
            let heap = new Heap(compareNumbers);

            heap.add(10);
            heap.add(1);
            heap.heapCore[0].should.be.eql(1);

            heap.add(5);
            heap.heapCore[2].should.be.eql(5);

            heap.add(0);
            heap.heapCore[0].should.be.eql(0);

            heap.add(11);
            heap.add(12);
            heap.add(13);
            heap.add(14);
            heap.add(15);

            heap.add(1.5);
            heap.add(2);
            heap.heapCore.should.be.deepEqual([0, 1, 5, 10, 1.5, 12, 13, 14, 15, 11, 2]);
        });
    });

        it('should return min added element', function () {
            let heap = new Heap(compareNumbers);

            heap.add(9);
            heap.getMax().should.be.eql(9);

            heap.add(1);
            heap.getMax().should.be.eql(1);

            heap.add(2);
            heap.getMax().should.be.eql(1);

            heap.add(0.999);
            heap.getMax().should.be.eql(0.999);
        });

    describe('#delMax', function () {
        it('should delete element from Heap', function () {
            let heap = new Heap(compareNumbers);

            heap.add(3);
            heap.heapCore.length.should.be.eql(1);
            heap.delMax();
            heap.heapCore.length.should.be.eql(0);

            heap.add(0);
            heap.add(5);
            heap.add(7);
            heap.add(12);
            heap.add(10);
            heap.add(15);
            heap.add(8);
            heap.add(13);
            heap.add(17);
            heap.add(11);
            heap.add(14);
            heap.add(16);
            heap.add(20);
            heap.add(21);
            heap.add(9);
            heap.heapCore.length.should.be.eql(15);


            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(12);

            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(8);

            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(4);

            heap.delMax();
            heap.heapCore.length.should.be.eql(3);

            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(0);
        });
});