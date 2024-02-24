const yesButton = document.getElementById("yesButton");
const gif = document.getElementById("questionGif");
const noButton = document.getElementById("noButton");
const text = document.getElementById("questionText");

function position() {
    var x = Math.floor(Math.random() * 700) + 1;
    var y = Math.floor(Math.random() * 100) + 1;
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

}

// var words = ["Srs?,", "cmon", "You can do better", "Oops try again!", "NOT ALLOWED"];
var words = ["srsly??", "Oops try again", "c'mon", "You can do better", "NOT ALLOWED", "Try again", "Keep going", "Give it another shot", "Don't give up", "Just one more time", "Keep trying", "Persevere", "Keep at it"]

var currentIndex = 0;
function randomWords() {
    currentIndex = (currentIndex + 1) % words.length;
    for (i = 0; i < words.length; i++) {
        noButton.innerHTML = words[currentIndex];
    }
};

noButton.addEventListener("mouseover", function () {
    position();
    randomWords();
});

yesButton.addEventListener("click", function () {
    gif.src = "https://media1.tenor.com/m/UCbhfUXlmrgAAAAC/dudu-love-bubu-love.gif";
    text.innerText = "YAHOOOOOO";
    noButton.style.display = "none";
    yesButton.style.display = "none";
})
let playSound = () => new Audio("/Users/mdguzman/Documents/markdeguzman/lovesong.mp3").play()
