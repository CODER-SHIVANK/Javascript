const user = {
    username : "shivank",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();
console.log(this);


function chai(){
    let username = "shivank"
    console.log(this.username);
}
chai();

const chaiSecond = () => {
    let username = "shivank"
    console.log(this.username);
}
chaiSecond();

// Explict return 
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

// Implicit return 
const AddTwo = (num1, num2) => (num1 + num2);
console.log(AddTwo(3, 4));
const  printObject = () => ({username : "shivank silot"});
console.log(printObject());