
// You can write more code here

/* START OF COMPILED CODE */

class playerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "bird1mid", frame);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 100;
		this.body.friction.x = 0;
		this.body.bounce.x = 1;
		this.body.allowRotation = false;
		this.body.setOffset(3, 6);
		this.body.setSize(12, 12, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
