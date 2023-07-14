
const badPeoples = [
    {
        "name" : "Quentin",
        "compteur" : 0
    },
    {
        "name" : "Thibault",
        "compteur" : 0
    },
    {
        "name" : "Nicolas",
        "compteur" : 0
    },
    {
        "name" : "Vincent",
        "compteur" : 0
    },
    {
        "name" : "Matteo",
        "compteur" : 0
    },
    {
        "name" : "Seb",
        "compteur" : 0
    },
    {
        "name" : "Sofiane",
        "compteur" : 0
    },
    {
        "name" : "Saad",
        "compteur" : 0
    },
]

const markup = `
    <ul>
        ${badPeoples.map((dude, index)=>{
          return  ` <li>
            <span>${dude.name}</span> 
            <div>
                <button onclick=plus(${index})>+</button><span id="compteur${index}">${dude.compteur}</span><button onclick=moins(${index})>-</button>
            </div>
           </li> `
        }).join("")}
    </ul>
`

document.querySelector(".sortie").innerHTML = markup;

function plus(id){
    badPeoples[id].compteur++;
    document.getElementById(`compteur${id}`).innerHTML = badPeoples[id].compteur;
}
function moins(id){
    badPeoples[id].compteur--;
    document.getElementById(`compteur${id}`).innerHTML = badPeoples[id].compteur;
}