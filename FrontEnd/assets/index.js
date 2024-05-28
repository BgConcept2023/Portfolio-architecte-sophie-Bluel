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
    categories = await response.json();

    afficherCategorie();
    console.log(categories);

}
loadCategories()
//Création des balises et affichage des images en js

 function affichageGallery(filterWorks){  
    baliseGallery.innerHTML = "";
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
function afficherCategorie(){
    for(let index = 0; index < categories.length; index++){
        const containerFilter = document.getElementById("container__filter");
        const  baliseButtonAll = document.createElement("button");
        const  baliseButton = document.createElement("button");
        baliseButton.classList.add("btn_choose");
        baliseButton.innerHTML = categories[index].name;

        containerFilter.appendChild(baliseButton);

        baliseButton.addEventListener("click", ()=>{
            const categId = categories[index].id;
            const filterWork = works.filter(work=>categId === work.categoryId)
            affichageGallery(filterWork)
            console.log(categories[index]);
        })


    }
}

