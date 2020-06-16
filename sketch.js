let mtgCard;
let img;

function preload() {
    mtgCard = loadJSON('https://api.scryfall.com/cards/random', loadImageFromJSON);
}
function loadImageFromJSON() {
    img = loadImage(mtgCard.image_uris.art_crop);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    imageMode(CENTER);
    img.width < img.height ? img.resize(windowWidth, 0) : img.resize(0, windowHeight);
    image(img, windowWidth/2, windowHeight/2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }