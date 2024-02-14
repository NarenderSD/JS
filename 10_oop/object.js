function multipleBy5(num){
    return num*5
}


multipleBy5.power = 2

console.log(multipleBy5);   
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createuser(username, score){
    this.username = username
    this.score = score
}


createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createuser("chai", 25)
const tea = createuser("tea", 75)

chai.printMe()







