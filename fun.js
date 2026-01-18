//var c = 300
//let a = 300

   
   // if (true){
        let a = 10
        const b = 20
     //    console.log("INNER: ", a)

    //}
    



//console.log(a)
//console.log(b)
//console.log(c)**/



function one(){
    const username = "sanjana"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

/**if (true) {
    const username = "sanjana"
    if (username === "sanjana") {
        const website = "youtube"
        console.log(username + website); 
    }
    //console.log(website);**/

//console.log(username);

//################# intresting #################//

console.log(addone(6))
function addone(num){
    return num + 1
}

addTwo(6)
const addTwo = function(num){
    return num + 2
}