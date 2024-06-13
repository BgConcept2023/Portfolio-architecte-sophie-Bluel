
//Variables générales
let works = [];  //tableau
let categories = [];

//Récupération des sélecteurs
const baliseGallery = document.querySelector(".gallery");//sélection de la classe gallery
const containerFilter = document.getElementById("container_filter");
const buttons = document.querySelectorAll("button");

//Récupérationd du ripos sur swagger avec la fonction loadWorks
async function loadWorks(){
    const response = await fetch("http://localhost:5678/api/works");
    works = await response.json();
    console.log(works);
    
    //Affichage
    affichageGallery(works);
    }
    loadWorks();
    
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
            
            // Récupération des catégories sur swagger
            async function loadCategories(){
                const response = await fetch("http://localhost:5678/api/categories")
                categories = await response.json();
                afficherCategorie();
                
                }
                loadCategories()
                
                
//Créations des boutons filtres
function afficherCategorie(){
    for(let index = 0; index < categories.length; index++){
                        const  baliseButton = document.createElement("button");
                        baliseButton.classList.add("btn_select");
                        baliseButton.innerHTML = categories[index].name;
                        containerFilter.appendChild(baliseButton);
                        
// //filtrage des catégories au click
                baliseButton.addEventListener("click", ()=>{
                    console.log("ok");
                    const categId = categories[index].id;
                    const filterWork = works.filter(work=>categId === work.categoryId)
                    affichageGallery(filterWork);
                    })   
                    
                    }
                    console.log(buttons)
                    console.log(categories);
};






