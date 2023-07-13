const datas = [
    {
        "src" : "images/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert"
    },
    {
        "src" : "images/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures"
    },
    {
        "src" : "images/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette"
    },
    {
        "src" : "images/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux"
    },
    {
        "src" : "images/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diable rouge"
    },
    {
        "src" : "images/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose"
    }
];

const thumbnails = document.getElementById("thumbnails");
const preview = document.getElementById("preview");

for(let item of datas){
    const monster = document.createElement("img");

    monster.src = item.src;
    monster.alt = item.alt;
    monster.title = item.title;
    monster.addEventListener("click", displayMonster)
    thumbnails.appendChild(monster);

}

function displayMonster(event){
    preview.innerHTML = ""
    const monster = event.target;
    const bigMonster = document.createElement("img");
    bigMonster.src = monster.src;
    bigMonster.alt = monster.alt;
    bigMonster.title = monster.title;

    const title = document.createElement("h2");
    title.innerText = monster.title;


    const deleteButton = document.createElement("button");

    deleteButton.innerText = "X";
    deleteButton.style.display="block";
    deleteButton.style.margin="0 auto"
    deleteButton.addEventListener("click", function(){
        preview.innerHTML = "";
    })

    preview.appendChild(title)
    preview.appendChild(bigMonster)
    preview.appendChild(deleteButton)


}

