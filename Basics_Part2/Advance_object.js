const gitUser = new Object()     // singleton object
const gitPerson = {}              // Non-singleton object 
console.log(gitUser);
console.log(gitPerson);


const tinderUser = {}
tinderUser.email = "shivank@tinder.com"
tinderUser.name = "shivank"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname : {
            firstname : "shivank",
            lastname : "silot"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}
const obj4 = {obj1, obj2}
console.log(obj4);
const obj5 = Object.assign({},obj1, obj2, obj3)
console.log(obj5);
const obj6 = {...obj1, ...obj2, ...obj3}     // Best way to concat object (Spread Operator)
console.log(obj6);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "s@gmail.com"
    },
    {
        id : 3,
        email : "d@gmail.com"
    }
]
console.log(users[2].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "shivank"
}
console.log(course.courseInstructor);

const {courseInstructor : Instructor, price} = course 
console.log(Instructor, price);

// JSON is javascript object notation 