// Function to generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Select elements
const button = document.querySelector("button");
const resultColor = document.getElementById("result-color");
const body = document.body;

// Add event listener to button
button.addEventListener("click", function () {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    resultColor.textContent = newColor;
});
