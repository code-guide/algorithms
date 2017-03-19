const { expect } = require('chai');
const { insertionSort, mergeSort } = require('../../src/_1_sort');

const input = [6, 5, 4, 3, 2, 1];
const output = [1, 2, 3, 4, 5, 6];

describe('1. sort.', () => {

    it('a. insertion sort.', () => {
        expect(insertionSort(input)).to.be.deep.equal(output);
    });

    it('b. merge sort.', () => {
        expect(mergeSort(input)).to.be.deep.equal(output);
    });

});