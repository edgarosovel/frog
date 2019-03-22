class Lobby extends Phaser.Scene {

    constructor () {
      super('Lobby');
    }

    preload() {}
    
    create() {
      game.connection = new Colyseus.Client('ws://localhost:3333');
      game.connection.onOpen.add(this.startUI);
      game.connection.onError.add(function() {
        console.log('connection error');
      });
    }

    startUI(){
      game.UI = new UI();
      game.UI.awaitForStartButton(function () {
        game.userName = game.UI.getUserName();
        game.UI.hide();
        game.scene.start('Game');
      })
    }

    update() {
    }

  }