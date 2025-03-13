let choice;
let array = [];
for (let i = 0; i < 2; i++) {
    let num = +prompt(`Moi ban nhap vao so thu ${i}`);
    array.push(num);
}
do {
    choice = +prompt(`
        =============== MENU ===============
        1.Cộng hai số.
        2.Trừ hai số.
        3.Nhân hai số.
        4.Chia hai số.
        5.Thoát.
        ====================================`);
        switch (choice) {
            case 1:
                let total = array.reduce((number1,number2) => number1 + number2);
                console.log(`Tong 2 so la: `,total);
                break;
            case 2:
                let result = array.reduce((number1,number2) => number1 - number2);
                console.log(`Tru 2 so la: `,result);
                break;
            case 3:
                let result1 = array.reduce((number1,number2) => number1 * number2);
                console.log(`Nhan 2 so la: `,result1);
                break;
            case 4:
                let result2 = array.reduce((number1,number2) => number1 / number2);
                console.log(`Chia 2 so la: `,result2);
                break;
            case 5:
                console.log(`See you agian`);
                break;
            default:
                console.log(`Lua chon khong hop le`);
                break;
        }
} while (choice !==5);