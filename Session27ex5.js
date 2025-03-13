const splitArray = (array, size) => {
    if (!Array.isArray(array) || array.some((numbers) => !Number.isInteger(numbers)) || size <= 0 || !Number.isInteger(size)) {
        return `Du lieu khong hop le`
    }
    const childrenArray = []
    for (let i = 0; i < array.length; i+=size) {
        childrenArray.push(array.slice(i,i+size))
    }
    return childrenArray
}
const numbers =[]
const lenght = +prompt("Nhap so phan tu ban muon nhap")
const n = +prompt("Nhap kich thuoc cua mang con")
for (let i = 0; i < lenght; i++) {
    numbers[i] = +prompt(`Nhap phan tu thu ${i}`)
}
const result = splitArray(numbers,3);
console.log(result);