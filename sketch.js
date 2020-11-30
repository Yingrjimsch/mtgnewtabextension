let mtgCard;
let img;
let artist = '';

function loadImageFromJSON() {
    img = loadImage(mtgCard.image_uris.art_crop);
}

function setup() {
    mtgCard = loadJSON('https://api.scryfall.com/cards/random', loadImageFromJSON);
    createCanvas(windowWidth, windowHeight);
    textSize(12);
    textAlign(RIGHT, BOTTOM);
}

function draw() {
    background(0);
    imageMode(CENTER);
    img ? drawImage() : '';
    artist = mtgCard ? mtgCard.artist : '';
    drawArtistName();
}

function drawImage() {
    img.width < img.height ? img.resize(windowWidth, 0) : img.resize(0, windowHeight);
    image(img, windowWidth / 2, windowHeight / 2);
}

function drawArtistName() {
    fill(255);
    text(artist, windowWidth-1, windowHeight-1);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }