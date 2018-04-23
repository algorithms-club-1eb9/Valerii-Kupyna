const should = require('should');
const algo = require('../index.js');

describe('Linked list', () => {
    it('size must be 5', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        
        should(linked.size).be.eql(5);
    });

     it('3 element must be green', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        should(linked.get(3).currentItem.value).be.eql('item6');
    });

    it('2 element must be green', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        should(linked.get(2).currentItem.value).be.eql('green');
    });

    it('0 element must be item1', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.unshift('item1')
        should(linked.get(0).currentItem.value).be.eql('item1');
    });

    it('0 element must be item2', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.unshift('item1')
        linked.unshift('item2')
        should(linked.get(0).currentItem.value).be.eql('item2');
    });

    it('1 element must be item2', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.unshift('item1')
        linked.insert('item2', 1);
        should(linked.get(1).currentItem.value).be.eql('item2');
    });

    it('1 element must be item2', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.unshift('item1')
        linked.insert('item2', 1);
        linked.insert('item3', 4);
        should(linked.get(4).currentItem.value).be.eql('item3');
    });

    it('removed element must be red', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        

        should(linked.shift().value).be.eql('red');
    });

    it('removed element must be yellow', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        
        linked.shift()
        should(linked.shift().value).be.eql('yellow');
    });

    it('first element must be unshift', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        
        linked.shift();
        linked.shift();

        linked.unshift('unshift');

        should(linked.get(0).currentItem.value).be.eql('unshift');
    });

    it('first element must be unshift1', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.shift();
        linked.shift();
        linked.unshift('unshift');
        linked.shift();
        linked.unshift('unshift1');
        
        should(linked.get(0).currentItem.value).be.eql('unshift1');
    });

    it('last element must be pink', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.shift();
        linked.shift();
        linked.unshift('unshift');
        linked.shift();
        linked.unshift('unshift1');
        
        should(linked.get(linked.size - 1).currentItem.value).be.eql('pink');
    });

    it('removed element must be item5', () => {
        const linked = new algo.linkedList('red');
        linked.push('yellow');
        linked.push('green');
        linked.push('item6');
        linked.push('pink');
        linked.shift();
        linked.shift();
        linked.push('yellow');
        
        linked.unshift('unshift');
        linked.shift();
        linked.unshift('unshift1');
        linked.push('item5');
        linked.pop();
        
        should(linked.get(linked.size - 1).currentItem.value).be.eql('yellow');
    });


});