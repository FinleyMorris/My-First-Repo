//size of the map
let tilemap = [];
//vertical and horizontal lines
let numDown = 10;
let numAcross = 10;
//size of tiles
let tileSize = 50;
let textures = [];

//the layout of the tiles 
//when changing the number from preload it changes a certain block.
let graphicMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

//what the tile image is: 
function preload() {
    textures[0] = loadImage("planks.png")
    textures[1] = loadImage("blank.png")

}
//canvas size
function setup() {
    createCanvas(500, 500);

    //where the tiles are 
    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            tilemap[across][down] = new Tile(textures[graphicMap[down][across]], x, y, tileSize, tileID);

            tileID++;
        }
    }
//debugging
    console.log(tilemap[4][6].tileID)
    console.log(tilemap[4][6].x / tileSize);
}

function draw() {
    background(0);
    
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            //tilemap[across][down].debug();
            tilemap[across][down].display();

        }
    }
}

class Tile {
    constructor(texture, x, y, tileSize, tileID) {
        this.texture = texture;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }
    display() {
        noStroke();
        image(this.texture, this.x, this.y, this.tileSize, this.tileSize);
    }
    debug() {
        //TILE
        stroke(245);
        fill(55);
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(245);
        textAlign(LEFT, TOP);
        text(this.tileID, this.x, this.y);
    }
}