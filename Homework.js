// Bài 1.	for and Object
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };
// for (let x in product) {
//     console.log(x);
// }

// 1.1.	x receives property

// 1.2.
// for (let x in product) {
//     console.log(`${x}: ${product[x]}`);
// }

// Bài 2.	Learn about destructuring object
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let {subject, dueDate, assignTo} = task;
// console.log(subject);

// Bài 3.1.	What is the data type of the outermost layer (Number, String, Object, Array or else)?
// Đây là kiểu Object vì sử dụng dấu ngoặc nhọn ngoài .

// 3.2.	The hits property is where the job results are stored...
//  hits là một Mảng vì nó có dấu ngoặc vuông cho lớp ngoài.

// 3.3.	In each hit of hits, how to find the job’s title,
//  locations, salary, benefits, skills and requirements
// job's title được truy cập bằng jobSearch.hits[0].jobTitle;
// locations được truy cập bằng jobSearch.hits[0].locations;
// salary được truy cập bằng jobSearch.hits[0].jobSalary;
// benefits được truy cập bằng jobSearch.hits[0].benefits;
// skills được truy cập bằng jobSearch.hits[0].skills;
// requirements được truy cập bằngjobSearch.hits[0].jobRequirement;

// Bài 4
// let dict = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for "error"',
//     pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
//     uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
// };

// // Bài 4.1 & 4.2
// // Write a script to simulate the lookup of the dictionary and Update your script 

// alert('Hi there, this is a dev dictionary.');
// let answer = '';
// let answer2 = '';
// let definition;
// let flag = true;
// let flag2 = true;
// while(flag){
//     flag2 = true;
//     answer = prompt('Enter a keyword.');
//     if(dict[answer] == undefined){
//         dict[answer] = prompt(`We could not find your word: ${answer}, leave your explanation.`);
//         alert('Done');
//     }else{
//         definition = answer;
//         definition += "\n" + dict[answer];
//         alert(definition);
//     }
//     while(flag2){
//         answer2 = prompt('Do you want to continue (Y/N)?')
//         if(answer2 == 'y' || answer2 == 'Y'){
//             flag2 = false;
//         }
//         else if(answer2 == 'n' || answer2 == 'N'){
//             flag2 = false;
//             flag = false;
//         }
//     }
// };


// Bài 5.1.	Print/log name and price of all the products out 

// let products = [
//     {
//         position: '#1',
//         Name: 'Xiaomi portable charger 20000mah',
//         Brand: 'Xiaomi',
//         Price: '428',
//         Color: 'White',
//         Category: 'Charger',
//     },
//     {
//         position: '#2',
//         Name: 'VSmart Active 1',
//         Brand: 'Xiaomi',
//         Price: '5487',
//         Color: 'Black',
//         Category: 'Phone',
//     },
//     {
//         position: '#3',
//         Name: 'IPhone X',
//         Brand: 'Apple',
//         Price: '21490',
//         Color: 'Gray',
//         Category: 'Phone',
//     },
//     { 
//         position: '#4',
//         Name: 'Samsung Galaxy A9',
//         Brand: 'Samsung',
//         Price: '8490',
//         Color: 'Blue',
//         Category: 'Phone',},
// ];
// for (let i = 0; i < products.length; i++) {
//     console.log(`-------------------------------- \n ${products[i].Name} \n ${products[i].Price}`)
// }

// 5.2.	Write a script printing/logging out.....

// let position = Number(prompt('Enter production position (number)'));
// console.log(`position: ${products[position - 1].position}`);
// console.log(`Name: ${products[position - 1].Name}`);
// console.log(`Brand: ${products[position - 1].Brand}`);
// console.log(`Price: ${products[position - 1].Price}`);
// console.log(`Color: ${products[position - 1].Color}`);
// console.log(`Category: ${products[position - 1].Category}`);

// 5.3.	Write a script printing/logging out ....
// let category = prompt('Enter your category');
// for (let i = 0; i < products.length; i++) {
//     if(products[i].Category == category){
//         console.log('----------------------------------');
//         console.log(`Name: ${products[i].Name}`);
//         console.log(`Price: ${products[i].Price}`);
//     }
//      else if(i == products.length - 1){
//         console.log('We could not find your category.')
//     }
// }

