// Arrays 

const myArr = [5, 3, 7, 4, 2, 1]
console.log(myArr[2]);

// Shallow Copy - A shallow copy of an object is a copy whose properties share the same references
// Deep Copy - A deep copy of an object is a copy whose properties do not share the same references.

const myArr2 = new Array(1, 2, 3, 4, 5, 6)
console.log(myArr2[1]);

// Array Methods 

myArr2.push(7)
myArr2.push(8)
myArr2.pop()
myArr2.unshift(10)
myArr2.shift()
console.log(myArr2);
console.log(myArr2.includes(8));
console.log(myArr2.indexOf(6));

const newArr = myArr2.join()
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr2);
const myn1 = myArr2.slice(1, 3);
console.log(myn1);
console.log("B ", myArr2);

const myn2 = myArr2.splice(1, 3);
console.log(myn2);
console.log("C ", myArr2);