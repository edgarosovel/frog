var game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
    backgroundColor: '#eee', // The background color
    scene: [ LobbyScene, GameScene ], // The name of the scene we created
    parent: 'game', // Create the game inside the <div id="game"> 
});