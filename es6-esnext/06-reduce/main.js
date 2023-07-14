const numbers = [10, 20, 30];
let somme = 0;

for(let i = 0; i < numbers.length; i++ ){
    somme += numbers[i];
};

console.log(somme);

const somme2 = numbers.reduce((total, nbr)=> {
    return total + nbr
}, 0);

// const listNamers = friends.reduce((list, friend)=>{
//     list.push(friend.name);
//     return list
// }, [])


const fruits = ["banane", "cerise", "pomme", "orange", "banane","pomme", "ananas", "cerise","melon","pomme","pomme","pomme","figue"]

// sortie {"banane" :2, "cerise": 2 ... }

const resume = fruits.reduce((panier, fruit)=> {
    // if(panier[fruit]){
    //     panier[fruit] ++
    // }else {
    //     panier[fruit] = 1
    // }
    // return panier

    panier[fruit] ? panier[fruit] ++ : panier[fruit] = 1;
    return panier
},{})


console.log(resume);