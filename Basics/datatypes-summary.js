// Primitive DataTypes 
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 321658974951263487n

// Reference (Non Primitive) DataTypes 
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "shivank silot",
    age : 22
};

const myFunction = function() {
    console.log("hello world");
}
myFunction();

// Javascript is a dynamically typed language, which means that data types of variables are determined by the value they hold 
// at runtime and can change throughout the program as we assign different values to them.
