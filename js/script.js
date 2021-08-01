let currentPlayer = 1;
let numMatchsticks = parseInt(prompt("Welcome to the two player game- Matchsticks. There are N matches on the table initially. In each turn, current player picks 1, 2, or 3 matches from the table. The player who picks the last match on the table wins the game. Please Pick the total number of matchsticks:"));

function drawMatchsticks(){
    $("#matchstick-container").empty()
    for (let i = 0; i < numMatchsticks; i ++){
        $("#matchstick-container").append(`
     <img class="matchstick" 
        src="img/matchstick.jpg" />`); 
    }
}

 // the current player can 1 or 2

function updateText() {
    $("#num-matchsticks").html(numMatchsticks);
    $("#current-player").html(currentPlayer);


}

updateText();
drawMatchsticks();

$("#num-matchsticks").html(numMatchsticks)
$("#current-player").html(currentPlayer)

$("#restart-game-btn").click(function() {
    currentPlayer = 1;
    numMatchsticks = parseInt(prompt("Please Pick the total number of matchsticks:"));
    updateText();
    drawMatchsticks();
})
$("#submit-move-btn").click(function () {
    let numMatchsToRemove = parseInt($("#num-matchsticks-to-remove").val());
    if (numMatchsToRemove > 3 || numMatchsToRemove > numMatchsticks) {
        alert("You entered a number that is too high!");
        return;
    }
    if (numMatchsToRemove < 1){
        alert("You enter a numbe that is too low!");
        return;
    }
    numMatchsticks = numMatchsticks - numMatchsToRemove; 

    if (numMatchsticks == 0) {
        alert("Player " + currentPlayer + " wins!")
    }

    currentPlayer = currentPlayer == 1 ? 2 : 1


    drawMatchsticks();
    updateText();
})