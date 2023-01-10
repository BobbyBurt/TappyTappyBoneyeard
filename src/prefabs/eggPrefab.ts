
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface eggPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class eggPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bird1egg", frame);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 100;
		this.body.setSize(11, 12, false);

		/* START-USER-CTR-CODE */

		this.disable();

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	enable()
	{
		this.setActive(true);
		this.setVisible(true);
		this.body.setEnable(true);
	}

	disable()
	{
		this.setActive(false);
		this.body.setEnable(false);
		this.setVisible(false);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
