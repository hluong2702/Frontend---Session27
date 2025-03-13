let array = [];
let choice;

function enterStudentList() {
    let n = +prompt(`Moi ban nhap vao so luong hoc sinh`);
    if (isNaN(n) || n <= 0) {
        console.log("So luong khong hop le!");
        return;
    }
    for (let i = 0; i < n ; i++) {
       let input = prompt(`Sinh vien thu ${i}`);
       array.push(input);
    }
    console.log(`Done`);
}

function listStudent() {
    if (array.length === 0) {
        console.log(`Mang rong`);
        return;
    }
    console.log("\nDanh sach sinh vien:");
    array.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });
}

function searchStudent() {
    let name = prompt("Nhap ten sinh vien can tim: ");
    let found = array.filter(student => student.toLowerCase().includes(name.toLowerCase()));
    if (found.length > 0) {
        console.log("\nSinh vien tim thay:");
        found.forEach(student => console.log(student));
    } else {
        console.log("Sinh vien khong co trong danh sach.");
    }
}

function deleteStudent() {
    let name = prompt("Nhap ten sinh vien can xoa: ");
    let index = array.findIndex(student => student.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Da xoa sinh vien thanh cong!");
    } else {
        console.log("Sinh vien khong co trong danh sach.");
    }
}
do {
    choice = +prompt(`
        =============== MENU ===============
        1.Nhap danh sach sinh vien
        2.Hien thi danh sach sinh vien
        3.Tim sinh vien theo ten
        4.Xoa sinh vien khoi danh sach
        5.Thoat
        ====================================
        `)
        switch (choice) {
            case 1:
                enterStudentList();
                break;
            case 2:
                listStudent();
                break;
            case 3:
                searchStudent();
                break;
            case 4:
                deleteStudent();
                break;
            case 5:
                console.log(`See you again`);
                break;
            default:
                console.log(`Lua chon khong hop le`);
                break;
        }
} while (choice !==5);