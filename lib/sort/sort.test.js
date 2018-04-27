// const should = require('should');
// const algo = require('../index.js');

// describe('Sort', () => {

//     // it('buble shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//     //     const arr = [ 7, 10, 8, 3, 9, 5, 2, 4, 6, 1];

//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.bubleSort(arr);

//     //     should(rezult).be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     // });

//     // it('buble shoud be ([]', () => {
//     //     const arr = [];
//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.bubleSort(arr);
//     //     should(rezult).be.eql([]);
//     // });

//     // it('buble shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//     //     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.bubleSort(arr);

//     //     should(rezult).be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     // });

//     // it('selectionSort shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//     //     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.selectionSort(arr);

//     //     should(rezult).be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     // });

//     // it('selectionSort shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//     //     const arr = [ 7, 10, 8, 3, 9, 5, 2, 4, 6, 1];

//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.selectionSort(arr);

//     //     should(rezult).be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     // });

//     // it('shellSort shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//     //     const arr = [ 7, 10, 8, 3, 9, 5, 2, 4, 6, 1];

//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.shellSort(arr);

//     //     should(rezult).be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     // });

//     // it('insert shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//     //     const arr = [ 7, 10, 8, 3, 9, 5, 2, 4, 6, 1];

//     //     const sort = new algo.SortAlgorithm(arr);
//     //     const rezult = sort.insertionSort(arr);

//     //     should(rezult).be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     // });

//     it('insert shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//         const arr = [2, 10, 1, 9];

//         const sort = new algo.SortAlgorithm(arr);
//         const rezult = sort.mergeSort(arr);

//         should(rezult).be.eql(arr.sort((a, b) => a - b));
//     });

//     it('insert shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//         const arr = [5, 6 , 7, 8, 9, 2, 10, 1, 9];

//         const sort = new algo.SortAlgorithm(arr);
//         const rezult = sort.mergeSort(arr);

//         should(rezult).be.eql(arr.sort((a, b) => a - b));
//     });
    
//     it('insert shoud be ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
//         const arr = [5, 6, 5, 11, 12, 14, 15, 7, 8, 9, 2, 10, 1, 9];

//         const sort = new algo.SortAlgorithm(arr);
//         const rezult = sort.mergeSort(arr);

//         should(rezult).be.eql(arr.sort((a, b) => a - b));
//     });

// });