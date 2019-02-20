class Leaderboard {
    
    constructor(scene, LEADERBORAD_CONFIG){
        this.scene = scene;
        this.leaderboard = this.scene.add.text(
            LEADERBORAD_CONFIG.X, 
            LEADERBORAD_CONFIG.Y, 
            'time: ', 
            LEADERBORAD_CONFIG.STYLE);
        this.leaderboard.setScrollFactor(0);
    }
    
    setText(txt){
        this.leaderboard.setText(txt);
    }
    
}