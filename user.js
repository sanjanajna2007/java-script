const muSym = Symbol("key1")
const JsUser = {
    name: "sanjana",
    "full name": "sanjana halemani",
    mySym: "myKey1",
    age: 18,
    location: "mangalore",
    email: "sanjana@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)


JsUser.email = "sanjana@queen.com"
Object.freeze(JsUser)
JsUser.email = "sanjana@help.com"
console.log(JsUser);
JsUser.greeting = function(){
    console.log('hello Js User, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())