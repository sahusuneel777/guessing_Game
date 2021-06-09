let userguess = document.getElementById("userInput");
let game_result = document.getElementById("gameResult");
let rand = Math.random() * 100;
random_number = Math.ceil(rand);

function checkguess() {
    let guessedvalue = parseInt(userguess.value);
    if (guessedvalue === random_number) {
        game_result.textContent = "correct guess";
        game_resultResult.style.backgroundColor = "green";
    } else if (guessedvalue > random_number) {
        game_Result.textContent = "Too High! Try Again.";
        game_Result.style.backgroundColor = "#1e217c";

    } else if (guessedvalue < random_number) {
        game_result.textContent = "Too low...! Try another";
    } else {
        game_result.textContent = "enter valid input";

    }


}
