/* -------------------------------------------------------------------------- */
/*                                    fetch                                   */
/* -------------------------------------------------------------------------- */


const p = fetch('https://jsonplaceholder.typicode.com/posts ')
console.log(p);

p.then(res => res.json())
.then( res => {
    console.log(res);
    return generateTitle(res);
})


function generateTitle(datas){
    for(let item of datas){
        const li = document.createElement("li");
        li.innerHTML = item.title;
        document.querySelector('ul').appendChild(li);
    }
}


/* ----------------------- créons notre propre promise ---------------------- */

// const promesse = new Promise((resolve, reject)=>{
//     const question = prompt("Entrez votre âge");

//     setTimeout(function(){
//         if(question >= 18){
//             resolve("OK c'est bon, t'es un bon")
//         }else {
//             reject(new Error("Non , t'as pas 18 ans, connard va"));
//         }
//     },2000);
// });


// promesse.then(res => console.log(res)).catch(err => console.error(err));

// console.log("le code continue de s'éxecuter");


/* ---------------------------- cas d'utilisation --------------------------- */

const posts = [
    {title: "J'aime le pain", author: "Quentin Drragon", id:1},
    {title: "S'il pleut pas, c'est qu'il fera beau", author: "Sofiane Socrate", id:2},
    {title: "J'aime les gens ", author: "Mattéo Leroi", id:3},
]

const authors = [
    {name : "Quentin Drragon", twitter: "@QuentinMdr" , bio : "vive les morts"},
    {name : "Sofiane Socrate", twitter: "@Platon4Ever" , bio : "La philosophie ne nous sert à rien"},
    {name : "Mattéo Leroi", twitter: "@Mathias" , bio : "j'adore les gens !"},
]


function getPostById(id){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            const post = posts.find(item => item.id === id);
            // if(post){
            //     resolve(post)
            // }else{
            //     reject(new Error("Post not found"))
            // }
            post ? resolve(post) : reject(new Error("Post not found"));
        },500)
    })
}


function getAuthor(post){
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            const authorDetails = authors.find(item => item.name === post.author);
            if(authorDetails){
                post.author = authorDetails;
                resolve(post)
            }else {
                reject(new Error("Author not found"))
            }
        },1000)
    })
}

getPostById(2).then(res => getAuthor(res))
            .then(res => console.log(res))
            .catch(err => console.error(err));



/* ----------------------------------- exo ---------------------------------- */

// Créer une fonction qui prend comme paramètre un nombre aléatoire entre 1 et 1000 ( généré e njs )
// cette focntion retournera une promesse
// la promesse retournera un reject avec un petit message dans le cas où le nombre aléatoire est compris entre 200 et 450 inclus
// dans le cas contraire , attendez 2000s pour resolve la promesse avec le message suivant : 
// "DRAGON"


const random = Math.round(Math.random()*1000);

function randomNbr(nbr){
    return new Promise((resolve, reject)=> {
        console.log(nbr);
        if(nbr > 250 && nbr <= 450){
            reject(new Error("C est raté"))
        }else {
            setTimeout(()=>{
                resolve("DRAGON")
            }, 2000)
        }
    })
}
randomNbr(random).then(res => console.log(res)).catch(err => console.error(err));


/* ----------------------------------- EXO ---------------------------------- */

// VOus êtes une équpe d'ingénieur et vous venez de trouver un moyen révolutionnaire d'afficher une addtion avecun technologie proche de quantique : la promesse !!!!! 

// créez une fonction qui va prendre un paramètre qui est un nombre et qui retourne une promesse

//  si le nombre dépasse 50 la machine s'emballe et passe dans le reject direcrtement
// si le nombre est inférieur à 50 la machine prend 2000s (settimeout) pour effecteur le calcul incroyable complexe de + 10
// le resultat de l'opération devra être retourné dans le resolve et le reject

// cette opération devra être effectué 5 fois de suite en partant de 20

function numberPromise(nbr){
    return new Promise((resolve,reject)=>{
        if(nbr > 50){
            reject( new Error(nbr + "la machine part en vrille !!"))
        }else {
            setTimeout(()=>{
                resolve(nbr+10)
            },2000)
        }
    })
}

numberPromise(20).then(res => {
    console.log(res);
    return numberPromise(res)
}).then(res => {
    console.log(res);
    return numberPromise(res)
}).then(res => {
    console.log(res);
    return numberPromise(res)
}).then(res => {
    console.log(res);
    return numberPromise(res)
}).catch(err => console.error(err))
