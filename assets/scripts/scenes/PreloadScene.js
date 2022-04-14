/*
* задача предзагрузить все игровые ассеты, которые только есть в игре
* */

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload')
  }
  
  preload() {

  }
  
  create() {
    console.log('create Start Scene')
    this.scene.start('Start')
  }
  
}
