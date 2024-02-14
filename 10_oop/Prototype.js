// let myName = "Narender     "


// console.log(myName.trueLength);


let myHeros = ["Ram", "Krishna", "Shiv"]

let heroPower = {
    Ram: "Ayodhya",
    Krishna: "Mathura",

    getKrishnaPower: function(){
        console.log(`Spidy power is ${this.Krishna}`);
    }
}

Object.prototype.narender = function(){
    console.log(`Narender is Present in all object`);
}


Array.prototype.heyNarender = function(){
    console.log(`Narender Say Hello`);
}

// heroPower.narender()

myHeros.narender()
myHeros.heyNarender()
// heroPower.heyNarender()

// myHeros.narender()



const User ={
    name: "Ram",
    email: "ram@ns.com"
}


const Teacher ={
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
    // __proto__: TeacherSupport
}

// Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUsername = "Chai pi lo    "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Narender".trueLength()
"iceTea".trueLength()

