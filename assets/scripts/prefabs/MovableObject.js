/*
* Задача класса - общее перемещение для объектов
* */

export default class MovableObject extends Phaser.GameObjects.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame)
    
    // this.velocity = null
    this.init(data)
  }
  
  init(data) {
    this.scene.add.existing(this)         // добавляет спрайт на сцену
    this.scene.physics.add.existing(this) // добавляет физическое тело
    this.body.enable = true
    
    this.velocity = data.velocity
    // подписаться на update, который файзер кидает при каждом вызове update
    this.scene.events.on('update', this.#update, this)
  }
  
  reset(x, y) {
    // console.log('reset MovableObject')
    this.x = x
    this.y = y
    this.setAlive(true)
  }
  
  isDead() {
    return false
  }
  
  #update() {
    // если объект активен, но мёртв
    if (this.active && this.isDead()) {
      // console.log('deactivated');
      this.setAlive(false)
    }
  }
  
  setAlive(status) {
    // де/активировать физ.тело
    this.body.enable = status
    // показать/скрыть текстуру
    this.setVisible(status)
    // де/активировать объект
    this.setActive(status)
    
    // уничтожить пули противника, если они уничтожены (их вызывает timer)
    /*
      При деактивации объекта, если у него есть таймер, ставим его на паузу
      Если объект активирует, снимаем с паузы
    */
    
    if (this.timer) {
      this.timer.paused = !status
      // ↓ длинный вариант написания ↓
      // if (!status) {
      //   this.timer.paused = true
      // } else {
      //   this.timer.paused = false
      // }
    }
  }
  
  move() {
    this.body.setVelocityX(this.velocity)
  }
}
