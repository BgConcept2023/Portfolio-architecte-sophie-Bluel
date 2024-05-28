//Variables générales
let works = []; //tableau
let categories = [];
const baliseGallery = document.querySelector(".gallery");//sélection de la classe gallery

//Récupérationd du ripos sur swagger avec la fonction loadWorks
async function loadWorks(){
   const response = await fetch("http://localhost:5678/api/works");
   let works = await response.json();
    
    //Affichage
    affichageGallery(works);
}
loadWorks();

// Récupération des catégories sur swagger
async function loadCategories(){
    const response = await fetch("http://localhost:5678/api/categories")
    let categories = await response.json();

    console.log(categories);
}
loadCategories()
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

    }
}


//Créations des boutons filtres

const btnAll = document.getElementById("filterUn").addEventListener("click", ()=>{
    console.log("ok,ça marche")
});
const btnDeux = document.getElementById("filterDeux").addEventListener("click",()=>{
    console.log("ok, ça fonctionne")
});
const btnTrois = document.getElementById("filterTrois").addEventListener("click", ()=>{
    console.log("oh top!")
});
const btnQuatre = document.getElementById("filterQuatre").addEventListener("click", ()=>{
    console.log("Les clicks fonctionnent!")
});

