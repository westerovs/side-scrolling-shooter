import Player from '../prefabs/Player.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')

    this.cursors = null
    this.player = null
  }
  
  create() {
    console.log('create Game Scene')
    this.#createBackground()
    this.#createPlayer()
    this.#initCursors()
  }
  
  update() {
    this.player.move()
  }
  
  #createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0)
  }
  
  #createPlayer() {
    this.player = new Player(this) // передаём всю сцену
  }
  
  #initCursors() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }
}
