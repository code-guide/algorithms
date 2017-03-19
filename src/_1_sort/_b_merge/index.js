/**
 * 归并排序
 * 
 * O(nlgn)
 * 
 */
function merge(left = [], right = []) {
    let result = [];
    while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return result.concat(left.concat(right));
}

module.exports = input => {
    return (function mergeSort(input) {
        if (input.length <= 1) return input;
        let middle = input.length >> 1;
        return merge(mergeSort(input.slice(0, middle)), mergeSort(input.slice(middle)));
    })(input);
};