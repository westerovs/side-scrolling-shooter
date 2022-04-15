import Player from '../prefabs/Player.js';
import { GAME_PARAMS } from '../consts.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  
    this.bg = null
    this.bgTilePositionSpeed = 0.5
    this.cursors = null
    this.player = null
  }
  
  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  
  }
  
  create() {
    console.log('create Game Scene')
    this.#createBackground()
    this.#createPlayer()
  }
  
  update() {
    this.player.move()
    this.bg.tilePositionX += this.bgTilePositionSpeed
  }
  
  #createBackground() {
    this.bg = this.add.tileSprite(0, 0, GAME_PARAMS.width, GAME_PARAMS.height, 'bg').setOrigin(0)
  }
  
  #createPlayer() {
    this.player = new Player(this) // передаём всю сцену
  }
}
