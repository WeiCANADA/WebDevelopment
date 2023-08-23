// let btns = document.querySelectorAll("button");


// 选择类名为 "button2" 的按钮，并添加一个点击事件

/* document.querySelector(".w").addEventListener("click", function() {
    let audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
});
document.querySelector(".a").addEventListener("click", function() {
    console.log("Button a clicked!");
});
document.querySelector(".s").addEventListener("click", function() {
    console.log("Button s clicked!");
});
document.querySelector("d drum").addEventListener("click", function() {
    console.log("Button d clicked!");
});
document.querySelector("j drum").addEventListener("click", function() {
    console.log("Button j clicked!");
});

document.querySelector("k drum").addEventListener("click", function() {
    console.log("Button k clicked!");
});

document.querySelector("l drum").addEventListener("click", function() {
    console.log("Button l clicked!");
});
 */
let sounds = {
    "w": "./sounds/snare.mp3",
    "a": "./sounds/kick-bass.mp3",
    "s": "./sounds/crash.mp3",
    "d": "./sounds/tom-1.mp3",
    "j": "./sounds/tom-2.mp3",
    "k": "./sounds/tom-3.mp3",
    "l": "./sounds/tom-4.mp3",
  };


  // mouse click event listener
  document.querySelectorAll('.drum').forEach((button) => {
    button.addEventListener('click', () => { 

      let audio = new Audio(sounds[button.innerText]);
      buttonAnimation(button.innerText);
      audio.play();
    });
  });


//  // keyboard Keydown event listener


// window.addEventListener('keydown', (event) => {
//     const key = event.key; // The key that was pressed
//     const audioUrl = sounds[key]; // Get the URL from our sounds object
//     if (audioUrl) { // If there is a URL
//       let audio = new Audio(audioUrl); // Create a new audio object
//       audio.play(); // Play it
//     }
//   }); 

  document.addEventListener('keydown', (event) => {
    const key = event.key; // The key that was pressed
    const audioUrl = sounds[key]; // Get the URL from our sounds object
    if (audioUrl) { // If there is a URL
      let audio = new Audio(audioUrl); // Create a new audio object
      audio.play(); // Play it
    }
  }); 

  function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
  }