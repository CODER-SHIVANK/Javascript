function sayMyName(){
console.log("s");
console.log("h");
console.log("i");
console.log("v");
console.log("a");
console.log("n");
console.log("k");
}
sayMyName();


function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 5);


function addtwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
result = addtwoNumbers(2, 5);
console.log(result);


function addtwonumbers(number1, number2){
    return number1 + number2;
}
console.log(addtwoNumbers(2, 5));


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("shivank"));
console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500));


const user = {
    username : "shivank",
    price : 199
}
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handelObject(user);


function handelobject(typeobject){
    console.log(`Username is ${typeobject.username} and price is ${typeobject.price}`);
}
handelobject({
    username : "dhananjay siloth",
    price : 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(myNewArray));


function returnsecondValue(setArray){
    return setArray[1]
}
console.log(returnsecondValue([100, 200, 300, 400, 500]));