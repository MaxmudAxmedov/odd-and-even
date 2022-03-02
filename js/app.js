var elForm = document.querySelector("form");
var elInput = document.querySelector(".input-number");
var elResultOdd = document.querySelector(".result-odd");
var elResultEven = document.querySelector(".result-even");

elForm.addEventListener("submit", function(r){
  r.preventDefault();
  
  var elInputVal = Number(elInput.value.trim());
  var juft = ["Juft: " ];
  var toq = ["Toq: " ];

  if(elInputVal == "" || elInputVal < 0 || isNaN(elInputVal)){
    alert(`Faqat raqam kiriting 0 dan katta !`)
  }else if(elInputVal % 2 == 0){
    juft.push(elInputVal);
    elResultEven.textContent = juft;
  }else{
    toq.push(elInputVal);
    elResultOdd.textContent = toq;
  } 
  elInput.value="";

});