const user = {
    username: "Narender",
    loginCount: 6,
    signIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);     
console.log(user.getUserDetails());
console.log(this);



// const promiseOne = new Promise()
// const date = new 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welocom ${this.username}`);
    }

    return this

}


const userOne = User("Narender", 21, true)
const userTwo = new User("Thakur", 108, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
