const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["spiderman", "flash", "batman"]
marvel_heros.push(dc_heros);
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//Spread Operator
const allnew_heros = [...marvel_heros, ...dc_heros]
console.log(allnew_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_Anotherarray = anotherArray.flat(Infinity)
console.log(real_Anotherarray);

console.log(Array.isArray("shivank"));
console.log(Array.from("shivank"));
console.log(Array.from({name : "shivank"}));     // Interesting 

let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));