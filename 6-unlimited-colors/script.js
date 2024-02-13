// Generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

// Array to store last 5 generated colors
const lastColors = [];

let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        const newColor = randomColor();
        document.body.style.backgroundColor = newColor;
        // Add the new color to the array
        lastColors.push(newColor);
        // Keep only the last 5 colors
        if (lastColors.length > 5) {
            lastColors.shift(); // Remove the oldest color
        }
        // Display the last 5 colors
        displayLastColors();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#reset').addEventListener('click', function () {
    document.body.style.backgroundColor = "white";
    lastColors.length = 0; 
    displayLastColors();
});

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

const displayLastColors = function () {
    const colorList = document.querySelector('#color-list');
    colorList.innerHTML = ''; 
    lastColors.forEach(color => {
        const li = document.createElement('li');
        li.textContent = color;
        colorList.appendChild(li);
    });
};

displayLastColors();