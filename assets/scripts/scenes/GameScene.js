export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
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
    const centerWorldH = this.scale.baseSize._height / 2
    this.add.image(400, centerWorldH, 'dragon', 'dragon1')
  }
}
