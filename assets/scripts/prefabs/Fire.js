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
      velocity: 750
    }
    return new Fire(data)
  }
  
  init(data) {
    this.scene.add.existing(this)
    this.velocity = -data.velocity
  }
  
  move() {
    this.body.setVelocityX(-this.velocity)
  }
  
  reset() {
  
  }
}
