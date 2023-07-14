/* -------------------------------------------------------------------------- */
/*                                    find                                    */
/* -------------------------------------------------------------------------- */

const users = [
    {
        id:1,
        name: "Quentin"
    },
    {
        id:2,
        name: "Tibhaut"
    },
    {
        id:3,
        name: "Vincent"
    },
    {
        id:4,
        name: "Mattéo"
    },
    {
        id:5,
        name: "Chehbastien"
    },
]

let user;

/* ---------------------------- ancienne methode ---------------------------- */
for(var i = 0; i < users.length ; i++){
    if(users[i].name === "Chehbastien"){
        user = users[i]
        break;
    }
}

/* ------------------------------- new methode ------------------------------ */

let user2 = users.find(function(user){
    return user.name === "Mattéo"
})
console.log(user2);


/* -------------------------------------------------------------------------- */
/*                                  findIndex                                 */
/* -------------------------------------------------------------------------- */

let userIndex = users.findIndex(function(user){
    return user.name === "Mattéo"
})

console.log(userIndex);


console.log(mdr + " toto ")

console.log(`${mdr} ptdr je suis ${user}`);