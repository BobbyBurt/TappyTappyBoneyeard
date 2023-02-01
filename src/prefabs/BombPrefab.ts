
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import EnemyPrefab from "./EnemyPrefab";

/* END-USER-IMPORTS */

export default interface BombPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class BombPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bomb", frame);

		scene.physics.add.existing(this, false);
		this.body.maxVelocity.y = 400;
		this.body.bounce.x = 0.4;
		this.body.bounce.y = 0.3;
		this.body.mass = 0.7;
		this.body.setSize(14, 18, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	public fuseTimer!: Phaser.Time.TimerEvent;
	public fuseVisualTimer!: Phaser.Time.TimerEvent;

	/** reference to enemy that dropped this bomb */
	public enemy!: EnemyPrefab;

	/** asdf */
	appear(enemy: EnemyPrefab): void
	{
		this.enemy = enemy;

		this.fuseTimer = this.scene.time.addEvent({delay: 1})
		this.fuseVisualTimer = this.scene.time.addEvent({delay: 1})

		this.setTexture('bomb');
		this.clearTint();

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
		this.body.setVelocity(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
