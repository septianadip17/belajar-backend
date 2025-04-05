// // // variable
// // var
// var greeter = "Hello World";
// var greeter = "Hallo Dunia"
// console.log(greeter);

// // let
// let greeter2 = "Hello World";
// let status = true;
// if (status = true){
//     let greeter2 = "Hallo Dunia";
// }
// console.log(greeter2);

// // const
// const greeter3 = "Hello World";
// const greeter3 = "Hallo Dunia";
// console.log(greeter3);

// // // perulangan
// // flow for
// let angka = "";
// for (let i = 0; i < 10; i++) {
//     angka = angka + i;
// }
// console.log(angka);

// //  flow while
// let angka = "";
// while (angka < 10){
//     angka++
//     console.log(angka);
// }

// // flow do while
// let angka = "";
// let i = 0;
// do {
//   i = i + 1;
//   angka = angka + i;
// }while(i < 10);
// console.log(angka);

// // // function
// function testNum(a) {
//   let angka;
//   if (a > 0) {
//     angka = "Positif";
//   } else {
//     angka = "Negatif";
//   }
//   return angka;
// }
// console.log(testNum(-5));

// const fruit = "Bananas";
// switch (fruit) {
//   case "Papayas":
//     console.log("1kg Papayas = Rp 20.000");
//     break;
//   case "Mangoes":
//     console.log("1kg Mangoes = Rp 15.000");
//     break;
//   case "Bananas":
//     console.log("1kg Bananas = Rp 10.000");
//     break;
//   default:
//     console.log("Sorry, Out Of Order");
// }


// // array
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// let foods =[];
// if (foods.length > 0){
//   console.log(foods);
// }else{
//   console.log("There is no food");
// }

// let drinks = ["Coffee", "Tea", "Juice"];
// drinks.forEach(function(item, index){
//   console.log(item, index);
// }) 

let hobbies = ["Reading", "Coding", "Gaming"];
console.log(hobbies);
let addHobbies = hobbies.push("Hiking");
console.log(hobbies);
let addAnotherHobbies = hobbies.unshift("Cooking");
console.log(hobbies);
let removeLastHobbies = hobbies.pop();
console.log(hobbies);
let removeFirstHobbies = hobbies.shift();
console.log(hobbies);