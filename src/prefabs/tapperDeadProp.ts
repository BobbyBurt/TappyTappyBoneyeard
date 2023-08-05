/* START OF COMPILED CODE */

import Phaser from "phaser";
import Level from "~/scenes/Level";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnemyPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class TapperDeadProp extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "soldiermid", frame);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 100;
		this.body.friction.x = 0;
		this.body.allowRotation = false;
		this.body.setOffset(3, 6);
		this.body.setSize(14, 12, false);
		this.body.setAllowGravity(false);

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.propUpdate, this);
	}

	private spinning = false;

	public get _scene()
	{
		return this.scene as Level;
	}

	public startSequnce(state: 'normal' | 'tired' | 'exhausted')
	{
		this.anims.create({key:'normal', repeat: 0,
		frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [2, 2, 0, 0, 1, 1, 2]})});
		this.anims.create({key:'tired', repeat: 0,
		frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [5, 5, 3, 3, 4, 4, 5]})});
		this.anims.create({key:'exhausted', repeat: 0,
		frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [8, 8, 6, 6, 7, 7, 8]})});
		
		this.play(state);

		this._scene.time.addEvent({ delay: 500, callback: () =>
		{
			this.body.setAllowGravity(true);
			this.body.setVelocity(0, -200);
			this.spinning = true;
		}});
	}

	propUpdate(): void
	{
		if (this.spinning)
		{
			this.rotation += .2;
		}
	}
}