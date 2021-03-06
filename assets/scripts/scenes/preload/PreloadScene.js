/*
* задача предзагрузить все игровые ассеты, которые только есть в игре
* */

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload')
  }
  
  preload() {
    this.load.atlas('dragon', 'assets/sprites/dragon.png', 'assets/sprites/dragon.json')
    this.load.atlas('enemy',  'assets/sprites/enemy.png', 'assets/sprites/enemy.json')
    this.load.image('fire',  'assets/sprites/fire.png')
    this.load.image('bullet',  'assets/sprites/bullet.png')
  }
  
  create() {
    this.scene.start('Start')
  }
  
}
