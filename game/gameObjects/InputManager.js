class InputManager {
    
    constructor(scene){
        this.scene = scene;
        this.keyboard = this.scene.input.keyboard.createCursorKeys();
    }

    getInput( direction ) {
        if ( ! direction )                  return UP; //for first step if there is no
        if ( this.keyboard.right.isDown )   return RIGHT;
        if ( this.keyboard.left.isDown )    return LEFT;
        if ( this.keyboard.down.isDown )    return DOWN;
        if ( this.keyboard.up.isDown )      return UP;
        return direction; // if there no new input, return the last recorded direction
    }

}