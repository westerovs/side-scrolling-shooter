class StartScene extends Phaser.Scene {
    constructor() {
        super('Start');
    }
    preload() {
        this.load.image('bg', 'assets/sprites/background.png');
    }
    create() {
        this.createBackground();
    }
    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
    }
}