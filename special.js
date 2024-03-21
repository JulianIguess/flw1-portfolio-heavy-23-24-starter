message=document.querySelector(".message");
next=document.querySelector(".continue");
choiceContainer=document.querySelector(".choice");
yes=document.querySelector(".yes");
no=document.querySelector(".no");
buttonCase=document.querySelector(".button-case");
next2=document.querySelector(".next-2");
next3=document.querySelector(".next-3");
reward=document.querySelector(".reward");

next.addEventListener("click", function(){
message.innerHTML="I didn't expect you to get to this page. You looked through the code for the pasword, didn't you?";
next.style.display="none";
choiceContainer.style.display="block";
});

yes.addEventListener("click", function(){
message.innerHTML="I knew it. Of course you did. Who would want to actually comb through the pages?";
choiceContainer.style.display="none";
buttonCase.style.display="block";
next3.style.display="none";
});

no.addEventListener("click", function(){
message.innerHTML="Oh. That's good. At least you didn't look through the code for it.";
choiceContainer.style.display="none";
buttonCase.style.display="block";
next3.style.display="none";
});

next2.addEventListener("click", function(){
message.innerHTML="So, I guess you want a reward or something?";
choiceContainer.style.display="none";
next3.style.display="block";
next2.style.display="none";
});

next3.addEventListener("click", function(){
message.innerHTML="Well, I'll let you take a look at this. It's not finished. I don't know for how long, but you can still play with what there is. Here is the link for it.";
choiceContainer.style.display="none";
next3.style.display="none";
reward.style.display="block";
});