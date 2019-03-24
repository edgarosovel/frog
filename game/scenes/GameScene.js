class GameScene extends Phaser.Scene {

    constructor () {
        super('Game');
    }
    
    preload() {
        this.load.image('player', 'assets/player.png');
    }
    
    create() {
        this.tileBackground =   new TileBackground(this, CONFIG.TILE_BACKGROUND);
        this.inputManager =     new InputManager(this);
        this.player =           new Player(this, CONFIG.PLAYER);
        // joining a room by id
        // let room = client.join("KRYAKzRo2");
        
        // joining a room by name
        var room = game.connection.join("frogRoom");
        room.onJoin.add( function(){
            // Listening to entities being added/removed from the room:
            room.listen("entities/:id", (change) => {
                console.log(`new entity ${change.path.id}`, change.value);
            });

            // Listening to entity attributes being added/replaced/removed:
            room.listen("entities/:id/:attribute", (change) => {
                console.log(`entity ${change.path.id} changed attribute ${change.path.attribute} to ${change.value}`);
            });

            // Room state has been updated
            room.onStateChange.add(function(state) {
                console.log(room.name, "has new state:", state)
            })

            // Message broadcasted from server or directly to this client:
            room.onMessage.add(function(message) {
                console.log(client.id, "received on", room.name, message)
            });

            room.onLeave.add(function() {
                console.log(client.id, "left", room.name)
            });
        } );

        room.onError.add(function() {
            console.log(client.id, "couldn't join", room.name)
        });

        
    }

    update(time, delta) {
        this.direction = this.inputManager.getInput(this.direction);
        // var serverResponse = this.serverSimulator.update(delta, this.direction);
        var serverResponse = undefined;
        if (!serverResponse) return;
        // this.leaderboard.setText(`FROM: (x: ${serverResponse.from.x}, y: ${serverResponse.from.y}) TO: (x: ${serverResponse.to.x}, y: ${serverResponse.to.y})`);
        this.player.move(serverResponse.from, serverResponse.to);
    }

  }