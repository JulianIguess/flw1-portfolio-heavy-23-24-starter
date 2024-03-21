mute = document.querySelector(".mute");
unmute = document.querySelector(".unmute");
audio = document.querySelector("audio");
footer=document.querySelector(".foot");

mute.addEventListener("click", function(){
audio.muted= !audio.muted;
});

mute.addEventListener("click", function(){
footer.innerHTML="The password is 81630324684";
});