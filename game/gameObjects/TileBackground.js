class TileBackground {
    
    constructor(scene, TILE_BACKGROUND_CONFIG){
        this.scene = scene;
        var graphics = this.scene.add.graphics({ 
            lineStyle: { 
                width: TILE_BACKGROUND_CONFIG.BORDER_WIDTH, 
                color: TILE_BACKGROUND_CONFIG.BORDER_COLOR 
            }, 
            fillStyle: { 
                color: TILE_BACKGROUND_CONFIG.COLOR 
            }
        });

        for(var x = 0; x < 10; x++)
        {
            for(var y = 0; y < 10; y++)
            {
                var rect = new Phaser.Geom.Rectangle(x * 100, y * 100, 100, 100);
                graphics.fillRectShape(rect);
                graphics.strokeRectShape(rect)
            }
        }
    }

}