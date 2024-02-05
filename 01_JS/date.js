// Date 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23, 5, 7, 9)
// console.log(myCreatedDate);
let myCreatedDate  = new Date("01-14-2024")
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());


let newData = new Date()
console.log(newData);
console.log(newData.getMonth() + 1);
console.log(newData.getDay());


newData.toLocaleString('default', {
    weekday: "long",
    
})