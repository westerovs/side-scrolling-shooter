import Enemy from './Enemy.js';

// наследуется от физической группы
export default class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super()
    this.scene = scene
    this.countEmeny = 3
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.tick,
      callbackScope: this,
    })
    
  }
  
  createEnemy() {
    const enemy = Enemy.generate(this.scene)
    this.add(enemy)
    enemy.move()
  }
  
  tick() {
    if (this.getLength() >= this.countEmeny) {
      this.timer.remove()
    } else {
      this.createEnemy()
    }
  }
}
