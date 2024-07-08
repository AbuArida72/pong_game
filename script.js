// Create JS Representation from the DOM
const startText = document.getElementById('startText')

// Game Variables
let gameRunning = false;
let keysPressed = {};

document.addEventListener('keydown', startGame);
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Start Game
function startGame() {
    gameRunning = true;
    startText.style.display = 'none';
    document.removeEventListener('keydown', startGame);
    gameLoop();
}

function gameLoop() {
    if(gameRunning) {
        updatePaddle1()
        setTimeout(gameLoop, 8);
    }
}

function handleKeyDown(e) {
    keyPressed[e.key] = true;
}

function handleKeyUp(e) {
    keyPressed[e.key] = false;
}

function updatePaddle1() {

}