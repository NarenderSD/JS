class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}narender`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const narender = new User("n@narender.com", "Thakur ji")
console.log(narender.password);