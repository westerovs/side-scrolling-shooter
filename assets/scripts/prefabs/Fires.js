import Fire from './Fire.js'

export default class Fires extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    this.scene = scene
  }
  
  
  
  createFire(sprite) {
    let fire = this.getFirstDead()
  
    if (!fire) {
      console.log('creating new fire')
      fire = Fire.generate(this.scene, sprite)
      this.add(fire)
    } else {
      console.log('reset existing fire')
      fire.reset()
    }
  
    fire.move()
  }
}
