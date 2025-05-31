class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        //this.load.spritesheet("character", "1-bit-plat/Tilemap/monochrome_tilemap_transparent_packed.png", {
            //frameWidth: 32,
            //frameHeight: 32
        //});

        this.load.image("tilemap", "1-bit-plat/Tilemap/monochrome_tilemap_packed.png");
        this.load.tilemapTiledJSON("base_plat", "base_plat.tmj");

        this.load.spritesheet("tilemap_sheet", "1-bit-plat/Tilemap/monochrome_tilemap_packed.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.multiatlas("particles", "kenny-particles.json");
    }

    create() {
        this.anims.create({
            key: 'walk',
            frames: [{key: 'tilemap_sheet', frame: 241},{key: 'tilemap_sheet', frame: 243}],
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [
                {key: 'tilemap_sheet', frame: 240}
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames: [
                {key: 'tilemap_sheet', frame: 242}
            ],
        });

         this.scene.start("platformerScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}