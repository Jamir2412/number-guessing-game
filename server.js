let gameState= "idle"; //idle | playing | finished |  
let randomNumber=0;
let attemptsLeft=0;
function startGame(){
    if(gameState!= "idle" && gameState!= "finished") return;
    gameState= "playing";
    randomNumber= Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    attemptsLeft=5;
    document.getElementsByClassName("game-container")[0].style.display= "inline";  //displaying game area.
    document.getElementsByClassName("start-btn-container")[0].style.display= "none"; //hiding start button when user clicked start.
    if(userInput.value!='')
        userInput.value='';
    userInput.focus();
}
function checkGuess(){
    if(gameState!="playing") return;
    const userInput= document.getElementById("userInput");
    const userGuess= Number(userInput.value);
    if(!userInput || userInput.value.trim()=== ""){
        alert("Enter Valid Number");
        return;
    }
    if(userGuess<1 || userGuess>100){
        alert("Enter Number in the range 1 to 100");
        return;
    }
    if(userGuess===randomNumber){
        gameEnd(true);
        return;
    }
    else{
        attemptsLeft--;
        if(attemptsLeft===0){
            gameEnd(false);
            userInput.value='';
            userInput.focus();
            return;
        }
        alert(`Wrong guess, only ${attemptsLeft} left`);
        userInput.value='';
        userInput.focus();
    }
    return;
}
function gameEnd(won){
    gameState= "finished";
    if(won){
        alert("Congrats, You won.");
    }
    else{
        alert("You lose, better luck next time.");
    }
    document.getElementsByClassName("start-btn-container")[0].style.display= "inline";
    document.getElementsByClassName("game-container")[0].style.display= "none";
}