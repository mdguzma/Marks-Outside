const yesButton = document.querySelector("yesButton");

const noButton = document.getElementById("noButton");


function position() {
    var x = Math.floor(Math.random() * 500) + 1;
    var y = Math.floor(Math.random() * 200) + 1;
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

}

var words = ["Srs?,", "cmon", "You can do better"];
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

