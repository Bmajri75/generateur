

// url contien le lien du fichier json qui sera utiliser plus bas
const url = "http://graven.yt/citations.json";

// variable contien le path de id name du html
let name = document.getElementById('name');

// chemin de la photo
let avatar = document.getElementById('avatar');

// le chemin vers le text 
let citation = document.getElementById('texte');

// variable qui contien le path du bouton generer du html 
let btnGenerateur = document.getElementById('btn');


//tableau vide pour recuperer les element du Json
let citationJson = [];

// Comment recuperer des donee a partir d'une URL json
fetch(url).then((data) => {
   data.json().then((data) => {
       citationJson = data;

       console.log(citationJson);

   });
})


// function pour changer au click
let updatePage = () => {

    let random = Math.floor(Math.random() * (citationJson.length - 0));
    let randomCitation = citationJson[random];

    name.innerHTML = randomCitation['nom'];
    citation.innerHTML = randomCitation['citation'];
    avatar.setAttribute('src', randomCitation['image']);
}



// cree un evenement au click
btnGenerateur.addEventListener('click', updatePage);
