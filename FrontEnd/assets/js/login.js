// Déclaration des variables
const form = document.querySelector("form");
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
const messageError = document.querySelector("#contact-2 p");
const login = document.querySelector("#login");
const containerFilter = document.querySelector("#container_filter");
//  console.log(email, password, form, messageError);

//ne pas recharger la page
form.addEventListener('submit',(event)=>{
    event.preventDefault();
   const data = {email:email.value, password:password.value};

   
    postJSON(data)
})

//récupération de l'authentification 

    async function postJSON(data) {
        try {
          const response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          const token = result.token;
          localStorage.setItem("token",token);
          console.log("Success:", result);

          window.location.href="index.html";
          containerFilter.style.display = "none";
          
        } catch (error) {
          console.error("Error:", error);
          alert("erreur")
        }
      }


      

     


// à finir