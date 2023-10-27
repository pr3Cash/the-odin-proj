const playerSelection= prompt();
const computerSelection= getComputerChoice();

function getComputerChoice(){
   const ran = Math.floor(Math.random()*3);

   if(ran === 1)
   return "rock";
   if(ran === 2)
   return "paper";
   if(ran === 3)
   return "scissors";
   
}/*
function getUserChoice(){
   const ran = Math.floor(Math.random()*9);

   if(ran === 1 || ran === 4 || ran === 7)
   return "scissors";
   if(ran === 2 || ran === 5 || ran === 8)
   return "rock";
   if(ran === 3 || ran === 6 || ran === 9)
   return "paper";
   
}**/
function playRound(playerSelection,computerSelection)
{
   
   if(playerSelection === computerSelection){
      return 'draw'
   }
   if(playerSelection === "paper" && computerSelection === "rock"){
      return "You lose! Rock beats Paper";
   }
   if(playerSelection === "scissors" && computerSelection === "rock"){
      return "You Lose! rock beats scissors";
   }
   if(playerSelection === "scissors" && computerSelection === "paper"){
      return "You win! scissors beats paper";
   }
   if(playerSelection === "rock" && computerSelection === "paper"){
      return "You win ! Paper beats Rock";
   }
   if(playerSelection === "rock" && computerSelection === "scissors"){
      return "You win! rock beats scissors";
   }
   if(playerSelection === "paper" && computerSelection === "scissors"){
      return "You Lose! scissors beats paper";
   }
} 

function game(){
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
console.log(playRound(playerSelection,computerSelection));
   
}


console.log(game());

