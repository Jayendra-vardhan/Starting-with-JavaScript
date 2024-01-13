/*
let js = "amazing";
if (js === "amazing") alert(1221);
console.log(40 + 8 + 23 - 10);
console.log("Deepasha");
console.log(10, 20, 30);

let FirstName = "Jayendra";
console.log(FirstName + js);
let PI = 3.1415;
PI = 1.0;
console.log(PI);
*/
////////////////////////////////////////////////////////////////////////
/*
let country = "India",
  continent = "Asia",
  population = 1330000000;

let isIsland = false,
  language;
console.log("isIsland: ", isIsland, typeof isIsland);
console.log("country: ", country, typeof country);
console.log("continent: ", continent, typeof continent);
console.log("population: ", population, typeof population);
console.log("language: ", language, typeof language);
*/
////////////////////////////////////////////////////////////////////////
/*
let age = 30;
age = 31;

const posts = "Https://";
console.log(posts + "39821639176");

let sahraAge = 18;
let jaAge = 90;
console.log(sahraAge > 18);

const isFullAge = sahraAge >= 18;
console.log(isFullAge);

const averageAge = (sahraAge + jaAge) / 2;
console.log(sahraAge, jaAge, averageAge);
*/
//////////////////////////////////////////////////////////////////////////
// Coding  Challange #1
/*
const massMark=78,heightMark=1.69;
const BMIMark = massMark / heightMark *heightMark;

let massJhon=92,heightJhon=1.95;
const BMIJhon=massJhon/heightJhon *heightJhon;

let markHeigherBMI= BMIMark>BMIJhon;
console.log(BMIMark,BMIJhon,markHeigherBMI);
*/
/////////////////////////////////////////////////////////////////////////
// String and template literals
/*
const firstName = "Jayendra";
const job = "student";
const birthyear = 2002;
const year = 2023;

const jayndra =
  "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job + "!";
console.log(jayndra);

const jayndraNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!!`;
console.log(jayndraNew);

console.log(`just a regular string....`);

console.log(`multi
line
string
using
backsticks`);

console.log("can also be done \n this way due to a bug in javaScript...");
*/
////////////////////////////////////////////////////////////////////////////
//if-else statement
// const age = 8;
// if (age >= 18) console.log(`you are ready to get a driving licence🚓...`);
// else {
//   console.log(
//     `you are not eligible, you can apply again after: ${18 - age} years`
//   );
// }
/////////////////////////////////////////////////////////////////////////////\
//challange#2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if(BMIMark>BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }
// else{
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }
////////////////////////////////////////////////////////////////////////////////
// Type conversion and coesion

// let inputyear = "2002";
// console.log(Number(inputyear), inputyear);
// console.log(Number(inputyear) + 21);
// let firstName = Number("Jayendra vardhan Singh");
// console.log(firstName);
// console.log(typeof firstName);
// //coesion
// console.log(
//   "hey! I am jayendar vardhan Singh and i was born in " + inputyear + "."
// );
// console.log("23" - "10" - 3);
// console.log("53" - "30" - "3");
// console.log("23" + "10" + 3);
// console.log("20" / 10);
// console.log("20" * 10);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

//////////////////////////////////////////////////////////////////////////////////
//equality(==)vs(===)

// const age = prompt(`enter your age: `);

// console.log(age);
// console.log(typeof age);
// if (age == 18) {
//   console.log(`you are here by the help of type coesion`);
// }
// if (age === 18) {
//   console.log(`this is strict equality check`);
// }

/////////////////////////////////////////////////////////////////
// 3 + 4; ///expression
// 345; ///expression
// true && true; //expression

// if (23 > 10) {
//   const str = "23 is bigger"; //as a whole is statement, while the an expression in that
// }
/////////////////////////////////////////////////////////
//Ternary operator
//const age = prompt(`Enter your age`);
//age >= 21
//   ? console.log(`you can have wine sir🍷`)
//   : console.log(`you can only have water💧`);

// console.log(
//   `I like to have, ${age >= 21 ? `wine` : `oh! Sorry i am under age.`}`
// );

// const x = 23;

// if (x === 23) console.log(`hey!!`);
//////////////////////////////////////////////////////
//challange #3
// const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(88+91+110)/3;

// if(scoreKoalas>scoreDolphins){
//     console.log(`Koalas win the trophy`);
// }
// else if(scoreDolphins>scoreKoalas){
//     console.log(`Dolphins win the trophy`);
// }
// else{
//     console.log(`Both win the trophy`);
// }

////////////////////////////////////////////////////////////////
//challange #4
// const bill = 275;

// let tip = bill>=50 && bill<=300 ? (bill*15)/100 : bill*0.2 ;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

///////////////////////////////////////////////////////////////////
// strict mode
// "use strict";
// let tests = true;
// let licence = false;
// if (tests) licence = true;
// if (licence) console.log(`you can drive now :D`);
////////////////////////////////////////////////////////////////
//Functions
// function print() {
//   console.log(`hello i am jayendra :D`);
// }

// print();
// print();

// function fruit(apple, oranges) {
//   const juice = `🥤here is your juice of ${apple} pineapple and ${oranges} orange, have a nice day:D`;
//   return juice;
// }
// let apple = prompt(`Enter no. of pineapples you want in your juice`);
// let oranges = prompt(`Enter no of oranges you want in your juice`);
// console.log(fruit(apple, oranges));
///////////////////////////////////////////////////////////////
// function declaration: it can also be called before defining the function

// const age1 = calAge(2002);

// function calAge(birthyear) {
//   return 2024 - birthyear;
// }

// //function expression
// const calAge2 = function (birthyear) {
//   return 2024 - birthyear;
// };
// const age2 = calAge2(2001);
// console.log(age1, age2);

// const currentyear = function () {
//   console.log(2024);
// };

// currentyear(); // Figured: ()=>void
////////////////////////////////////////////////////////////////
//Arrow function

// const calAge3 = (birthyear) => 2024 - birthyear;
// const age3 = calAge3(2000);
// console.log(age3);

// //arrow functions with more variables
// const yearsUntilRetirenment = (birthyear, firstName) => {
//   const age = 2024 - birthyear;
//   const retirenment = 65 - age;

//   return `${firstName} retires in ${retirenment} years.`;
// };

// console.log(yearsUntilRetirenment(1990, `jayendra`));
// console.log(yearsUntilRetirenment(2000, 'bob'));
///////////////////////////////////////////////////////////////////////
//function calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, oranges) {
//   const applepieces = cutFruitPieces(apple);
//   const orangespieces = cutFruitPieces(oranges);

//   const juice = `🥤here is your juice of ${applepieces} pieces of apple and ${orangespieces} pieces of orange, have a nice day:D`;
//   return juice;
// }

// console.log(fruitProcessor(2, 4));
////////////////////////////////////////////////////////////
//challange #5
// function checkwinner(avgDolphins, avgKoalas) {
//   if (avgKoalas > avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// }

// const calcAverage = function (a, b, c) {
//   return (a + b + c) / 3;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// checkwinner(scoreDolphins, scoreKoalas);
////////////////////////////////////////////////////////////////
//Array in JavaScript

// const friend1 = 'Bob';
// const friend2 = 'bobby';
// const friend3 = 'bottle';

// const friends = ['bob', 'bobby', 'peter', 'pan'];
// console.log(friends);

// const years = new Array(2000, 2001, 2002, 2003, 2004);

// console.log(friends[0]);
// console.log(friends[3]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[3] = 'JvS';
// console.log(friends);
// //In javaScript arrays can hold values of different types at the sane types
// const firstName = 'Jayendra';
// const jayendra = [firstName, 'vardhan Singh', 2024 - 2002, 'student', friends];
// console.log(jayendra);

// //exercise
// const calAge = (birthYear) => {
//   return 2024 - birthYear;
// };

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// console.log(age1, age2);

// const ages = [calAge(years[0]), calAge(years[1])];
// console.log(ages);
/////////////////////////////////////////////////////
// Basic of arrays

// //push adds element to the end of the array
// const friends = ['bob', 'bobby', 'peter', 'pan'];
// const newlength = friends.push('kat');
// console.log(friends);
// console.log(newlength);

// //unshift adds element to the bigning of the array
// friends.unshift('jhon');
// console.log(friends);

// //pop is use to delete an element from the last of the array and return it
// const poppedelement = friends.pop();
// console.log(friends);
// console.log(poppedelement);

// //shift is use to remove an element from the starting of the array
// const shiftedelement = friends.shift();
// console.log(friends);
// console.log(shiftedelement);

// console.log(friends.indexOf('bobby'));
// console.log(friends.indexOf('stefen'));

//friends.push(23);
// console.log(friends.includes('JvS'));
//console.log(friends.includes('23'));

// if(friends.include('Peter')){
//   console.log(`you have a friend called Peter.`);
// }
///////////////////////////////////////////////////
//challange #6

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[3]];
///////////////////////////////////////////////////////////////
//objects: data-structure
// const jayendraArray = [
//   'jayendra',
//   'Singh',
//   21,
//   'student',
//   ['bob', 'bobby', 'peter', 'pan']
// ];

