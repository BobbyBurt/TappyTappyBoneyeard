
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface MinePrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class MinePrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, randomFlip?: boolean, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bomb-mask", frame);

		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.setOffset(2, 2);
		this.body.setSize(11, 11, false);

		/* START-USER-CTR-CODE */

		if (randomFlip)
			this.setFlip(Math.random() < .5, Math.random() < .5)

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
