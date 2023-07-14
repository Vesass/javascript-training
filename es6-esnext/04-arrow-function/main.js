const prenoms =["Matteo", "Thibault", "Sofiane","Quentin"];

// const fullPrenoms = prenoms.map(function(prenom){
//     return prenom + "Van Lerberg"
// });

const fullPrenoms = prenoms.map(prenom => prenom + "Van Denberg");

let dupont = "dupont"
const fullPrenoms2 = prenoms.map( prenom => {
    return prenom + dupont
})