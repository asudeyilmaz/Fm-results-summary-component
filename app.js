const reactionScore = document.querySelector("#reactionScore");
const memoryScore = document.querySelector("#memoryScore");
const verbalScore = document.querySelector("#verbalScore");
const visualScore = document.querySelector("#visualScore");
const result = document.querySelector("#result");
const toggle = document.querySelector(".toggle");
const img = document.querySelectorAll("img");
  const body= document.querySelector("body");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const memoryNumber = Number((memoryScore.textContent = data[1].score));
    const verbalNumber = Number((verbalScore.textContent = data[2].score));
    const visualNumber = Number((visualScore.textContent = data[3].score));
    const reactionNumber = Number((reactionScore.textContent = data[0].score));
    const average = Math.floor(
      (reactionNumber + memoryNumber + verbalNumber + visualNumber) / 4
    );
    result.textContent = average;
  });

  toggle.addEventListener("click", changeCss);

  function changeCss(){
  
    if(toggle.checked===true){
      body.classList.toggle("dark");
      for(let value of img){
        value.style.display="none";
      }

    }else{
      body.className="body"
      for(const value of img){
        value.style.display= "block"
      }
    }
  }