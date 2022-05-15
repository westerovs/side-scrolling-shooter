import { GAME_PARAMS } from '../consts.js';
import MovableObject from './MovableObject.js';
import Fires from './Fires.js';

export default class Enemy extends MovableObject {
  static generate(scene) {
    const data = Enemy.generateAttributes()
    
    return new Enemy({
      scene,
      x      : data.x,
      y      : data.y,
      texture: 'enemy',
      frame  : data.frame,
      velocity: -250,
      bullet: {
        delay: 1000,
        texture: 'bullet',
        velocity: -500,
      },
      origin: {
        x: 0,
        y: 0.5,
      }
    }) // передаём всю сцену
  }
  
  static generateAttributes() {
    const x = GAME_PARAMS.width + 10
    const y = Phaser.Math.Between(50, GAME_PARAMS.height - 50)
    const frame = `enemy${ Phaser.Math.Between(1, 4) }`
    
    return {
      x,
      y,
      frame
    }
  }
  
  init(data) {
    super.init(data)
    
    this.setOrigin(data.origin.x, data.origin.y)
    this.fires = new Fires(this.scene)
    
    this.timer = this.scene.time.addEvent({
      delay: data.bullet.delay, // скорость огня
      loop: true,
      callback: this.createFire,
      callbackScope: this,
    })
    
    this.bullet = data.bullet
  }
  
  createFire() {
    this.fires.createFire(this)
  }
  
  // переопределяем метод reset
  reset() {
    // получить атрибуты
    const data = Enemy.generateAttributes()
    // вызвать конструктор базового класса
    super.reset(data.x, data.y)
    this.setFrame(data.frame)
  }
  
  isDead() {
    return (this.x < -this.width)
  }
}
