// Stack (Primitive)
// Heap (Non Primitive)


// let myYoutube: String

let myYoutube = "Narender Code"

let anothername = myYoutube
anothername = "Narender ka Code"

console.log(myYoutube)
console.log(anothername)

//  Heap

let userOne = {
    email: "user@narender.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo,email = "narender@gocula.com"


console.log(userOne.email);
console.log(userTwo.email)
