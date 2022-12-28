
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
		this.enterState(Running);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	enterState(_state:any)
	{
		this.stateController.setState(_state);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