// 5.4.	Add providers to each product
// let Providers = [['Phukienzero', 'Dientuccc'], ['Tgdd', 'Ddghn', 'VhStore'], ['Tgdd'], ['Tgdd']];
// for (let i = 0; i < products.length; i++) {
//     products[i].Providers = Providers[i];
//     // chỗ này tạm comment lại để khỏi log ra khi không cần thiết
//     // console.log('-----------------------------');
//     // console.log(`Name: ${products[i].Name}`);
//     // console.log(`Price: ${products[i].Price}`);
//     // console.log(`Providers: ${products[i].Providers}`);
// }

// 5.5.	(Optional)
// let ans_provider = prompt('Enter provider');
// for (let i = 0; i < products.length; i++) {
//     for (let j = 0; j < products[i].Providers.length; j++) {
//         if(products[i].Providers[j] == ans_provider){
//             console.log('-----------------------------------------');
//             console.log(`position: ${products[i].position}`);
//             console.log(`Name: ${products[i].Name}`);
//             console.log(`Brand: ${products[i].Brand}`);
//             console.log(`Price: ${products[i].Price}`);
//             console.log(`Color: ${products[i].Color}`);
//             console.log(`Category: ${products[i].Category}`);
//             console.log(`Providers: ${products[i].Providers}`);
//         }
//         else if(i == products.length - 1 && j ==products[i].Providers.length - 1){
//             // chỗ này để điều kiện và để đảm bảo chỉ in ra 1 lần duy nhất
//             console.log('We could not find your providers.')
//                 }
//     }
// }

// Bài 6.

// 6.1.	Print it out
// console.log('Hi there, this is your learning tasks to become a front-end developer:');
// let tasks = ['HTML', 'CSS', 'Basics of JavaScript', 'Node Package Manager (npm)', 'Git'];
// let status = [];
// for (let i = 0; i < tasks.length; i++) {
//     status[i] = false;
// console.log(`${i + 1}. ${tasks[i]}`);
// console.log(`Complete: ${status[i]}`);
// }
// let flag = true;
// let flag2;
// let answer, answer2;
// while(flag){
//     flag2 = true
//     answer = prompt('Enter your command (new, delete, update, complete)')
//     while(flag2){
//     if(answer == 'new'){

// // 6.2.	Let users add new task
//         tasks.push(prompt('Enter new tasks'));
//         status.push(false);
//         flag2 = false;
//     }
//     else if(answer == 'update'){
      
// // 6.3.	Let users update task
//         let position = Number(prompt('Enter position'));
//         tasks[position - 1] = prompt('Enter new title');
//         status[position - 1] = false;
//         flag2 = false;
//     }
//     else if(answer == 'complete'){

// // 6.4.	Let users complete task
//         let position = Number(prompt('Enter position'));
//         status[position - 1] = true;
//         flag2 = false;
//     }
//     else if(answer == 'delete'){

// 6.5.	Let users delete task 
//         let position = Number(prompt('Enter position'));
//         tasks.splice(position - 1, 1);
//         status.splice(position - 1, 1);
//         flag2 = false;
//     }
//     else{
//         answer = prompt('Your command is wrong, try again (New, Delete, Update, Complete)')
//     }
// }
//     while(flag2 == false){
//         answer2 = prompt('Do you want to do another tasks (Y/N) ?')
//         if(answer2 == 'y'){
//             flag2 = true;
//         }
//         else if(answer2 == 'n'){
//             flag2 = true;
//             flag = false;
//             for (let i = 0; i < tasks.length; i++) {
//                 console.log(`${i + 1}. ${tasks[i]} \n Complete: ${status[i]}`);

// 6.6.	(Optional) 
//                 // if(status[i] == false){
//                 //     console.log(`[ ] ${tasks[i]}`);
//                 // }else{
//                 //     console.log(`[x] ${tasks[i]}`);
//                 // }
//             }
//         }else{
//             answer2 = prompt('Do you want to do another tasks (Y/N) ?')
//         }
//     }
// }















































