import {GAME_PARAMS} from './consts.js';

import BootScene from './scenes/BootScene.js'
import PreloadScene from './scenes/PreloadScene.js'
import StartScene from './scenes/StartScene.js'
import GameScene from './scenes/GameScene.js'

/*
* создать класс игрока префабом
* Префаб -- это некоторый класс, который мы делаем наследником от
* базового класса
* */

const CONFIG = {
    type: Phaser.AUTO,
    width: GAME_PARAMS.width,
    height: GAME_PARAMS.height,
    scene: [BootScene, PreloadScene, StartScene, GameScene]
}

const GAME = new Phaser.Game(CONFIG)
