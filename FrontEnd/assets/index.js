let works = [];

async function loadWorks(){
    const response = await fetch("http://localhost:5678/api/works");
   let works = await response.json();
    console.log(works[1]);
}
loadWorks();