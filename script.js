console.log("Script running");

//document.querySelector(".field").addEventListener("click", clickOnField);
document.querySelectorAll(".field").forEach( field => field.addEventListener("click", clickOnField));

function youWon() {
    console.log("YOU WON!");
    document.querySelector("h2").textContent = "YOU WON!"
    document.querySelectorAll(".field").forEach( field => field.removeEventListener("click", clickOnField));
}

function computerWon() {
    console.log("Computer WON!");
    document.querySelector("h2").textContent = "Computer WON!"
    document.querySelectorAll(".field").forEach( field => field.removeEventListener("click", clickOnField));
}

// user click
function clickOnField() {
    console.log("click");
    // mark clicked field as user's
    this.textContent = "X";
    this.disabled = true;

    // check if user is a winner
    // - check if there are three X's in a row
    if(
        document.querySelector(".field:nth-child(1)").textContent == "X" &&
        document.querySelector(".field:nth-child(2)").textContent == "X" &&
        document.querySelector(".field:nth-child(3)").textContent == "X" ) {
        console.log("Three in a row!");
        youWon();
         // - check if there are three X's in a column
    } else if( document.querySelector(".field:nth-child(1)").textContent == "X" &&
        document.querySelector(".field:nth-child(4)").textContent == "X" &&
        document.querySelector(".field:nth-child(7)").textContent == "X" ) {
        console.log("Three in a column!");
        youWon();
        // - check if there are three X's diagonally
    } else if(document.querySelector(".field:nth-child(1)").textContent == "X" &&
        document.querySelector(".field:nth-child(5)").textContent == "X" &&
        document.querySelector(".field:nth-child(9)").textContent == "X" ) {
        console.log("Three diagonally");
        youWon();
    } else {
        // select a random field
        let randomNumber = Math.ceil(Math.random()*9);
        let randomField = document.querySelector(`.field:nth-child(${randomNumber}`);
        while( randomField.disabled == true ) {
            console.log("selected disabled field: " + randomNumber)
            randomNumber = Math.ceil(Math.random()*9);
            randomField = document.querySelector(`.field:nth-child(${randomNumber}`);
        }

        console.log(randomNumber);

        // mark selected field as computer's
        randomField.textContent = "O";
        randomField.disabled = true;

        // check if computer is a winner
        if(
            document.querySelector(".field:nth-child(1)").textContent == "O" &&
            document.querySelector(".field:nth-child(2)").textContent == "O" &&
            document.querySelector(".field:nth-child(3)").textContent == "O" ) {
            console.log("Three in a row!");
            computerWon();
             // - check if there are three X's in a column
        } else if( document.querySelector(".field:nth-child(1)").textContent == "O" &&
            document.querySelector(".field:nth-child(4)").textContent == "O" &&
            document.querySelector(".field:nth-child(7)").textContent == "O" ) {
            console.log("Three in a column!");
            computerWon();

            // - check if there are three X's diagonally
        } else if(document.querySelector(".field:nth-child(1)").textContent == "O" &&
            document.querySelector(".field:nth-child(5)").textContent == "O" &&
            document.querySelector(".field:nth-child(9)").textContent == "O" ) {
            console.log("Three diagonally");
            computerWon();
        }

        // - check if there are three O's in a row
        // - check if there are three O's in a column
        // - check if there are three O's diagonally
    }

}

