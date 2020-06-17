let mtgCard;
let img;

function loadImageFromJSON() {
    img = loadImage(mtgCard.image_uris.art_crop);
}

function setup() {
    mtgCard = loadJSON('https://api.scryfall.com/cards/random', loadImageFromJSON);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    imageMode(CENTER);
    if(!img) {
        return;
    }
    img.width < img.height ? img.resize(windowWidth, 0) : img.resize(0, windowHeight);
    image(img, windowWidth/2, windowHeight/2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }