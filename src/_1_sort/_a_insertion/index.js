/**
 * 插入排序
 * 
 * O(n²)
 * 
 */
module.exports = input => {
    for (let i = 1, len = input.length; i < len; i++) {
        let key = input[i], j = i - 1;
        while (input[j] >= key && j >= 0) {
            input[j + 1] = input[j];
            j--;
        }
        input[j + 1] = key;
    }
    return input;
};