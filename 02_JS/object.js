// singleton
// 


// object literals


const mySym = Symbol("Key1")

const JsUser = {
    name: "Narender",
    "full name": "Narender Singh",
    [mySym]: "mykey1",

    age: 19,
    location: "Matura",
    email: "narender@ns.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser,mySym);



JsUser.email = "narender@ns.com"
// Object.freeze(JsUser)
JsUser.email = "narender@google.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

