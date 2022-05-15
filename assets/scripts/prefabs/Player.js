/*
* класс игрока префаб
* Префаб -- это некоторый класс, который мы делаем наследником от
* базового класса
* */

import Enemy from './Enemy.js';
import Fires from './Fires.js';

export default class Player extends Enemy {
  constructor(scene) {
    super({
      scene,
      x: 100,
      y: 500,
      texture: 'dragon',
      frame: 'dragon1',
      velocity: 500
      }
    );
  
    this.timer = null
  }

  init(data) {
    super.init(data)
    this.fires = new Fires(this.scene)

    this.timer = this.scene.time.addEvent({
      delay: 300, // скорость огня
      loop: true,
      callback: this.createFire,
      callbackScope: this,
    })
  }
  
  createFire() {
    this.fires.createFire(this)
  }
  
  move() {
    this.body.setVelocity(0)
    
    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity)
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity)
    }
  
    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity)
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity)
    }
  }
}
