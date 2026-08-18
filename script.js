let display = document.querySelector("#display");
let clearBtn = document.querySelector("#clear-btn");
let equalsBtn = document.querySelector("#equals-btn");
let numbers = document.querySelectorAll(".btn-number");
let operators = document.querySelectorAll(".btn-operator");

let firstnumber="";
let secondnumber="";
let operator="";

numbers.forEach(function(buttons){
  buttons.addEventListener("click",function(){
    var value=buttons.dataset.num;
    if(operator===""){
      firstnumber=firstnumber+value;
      display.textContent=firstnumber;
    }
    else{
      secondnumber=secondnumber+value;
      display.textContent=firstnumber+operator+secondnumber;
    }
  });
});
operators.forEach(function(buttons){
  buttons.addEventListener("click",function(){
    if(firstnumber!=="" && secondnumber!=="" && operator!==""){
       if (operator === "+") {
        firstnumber = Number(firstnumber) + Number(secondnumber);
    }

    else if (operator === "-") {
        firstnumber = Number(firstnumber) - Number(secondnumber);
    }

    else if (operator === "*") {
        firstnumber = Number(firstnumber) * Number(secondnumber);
    }

    else if (operator === "/") {
        firstnumber = Number(firstnumber) / Number(secondnumber);
    }
    secondnumber=""
    }
     operator=buttons.dataset.op;
     display.textContent=firstnumber+operator;
    });
});

equalsBtn.addEventListener("click",function(){
  let result;
      if (operator === "+") {
        result = Number(firstnumber) + Number(secondnumber);
    }

    else if (operator === "-") {
        result = Number(firstnumber) - Number(secondnumber);
    }

    else if (operator === "*") {
        result = Number(firstnumber) * Number(secondnumber);
    }

    else if (operator === "/") {
        result = Number(firstnumber) / Number(secondnumber);
    }

    display.textContent = result;

});
clearBtn.addEventListener("click", function() {

    firstnumber = "";
    operator = "";
    secondnumber = "";

    display.textContent = "0";
});
