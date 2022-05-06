import { GAME_PARAMS } from '../consts.js';

export default class Fire extends Phaser.GameObjects.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture)
  
    this.velocity = null
    this.init(data)
  }
  
  static generate(scene, source) {
    const data = {
      scene,
      x: source.x + source.width / 2,
      y: source.y,
      texture: 'fire',
      velocity: 550 // скорость пуль
    }
    
    return new Fire(data)
  }
  
  init(data) {
    this.scene.add.existing(this)
    this.velocity = -data.velocity
  
    // подписаться на update, который файзер кидает при каждом вызове update
    this.scene.events.on('update', this.#update, this)
  }
  
  move() {
    this.body.setVelocityX(-this.velocity)
  }
  
  reset(sprite) {
    console.log('reset fire')
  
    this.x = sprite.x + sprite.width / 2
    this.y = sprite.y
    this.#setAlive(true)
  }
  
  #update() {
    // условие подойдет и для пуль противников(левая часть) и для дракона (правая часть)
    if ((this.active && (this.x < -this.width)) || this.x > (GAME_PARAMS.width + this.width)) {
      // console.log('deactivated bullet');
      this.#setAlive(false)
    }
  }
  
  #setAlive(status) {
    // де/активировать физ.тело
    this.body.enable = status
    // показать/скрыть текстуру
    this.setVisible(status)
    // де/активировать объект
    this.setActive(status)
  }
}
