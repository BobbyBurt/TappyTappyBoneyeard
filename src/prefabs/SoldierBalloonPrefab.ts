
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface SoldierBalloonPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class SoldierBalloonPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "soldieronballoon", frame);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(16, 17, false);

		/* START-USER-CTR-CODE */
		
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	start()
	{
		this.setName('soldierBalloon');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
