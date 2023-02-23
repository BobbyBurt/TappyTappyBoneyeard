
/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyPrefab from "./EnemyPrefab";
import Level from "~/scenes/Level";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BalloonEnemy extends EnemyPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?: GunDirection, parasol?:  boolean, mine?: boolean, alwaysFire?: boolean, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, gunDirection, parasol, mine, alwaysFire, texture || "soldiermid", frame);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private floatYTween!: Phaser.Tweens.Tween;
	private originalPos = new Phaser.Geom.Point(0, 0);

	public plane: Phaser.GameObjects.Image;


	start()
	{
		this.body.allowGravity = false;
	}

	update(): void
	{
		
	}

	/** to be called upon scene reset, otherwise the update will still be called and likely 
	 * cause a crash.
	 * 
	 * Calls the same method in the parent class which has it's own update */
	removeUpdateListener()
	{
		this.scene.events.off(Phaser.Scenes.Events.UPDATE);
		this.scene.events.off(Phaser.Scenes.Events.UPDATE);
		super.removeUpdateListener();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
