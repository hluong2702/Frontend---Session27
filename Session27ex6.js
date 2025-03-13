const numbers = [2,4,6,8,10]
function arithmeticProgression(numbers) {
    let n = numbers[1] - numbers[0]
    if (!Array.isArray(numbers || array.some((numbers) => !Number.isInteger(numbers)))) {
        return `Du lieu khong hop le`
    }
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] - numbers[i-1] !== n) {
            return false
        }
    }
    return true
}

console.log(arithmeticProgression(numbers));