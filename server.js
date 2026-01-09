
let randomNumber=0;
let attemptsLeft=0;
function startGame(){
    randomNumber= Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    attemptsLeft=5;
    document.getElementsByClassName("start-btn-container")[0].style.display= "none";
    document.getElementsByClassName("game-container")[0].style.display= "inline";
}
function checkGuess(){
    const userInput= document.getElementById("userInput");
    if(!userInput || userInput.value.trim()=== ""){
        alert("Enter Valid Number");
        return;
    }

    const userGuess= Number(userInput.value);
    if(userGuess<1 || userGuess>100){
        alert("Enter Number in the range 1 to 100");
        return;
    }
    if(userGuess===randomNumber){
        alert("Congrats, You won.");
        document.getElementsByClassName("start-btn-container")[0].style.display= "inline";
        document.getElementsByClassName("game-container")[0].style.display= "none";
        return;
    }
    if(userGuess!=randomNumber){
        attemptsLeft--;
        if(attemptsLeft===0){
            alert("You lose, better luck next time.");
            document.getElementsByClassName("start-btn-container")[0].style.display= "inline";
            document.getElementsByClassName("game-container")[0].style.display= "none";
            return;
        }
        alert(`Wrong guess, only ${attemptsLeft} left`);
    }
    
    

}