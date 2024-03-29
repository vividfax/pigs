let palette = {
    white: "#FFF2F0",
    light: "#FFD5D0",
    mid: "#FF5E48",
    dark: "#945F59",
    black: "#332B2A",
};

let size = 600;
let mobile = false;

let grid;
let images = {};

let bagelFont;

let newGameButton;

function preload() {

    bagelFont = loadFont("./fonts/BagelFatOne-Regular.ttf");

    images.pig = loadImage("./images/pig.png");

    images.pigs = [];
    for (let i = 0; i < 4; i++) images.pigs.push(loadImage("./images/pig-"+i+".png"));

    images.patterns = [];
    for (let i = 0; i < 4; i++) images.patterns.push(loadImage("./images/pattern-"+i+".png"));
}

function setup() {

    for (let colour in palette) {
        palette[colour] = color(palette[colour]);
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        size = displayWidth < displayHeight ? displayWidth : displayHeight;
        size -= 20;
        mobile = true;
    }

    setupTouchEvents();
    setupSwipe();
    setupButtons();

    createCanvas(size, size);
    textAlign(CENTER, CENTER);
    textFont(bagelFont);
    noStroke();
    imageMode(CENTER);
    rectMode(CENTER);

    newGame();
}

function draw() {

    update();
    display();
}

function update() {

    grid.update();
}

function display() {

    background(palette.black);
    grid.display();
}

function keyPressed() {

    if (keyCode === UP_ARROW || keyCode == 87) {
        grid.move("up");
    } else if (keyCode === DOWN_ARROW || keyCode == 83) {
        grid.move("down");
    } else if (keyCode === LEFT_ARROW || keyCode == 65) {
        grid.move("left");
    } else if (keyCode === RIGHT_ARROW || keyCode == 68) {
        grid.move("right");
    }
}

function swiped(event) {

    if (event.direction == 8) {
        grid.move("up");
    } else if (event.direction == 16) {
        grid.move("down");
    } else if (event.direction == 2) {
        grid.move("left");
    } else if (event.direction == 4) {
        grid.move("right");
    }
}

function mousePressed() {

}

function touchStarted() {

    mousePressed();
}

function setupTouchEvents() {

    canvas.addEventListener("gesturestart", absorbEvent);
    canvas.addEventListener("gesturechange", absorbEvent);
    canvas.addEventListener("gestureend", absorbEvent);
    canvas.addEventListener("touchstart", absorbEvent);
    canvas.addEventListener("touchend", absorbEvent);
    canvas.addEventListener("touchmove", absorbEvent);
    canvas.addEventListener("touchcancel", absorbEvent);
}

function absorbEvent(event) {

    event.preventDefault();
    event.returnValue = false;
}

function isTouchDevice() {

    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
}

function setupSwipe() {

    let options = {
        preventDefault: true
    };
    let hammer = new Hammer(canvas, options);
    hammer.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
    });
    hammer.on("swipe", swiped);
}

function setupButtons() {

    newGameButton = select("#new-game");
    let buttonY = size/2;
    newGameButton.style("transform", "translate(-50%,"+buttonY+"px)");
    newGameButton.mousePressed(newGame);
}

function newGame() {

    grid = new Grid();
    newGameButton.style("display", "none");
}