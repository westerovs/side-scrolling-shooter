import Enemy from './Enemy.js';

// наследуется от физической группы
export default class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super()
    this.scene = scene
    
    this.countEnemies = 5
    this.countCreated = 0
    
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.#tick,
      callbackScope: this,
    })
  }
  
  #tick() {
    if (this.countCreated < this.countEnemies) {
      this.createEnemy()
    } else {
      this.timer.remove()
    }
  }
  
  createEnemy() {
    let enemy = this.getFirstDead() // получает первый мертвый объек
    
    if (!enemy) {
      console.log('creating new enemy')
      // если не получили getFirstDead, то создаём новый и добавляем в группу
      enemy = Enemy.generate(this.scene)
      this.add(enemy)
    } else {
      // если получили getFirstDead - то пересоздаём юнит
      console.log('reset existing enemy')
      enemy.reset()
    }
    
    enemy.move()
    ++this.countCreated
  }
}
