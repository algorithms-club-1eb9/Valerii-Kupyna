'use strict';
const algolib = require('../index');
const BinaryTreeNode = require('../Node');
const BinaryTree = algolib.binaryTree;
const compare = (a, b) => {
    return a - b > 0;
}

describe('#BinaryTree', function () {
    it('should create proper data structure', function () {
        let bst = new BinaryTree(compare);

        bst.should.be.instanceOf(Object);
        bst.add.should.be.instanceOf(Function);
        bst.remove.should.be.instanceOf(Function);
        bst.find.should.be.instanceOf(Function);
    });

    describe('#add(key)', function () {
        it('should create root Node if tree is empty', function () {
            let bst = new BinaryTree(compare);
            bst.add(5);
            bst._root.should.be.instanceOf(BinaryTreeNode);
        });

        it('should add elements in correct order', function () {
            let bst = new BinaryTree(compare);
            bst.add(5);
            bst.add(2);
            bst._root._left.key.should.be.eql(2);
            bst.add(8);
            bst._root._right.key.should.be.eql(8);
            bst.add(3);
            bst._root._left._right.key.should.be.eql(3);
        });
    });

    describe('#find(key)', function () {
        it('should return null if tree is empty', function () {
            let bst = new BinaryTree(compare);
            (bst.find(10) === null).should.be.true();
        });

        it('should return null if Node with this key not exist', function () {
            let bst = new BinaryTree(compare);
            bst.add(5);
            bst.add(2);
            (bst.find(10) === null).should.be.true();
        });

        it('should return Node if Node with this key exist', function () {
            let bst = new BinaryTree(compare);
            bst.add(5);
            bst.add(2, 30);
            bst.find(5).should.be.instanceOf(BinaryTreeNode);
            bst.find(2).should.be.instanceOf(BinaryTreeNode);
            bst.add(50);
            bst.add(20);
            bst.find(20).should.be.instanceOf(BinaryTreeNode);
            bst.find(2).value.should.be.eql(30);
        });

        it('should return Node with same key and value', function () {
            let bst = new BinaryTree(compare);
            bst.add(5);
            bst.add(2, 30);
            bst.find(2).value.should.be.eql(30);
            bst.add(50);
            bst.add(20);
            (bst.find(50).value === null).should.be.true();
            bst.find(2).key.should.be.eql(2);
            bst.find(20).key.should.be.eql(20);
            bst.find(50).key.should.be.eql(50);
        });
    });

    describe('#getMax(key)', function() {
        it('should be a Function', function () {
            const bst = new BinaryTree(compare);
            bst.getMax.should.be.instanceOf(Function);
        });

        it('should return null if BST is Empty', function () {
            const bst = new BinaryTree(compare);
            (bst.getMax() === null).should.be.true();
        });

        it('should return Node', function () {
            const bst = new BinaryTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.getMax().should.be.instanceOf(BinaryTreeNode);
        });

        it('should return Node with maximal key', function () {
            const bst = new BinaryTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.getMax().key.should.be.eql(111);
            bst.getMax().value.should.be.eql(5);
        })
    });

    describe('#getMin(key)', function() {
        it('should be a Function', function () {
            const bst = new BinaryTree(compare);
            bst.getMin.should.be.instanceOf(Function);
        });

        it('should return null if BST is Empty', function () {
            const bst = new BinaryTree(compare);
            (bst.getMin() === null).should.be.true();
        });

        it('should return Node', function () {
            const bst = new BinaryTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.getMin().should.be.instanceOf(BinaryTreeNode);
        });

        it('should return Node with minimal key', function () {
            const bst = new BinaryTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.getMin().key.should.be.eql(1);
            bst.getMin().value.should.be.eql(50);
        });
    });

    describe('#remove(key)', function () {
        it('should be a Function', function () {
            const bst = new BinaryTree(compare);
            bst.remove.should.be.instanceOf(Function);
        });

        it('should return false if no Node with this key', function () {
            const bst = new BinaryTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.remove(111);
            bst.find(111)._removed.should.be.true();
        });
    });
})