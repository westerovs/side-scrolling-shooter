import Player from '../prefabs/Player.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
    this.player = null
  }
  
  create() {
    console.log('create Game Scene')
    this.#createBackground()
    this.#createDragon()
  }
  
  #createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0)
  }
  
  #createDragon() {
    this.player = new Player(this) // передаём всю сцену
    // this.add.image(400, 500, 'dragon', 'dragon1')
  }
}
