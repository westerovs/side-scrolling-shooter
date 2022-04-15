/*
* класс игрока префаб
* Префаб -- это некоторый класс, который мы делаем наследником от
* базового класса
* */

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 100, 500, 'dragon', 'dragon1');
    
    this.velocity = 500
    this.init()
  }

  init() {
    this.scene.add.existing(this)         // добавляет спрайт на сцену
    this.scene.physics.add.existing(this) // добавляет физическое тело
    this.body.enable = true
  }
  
  move() {
    this.body.setVelocity(0)
  
    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity)
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity)
    }
    
    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity)
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity)
    }
  }
}
