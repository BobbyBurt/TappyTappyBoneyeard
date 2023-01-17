
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnemyPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class EnemyPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "soldiermid", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(15, 20, false);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	start()
	{
		this.setScale(1);
		this.y -= 2;
			// tilemap offset correction

	// animation test
		this.anims.create
		({
			key: 'idle',
			frames:
			[
				{ key: 'soldiermid' },
				{ key: 'soldiermid' },
				{ key: 'soldiermid' },
				{ key: 'soldiermid' },
				{ key: 'soldiersquash' },
				{ key: 'soldiersquash' },
				{ key: 'soldierstretch' },
				{ key: 'soldierstretch' }
			],
			frameRate: 16,
			repeat: -1
		});
		this.play('idle');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
