class ServerSimulator {
    
    constructor(scene, SERVER_CONFIG){
        this.scene = scene;
        this.direction = UP;
        this.playerPosition = { x: 50, y: 50 };
        // TIME VARS
        this.loopTimeConstant = SERVER_CONFIG.LOOP_TIME;
        this.movementDistance = SERVER_CONFIG.MOVEMENT_DISTANCE;
        this.loopTime = this.loopTimeConstant; //ms
    }

    getNewPositionPlayer(from_, direction){
        var to = {x: from_.x, y: from_.y};

        if      (direction == UP)       to.y -= this.movementDistance;
        else if (direction == DOWN)     to.y += this.movementDistance;
        else if (direction == LEFT)     to.x -= this.movementDistance;
        else if (direction == RIGHT)    to.x += this.movementDistance;

        return to;
    }

    update(delta, direction){
        if (direction) this.direction = direction;
        if (this.loopTime <= 0){
            this.loopTime = this.loopTimeConstant;//SERVER_CONFIG.LOOP_TIME no sirvió :( //ms
            var to = this.getNewPositionPlayer(this.playerPosition, this.direction);
            var lastPosition = this.playerPosition;
            this.playerPosition = to;
            return { from: lastPosition, to: to };
        }
        this.loopTime-=delta;
        return null;
        
    }
    
}