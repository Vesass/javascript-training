const ages = [15, 25, 35, 45, 55, 65 , 75, 84];

/* ----------------------------- methode de dino ---------------------------- */
const filteredAges = [];

for(var i = 0; i < ages.length; i++){
    if(ages[i] > 66){
        filteredAges.push(ages[i]);
    }
}


/* -------------------------- methode de passionné -------------------------- */

const filteredAges2 = ages.filter(function(age){
    return age > 66;
})
console.log(filteredAges2);

/* ----------------------------------- EXO ---------------------------------- */

const numbers = [12, 4589, 113, 542, 43, 22, 18,34,2];

// filtrer les nombres paires


const filteredNumbers = numbers.fitler(function(nbr){
    return !(nbr%2)
})

console.log(filteredNumbers);

const pairs = numbers.filter(function(pair){
    return pair%2  == 0
})
console.log(pairs);