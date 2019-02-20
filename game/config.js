const CONFIG = {

    TILE_BACKGROUND : {
        COLOR: 0xf22613,
        SIZE: 100,
        BORDER_WIDTH: 1,
        BORDER_COLOR: 0x81cfe0,
    },

    PLAYER : {
        X: 50,
        Y: 50,
        SCALE: 0.13,
        SPRITE: 'player',
        MOVEMENT_TIME: 200, //ms (this might be provided by server)
        MOVEMENT_EASE: 'Sine.easeInOut',
        MOVEMENT_DELAY: 0
    },

    UI : {
        LEADERBOARD : {
            X: 20,
            Y: 20,
            STYLE: { 
                font: '20px Arial', // Leave in lowercase
                fill: '#fff' // Leave in lowercase
            }
        }
    },

    GAME : {
        LOOP_TIME: 800,
        MOVEMENT_DISTANCE: 100
    }

}

const UP    = 'UP';
const DOWN  = 'DOWN';
const LEFT  = 'LEFT';
const RIGHT = 'RIGHT';
