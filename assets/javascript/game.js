
// create an array with a letter
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// creater computerGuess as random letters from letters
var gameLetter = "";
// computerGuess choose a Letters from array
var computerGuess = function(){
// setting game letters as randomletters from letters array
gameLetter = letters[Math.floor(Math.random()*letters.length)];
}
// create an input for user with empty string
var useInput ="";

// here we declare variable
var wins = 0;
var looses = 0;
var GuessLetter = [];
var GuessLeft = 9;

// create updateScreen funtion
 var updateScreen = function(){
// update the value of HTML element 
document.getElementById("wins").innerHTML=  "<p> wins:"  + wins + "</p>";
document.getElementById("looses").innerHTML=  "<p> looses:"  + looses + "</p>";
document.getElementById("GuessLeft").innerHTML=  "<p> GuessLeft:"  + GuessLeft + "</p>";
document.getElementById("GuessLetter").innerHTML=  "<p> GuessLetter: "  + GuessLetter + "</p>";
 };

 // variable of function to clear guessLetter
 var clearGuessLetter = function(){
     // this is for game over to clear HTML
    document.getElementById("GuessLetter").innerHTML="";
    GuessLetter =[""];

 };

// call updatescreen funtion 
 updateScreen();

 // when user press on key, will stored as useInput, add it to guessLetters array
 document.onkeyup = function (event) {
    
    useInput= event.key;
    GuessLetter.push(useInput);
    // checkletter if see it right
    chekLetter();
    updateScreen();
 };
function chekLetter(){
    // If useInput
     if(useInput === gameLetter){
         // Alert our message.
         wins++;
         alert("You wins");
         startOver();
         
     }
     else{
         GuessLeft--;
         if(GuessLeft<=0){
          // Alert our message to the user.
         looses++;
         alert("you loose");
         startOver();

     }
    }
};
// create function StarOver to restart a game
  function startOver() {
     clearGuessLetter();
     GuessLeft = 9;
     updateScreen();
     computerGuess();
  };
  // inital call computerGuess 
  computerGuess ();

        
 












