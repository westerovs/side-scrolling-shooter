import { GAME_PARAMS } from '../consts.js';

export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    
    this.velocity = 10 * 50
    this.init()
  }
  
  static generate(scene) {
    const x = GAME_PARAMS.width + 10
    const y = Phaser.Math.Between(50, GAME_PARAMS.height - 50)
    const frameId = Phaser.Math.Between(1, 4)
    
    return new Enemy(scene, x, y, 'enemy', `enemy${frameId}`) // передаём всю сцену
  }

  init() {
    this.scene.add.existing(this)         // добавляет спрайт на сцену
    this.scene.physics.add.existing(this) // добавляет физическое тело
    this.body.enable = true
    
    // подписаться на update, который файзер кидает при каждом вызове update
    this.scene.events.on('update', this.#update, this)
  }
  
  move() {
    this.body.setVelocityX(-this.velocity)
  }
  
  #update() {
    if (this.active && this.x < -this.width) {
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
    console.log('setAlive enemy:', status)
  }
}
