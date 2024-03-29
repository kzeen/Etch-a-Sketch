const grid = document.querySelector(".grid");
const liveScreen = document.querySelector(".live-screen");
const colorButtons = document.querySelectorAll(".colors > div");
const drawingMode = document.querySelector(".drawing-mode > span > p");
const hoverButton  = document.querySelector(".hover-button");
const clickButton  = document.querySelector(".click-button");
const resetButton  = document.querySelector(".reset-button");

let currentColor = "";
let currentDrawingMode = "";

//Grid generation
function getPixelSize(dimensions) {
    // Calculates how much each pixel should be sized,
    // according to its parent's size (100%)
    return 100 / dimensions;
}

function generateGridPixel(pixelSize) {
    const newGridPixel = document.createElement("div");
    newGridPixel.style.border = "1px solid #F0F0F0";
    newGridPixel.style.width = pixelSize + "%";
    newGridPixel.style.height = pixelSize + "%";
    grid.appendChild(newGridPixel);
}

function generateGrid(dimensions) {
    // size: width & height  -  dimensions: int x int
    // Generates a dimensions x dimensions grid
    const pixelSize = getPixelSize(dimensions);
    for (let i=0;i<(dimensions*dimensions);i++) {
        generateGridPixel(pixelSize);
    }
}

//Color palette
function initializePalette() {
    colorButtons.forEach(color => {
        color.addEventListener("click", () => currentColor = color.className)
    });
    // Default selected color is the first in the palette
    currentColor = colorButtons[0].className;
}

//Drawing mode
function setDrawingMode(e) {
    //Gets text content of clicked button
    const mode = e.target.textContent;

    if (mode !== currentDrawingMode) {
        currentDrawingMode = mode;
        drawingMode.textContent = currentDrawingMode;
        const gridPixels = document.querySelectorAll(".grid > div");
        gridPixels.forEach(pixel => {
            pixel.removeEventListener((currentDrawingMode === "Hover" ? "click" : "mouseover"), drawOnPixel);
            pixel.addEventListener((currentDrawingMode === "Hover" ? "mouseover" : "click"), drawOnPixel);
        });
    }
}

function drawOnPixel(e) {
    e.target.style.backgroundColor = currentColor;
}

function initializeButtons() {
    hoverButton.addEventListener("click", setDrawingMode);
    clickButton.addEventListener("click", setDrawingMode);
}

function initializePage() {
    // Default is 16 x 16 grid
    generateGrid(16);
    initializePalette();
    initializeButtons();
}

initializePage();