// const jayendra = {
//   firstName: 'Jayendra',
//   lastName: 'Singh',
//   age: 21,
//   job: 'student',
//   friends: ['bob', 'bobby', 'peter', 'pan']
// }

// console.log(jayendra);
// console.log(jayendra.lastName);
// console.log(jayendra['lastName']);

// const nameKey = 'Name';
// console.log(jayendra[`first` + nameKey]);
// console.log(jayendra[`last` + nameKey]);

// //bracket notation for checking confition
// const intrestedin = prompt(`enter a property`);
// if (jayendra[intrestedin]) {
//   console.log(intrestedin, jayendra[intrestedin]);
// } else {
//   console.log(`wrong request`);
// }

// //Adding new property
// jayendra.location = 'india';
// jayendra['money'] = 5000;
// console.log(jayendra);

// //challange
// //`jayendra has number of friends, and his best friend is called first element of the friend list`

// console.log(`${jayendra.firstName} has ${jayendra.friends.length} friends, and his best friend is ${jayendra.friends[0]}`);
//////////////////////////////////////////////////////////////////
//Object methods

// const jayendra = {
//   firstName: 'Jayendra',  //key: value pair
//   lastName: 'Singh',
//   birthYear: 2002,
//   job: 'student',
//   friends: ['bob', 'bobby', 'peter', 'pan'],
//   hasDrivingLicence: true,

//   // calAge: function (birthYear) {
//   //   return 2024 - birthYear;
//   // }

//   // calAge: function () {
//   //   //console.log(this);
//   //   return 2024 - this.birthYear;
//   // }

//   calAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     console.log(`${this.firstName} is a ${this.calAge}-year old ${this.job},and he has ${this.hasDrivingLicence ? `a` : `no`} driver's licence`)
//   }
// }

// //console.log(jayendra.calAge(jayendra.birthYear));
// //console.log(jayendra['calAge'](jayendra.birthYear));

// console.log(jayendra.calAge());
// console.log(jayendra.age);
// console.log(jayendra.age);
// console.log(jayendra.age);

// //challange
// //eg string: "jayendra is a age-year old job, and he has a/no driver's licence"
// console.log(jayendra.getSummary());
///////////////////////////////////////////////////
//challange #7
// const mark = {
//   fullName: `Mark Miller`,
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }
// const john = {
//   fullName: `John Smith`,
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }
// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`);
// }
// else {
//   console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
// }
////////////////////////////////////////////////////////////////
//For loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
// }

// const jayendraArray = [
//   'jayendra',
//   'Singh',
//   21,
//   'student',
//   ['bob', 'bobby', 'peter', 'pan']
// ];

// const types = [];

// for (let i = 0; i < jayendraArray.length; i++) {
//   console.log(jayendraArray[i], typeof jayendraArray[i]);
//   //types[i] = typeof jayendraArray[i];
//   types.push(typeof jayendraArray[i]);
// }
// console.log(types);

// const years = [2000, 2001, 2002, 2003, 2004];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages);

// // Continue and Break
// console.log(`------ONLY STRINGS-------`)
// console.log(`----USE OF CONTINUE-----`)
// for (let i = 0; i < jayendraArray.length; i++) {
//   if (typeof jayendraArray[i] !== 'string') continue;
//   console.log(jayendraArray[i], typeof jayendraArray[i])
// }

// console.log(`------TILL NUMBER-------`)
// console.log(`----USE OF BREAK-----`)
// for (let i = 0; i < jayendraArray.length; i++) {
//   if (typeof jayendraArray[i] == 'number') break;
//   console.log(jayendraArray[i], typeof jayendraArray[i])
// }

// //looping backwards
// const jayendraArray = [
//   'jayendra',
//   'Singh',
//   21,
//   'student',
//   ['bob', 'bobby', 'peter', 'pan']
// ];

// for (let i = jayendraArray.length - 1; i >= 0; i--) {
//   console.log(i, jayendraArray[i]);
// }

// //loop inside a loop

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------- starting exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}:Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }
///////////////////////////////////////////////////
//While loop in java script

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 1) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 1) console.log(`Loop is about to end...`);
// }
//////////////////////////////////////////////////////
//challange #8 Last of the basic

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [], totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(bills, tips, totals);
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// }

// console.log(calcAverage(totals));

//////////////////////////////////////////////////////////////////
// basics over