import StartScene from './scenes/StartScene.js'
import BootScene from './scenes/BootScene.js'
import PreloadScene from './scenes/PreloadScene.js'
// preload    - прелоадер

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [BootScene, PreloadScene, StartScene]
}

const GAME = new Phaser.Game(config)
