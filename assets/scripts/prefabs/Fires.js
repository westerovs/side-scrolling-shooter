import Fire from './Fire.js'

export default class Fires extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    this.scene = scene
  }
  
  createFire(sprite) {
    let fire = this.getFirstDead()
    
    if (!fire) {
      // console.log('creating new fire')
      fire = Fire.generate(this.scene, sprite)
      this.add(fire)
    } else {
      // sprite.x + sprite.width / 2 → значит что пуля будет создаваться в правой части дракона
      fire.reset(sprite.x, sprite.y)
    }
  
    fire.move()
  }
}
