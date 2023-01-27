
type GunDirection = undefined | 'up' | 'upward' | 'forward' | 'downward' | 'down';

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyPrefab from "./EnemyPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BalloonEnemy extends EnemyPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?: GunDirection, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, gunDirection, texture || "soldiermid", frame);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private floatYTween!: Phaser.Tweens.Tween;
	private originalPos = new Phaser.Geom.Point(0, 0);

	public balloon!: Phaser.GameObjects.Image;

	start()
	{
		this.body.allowGravity = false;

		this.originalPos.setTo(this.x, this.y);

	// create balloon
		this.balloon = this.scene.add.image(this.x, this.y - 30, 'balloon');
		this.scene.physics.add.existing(this.balloon);
		let _balloonBody = this.balloon.body as Phaser.Physics.Arcade.Body;
		_balloonBody.setAllowGravity(false);
		_balloonBody.setGravityY(-550);
		_balloonBody.setMaxVelocityY(60);

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
		if (!super.isFalling())
		{
			this.y = this.originalPos.y + this.floatYTween.getValue();
			this.balloon.setY((this.originalPos.y - 30) + this.floatYTween.getValue());
		}
		else
		{
			let _balloonBody = this.balloon.body as Phaser.Physics.Arcade.Body;
			_balloonBody.setAllowGravity(true);
				/** it would be best if super.hit() also triggered this behaviour. if there isn't a
				 * good way to do it then i can set up the balloon in EnemyPrefab, but it would 
				 * be better here if most enemies don't use it. */
		}
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
