export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    
    this.velocity = 10
    this.init()
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
