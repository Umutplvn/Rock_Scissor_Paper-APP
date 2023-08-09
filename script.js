
//* --------------- Selectors --------------- *//


const selectionArticle = document.querySelector(".selection")

let yourChoiceDiv= document.getElementById("your-choice")
let userSelectImg = document.createElement("img")




selectionArticle.addEventListener("click", (e)=>{
    console.log(e)

    if(e.target.id){
        userSelectImg.src=`./assets/${e.target.id}.png`
        yourChoiceDiv.appendChild(userSelectImg)


    }




})


