
const containerGlobal = document.createElement("aside");
containerGlobal.className = "container_global";

const modalPhotos = document.createElement("div");
modalPhotos.className = "modal_photos";

const elementH2 = document.createElement("h2");
elementH2.textContent ="Galerie photos";

const faSolid = document.createElement("i");
faSolid.className = "fa-solid fa-xmark";
const miniGallery = document.createElement("div");
miniGallery.className = "mini-galerie";

const  btnAjout = document.createElement("button");
btnAjout.className = "btn_submit";
btnAjout.type = "submit";
btnAjout.textContent = "Ajouter une photo";

console.log(modalPhotos, faSolid, elementH2, btnAjout);

//Insertion des élemnts dans le html

document.body.appendChild(containerGlobal);
containerGlobal.appendChild(modalPhotos);
modalPhotos.appendChild(faSolid);
modalPhotos.appendChild(elementH2);
modalPhotos.appendChild(miniGallery);
modalPhotos.appendChild(btnAjout);

//affichage modal au click
const containerAjout = document.querySelector(".container_global");
const buttonEdit = document.querySelector("#btn_Click");
const buttonAjout = document.querySelector(".btn_submit");


buttonEdit.addEventListener("click",()=>{
   containerGlobal.style.display = "flex";
console.log("ok")
})
// fermer la modale
