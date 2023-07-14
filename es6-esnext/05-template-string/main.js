const nom = "Nicolas";
const habitation = "grotte";
console.log("Bonjour je suis " + nom + " et j'habite dans une " + habitation);

console.log(`Bonjour je suis ${nom} et j'habite dans une ${habitation}`);

const user = {
    firstName: "Quentin",
    job : "Boulanger",
    city: "Madrid",
    bio : "S'il pleut pas , c'est qu'il fera beau"
}

const markup = `
    <h1>
        ${user.firstName}
        <em>${user.city}</em>
    </h1>
    <p class="toto">
        ${user.job}
    </p>
    <p>
        ${user.bio}
    </p>
`;

document.getElementById("output").innerHTML = markup;

const computers =[
    {name : "Asus", ram : 16},
    {name: "Atari", ram: 1},
    {name: "IBM", ram: 2},
]

const list = `
        <ul>
            ${computers.map(pc => `<li>${pc.name} - ${pc.ram}</li>`).join("")}
        </ul>
`;

const songs = [
    {
        name: "Thriller",
        artist : "Michael Jackson",
    },
    {
        name: "Under pressure",
        artist : "Queen",
        featuring: "David Bowie"
    },
    {
        name: "My heart will go on",
        artist : "Metalica",
    },
    {
        name: "Dying to live",
        artist : "2pac",
        featuring: "Biggie Small"
    },
    {
        name: "Baby",
        artist : "Justin Bieber",
    },
];

// dans html
// output : 
// Thriller - Michael Jackson
// Under pressure - Queen (featuring : David Bowie)
// My heart will go on- Metalica
// Dying to live - 2pac (featuring : Biggie Small)
// Baby - Justin Bieber

// condition ternaire 

// const listSongs = `
//     <ul>
//         ${songs.map(song => `<li>${song.name} - ${song.artist}
//         ${song.featuring ? `(featuring : ${song.featuring})` : ""}</li>`).join("")}
//     </ul>
// `

const getFeaturing = (song) => {
    if (song.featuring){
        return `(featuring : ${song.featuring})`
    }else {
        return ""
    }
}

const listSongs = `
    <ul>
        ${songs.map(song => `<li>${song.name} - ${song.artist}
        ${getFeaturing(song)} </li>`).join("")}
    </ul>
`

