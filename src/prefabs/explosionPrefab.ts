
/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class explosionPrefab extends Phaser.GameObjects.Ellipse {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 50, height ?? 50);

		this.isFilled = true;
		this.smoothness = 35;

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	timer: Phaser.Time.TimerEvent | undefined;

	startTimer()
	{
		this.timer = new Phaser.Time.TimerEvent({ delay: 60, loop: false, callback: () =>
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

// TODO: remove physics body once a better solution is settled on
