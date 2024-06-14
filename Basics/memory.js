// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "shivanksilotdotcom"

let anotherName = myYoutubename
anotherName = "codeaurchai"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    name : "shivank silot",
    age : 21
}
let userTwo = userOne
userTwo.name = "dhananjay silot"

console.log(userOne);
console.log(userTwo);

// It means that stack give the copy of that value and heap gives the reference of that value.