const playerSelection="Rock";
const computerSelection= getComputerChoice();

function getComputerChoice(){
   return "Paper";
}

function playRound(playerSelection,computerSelection)
{
   return "You Lose! Paper beats Rock";
} 

function game()
{
   for (let i = 0; i < 5; i++) 
   {
      playRound();
   }
}


console.log(playRound(playerSelection,computerSelection));

