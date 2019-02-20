class Player {
    
    constructor(scene, PLAYER_CONFIG){
        this.scene = scene;
        this.player = this.scene.add.sprite(
            PLAYER_CONFIG.X,
            PLAYER_CONFIG.Y,
            PLAYER_CONFIG.SPRITE
        ).setScale(PLAYER_CONFIG.SCALE);
        this.scene.cameras.main.startFollow(this.player);
        this.movementTime = PLAYER_CONFIG.MOVEMENT_TIME;
        this.movementEase = PLAYER_CONFIG.MOVEMENT_EASE;
        this.movementDelay = PLAYER_CONFIG.MOVEMENT_DELAY;
    }

    move(from_, to){
        if (this.movement) this.movement.stop();

        // this.player.x = from_.x;
        // this.player.y = from_.y;

        this.movement = this.scene.tweens.add({
            targets: this.player,
            x: to.x,
            y: to.y,
            duration: this.movementTime,
            ease: this.movementEase,
            delay: this.movementDelay
        });
    }
}