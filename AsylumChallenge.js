let doorInput=document.querySelector(".doorNum");
let doorButton=document.querySelector(".doorButton");
let challengePicture=document.querySelector(".challenge-picture");
let question1=document.querySelector(".asylum-question");
let next1=document.querySelector(".next-challenge");

doorButton.addEventListener("click", function(){
  if(doorInput.value=="10"){challengePicture.src="Images/666.gif"; question1.innerHTML="How many spinning heads are there (type word only)?";} else if (doorInput.value=="four" || "Four") {next1.style.display="block";}
});