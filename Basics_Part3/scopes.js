let a = 100;
if(true){
    let a = 10;
    console.log(a);  
}
console.log(a);  

const b = 200;
if(true){
    const b = 20;
    console.log(b);  
}
console.log(b); 

var c = 300;
if(true){
    var c = 30;
    console.log(c);  
}
console.log(c);  


function one(){
    const username = "shivank"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
one()


if(true){
    const username = "shivank"
    if(username === "shivank"){
        const website = " youtube"
        console.log(username + website);
    }
}


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(value){
    return value + 1;
}

//console.log(addTwo(5));
const addTwo = function(value){
    return value + 2;
}
console.log(addTwo(5));