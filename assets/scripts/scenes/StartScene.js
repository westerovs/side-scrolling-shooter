export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start') // параметр старт, в качестве названия этой сцены
  }
  
  create() {
    this.createBackground()
  }
  
  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0)
  }
}
