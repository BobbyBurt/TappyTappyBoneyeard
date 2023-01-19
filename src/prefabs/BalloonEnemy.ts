
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyPrefab from "./EnemyPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BalloonEnemy extends EnemyPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "soldiermid", frame);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private floatYTween!: Phaser.Tweens.Tween;
	private originalPos = new Phaser.Geom.Point(0, 0);

	start()
	{
		this.setScale(1);
		this.y -= 2;
			// tilemap offset correction

		this.body.allowGravity = false;

		this.originalPos.setTo(this.x, this.y);

	// animation test
		this.anims.create
		({
			key: 'idle',
			frames:
			[
				{ key: 'soldieronballoon' }
			],
			frameRate: 16,
			repeat: -1
		});
		this.play('idle');

		this.floatYTween = this.scene.tweens.addCounter
		({
			from: -10,
			to: 10,
			duration: 3000,
			ease: Phaser.Math.Easing.Quadratic.InOut,
			yoyo: true,
			repeat: -1
		});
	}

	update(): void
	{
		if (super.spin == 0)
		{
			this.y = this.originalPos.y + this.floatYTween.getValue();
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
