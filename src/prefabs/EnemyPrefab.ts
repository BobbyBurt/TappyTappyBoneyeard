
type GunDirection = undefined | 'up' | 'upward' | 'forward' | 'downward' | 'down';

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnemyPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class EnemyPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?: GunDirection, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "soldiermid", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(15, 20, false);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.enemyStart, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.enemyUpdate, this);

		this.spin = 0;

		this.scene.time.addEvent
		({
			delay: 1,
			callback: () =>
			{
				// this.rotation += this.spin;
			},
			loop: true
		})

		if (gunDirection)
		{
			this.gun = this.scene.add.image(this.x, this.y, 'gun');
			this.gun.flipX = this.flipX;
			switch (gunDirection)
			{
				case 'forward':
				{
					this.gun.x += (this.gun.flipX? 10 : -10);
					break;
				}
				case 'upward':
				{
					this.gun.setTexture('gundiagonal');
					this.gun.x += (this.gun.flipX? 10 : -10);
					// this.gun.y += 7;

					break;
				}
				case 'downward':
				{
					this.gun.setTexture('gundiagonal');
					this.gun.setAngle(-90);
					this.gun.x += (this.gun.flipX? 10 : -10);
					this.gun.y += 7;
					break;
				}
				case 'up':
				{
					this.gun.setAngle(90);
					break;
				}
				case 'down':
				{
					this.gun.setAngle(-90);
					break;
				}
			}
		}

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private gun!: Phaser.GameObjects.Image;

	protected _spin: number = 0;
	public get spin() { return this._spin };
	private set spin(setSpin: number) { this._spin = setSpin };

	/** update which runs on all enemy classes. Each enemy class has it's own start() for specific
	 *  setup */
	enemyStart()
	{	
		this.setScale(1);
		this.y -= 2;
			// tilemap offset correction
	}

	/** update which runs on all enemy classes. Each enemy class has it's own update() for specific
	 *  behaviour */
	enemyUpdate()
	{
		this.rotation += this.spin;
	}

	hit(directionX: number, directionY: number)
	{
		this.body.allowGravity = true;
			// since floating enemies have gravity disabled
		this.body.setVelocity(directionX, -150);
		this.body.checkCollision.none = true;

		this.stop();
		this.setTexture('soldierfalling');
			// i suppose this should be its own animation
		this.spin = (directionX > 0? .1 : -.1);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
