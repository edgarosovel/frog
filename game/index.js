class mainScene {
    preload() {
        this.load.image('player', 'assets/player.png');
    }
    
    create() {
        this.tileBackground =   new TileBackground(this, CONFIG.TILE_BACKGROUND);
        this.inputManager =     new InputManager(this);
        this.player =           new Player(this, CONFIG.PLAYER);
        // this.UI = new UI();
        this.leaderboard =      new Leaderboard(this, CONFIG.UI.LEADERBOARD);
        this.serverSimulator =  new ServerSimulator(this, CONFIG.GAME)
    }

    update(time, delta) {
        this.direction = this.inputManager.getInput(this.direction);
        var serverResponse = this.serverSimulator.update(delta, this.direction);
        console.log(serverResponse);
        if (!serverResponse) return;
        // this.leaderboard.setText(`FROM: (x: ${serverResponse.from.x}, y: ${serverResponse.from.y}) TO: (x: ${serverResponse.to.x}, y: ${serverResponse.to.y})`);
        this.player.move(serverResponse.from, serverResponse.to);
    }

  }

new Phaser.Game({
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
    backgroundColor: '#3498db', // The background color (blue)
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
});