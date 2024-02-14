class User {
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`Username: ${this.username}`);      
    }
    
    
    static createId(){
        return `123`
    }

}

const narender = new User("Thakur")
// console.log(narender.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@ns.com")
console.log(iphone.createId());

