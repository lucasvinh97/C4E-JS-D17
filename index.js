// Bài 1 : Cho 1 chuỗi str_input. 
// Viết chương trình đảo ngược chuỗi và in ra kết quả.

// let input = prompt("Enter a phase: ")
// var newString =""
// for(let i = input.length - 1; i>=0 ;i--){
//     newString += input[i]
// }
// alert(newString)


// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự
// in ra chuỗi đó với ký tự đầu được viết hoa

// let input = String(prompt('Enter a string:'))
// let inputUpper = input.charAt(0).toUpperCase()
// for (let i = 1; i < input.length; i++) {
//     inputUpper += input.charAt(i)
// }
// alert(inputUpper);

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng 
// in ra kết quả.

// let Array =[1,2,3,3,4,5,4,4,4,5,5,6]
// for(let i = 0; i < Array.length; i++){
//    for(let j = Array.length-1; j>i; j--){
//        if(Array[i]==Array[j]){
//            Array.splice(j,1)
//        }
//    }
// }
// alert(Array)

// Bài 4 : Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ).
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).

// let nv = [
//     {   ten: "Hiếu",
//         tuoi: 22,
//         luong: 1500 ,
//         chuc: "Giảng viên"
//     },
//     {
//         ten: "Quang",
//         tuoi: 24,
//         luong: 500 ,
//         chuc: "Trợ giảng"
//     },
//     {
//         ten: "Phi",
//         tuoi: 50,
//         luong: 200 ,
//         chuc: "Quản lí"
//     },
// ]

// //  Input
// while(true){
// let nhap  = prompt(`Chương trình quản lí nhân viên, xin nhập\n R: Để xem thông tin nhân viên\n C: Để thêm nhân viên\n U: Để cập nhật thông tin nhân viên\nD: Để xóa nhân viên`).toLowerCase()
// // console.log(nhap)
// while(nhap!="r" && nhap!="c" && nhap!="u" && nhap !="d"){
//     nhap  = prompt(`Chương trình quản lí nhân viên, xin nhập\n R: Để xem thông tin nhân viên\n C: Để thêm nhân viên\n U: Để cập nhật thông tin nhân viên\nD: Để xóa nhân viên`).toLowerCase()
// }

// //Read

// if(nhap == "r"){
//     let hien=[]
//     for(let i = 0; i<nv.length; i++){
//         hien.push(`${i+1}. ${nv[i].ten}`)
//     }
//     let so = prompt(`Xin bạn hãy chọn nhân viên muốn xem ${hien}`)
//     while(isNaN(Number(so))||so == ""||so > nv.length){
//         so = Number(prompt(`Xin bạn hãy chọn nhân viên muốn xem ${hien}`))
//     }
//     alert(`Tên: ${nv[so-1].ten}\n Tuổi: ${nv[so-1].tuoi}\n Mức lương: ${nv[so-1].luong}\n Chức vụ: ${nv[so-1].chuc}`)
// }

// //Creat

// else if(nhap=="c"){
//     let ten = prompt("Xin nhập tên:")
//     let tuoi = Number(prompt("Xin nhập tuổi:"))
//     while(isNaN(tuoi)||tuoi == 0){
//         tuoi = Number(prompt("Xin nhập tuổi bằng số và lớn hơn 0:"))
//     }
//     let luong = Number(prompt("Xin nhập mức lương:"))
//     while(isNaN(luong)||luong == 0){
//         luong = Number(prompt("Xin nhập mức lương bằng số"))
//     }
//     let chuc = prompt("Nhập chức vụ")
//     let nvm ={ 
//         ten: ten,
//         tuoi: tuoi,
//         luong: luong,
//         chuc: chuc}
//    alert(`Đã thêm nhân viên:\n Tên: ${nvm.ten}\n Tuổi: ${nvm.tuoi}\n Lương: ${nvm.luong}\n Chức vụ: ${nvm.chuc}`)
// }

// //Update

// else if(nhap=="u"){
//     let hien=[]
//     for(let i = 0;i<nv.length;i++){
//         hien.push(`${i+1}. ${nv[i].ten}`)
//     }
//     let so= prompt(`Xin chọn nhân viên bạn muốn cập nhật ${hien}`)
//     while(isNaN(Number(so))||so == ""||so>nv.length){
//         so = Number(prompt(`Xin chọn nhân viên bạn muốn cập nhật ${hien}`))
//     }
//     let ten = prompt("Xin nhập tên:")
//     let tuoi = Number(prompt("Xin nhập tuổi:"))
//     while(isNaN(tuoi)||tuoi == 0){
//         tuoi = Number(prompt("Xin nhập tuổi bằng số và lớn hơn 0:"))
//     }
//     let luong = Number(prompt("Xin nhập mức lương:"))
//     while(isNaN(luong)||luong == 0){
//         luong = Number(prompt("Xin nhập mức lương bằng số: "))
//     }
//     let chuc = prompt("Nhập chức vụ")
//     let nvm = { 
//         ten: ten,
//         tuoi: tuoi,
//         luong: luong,
//         chuc: chuc}
//     nv[so-1]= nvm
//     alert(`Đã cập nhật nhân viên vào sổ ${so}:\n Tên: ${nvm.ten}\n Tuổi: ${nvm.tuoi}\n Lương: ${nvm.luong}\n Chức vụ: ${nvm.chuc}`)
//     console.log(nv)
// }

// //Delete

// else if(nhap == "d"){
//     let hien=[]
//     for(let i = 0; i<nv.length; i++){
//         hien.push(`${i+1}. ${nv[i].ten}`)
//     }
//     let so= prompt(`Xin chọn nhân viên bạn muốn xóa: ${hien}`)
//     while(isNaN(Number(so))||so == ""||so>nv.length){
//         so = Number(prompt(`Xin chọn nhân viên bạn muốn xóa: ${hien}`))
//     }
//     nv.splice(so-1,1)
//     console.log(nv)
// }
// }

// Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm

// let date = prompt('Please enter a date: \n Example: 30/4/2020');
// let checkDate = date.split("/");
// let date31 = [];
// for (let i = 0; i < 31; i++) {
//     date31.push(i + 1);
// }
// let date30 = [];
// for (let i = 0; i < 30; i++) {
//     date31.push(i + 1);
// }
// let month31 = [1,3,5,7,8,10,12];
// let month30 = [4,6,9,11];
// let leapyear = [2];
// let flag = true;
// while(flag){
//     for (let i = 0; i <= 12; i++) {
//         if(month31[i] == checkDate[1]){
//             for (let j = 0; j < date31.length; j++) {
//                 if(date31[i] == checkDate[0] && date31[i] != date31[date31.length - 1]){
//                     alert(`The next day will be ${checkDate[0] + 1}/${checkDate[1]}/${checkDate[2]}.`)
//                     flag = false;
//                 }
//                 else if(date31[i] == date31[date31.length - 1] && checkDate != 12){
//                     alert(`The next day will be 1/${checkDate[1] + 1}/${checkDate[2]}.`)
//                     flag = false;
//                 }else if(date31[i] == date31[date31.length - 1] && checkDate == 12){
//                     alert(`The next day will be 1/1/${checkDate[2]+1}.`)
//                     flag = false;
//                 }

//             }
//         }
//         else if(month30[i] == checkDate[1]){
//             for (let j = 0; j < date30.length; j++) {
//                 if(date31[i] == checkDate[0] && date31[i] != date31[date31.length - 1]){
//                     alert(`The next day will be ${checkDate[0] + 1}/${checkDate[1]}/${checkDate[2]}.`)
//                     flag = false;
//                 }
//                 else if(date31[i] == date31[date31.length - 1]){
//                     alert(`The next day will be 1/${checkDate[1] + 1}/${checkDate[2]}.`)
//                     flag = false;
//                 }
//             }
//         }
//         else if(leapyear[0] = checkDate[1]){
//             if (checkDate[2] % 4 == 0 && checkDate[2] % 100 != 0 && checkDate[0]=28){
//                 alert(`The next day will be ${checkDate[0] + 1}/${checkDate[1]}/${checkDate[2]}.`)
//             }
//             else if(checkDate[2] % 4 == 0 && checkDate[2] % 100 != 0 && checkDate[0] = 29){
//                 alert(`The next day will be ${checkDate[0] + 1}/3/${checkDate[2]}.`);
//             }
//             else if(checkDate[1] > 0 && checkDate[1] < 28){
//                 alert(`The next day will be ${checkDate[0] + 1}/${checkDate[1]}/${checkDate[2]}.`)
//             }
        
//         }else{
//             alert('Your date is not available.')
//         }
//     }
// }




