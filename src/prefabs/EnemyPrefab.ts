/* START OF COMPILED CODE */

import Phaser from "phaser";
import Level from "~/scenes/Level";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnemyPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class EnemyPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?:GunDirection, parasol?: boolean, texture?: string, frame?: number | string) {
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
		if (parasol)
		{
			this._hasParasol = true;
		}

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private gun!: Phaser.GameObjects.Image;
	public gunDirection!: GunDirection;
	/** is there an active timer event for the spray fire? */
	public gunSprayTimer!: Phaser.Time.TimerEvent;
	public gunCoolDownTimer!: Phaser.Time.TimerEvent;

	private _parasol!: Phaser.GameObjects.Image;
	protected get parasol() { return this._parasol }
	private _hasParasol = false;
	public get hasParasol() { return this._hasParasol }

	/** rotation applied to sprite when falling. */
	private spin: number = 0;
	public isFalling() { return (this.spin != 0) }

	public get _scene()
	{
		return this.scene as Level;
	}

	/** update which runs on all enemy classes. Each enemy class has it's own start() for specific
	 *  setup */
	private enemyStart()
	{	
		this.setScale(1);
		this.y -= 2;
			// tilemap offset correction
			// TODO: this sometimes doesn't work? enemy floats above ground

	// create timers and have their progress set to complete
		this.gunSprayTimer = this.scene.time.addEvent({delay: 1});
		this.gunCoolDownTimer = this.scene.time.addEvent({delay: 1});

		if (this.gunDirection)
		{
			this.createGun();
		}

		if (this._hasParasol)
		{
			this.createParasol();
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
		if (this.hasParasol)
		{
			this.parasol.rotation += this.spin * 3;
		}
	}

	private createGun()
	{
		this.gun = this.scene.add.image(this.x, this.y, 'gun');
		this.scene.physics.add.existing(this.gun, false);
		this._scene.UICam.ignore(this.gun);
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

	createParasol()
	{
		this._parasol = this.scene.add.image(this.x, this.y - 15, 'parasol');
		// this.parasol.setDepth(this.depth - 1);
		this.scene.physics.add.existing(this.parasol, false);
		this._scene.UICam.ignore(this.parasol);
		let _parasolBody = this.parasol.body as Phaser.Physics.Arcade.Body;
			// simply calling this.gun.body doesn't give me much to work with. There must be 
			// a better way to do this
		_parasolBody.setAllowGravity(false);
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

		if (this.parasol)
		{
			let _parasolBody = this.parasol.body as Phaser.Physics.Arcade.Body;
			_parasolBody.setAllowGravity(true);
			_parasolBody.setVelocity(directionX * .8, -200)
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
