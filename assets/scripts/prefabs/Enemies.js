import Enemy from './Enemy.js';

// наследуется от физической группы
export default class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super()
    this.scene = scene
  }
  
  createEnemy() {
    console.log('createEnemy')
    
    const enemy = Enemy.generate(this.scene)
    this.add(enemy)
    enemy.move()
  }
}
