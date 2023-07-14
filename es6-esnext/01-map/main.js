/* -------------------------------------------------------------------------- */
/*                                    .map                                    */
/* -------------------------------------------------------------------------- */
// contenu + alt + shift + x

/* -------------------------- methode de dinosaure -------------------------- */
// conteu + alt + x

/* -------------------------------------------------------------------------- */
// alt + y

const numbers = [2, 4, 5, 7, 9, 3]
// let doubleNumbers =[];

// for(var i = 0; i < numbers.length; i++){
//     doubleNumbers.push(numbers[i]*2)
// }

// console.log(doubleNumbers);


/* -------------------------- methode de superhero -------------------------- */

const doubleNumbers = numbers.map(function(nbr){
    return nbr*2;
})
console.log(doubleNumbers);


/* -------------------------- methode de dinosaure -------------------------- */

const names = ["Rachida", "Saad", "Sofiane","Houssine", "Anahid"];

// const fullName = [];

// for(let name of names){
//     fullName.push(name + " Merzouk");
// }
// count = 0;

// while(count < names.length){
//     fullName.push(names[count]);
//     count = count + 1;
// }


// console.log(fullName);

/* -------------------------- methode de passionné optimal -------------------------- */

const fullName = names.map(function(name){
    return name + " Merzouk"
})

console.log(fullName);

// Exo 

// créer un nouvel array se nommant heights et qui ne contiendra que les hauteurs de chaque objet de images
//expectation : ["34px", "76px", "3px", "94px"]

const images = [
    {height: "34px", width: "45px", color: "chartreuse"},
    {height: "76px", width: "20px", color: "burlywood"},
    {height: "3px", width: "47px", color: "red"},
    {height: "94px", width: "43px", color: "yellow"},
]

// EXo 

// réaliser une fonction qui met un mot sur deux en majuscule 

// console.log(swapWord("Bonjour je suis Herve et je mange du pain"))
// console.log(swapWord("BONJOUR J AIME LE PAIN"))


// function swapWord(line){
//     const lineSPlitted = line.split(" ");
//     const swappedLine = lineSPlitted.map(function(word, index){
//         if(index %2 === 0 ){
//             return word.toUpperCase()
//         }else {
//             return word.toLowerCase();
//         }
//     })
//     const newLine =  swappedLine.join(" ");
//     return newLine;
// }

/* ------------------------- autre manière de faire ------------------------- */

// function swapWord(line){
//     return line.split(" ").map(function(word, index){
//         return index%2 ? word.toUpperCase() : word.toLowerCase();
//     }).join(" ");
// }

/* ------------------------- autre manière de faire ------------------------- */

// function swapWord(line){
//     return line.split(" ").map((word, index) => index%2 ? word.toUpperCase() : word.toLowerCase().join(" "));
// }

/* ------------------------- autre manière de faire ------------------------- */

const swapWord = (line) => line.split(" ").map((word, index) =>  index%2 ? word.toUpperCase() : word.toLowerCase()).join(" ");
console.log(swapWord("Bonjour je suis Herve et je mange du pain"))
console.log(swapWord("BONJOUR J AIME LE PAIN"))