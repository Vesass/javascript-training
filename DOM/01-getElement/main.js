const div = document.getElementById("toto");

console.log(div);

div.innerText= "Saludos"; 
div.innerHTML = "<h1>Saludos</h1>"

div.style.color = "chartreuse";
// div.style.backgroundColor = "burlywood"
div.classList.add("errors");

const pArray = document.getElementsByTagName("p");
console.log(pArray);

for(let p of pArray){
    p.style.backgroundColor = "chartreuse"
}

const classes = document.getElementsByClassName("test");

console.log(classes);

for( let item of classes){
    item.style.color = "fuchsia"
}

const goat = document.querySelector(".goat");
console.log(goat);

const link = document.querySelectorAll("nav > ul > li .link")
