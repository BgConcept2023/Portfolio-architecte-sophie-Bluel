//Variables générales
let works = []; //tableau

const baliseGallery = document.querySelector(".gallery");//sélection de la classe gallery

//Récupérationd du ripos sur swagger avec la fonction loadWorks
async function loadWorks(){
   const response = await fetch("http://localhost:5678/api/works");
   let works = await response.json();
    
   console.log(works);
    
    //Affichage
    affichageGallery(works);
}
loadWorks();

//Création des balises et affichage des images.

function affichageGallery(filterWorks){  
    for(let index = 0; index < filterWorks.length; index++ ){

const baliseFigure = document.createElement("figure");
const baliseImage = document.createElement("img");
const baliseFigcaption = document.createElement("figcaption");

baliseGallery.appendChild(baliseFigure);
baliseFigure.appendChild(baliseImage);
baliseFigure.appendChild(baliseFigcaption);

baliseFigcaption.innerHTML = filterWorks[index].title;
baliseImage.src = filterWorks[index].imageUrl;

console.log(baliseGallery);
console.log(baliseFigure);


    }
}