class Player{
    constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
        //attach sprite to key in object
        this.sprite = sprite;

        //store starting tile info, later use to store the current tile the player is on
        this.across = startAcross;
        this.down = startDown;
        
        //convert tile coordinates into pixel coordinates
        this.xPos = this.across*tileSize;
        this.yPos = this.down*tileSize;
        
        //store size and speed
        this.size = size;
        this.speed = speed;

        // check rules for the tile the player wants to move to 
        // keep these variables unified across all tilemaps for simplicity
        this.tileRules = tileRules;
        this.tileSize = tileSize;

        //what direction the player will travel in
        this.dirX = 0;
        this.dirY = 0;

        // whether the player is currently moving
        this.isMoving = false;

        // the x/y of the tile the player is moving to
        this.tx = this.xPos; 
        this.ty = this.yPos;


    }

    setDirection() {
        // if the player isnt currently moving, run the following code to move it
        if (!this.isMoving){

            if (key === "w"){
                this.dirX = 0;
                this.dirY = -1;
                // up
            }
            if (key === "s"){
                this.dirX = 0;
                this.dirY = 1;
                // down
            }
            if (key === "a"){
                this.dirX = -1;
                this.dirY = 0;
                // left
            }
            if (key === "d"){
                this.dirX = 1;
                this.dirY = 0;
                // right
            }
            
            // after receiving direction, run check tile function to permit move
            this.checkTargetTile();
        }
    }

    checkTargetTile() {
        // get tile player is currently on
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);

        // calculate coords of the target tile
        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down + this.dirY;

        // check target is in map
        if (

            nextTileHorizontal >= 0 && //top of map
            nextTileHorizontal < numAcross && //bottom
            nextTileVertical >= 0 && // left edge
            nextTileVertical < numDown // right edge
        ) {
            // if in bounds, it is moveable
            // 1 refers to a tile it cannot move to 
            if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) { // vertical/horiz have to be swapped
                // calculate x+y coords of target tile
                this.tx = nextTileHorizontal * this.tileSize; 
                this.ty = nextTileVertical * this.tileSize;

                // set boolean true and let move
                this.isMoving = true;
            }
        }
    }

    move() {
        if (this.isMoving) { 
            //this code only activates when this.isMoving = true 
            // !this.xyz means when bool false 
            // Mulitply speed by direction to move in that direction
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            // check if player has reached targetX
            if (this.xPos === this.tx && this.yPos === this.ty) {
                // set the character to stop moving
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }
    }

    // displays player sprite
    display() {
        imageMode(CORNER);
        image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
}

// when a key is pressed, run the setDirection function
function keyPressed(){
    player.setDirection();
}