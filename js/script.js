

let secondPart = document.getElementsByClassName("secondPart")[0]
let inputText = document.getElementById("inputText")
let reviewBtn = document.getElementById("reviewBtn")
let reviewList = document.getElementsByClassName("reviewList")[0]



reviewBtn.addEventListener("click", function (){
    let peragrap = document.createElement("li")
    let finalInput = inputText.value
    reviewList.appendChild(peragrap)
    peragrap.innerHTML = finalInput
    inputText.value = ""
    
      if (finalInput === "") {
        peragrap.style.display = "none"
    }
    

    let removBtn = document.createElement("button")

    removBtn.innerHTML = "Delete"
    removBtn.style.float = "right"
    removBtn.style.background = "red"
    removBtn.style.padding = "10px 20px"
    removBtn.style.color = "#ffffff"
    removBtn.style.fontSize = "18px"
    removBtn.style.fontWeight = "500"
    removBtn.style.border = "none"
    
    peragrap.appendChild(removBtn)


    removBtn.addEventListener("click", function (){
      reviewList.removeChild(peragrap)
    })
   
})



// Second Part Start 


let secondHedding = document.getElementById("secondHedding")
let secondInput = document.getElementById("secondInput")
let secondBtn = document.getElementById("secondBtn")


secondInput.addEventListener("keyup", function(){
  if(secondInput.value == "Delete"){
    secondBtn.removeAttribute("disabled")
    secondBtn.style.backgroundColor = "green"
    
  }
   else{
    secondBtn.setAttribute("disabled", true)
    secondBtn.style.backgroundColor = "red"
   
  }
})

secondBtn.addEventListener("click", function(){
  if(secondInput.value == ""){
    secondHedding.style.display = "block"
  }
  else{
    secondHedding.style.display = "none"
  }
  
  secondInput.value = ""
  
  
})

 








 