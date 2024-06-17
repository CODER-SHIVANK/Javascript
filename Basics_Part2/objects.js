// Singleton 

// Objects Literals

const mySymbol = Symbol("key1")

const JsUser = {
    name : "shivank",
    "full name" : "Shivank Silot",
    [mySymbol] : "myKey1",
    age : 18,
    location : "hapur",
    email : "shivank@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);

JsUser.email = "shivank@chatgpt.com";
console.log(JsUser["email"]);
Object.freeze(JsUser);
JsUser.email = "shivank@github.com";
console.log(JsUser);

const JsPerson = {
    name : "dhananjay",
    "full name" : "Dhananjay Siloth",
    [mySymbol] : "myKey1",
    age : 18,
    location : "hapur",
    email : "dhananjay@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
JsPerson.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsPerson.greeting);
console.log(JsPerson.greeting());

JsPerson.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsPerson.greetingTwo());