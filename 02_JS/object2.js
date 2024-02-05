// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "2024ram"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const ytUser = {
    email: "narender@yt.com",
    fullname: {
        userfullname: {
            firstname: "Narender",
            lastname: "Singh"
        }
    }

}


// console.log(ytUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
    {
        id: 1,
        email: "n@gamil.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedId'));




const course = {
    coursename: "js in hindi",
    price: "9999",
    courseInstructor: "Narender"
}


const {courseInstructor: instructor} = course


console.log(instructor);

