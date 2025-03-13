let number = prompt("Nhap vao 1 so nguyen")
console.log(maxNumber(number));

function maxNumber(number) {
    let arrayNumber = number.split("")
    if(arrayNumber.some((num) => isNaN(num) || arrayNumber === "")){
        return "Dữ liệu không hợp lệ";
    }
    arrayNumber.sort((a,b) => b-a)
    number = arrayNumber.join("")
    return number
}