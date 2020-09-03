// Check-point SS4

// Init (after 7)
// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// };
// console.log(movie)

// Cách 1
// console.log(movie.title)
// console.log(movie.year)
// console.log(movie.rate)
// Cách 2
// console.log(movie["title"])
// console.log(movie["year"])
// console.log(movie["rate"])
// console.log(movie.director)

// Upgrade Read object
// let property = prompt("Thuoc tinh ban muon xem?")
// console.log(property)
// console.log(typeof(property))
// while (true){
//     if (property == "title" || property == "year" || property == "rate"){
//         alert(movie[property])  
//         break;      
//     }else{
//         alert(` '${property}' does not exist in our data `)
//         property = prompt("Thuoc tinh ban muon xem?")
//     }
    
// }

// Update

// movie.rate = 8.7;
// movie.rate += 0.5;
// let u = prompt("What do you want to update?");
// if(u == 'title' || u == 'year' || u == 'rate'){
//     movie[u] = prompt("What is the update?");
//     console.log(movie);
// }else{
//     alert(u + " does not exist in our data, we will add new");
//     movie[u] = prompt("Enter new data");
//     console.log(movie);
// }

// Array of Objects (after 4)
// let movies = [];
// let movie1 = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// }
// let movie2 = {
//     title: 'Attack on titans',
//     year: 2015,
//     rate: 8,
// }
// let movie3 = {
//     title: 'Mind hunter',
//     year: 2010,
//     rate: 7.4,
// }
// movies.push(movie1, movie2, movie3);
// console.log(movies[0]);
// console.log(movies[2]);
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
   
// }
// movie3.rate += 0.7

// Object containing array
// let movie = {
//     title: 'Mind hunter',
//     year: 2010,
//     rate: 8.8,
//     characters: ['Eren', 'Armin', 'Mimosa', 'Slim']
// };

// for (const key in movie) {
//     console.log(key + ': ' + movie[key])
// }

// Object and Array mix structure
// let movies = [
//     movie1 = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//      },
//     movie2 = {
//         title: 'Attack on titans',
//         year: 2015,
//         rate: 8,
//      },
//      movie3 = {
//         title: 'Mind hunter',
//         year: 2010,
//         rate: 7.4,
//     }
// ];

// console.log(...movies)





