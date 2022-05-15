import { GAME_PARAMS } from '../consts.js';
import MovableObject from './MovableObject.js';

export default class Fire extends MovableObject {
  static generate(scene, source) {
    const data = {
      scene,
      x: source.x,
      y: source.y,
      texture: source.bullet.texture,
      velocity: source.bullet.velocity // скорость пуль
    }
    
    return new Fire(data)
  }
  
  isDead() {
    /*
      пуля вышла за край экрана, если пуля левее левой стороны || или пуля по координате x, правее правой стороны
      ((this.active && (this.x < -this.width)) || this.x > (GAME_PARAMS.width + this.width))
    */
    return ((this.x < -this.width)) || this.x > (GAME_PARAMS.width + this.width)
  }
}
