let btnDeco = document.querySelector("#deconnexion")
let nomUser = document.querySelector(".nom")
let prenomUser = document.querySelector(".prenom")
let emailUser = document.querySelector(".email")



function deconnexion(){
    sessionStorage.clear("session")
    const yy = confirm("voulez vous deconnecter")
        if(yy) {
            window.location.href="../index.html"
        }
}

btnDeco.addEventListener("click",(e)=>{
    e.preventDefault()
    deconnexion()
})



sessionStorage.getItem("session")

const infoUser = JSON.parse(sessionStorage.getItem("session"))

console.log(infoUser);

nomUser.textContent = infoUser.nom
prenomUser.textContent = infoUser.prenom
emailUser.textContent = infoUser.email

