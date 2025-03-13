function findMissingNumber(array) {
    let first = array[0];  
    let last = array[array.length - 1]; 
    let expectedSum = ((first + last) * (last - first + 1)) / 2;
    let actualSum = array.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 4, 6]));

