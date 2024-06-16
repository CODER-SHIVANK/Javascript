// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 1, 23, 5, 3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let createdDate = new Date("01-14-2023")
console.log(createdDate.toLocaleString());
 
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());

