import { GAME_PARAMS } from '../consts.js';
import Player from '../prefabs/Player.js';
import Enemy from '../prefabs/Enemy.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  
    this.bg = null
    this.bgTilePositionSpeed = 0.1
    this.cursors = null
    this.player = null
    this.enemy = null
  }
  
  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }
  
  create() {
    console.log('create Game Scene')
    this.#createBackground()
    this.#createPlayer()
    this.#createEnemy()
  }
  
  update() {
    this.player.move()
    this.enemy.move()
    this.bg.tilePositionX += this.bgTilePositionSpeed
  }
  
  #createBackground() {
    this.bg = this.add.tileSprite(0, 0, GAME_PARAMS.width, GAME_PARAMS.height, 'bg').setOrigin(0)
  }
  
  #createPlayer() {
    this.player = new Player(this) // передаём всю сцену
  }
  
  #createEnemy() {
    this.enemy = new Enemy(this, GAME_PARAMS.width - 150, GAME_PARAMS.height / 2, 'enemy', 'enemy1') // передаём всю сцену
  }
}
