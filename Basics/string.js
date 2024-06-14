const name = "shivank silot"
const collName = "Meerut Institute Of Engineering And Technology"

// console.log(name + " " + repoCount + " Value");

// Best way to concatinate the values
console.log(`Hello, My name is ${name} and I have done my engineering from ${collName}`);

const gameName = new String('dhananjay silot')
console.log(gameName[0]);
console.log(gameName.indexOf('y'));
console.log(gameName.toUpperCase());
console.log(`Hello, My name is ${gameName}`);

const anotherString = gameName.substring(0, 4)
console.log(anotherString);

const newString = "   shivank silot   "
console.log(newString);
console.log(newString.trim());

const url = "https://shivank.com/shivank%20silot"
console.log(url.replace('%20', '-'));

console.log(url.includes('harsh'));

console.log(gameName.split(' '))