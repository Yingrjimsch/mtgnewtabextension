let mtgCard;
let img;

function loadImageFromJSON() {
    img = loadImage(mtgCard.image_uris.art_crop);
}

function setup() {
    mtgCard = loadJSON('https://api.scryfall.com/cards/random', loadImageFromJSON);
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    textAlign(CENTER);
}

function draw() {
    background(0);
    imageMode(CENTER);
    img ? drawImage() : '';
    mtgCard ? drawArtistName() : '';
    
}

function drawImage() {
    img.width < img.height ? img.resize(windowWidth, 0) : img.resize(0, windowHeight);
    image(img, windowWidth / 2, windowHeight / 2);
}

function drawArtistName() {
    fill(255);
    text(mtgCard.artist, windowWidth/2, windowHeight-16);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }