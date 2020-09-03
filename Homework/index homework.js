// 1 Variable swap
//thuật toán đổi số
// let a = 5
// let b = 6

// a = a + b
// b = a - b
// a = a - b

// console.log(a)
// console.log(b)

// biến tạm thời
// let a = 5
// let b = 6
// let temp

// temp = a
// a = b
// b = temp

// console.log(a)
// console.log(b)

// 2.	Split String into Array

// const s = "Hello beauty there"
// const x = s.split(" ")
// console.log(x)

//3 the spread operator (three dots)
// const a = [4, 5, 7, -8];
// console.log (... a);

// 4	Write a script to simulate a clothes shop

// let shop=["Jeans","T-Shirt","Socks"]
// let check = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?")
// while (true){
//     if (check == "c"){
//         let creat_Item = prompt("Enter the name of the new item:")
//         shop.push(creat_Item)
//         alert("Done")
//     }
//     else if (check == "r"){
//         let result = " " 
//         for (let i = 0; i < shop.length; i++){
//             result = result + (i+1 + ". " + shop[i] + "\n")
//         }
//         alert ("The curent item are: \n" + result)
//     }
//     else if (check == "u"){
//         let position_Update = Number(prompt("Enter the position you want to update: "))
//         let newName_Update = prompt("Enter the new name:")
//         shop[position_Update - 1] = newName_Update
//         alert("Done")
//     }
//     else if (check == "d"){
//         let position_Delete = Number(prompt("Enter the position you want to delete"))
//         shop.splice(position_Delete-1, 1)
//         alert("Done")
//     }
//     else {
//         alert("This command is not supported")
//     }
//     check = prompt("Hi there, welcome to shop admin, what do you want (C, R, U, D)?")
// }

//5 calculate the sum of the numbers 

// let Numbers = prompt("Enter a sequence of Number, separated by commas:")
// Numbers = Numbers.split(",")
// let sum = 0 
// for(let i=0 ; i<Numbers.length ; i++){
//     sum = sum + Number(Numbers[i])
// }
// alert("The sum of them is " + sum)

//6. find the smallest number 

// let Numbers = prompt("Enter a sequence of Number, separated by ',' :")
// let n = Numbers.split(",")
// console.log(n)
// for(i = 0; i < n.length; i++){
//     n[i]=Number(n[i])
// }
// alert (("The smallest of them is " + Math.min.apply(Math, n)))

// 7. look for the number in the array

// const arr = [3, 4, 6, -9, 10, -88, 2];
// let n = prompt("Enter a number: ")
// let count = 0
// for (let i = 0; i <= arr.length; i++){
//     if (n == arr[i]){
//         alert(n + " is FOUND in my array at index " + (i+1))
//         count++
//     }
// }
// if (count==0) { 
//     alert(n + " is not Found in my array")
// }

//8 
// 8.1 & 8.2
// let my_sheeps = [5,7,300,90,24,50,75]
// alert ("Hello, my name is LUKE and here is my sheep size: \n" + my_sheeps)
// let result = ""
// let max_size = 0
// for (let i = 0; i<my_sheeps.length; i++){
//     result = result + my_sheeps[i] + " "
//     if (max_size < my_sheeps[i])
//      max_size = my_sheeps[i]
// }
// alert ("Now my biggest sheep has size " + max_size + ", let's shave it")

// //8.3
// my_sheeps[my_sheeps.indexOf(max_size)] = 8
// result = 0
// for (let i = 0; i< my_sheeps.length; i++){
//     result = result + my_sheeps[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

// 8.4
// result = 0
// for (let i = 0; i<my_sheeps.length; i++){
//     my_sheeps[i] += 50
//     result = result + my_sheeps[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

//8.5
// let my_sheeps = [5,7,300,90,24,50,75]
// alert ("Hello, my name is LUKE and here is my sheep size: \n" + my_sheeps)
// for (let month=1;month<=4; month++){
//     let result = ""
// let max_size = 0
// for (let i = 0; i<my_sheeps.length; i++){
//     result = result + my_sheeps[i] + " "
//     if (max_size < my_sheeps[i])
//      max_size = my_sheeps[i]
// }
// alert ("Now my biggest sheep has size " + max_size + ", let's shave it")

//     my_sheeps[my_sheeps.indexOf(max_size)] = 8
// result = 0
// for (let i = 0; i< my_sheeps.length; i++){
//     result = result + my_sheeps[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

// result = 0
// for (let i = 0; i<my_sheeps.length; i++){
//     my_sheeps[i] += 50
//     result = result + my_sheeps[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)
// }


//10 Create a new array containing the names,
// let names = prompt ("Enter a sequence of names:")
// names = names.split(",")
// 10.1
// for (let i = 0; i < names.length; i++){
//     names[i] = "<" + names[i] + ">" 
// }
// alert(names)

//10.2
// let result = names.map(x =>"<" + x + ">")
// console.log(result)

//11 
// let array = prompt("Enter a sequence of number:")
// array = array.split(",")
//11.1
// let result = []
// let count = 0
// for (let i = 0 ; i < array.length ; i++){
//     if (array[i] % 2 != 0){
//         result[count] = array[i]
//         count++
//     }
// }
// alert(result)

//11.2
// array = array.filter( x => x%2!=0)
// alert(array)





































































