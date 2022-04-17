import {GAME_PARAMS} from './consts.js';

import BootScene from './scenes/preload/BootScene.js'
import PreloadScene from './scenes/preload/PreloadScene.js'
import StartScene from './scenes/StartScene.js'
import GameScene from './scenes/GameScene.js'

const CONFIG = {
    type: Phaser.AUTO,
    width: GAME_PARAMS.width,
    height: GAME_PARAMS.height,
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    physics: { // connect physics
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

const GAME = new Phaser.Game(CONFIG)
