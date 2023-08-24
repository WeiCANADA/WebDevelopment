// Step1

// Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
//  alert("Hello, this is an alert!");
/* create a new function called nextSequence()
2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber */


// Step2

//create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];
// 1. Create a new empty array called gamePattern.
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


/* 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence() */

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});



$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    //flashButton($(this));
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    //console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);

});


//step8

// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
    
    // 2. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern.
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        // 3. If the user got the most recent answer right in step 2, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {
            // 4. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    // 3. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
    // 4. Add the new randomChosenColour generated in step 3 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    // 5. Use jQuery to select the button with the same id as the randomChosenColour
    // 6. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 5.
    $("#" + randomChosenColour)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    //flashButton($("#" + randomChosenColour));
    // 7. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 5.

    playSound(randomChosenColour);




    // 8. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    // 9. Call the function nextSequence() inside $(document).on("keypress", function() {.
    // 10. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;
    // 11. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);
}



function flashButton(buttonElement) {
    buttonElement.animate({
        opacity: 0.5  // half transparent
    }, 100, function () {  // duration 100ms
        // Reverse animation to bring back original state
        buttonElement.animate({
            opacity: 1  // fully opaque
        }, 100);
    });
}

function playSound(color) {
    const audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");

    }, 100);
}






//step10
// 1. Create a new function called startOver().
function startOver() {
    // 2. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
}