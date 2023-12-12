let firstNum, operator, secNum ;

const display = document.getElementById('display');
const btns = document.querySelectorAll('.btns');

function add(u,i){
return parseFloat(u) + parseFloat(i);
}
function sub(u,i){
  return parseFloat(u) - parseFloat(i);
}
function mul(u,i){
  return parseFloat(u) * parseFloat(i);
}
function div(u,i){
    if(i !== 0){
      return parseFloat(u) / parseFloat(i);
    }else return 'cant return by 0';
}

  function operate(operator,n1,n2){
      switch(operator){
        case '+':
            add(n1,n2);
          break;  
        case '-':
            sub(n1,n2);
          break;  
        case '*':
            mul(n1,n2);
          break;  
        case '/':
            div(n1,n2);
          break; 
            
      }
}

function populateDisplay(val){
  display.innerText = display.innerText + val
  //display.innerText = display.innerText === '0' ? val : display.innerText + val
}

function calculate(){
  
}


const num1 = 10; const num2 = 10;
const rA = add(num1,num2);
const rS = sub(num1,num2);
const rM = mul(num1,num2);
const rD = div(num1,num2);




function backspace(){
  display.innerText = display.innerText.slice(0,-1);
} 

function clearDisplay(){
    display.innerText = '';
}

