export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start') // параметр старт, в качестве названия этой сцены
  }
  
  create() {
    this.#createBackground()
    this.#createText()
    this.#setEvents()
  }
  
  #createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0)
  }
  
  #createText() {
    const centerWorld = this.scale.baseSize._width / 2
    this.add.text(centerWorld, 500, 'Tap to Start', {
      font: '60px'
    }).setOrigin(0.5)
  }
  
  #setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start('Game')
    })
  }
  
}
