

const button = document.getElementById("change-color-btn");
const box = document.getElementById('color-box')

function getRandomColor() {
    return Math.floor(Math.random() * 256);
}
button.addEventListener("click", function() {
    box.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
});