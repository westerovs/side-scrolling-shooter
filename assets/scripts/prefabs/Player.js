/*
* класс игрока префаб
* Префаб -- это некоторый класс, который мы делаем наследником от
* базового класса
* */

import Enemy from './Enemy.js';
import Fires from './Fires.js';

export default class Player extends Enemy {
  constructor(scene) {
    super(scene, 100, 500, 'dragon', 'dragon1');
    
    this.velocity = 500
    this.init()
  
    this.timer = this.scene.time.addEvent({
      delay: 300,
      loop: true,
      callback: this.#fire,
      callbackScope: this,
    })
  }

  init() {
    super.init()
  }
  
  #fire() {
    this.fires = new Fires(this.scene)
    this.fires.createFire(this)
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
