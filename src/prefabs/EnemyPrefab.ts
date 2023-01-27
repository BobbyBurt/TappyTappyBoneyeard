/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnemyPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class EnemyPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?:GunDirection, texture?: string, frame?: number | string) {
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
		});

		this.gunDirection = gunDirection;

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private gun!: Phaser.GameObjects.Image;
	public gunDirection!: GunDirection;
	/** set and used by scene */
	public firingGun = false;

	/** rotation applied to sprite when falling. */
	private spin: number = 0;
	public isFalling() { return (this.spin != 0) }

	/** update which runs on all enemy classes. Each enemy class has it's own start() for specific
	 *  setup */
	private enemyStart()
	{	
		this.setScale(1);
		this.y -= 2;
			// tilemap offset correction
			// TODO: this sometimes doesn't work? enemy floats above ground

		if (this.gunDirection)
		{
			this.createGun();
		}
	}

	/** update which runs on all enemy classes. Each enemy class has it's own update() for specific
	 *  behaviour */
	private enemyUpdate()
	{
		this.rotation += this.spin;
		if (this.gun)
		{
			this.gun.rotation += this.spin * 3;
			if (this.spin == 0)
			{
				this.gun.setPosition(this.x, this.y)
			}
		}
	}

	private createGun()
	{
		this.gun = this.scene.add.image(this.x, this.y, 'gun');
				// TODO: this needs to be added to the mainLayer, but we can't access it's variable
			this.scene.physics.add.existing(this.gun, false);
			let _gunBody = this.gun.body as Phaser.Physics.Arcade.Body;
				// simply calling this.gun.body doesn't give me much to work with. There must be 
				// a better way to do this
			_gunBody.setAllowGravity(false);
			this.gun.flipX = this.flipX;
			switch (this.gunDirection)
			{
				case 'forward':
				{
					this.gun.x += (this.flipX? 10 : -10);
					break;
				}
				case 'upward':
				{
					this.gun.setTexture('gundiagonal');
					this.gun.x += (this.flipX? 10 : -10);
					// this.gun.y += 7;

					break;
				}
				case 'downward':
				{
					this.gun.setTexture('gundiagonal');
					this.gun.setAngle(-90);
					this.gun.x += (this.flipX? 10 : -10);
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

	/** activate fall behaviour
	 * 
	 * called by scene
	 */
	public hit(directionX: number, directionY: number)
	{
		this.body.allowGravity = true;
			// since floating enemies have gravity disabled
		this.body.setVelocity(directionX, -150);
		this.body.checkCollision.none = true;

		this.stop();
		this.setTexture('soldierfalling');
			// i suppose this should be its own animation
		this.spin = (directionX > 0? .1 : -.1);

		if (this.gun)
		{
			let _gunBody = this.gun.body as Phaser.Physics.Arcade.Body;
			_gunBody.setAllowGravity(true);
			_gunBody.setVelocity(directionX * 1.2, -170)
		}
	}

	/** to be called upon scene reset, otherwise the update will still be called and likely 
	 * cause a crash */
	public removeUpdateListener()
	{
		this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.enemyStart, this);
		this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.enemyUpdate, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
