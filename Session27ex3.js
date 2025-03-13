let choice;

function calculateCircleArea() {
    let radius = +prompt("Nhap ban kinh hinh tron : ");
    if (isNaN(radius) || radius <= 0) {
        console.log("Ban kinh khong hop le!");
        return;
    }
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`Diện tích hình tròn: ${area.toFixed(2)}`);
}

function calculateCirclePerimeter() {
    let radius = +prompt("Nhap ban kinh hinh tron: ");
    if (isNaN(radius) || radius <= 0) {
        console.log("Ban kinh khong hop le!");
        return;
    }
    let perimeter = 2 * Math.PI * radius;
    console.log(`Chu vi hình tròn: ${perimeter.toFixed(2)}`);
}

function calculateRectangleArea() {
    let width = +prompt("Nhap chieu rong hinh chu nhat: ");
    let height = +prompt("Nhap chieu dai hinh chu nhat: ");
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        console.log("Khong hop le");
        return;
    }
    let area = width * height;
    console.log(`Dien tich hinh chu nhat la: ${area.toFixed(2)}`);
}

function calculateRectanglePerimeter() {
    let width = +prompt("Nhap chieu rong hinh chu nhat: ");
    let height = +prompt("Nhap chieu dai hinh chu nhat: ");
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        console.log("Khong hop le");
        return;
    }
    let perimeter = 2 * (width + height);
    console.log(`Chu vi hinh chu nhat la: ${perimeter.toFixed(2)}`);
}

do {
    choice = +prompt(`
        =============== MENU ===============
        1. Tính dien tich hinh tron
        2. Tính chu vi hinh tron
        3. Tính dien tich hinh chu nhat
        4. Tính chu vi hinh chu nhat
        5. Thoat
        ====================================
    `);

    switch (choice) {
        case 1:
            calculateCircleArea();
            break;
        case 2:
            calculateCirclePerimeter();
            break;
        case 3:
            calculateRectangleArea();
            break;
        case 4:
            calculateRectanglePerimeter();
            break;
        case 5:
            console.log("See you again!");
            break;
        default:
            console.log("Lua chon khong hop le ");
            break;
    }
} while (choice !== 5);
