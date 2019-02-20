window.onload = function(){

//initalized variables
var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19; 
var playerScore = 0; //sum of players points
var winCounter = 0;
var lossCounter = 0; //player losses if score goes above one number
var gameStarted = false;

//created a function to start game
function newGame() {
    $("#number").text(randomNumber);
    gameStarted = true;

//click on each crystal to reveal a random number
  $(".gem").on("click", function() {
    var crystalNumber = Math.floor(Math.random() * (12 - 1)) + 1;
    playerScore += crystalNumber;
    $("#total-score").text("Your total score is: " + " " + playerScore);
    if(playerScore === randomNumber){
      winSum()
    }
    else if (playerScore > randomNumber){
      lossSum()
      newGame()
   }
  }
  )
}
//update win counter 
function winSum(){
  alert("You win, youre a gem!")
  $(".win-count").text("WINS: " + " " + winCounter)
  winCounter++
  newGame()
}
//update loss counter
function lossSum(){
  alert("Loser! try again.")
  lossCounter++
  $(".loss-count").text("LOSSES: " + " " + lossCounter)
  newGame()
}

newGame() 

}
 

  