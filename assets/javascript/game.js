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

//click on each crystal to reveal a random number and update win and lose counter 
  $(".gem").on("click", function() {
    var crystalNumber = Math.floor(Math.random() * (12 - 1)) + 1;
    playerScore += crystalNumber;
    $("#total-score").text("Your total score is: " + " " + playerScore);
    if(playerScore === randomNumber){
      alert("You win, your'e a gem!")
      winCounter++
     $("#win-count").text("WINS: " + " " + winCounter)
     resetGame()
     
    }
    else if (playerScore > randomNumber){
      alert("Loser! try again.")
      lossCounter++
      $("#loss-count").text("LOSSES: " + " " + lossCounter)
      resetGame()
   }
  }
  )
//reset function
 function resetGame() {
   playerScore = 0;
   $("#number").text(randomNumber);
   var crystalNumber = Math.floor(Math.random() * (12 - 1)) + 1;
}
}
 newGame()
 
}
 

  