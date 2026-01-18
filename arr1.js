const myArr = [1, 2, 3, 4, 5, 6, 7]

const myHeros = ["shaktiman", "nagraaaj" ]

const myArr2 = new Array(1, 2, 3, 4) 

console.log(myArr[0]);
console.log(myHeros[0]);

myArr.push(6)
console.log(myArr);
console.log(myArr.pop);

myArr.unshift(9)
console.log(myArr.indexOf(3));

//console.log(typeOfnewArr);

console.log("A", myArr);

const myn1 = myArr.splice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);

console.log(myn2);