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

	private kidProp!: Array<Phaser.GameObjects.Sprite>;
	private kidBloodEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private kidBloodEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;

	public get _scene()
	{
		return this.scene as Level;
	}

	public startSequnce(state: 'normal' | 'tired' | 'exhausted', playerCharacter: 'tapper' | 'puck' | 'gappy' | 'kid')
	{
		this.anims.create({key:'normal', repeat: 0,
		frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [2, 2, 0, 0, 1, 1, 2]})});
		this.anims.create({key:'tired', repeat: 0,
		frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [5, 5, 3, 3, 4, 4, 5]})});
		this.anims.create({key:'exhausted', repeat: 0,
		frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [8, 8, 6, 6, 7, 7, 8]})});

		this.anims.create({key:'puck', repeat: 0,
		frames: this.anims.generateFrameNames('pucamuc', { prefix: 'flap-very-tired/', zeroPad: 2, end: 5})});

		this.anims.create({key:'gappy', repeat: 0,
		frames: this.anims.generateFrameNames('gappy', { prefix: 'blush-flap-very-tired/', zeroPad: 2, end: 5})});
		
		if (playerCharacter === 'tapper')
		{
			this.play(state);
		}
		else if (playerCharacter === 'puck')
		{
			this.play('puck');
		}
		else if (playerCharacter === 'gappy')
		{
			this.play('gappy');
		}
		else if (playerCharacter === 'kid')
		{
			this.setVisible(false);
			
			this.kidProp = new Array();
			for (let i = 0; i < 6; i++)
			{
				this.kidProp.push(this._scene.add.sprite(this._scene.player.x, this._scene.player.y, 'kid', 'blush-flap-tired/0' + i));
				this._scene.physics.add.existing(this.kidProp[i], false);
				this._scene.mainLayer.add(this.kidProp[i]);
				let body = this.kidProp[i].body as Phaser.Physics.Arcade.Body;
				body.setAllowGravity(true);
				body.setVelocity(Phaser.Math.RND.between(-200, 200), Phaser.Math.RND.between(-400, 50));

				this.kidBloodEmitterManager = this.scene.add.particles('puck-blood');
				let _scene = this.scene as Level
				_scene.mainLayer.add(this.kidBloodEmitterManager);
				this.kidBloodEmitterManager.setDepth(-30);
				this.kidBloodEmitter = this.kidBloodEmitterManager.createEmitter({ on: false });

				this.kidBloodEmitter = this.kidBloodEmitterManager.createEmitter
				({
					lifespan: 2000,
					speed: { min: 0, max: 200 },
					angle: { min: 0, max: 360 },
					// alpha: { start: 1, end: 0 },
					scale: .3,
					gravityY: 300,
					quantity: 7,
					on: false
				});
				this.kidBloodEmitter.explode(5, this._scene.player.x, this._scene.player.y);
			}
		}
		

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
		if (this.kidProp !== undefined)
		{
			this.kidProp.forEach((sprite, index) =>
			{
				sprite.rotation += (index - 2) * .05;
			});
		}
	}
}