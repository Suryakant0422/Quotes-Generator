let btn = document.getElementById("buttonn");
let quote = document.querySelector("#quotes");
 
let arr=[
"\"Laziness is not the problem It's a HABIT.\" " , 
"\"You don't deserve what you want. You deserve what you need\"",
"\"Smartness won't take you to goal.Discipline will!\"",
 "\"Be addicted to your passions, Not your distractions!! 🎯🎯\"",
 "\"I \"want to\" become a CA♀️ and I am \"working on\" to become a CA♀️ have different meanings..\"",

];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()*arr.length)
     quote.innerText =arr[random]

})
