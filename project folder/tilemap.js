let tileRules = [ 
    //         THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
    ]

// separate tileRules for each tilemap?

let graphicMap = [ 
//   0  1  2  3  4  5  6  7  8  9 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4   
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
]
// separate graphicmap for each tilemap?

class Tile {
    constructor(texture, across, down, tileSize, tileID) { // we've added a texture parameter at the beginning of our class
        this.texture = texture; // our new key-value pair!
        this.across = across;
        this.down = down;
        this.xPos = across*tileSize; // pixel generated from across
        this.yPos = down*tileSize;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        //Displays the texture of instance of NPC class
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        //noStroke();
        //fill(255);
        //textAlign(LEFT, TOP);
        
        //text(this.tileID, this.xPos, this.yPos);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}