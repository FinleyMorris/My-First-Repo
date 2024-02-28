//INITIALISE VARIABLES for tilemaps
let tilemap = []; // 3 dimensional tilemaps for multiple stages?
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];

// INITIALISE PLAYER VARIABLES  
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

function preload() {
    textures[0] = loadImage("grassy.png");
    textures[1] = loadImage("stone.png")

    playerSprite = loadImage("librarian-r.png")
}

function setup() {
  //create a black background behind the assets in case an error leaves background visible
    createCanvas(500, 500);
    background(0);

    let tileID = 0; // sets our tileID for the first tile we'll make

    //Creates all tiles
    // add an If and Booleans to detect which tilemap and corresponding graphicMap and rules should be used?
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            //remove this outdated code || let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            // remove this outdated code || let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = graphicMap[down][across];

    
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // creates tile

            tileID++;
        }
    }
    //Tile creation finished

    player = new Player(playerSprite, 3, 4, tileSize, playerSpeed, tileSize, tileRules);
}

function draw() {
    background(0);
    
    // Loops through all tiles each time draw() is called
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); 
            tilemap[across][down].debug(); 
            // runs debug() and debug() method for each tile
        }
    }
    // Finishes looping through all tiles within each draw() loop

    // run player methods every frame 
    player.display();
    player.move();
}




 