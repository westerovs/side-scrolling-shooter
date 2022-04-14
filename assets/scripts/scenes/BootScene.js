// задача класса = загрузить беэ и после загрузки, передать
// управление в прелоадер

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }
  
  preload() {
    this.load.image('bg', 'assets/sprites/background.png')
  }
  
  create() {
    // после загрузки BG передать управление в preload.scene
    this.scene.start('Preload')
  }
  
}
