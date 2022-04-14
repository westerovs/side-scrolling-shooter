export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 400, 500, 'dragon', 'dragon1');
    /*
    * вызвать текущую сцену
    * добавить вызванный вручную префаб ↓
    * */
    this.scene.add.existing(this)
  }

}
