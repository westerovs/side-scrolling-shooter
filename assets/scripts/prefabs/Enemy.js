import { GAME_PARAMS } from '../consts.js';

export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    
    this.velocity = 50
    this.init()
  }
  
  static generate(scene) {
    const x = GAME_PARAMS.width + 10
    const y = Phaser.Math.Between(100, GAME_PARAMS.height - 100)
    const frameId = Phaser.Math.Between(1, 4)
    
    return new Enemy(scene, x, y, 'enemy', `enemy${frameId}`) // передаём всю сцену
  }

  init() {
    this.scene.add.existing(this)         // добавляет спрайт на сцену
    this.scene.physics.add.existing(this) // добавляет физическое тело
    this.body.enable = true
  }
  
  move() {
    this.body.setVelocityX(-this.velocity)
  }
}
