// Déclaration des variables
const form = document.querySelector("form");
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
const messageError = document.querySelector("#contact-2 p");
const login = Document.querySelector("#login");
//  console.log(email, password, form, messageError);

//ne pas recharger la page
form.addEventListener('submit',(event)=>{
    event.preventDefault();
})

//récupération de l'authentification 
async function loadAuthentification(authentification){

    const response = await fetch("http://localhost:5678/api/users/login");
    authentification = await response(body);

};

// à finir