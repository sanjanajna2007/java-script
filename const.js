const user = {
    username: "sanjana",
    price: 878,

    welcomeMessage: function(){
        console.log( '${this.username} , welcome to website');
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log (this)

const chai = () => {
    let username = "sanjana"
    console.log(this);
}

//chai()


/**const addTwo = (num1, num2) => {username: "sanjana"}
console.log(addTwo(3, 4))

const myArray = [2, 3, 4, 5, 6]
myArray.forEach()**/


(function chai(){
    console.log('DB connected');
})();


( (name) => {
    console.log('DB connected two ${name}');

})('sanjana')