import { GAME_PARAMS } from '../consts.js';

export default class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    
    this.velocity = 10 * 50
    this.init()
  }
  
  static generateAttributes() {
    const x = GAME_PARAMS.width + 10
    const y = Phaser.Math.Between(50, GAME_PARAMS.height - 50)
    const frameId = Phaser.Math.Between(1, 4)
    
    return {
      x, y, frameId
    }
  }
  
  static generate(scene) {
    const data = Enemy.generateAttributes()
    return new Enemy(scene, data.x, data.y, 'enemy', `enemy${data.frameId}`) // передаём всю сцену
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
  
  reset() {
    const data = Enemy.generateAttributes()
    
    this.x = data.x
    this.y = data.y
    this.setFrame(`enemy${data.frameId}`) // установить текстуру
    this.#setAlive(true)
  }
  
  #update() {
    if (this.active && this.x < -this.width) {
      console.log('deactivated');
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
