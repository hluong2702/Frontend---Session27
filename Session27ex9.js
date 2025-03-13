const numbers = [5,8,6,3,4,2,7]
function sortEvenNumbers(numbers) {
    if (!Array.isArray(numbers) || !numbers.some((number) => Number.isInteger(number))) {
        return "Du lieu khong hop le";
    }
    let evenNumbers = numbers.filter((num) => num % 2 === 0)
    evenNumbers = evenNumbers.sort((a, b) => a - b);
    let index = 0;
    let result = numbers.map(num => (num % 2 === 0 ? evenNumbers[index++] : num));
    return result;
}
console.log(sortEvenNumbers([5, 8, 6, 3, 4, 2, 7]));