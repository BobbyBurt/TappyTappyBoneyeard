
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface BombPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class BombPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bird1egg", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(11, 12, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/** asdf */
	appear()
	{
		this.setActive(true);
		this.setVisible(true);
		this.body.setEnable(true);
		// this.body.reset(this.x, this.y);
	}

	/** asdf */
	disappear()
	{
		this.setActive(false);
		this.setVisible(false);
		this.body.setEnable(false);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
