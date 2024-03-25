const grid = document.querySelector(".grid");
const liveScreen = document.querySelector(".live-screen");
const colorButtons = document.querySelectorAll(".colors > div");
const drawingMode = document.querySelector(".drawing-mode > span > p");
const hoverButton  = document.querySelector(".hover-button");
const clickButton  = document.querySelector(".click-button");
const resetButton  = document.querySelector(".reset-button");

let currentColor = "";
let currentDrawingMode = "";