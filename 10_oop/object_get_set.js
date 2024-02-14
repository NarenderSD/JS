const User = {
    _email: 'n@ns.com',
    _password: "thakur",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}



const tea = Object.create(User)
console.log(tea.email);