const should = require('should');
const algo = require('../index.js');

describe('Union find', () => {
    it('shoud be true', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        
        should(union.isConected(1, 2)).be.eql(true);
    });

    it('shoud be 1', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        
        should(union.count()).be.eql(1);
    });

    it('shoud be 2', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        
        should(union.component(0)).be.eql(2);
    });

    it('shoud be true', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        union.conected(2, 3);
   
        should(union.isConected(1, 3)).be.eql(true);
    });

    it('shoud be true', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        union.conected(2, 3);
        union.conected(0, 4);
        union.conected(5, 0);
        union.count();
   
        should(union.isConected(1, 3)).be.eql(true);
    });

    it('shoud be false', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        union.conected(2, 3);
        union.conected(0, 4);
        union.conected(5, 0);
        union.conected(7, 0);
   
        should(union.isConected(1, 7)).be.eql(false);
    });

    it('shoud be false', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        union.conected(2, 3);
        union.conected(0, 4);
        union.conected(5, 0);
        union.conected(7, 0);
   
        should(union.isConected(6, 7)).be.eql(false);
    });

    it('shoud be true', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        union.conected(2, 3);
        union.conected(0, 4);
        union.conected(5, 0);
        union.conected(7, 0);
        union.conected(8, 9);
   
        should(union.isConected(8, 9)).be.eql(true);
    });

    it('shoud be 3', () => {
        const union = new algo.UnionFind(10);
        union.conected(1, 2);
        union.conected(2, 3);
        union.conected(0, 4);
        union.conected(5, 0);
        union.conected(7, 0);
        union.conected(8, 9);
   
        should(union.count()).be.eql(3);
    });

    it('shoud be true', () => {
        const union = new algo.UnionFind(10);
        union.conected(4, 3);
        union.conected(3, 8);
        union.conected(6, 5);
        union.conected(9, 4);
        union.conected(2, 1);
        union.conected(8, 9);
        union.conected(5, 0);
        union.conected(7, 2);
        union.conected(6, 1);

        const result = union.isConected(4, 3);
        should(result).be.eql(true);
    });

    it('shoud be false', () => {
        const union = new algo.UnionFind(10);
        union.conected(4, 3);
        union.conected(3, 8);
        union.conected(6, 5);
        union.conected(9, 4);
        union.conected(2, 1);
        union.conected(8, 9);
        union.conected(5, 0);
        union.conected(7, 2);
        union.conected(6, 1);

        const result = union.isConected(0, 9);
        should(result).be.eql(false);
    });

});