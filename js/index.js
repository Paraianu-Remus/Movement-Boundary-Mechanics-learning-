const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

// Variables you can modify
// Start position of the blob
let x = 400;
let y = 300;
// Blob radius
let radius = 50;
// Blob movement speed
let speed = 10;

// Do not modify
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// Game Loop
function drawBoard() {
  clearBoard();
  keyboardInputs();
  boundaries();
  drawBlob();
}

function clearBoard() {
  // Create the board
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBlob() {
  // Create the blob
  ctx.fillStyle = "white";
  if (upPressed) {
    ctx.fillStyle = "green";
  }
  if (downPressed) {
    ctx.fillStyle = "red";
  }
  if (leftPressed) {
    ctx.fillStyle = "blue";
  }
  if (rightPressed) {
    ctx.fillStyle = "yellow";
  }
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2); // Creates the circle
  ctx.fill();
  ctx.closePath();
}

function keyboardInputs() {
  // Up
  if (upPressed) {
    y -= speed;
  }
  // Down
  if (downPressed) {
    y += speed;
  }
  // Left
  if (leftPressed) {
    x -= speed;
  }
  // Right
  if (rightPressed) {
    x += speed;
  }
}

function boundaries() {
  // Top boundary
  if (y < radius) {
    y = radius;
  }
  // Bottom boundary
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  // Left boundary
  if (x < radius) {
    x = radius;
  }
  // Right boundary
  if (x > canvas.width - radius) {
    x = canvas.width - radius;
  }
}

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

function keyDown(e) {
  // Up Arrow Key Pressed
  if (e.keyCode == 38) {
    upPressed = true;
  }
  // Down Arrow Key Pressed
  if (e.keyCode == 40) {
    downPressed = true;
  }
  // Left Arrow Key Pressed
  if (e.keyCode == 37) {
    leftPressed = true;
  }
  // Right Arrow Key Pressed
  if (e.keyCode == 39) {
    rightPressed = true;
  }
}
function keyUp(e) {
  // Up Arrow Key Released
  if (e.keyCode == 38) {
    upPressed = false;
  }
  // Down Arrow Key Released
  if (e.keyCode == 40) {
    downPressed = false;
  }
  // Left Arrow Key Released
  if (e.keyCode == 37) {
    leftPressed = false;
  }
  // Right Arrow Key Released
  if (e.keyCode == 39) {
    rightPressed = false;
  }
}

// Loop the board 1000ms / frame rate (60 times a second)
setInterval(drawBoard, 1000 / 60);
