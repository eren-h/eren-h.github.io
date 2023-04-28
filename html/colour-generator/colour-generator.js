// Buttons
const originalButton = document.getElementById("original-button");
const mysteryButton = document.getElementById("mystery-button");

// Creates random color
function rgb(num) {
    return Math.floor(Math.random() * num);
}

function colorChange() {
    const randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
}

originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;