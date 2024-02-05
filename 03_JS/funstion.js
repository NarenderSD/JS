



function myName (){
console.log("N");
console.log("A");
console.log("R");
console.log("E");
console.log("N");
console.log("D");
console.log("E");
console.log("R");


}

// myName()


// function addTwonum(num1, num2){
//     console.log(num1 + num2);
// }

function addTwonum(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

addTwonum(5 , 6)
const result = addTwonum(5, 4)
// console.log("Result: ", result);

function loginUser(username = "Thakur") {
    if (!undefined) {
        // if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
    
}

// console.log(loginUser("Narender"))
// console.log(loginUser())



function calculatecartPrice(...num1) {
    return num1
}

console.log(calculatecartPrice(200, 400,  600, 500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}

handleObject(user)


handleObject({
    username: "Thakur",
    price: 399
})

const myNewArry = [200, 500, 100, 700, 600]

function returnSecondValue(getArray) {
    return getArray[1]
    
}

console.log(returnSecondValue(myNewArry));

console.log(returnSecondValue([2000, 5000, 1000, 7000, 6000]));