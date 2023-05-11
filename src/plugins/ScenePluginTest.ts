export default class ScenePluginTest extends Phaser.Plugins.ScenePlugin {
  constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager) {
    super(scene, pluginManager, "scene-plugin-test");

    console.debug("scene plugin booting. scene: " + scene.scene.key);
  }

  boot() {
    var eventEmitter = this.systems.events;
    eventEmitter.on("destroy", this.destroy, this);
    eventEmitter.on("update", this.update, this);

    this.scene.input.keyboard.on("keydown-A", () => {
      console.debug("A");
      this.scene.events.emit("A");
    });
  }

  testFunction(text: Phaser.GameObjects.Text) {
    console.debug("plugin funciton called");

    text.alpha = 0.5;
  }

  update(time: number, delta: number) {
    // console.log("update!");
  }
}
