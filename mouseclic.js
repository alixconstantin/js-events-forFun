

////////////////////////////////////////////////////////////////

let YesValou = document.querySelector(".YesValou");
let NoValou = document.querySelector(".NoValou");
let YesCounter = document.querySelector(".YesCounter");
let NoCounter = document.querySelector(".NoCounter");


YesValou.addEventListener("click", function(){ YesCounter.innerText++}) ;
NoValou.addEventListener("click",  function(){ NoCounter.innerText++}) ;

////////////////////////////////////////////////////////////////