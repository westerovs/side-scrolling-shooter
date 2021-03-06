import { GAME_PARAMS } from '../consts.js'
import Player from '../prefabs/Player.js'
import Enemies from '../prefabs/Enemies.js'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  
    this.bg = null
    this.bgTilePositionSpeed = 0.1
    this.cursors = null
    this.player  = null
    this.enemies = null
  }
  
  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }
  
  create() {
    this.#createBackground()
    this.#createPlayer()
    this.#createEnemies()
    
    this.#addOverlap()
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
  
  #createEnemies() {
    this.enemies = new Enemies(this) // передаём всю сцену
    this.enemies.createEnemy()
  }
  
  // тут все правила столкновений
  #addOverlap() {
    // overlap метод - регулирует правила столкновения 2-х объектов
    // проверяем столкновение группы огней игрока с группой enemies
    this.physics.add.overlap(this.player.fires, this.enemies, this.#onOverlap, undefined, this)
  }
  
  #onOverlap(source, target) {
    console.log(source, target)
    console.log('babax')
  
    source.setAlive(false)
    target.setAlive(false)
  }
}
