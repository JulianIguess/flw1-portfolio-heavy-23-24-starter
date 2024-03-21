let passField = document.querySelector('.password').value;
let passbox = document.querySelector('.passbox');
let submit = document.querySelector('.submit');
let secretButton = document.querySelector('.secret');
let allStar = document.querySelector('.allstar');

submit.addEventListener("click",function(){
  if(passField = 81630324684){
    submit.style.borderColor = "green", secretButton.style.display = "block",secretButton.style.borderColor="green";
  }else{
    submit.style.borderColor = "red";}
});