
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import StateController from "~/states/StateController";

/* END-USER-IMPORTS */

export default interface playerPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class playerPrefab extends Phaser.Physics.Arcade.Sprite {
	// TODO: refactor the class name, it bugs me

	stateController:StateController;

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bird1mid", frame);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 100;
		this.body.friction.x = 0;
		this.body.bounce.x = 1;
		this.body.allowRotation = false;
		this.body.setOffset(3, 6);
		this.body.setSize(12, 12, false);

		/* START-USER-CTR-CODE */
	
		this.stateController = new StateController(this);
		this.stateController.setState('running');

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private upKey: Phaser.Input.Keyboard.Key | undefined;
	private upDown = false;

	start()
	{
		this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	}

	update()
	{
		this.stateController.update();

		this.upDown = this.upDown || this.isKeyDown(this.upKey);

		if (this.upDown)
		{
			this.stateController.handleInput('flap')
		}

		// LEFT: just figuring out how to get input from this class and send it to the current state
	}

	/** this is a loophole past a TS annoyance */
	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			console.log('down');
			return key.isDown;
		}

		return false;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
