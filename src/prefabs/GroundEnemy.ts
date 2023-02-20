
/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyPrefab from "./EnemyPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GroundEnemy extends EnemyPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?: GunDirection, parasol?: boolean, mine?: boolean, alwaysFire?: boolean, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, gunDirection, parasol, mine, alwaysFire, texture || "soldiermid", frame);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private floatYTween!: Phaser.Tweens.Tween;

	start()
	{
		this.body.allowGravity = false;

	// animation
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

	update(): void
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
