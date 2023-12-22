const user = document.querySelector("form")


user.addEventListener("submit",async (e)=>{
e.preventDefault()

const nom = document.querySelector(".nom").value ;
const prenom = document.querySelector(".prenom").value ;
const email = document.querySelector(".email").value ;
const motDePasse = document.querySelector(".motDePasse").value ;

const body ={
    nom : nom,
    prenom : prenom,
    email: email,
    motDePasse : motDePasse,
};

let message = document.querySelector(".alert")

try{
    const response = await fetch ("http://localhost:3000/api/users",{
        method : "POST",
        headers : {
            "content-type":"application/json"
        },
        body : JSON.stringify(body)
    })
    if(!response.ok){
        const message = "Error with Status Code: " + response.status;
        throw new Error(message);
    }

    const data = await response.json()
    console.log(data);

    if(data.statut === true){
        window.location.href= "./connexion.html"
    }

}catch (error){
    console.log("Error :" + error.message);
}
})