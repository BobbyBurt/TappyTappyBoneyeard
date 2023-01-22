
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface BulletPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class BulletPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bullet", frame);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(3, 3, false);

		/* START-USER-CTR-CODE */


		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	timer: Phaser.Time.TimerEvent | undefined;

	startTimer()
	{
		this.timer = new Phaser.Time.TimerEvent({ delay: 10000, loop: false, callback: () =>
		{	
			this.setActive(false);
			this.setVisible(false);
		}});

		this.scene.time.addEvent(this.timer);

		// TODO: does this timer need to be removed from the scene as well?
	}

	appear()
	{
		this.setActive(true);
		this.setVisible(true);

		this.startTimer();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
