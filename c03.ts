import * as readline from "readline-sync";

// ## Bài 1: Đậu rớt

// Cho phép người dùng nhập vào điểm trung bình (ĐTB) cuối khóa của lớp Tư duy và kỹ năng lập trình của một học viên, hãy xuất ra màn hình kết quả cuối khóa của học viên. Biết rằng: nếu ĐTB >= 5 là “Đậu”, ngược lại là “
// Rớt”.

// let a = Number(readline.question('Nhap diem'));

// if(a>=5)
// console.log('Dau');
// else
// console.log('Rot');

// ## Bài 2: Số quyền lực

// // Cho phép nhập vào một số nguyên dương x có 3 chữ số. Hãy cho biết x có phải là “số quyền lực” không? Biết “số quyền lực” là số có chữ số hàng trăm là chữ số 9.

// let a = Number(readline.question("Nhap so: "));

// if (a / 100 == 9) console.log("Yes");
// else console.log("No");

// Bài 3: Tam giác cân

// let a = Number(readline.question("Nhap canh: "));
// let b = Number(readline.question("Nhap canh: "));
// let c = Number(readline.question("Nhap canh: "));

// if(a==b || b==c ||c==a)
// console.log("Yes");
// else
// console.log("No");

// Bài 4: Kiểm tra năm nhuận

// let a = Number(readline.question("Nhap nam: "));

// if(a%4==0&&a%100!=0||a%400==0)
// console.log("yes");
// else
// console.log("No");
// Bài 5: Tính tiền điện

//  let a = Number(readline.question("Nhap kw dien: "));
// let tien=0;
//  if(a<100)
//  tien=a*2000;
//  else if (a<200)
//  tien=a*2500;
// else
// tien=a*3500;

// console.log("So tien phai tra",tien);
// Bài 6: Loại ký tự
//  let a = readline.question("Nhap ky tu de kiem tra: ");

// let test:number=a.charCodeAt(0);

//  if(test>=65&&test<=90)

//  console.log("Hoa");
//  else if(test>=48&&test<=57)
//  console.log("So")
//  else if (test >= 97 && test<= 122)
//  console.log("Thuong")
//  else
//  console.log("Ky dat biet");
// Bài 7: Phương trình bậc hai
// let a = Number(readline.question("Nhap a: "));
// let b = Number(readline.question("Nhap b: "));
// let c = Number(readline.question("Nhap c: "));
// if (a === 0) {
//     if (b === 0) {
//       if (c === 0) {
//         console.log("VSN");
//       } else {
//         console.log("VN");
//       }
//     } else {
//       const x = -c / b;
//       console.log(x);
//     }
//   } else {
//     const delta = b * b - 4 * a * c;
//     if (delta < 0) {
//       console.log("VN");
//     } else if (delta === 0) {
//       const x = -b / (2 * a);
//       console.log(x);
//     }
//     else {
//       const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//       const x2 = (-b - Math.sqrt(delta)) / (2 * a);
//       console.log(x1, x2);
//     }
//   }

// Bài 8: Ngày tháng năm hợp lệ
// let a = readline.question("Nhap a: ");

// let b = a.split("/");

// if (Number(b[1]) === 2) {
//   if (
//     (Number(b[2]) % 4 === 0 && Number(b[2]) % 100 !== 0) ||Number(b[2]) % 400 === 0 ) {
//     if (Number(b[0]) === 29) {
//       console.log("Valid");
//     } else {
//       console.log("Unvalid");
//     }
//   } else {
//     if (Number(b[0]) <= 28) {
//       console.log("Valid");
//     } else {
//         console.log("Unvalid");
//     }
//   }
// } else if (
//   Number(b[1]) == 4 ||
//   Number(b[1]) == 6 ||
//   Number(b[1]) == 9 ||
//   Number(b[1]) == 11
// ) {
//   if (Number(b[0]) <= 30) console.log("Valid");
//   else console.log("Unvalid");
// } else if (
//   Number(b[1]) == 1 ||
//   Number(b[1]) == 3 ||
//   Number(b[1]) == 5 ||
//   Number(b[1]) == 7 ||
//   Number(b[1]) == 8 ||
//   Number(b[1]) == 10 ||
//   Number(b[1]) == 12
// ) {
//   if (Number(b[0]) <= 31) console.log("Valid");
//   else console.log("Unvalid");
// } else console.log("Unvalid");
// Bài 9: Cách đọc số nguyên 2

let a = Number(readline.question("Nhap a: "));
const list = [ "một", "hai", "ba", "bốn", "năm",
    "sáu", "bảy", "tám", "chín"
  ];
const tens = Math.floor(a / 10);
  const units = a % 10;
  if(tens==1)
  {
    console.log("muoi",list[units-1])
  }
  if(tens==2)
  {
    console.log("Hai","muoi",list[units-1])
  }
  if(tens==3)
  {
    console.log("Ba","muoi",list[units-1])
  }
  if(tens==4)
  {
    console.log("Bon","muoi",list[units-1])
  }
  if(tens==5)
  {
    console.log("Nam","muoi",list[units-1])
  }
  if(tens==6)
  {
    console.log("Sau","muoi",list[units-1])
  }
  if(tens==7)
  {
    console.log("Bay","muoi",list[units-1])
  }
  if(tens==8)
  {
    console.log("Tam","muoi",list[units-1])
  }
  if(tens==9)
  {
    console.log("Chin","muoi",list[units-1])
  }


