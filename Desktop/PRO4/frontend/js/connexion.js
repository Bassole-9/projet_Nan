let user = document.querySelector("form")
user.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let email = document.querySelector(".email").value ;
    let motDePasse = document.querySelector(".motDePasse").value ;


    const body ={
        email : email,
        motDePasse : motDePasse
    }

    try{
        const response = await fetch ("http://localhost:3000/api/users/login",{
            method : "POST",
            headers :{
                "content-type": "application/json"
            },
            body : JSON.stringify(body)
        })
        if(!response.ok){
            const message = "Error with Status Code : " + response.status;
            throw new Error (message)
        }

        const data = await response.json()
        console.log(data);

        if(data.statut === true){
            sessionStorage.setItem("session", JSON.stringify(data.message))
            window.location.href ="./accueil.html"
        }

    }catch(error){
        console.log("Error :" + error.message)
    }












})