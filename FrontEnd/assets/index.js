//Variables générales
let works = []; //tableau

//Récupérationd du ripos sur swagger avec la fonction loadWorks
async function loadWorks(){
    const response = await fetch("http://localhost:5678/api/works");
   let works = await response.json();
    console.log(works);
}
loadWorks();

//Création des balises et affichage des images.
