let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 24)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());


let newDate = new Date()
console.log(new Date);

console.log(newDate.getMonth());

newDate.toLocaleString('default',{ 
    weekday: "long"
})