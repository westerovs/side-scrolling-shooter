import StartScene from './scenes/StartScene.js'

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [StartScene]
}

const game = new Phaser.Game(config)
