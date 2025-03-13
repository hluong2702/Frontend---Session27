let numbers = []; 
let choice; 

function enterNumbers() {
    let n = +prompt("Moi ban nhap vao so luong: ");
    if (isNaN(n) || n <= 0) {
        console.log("Khong hop le ");
        return;
    }
    numbers = []; 
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhap so nguyen thu ${i + 1}: `);
        numbers.push(num);
    }
    console.log("Done");
}

function calculateAverage() {
    if (numbers.length === 0) {
        console.log("Mang rong");
        return;
    }
    let sum = numbers.reduce((value, num) => value + num, 0);
    let average = sum / numbers.length;
    console.log(`Trung binh cong la: ${average.toFixed(2)}`);
}

function findMaxEven() {
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        console.log("Mang rong");
        return;
    }
    let maxEven = Math.max(...evenNumbers);
    console.log(`So chan lon nhat: ${maxEven}`);
}

function findMinOdd() {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) {
        console.log("Mang rong");
        return;
    }
    let minOdd = Math.min(...oddNumbers);
    console.log(`So le nho nhat: ${minOdd}`);
}

do {
    choice = +prompt(`
        =============== MENU ===============
        1. Nhập danh sach cac so nguyen
        2. Tính trung binh cac so
        3. Tìm so chan lon nhat
        4. Tìm so le nho nhat
        5. Thoat
        ====================================
    `);

    switch (choice) {
        case 1:
            enterNumbers();
            break;
        case 2:
            calculateAverage();
            break;
        case 3:
            findMaxEven();
            break;
        case 4:
            findMinOdd();
            break;
        case 5:
            console.log("See you again!");
            break;
        default:
            console.log("Lua chon khong hop le");
            break;
    }
} while (choice !== 5);
