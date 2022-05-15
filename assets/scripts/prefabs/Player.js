/*
* класс игрока префаб
* Префаб -- это некоторый класс, который мы делаем наследником от
* базового класса
* */

import Enemy from './Enemy.js';

export default class Player extends Enemy {
  constructor(scene) {
    super({
      scene,
      x       : 100,
      y       : 500,
      texture : 'dragon',
      frame   : 'dragon1',
      velocity: 500,
      bullet: {
        delay: 500,
        texture: 'fire',
        velocity: 750,
      },
      origin: {
        x: 1,
        y: 0.5,
      }
    });
  
    this.timer = null
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
