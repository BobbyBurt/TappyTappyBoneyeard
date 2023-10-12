/* START OF COMPILED CODE */

import Phaser from "phaser";
import SoundManager from "~/components/SoundManager";
import Level from "~/scenes/Level";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface EnemyPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class EnemyPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?:GunDirection, parasol?: boolean, mine?: boolean, alwaysFire?: boolean, shieldFront?: boolean, shieldBack?:boolean, enemyType?: 'ground' | 'pogo' | 'balloon' | 'goal', texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "soldiermid", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(15, 20, false);
		// this.body.setGravity(0, 0);
		// this.body.setBounce(0, 1);

		/* START-USER-CTR-CODE */

		this.enemyType = enemyType;
		
		this.originalPos = new Phaser.Math.Vector2(x, y);

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

		if (gunDirection)
		{
			this.gunDirection! = gunDirection;
		}
		if (parasol)
		{
			this._hasParasol = true;
		}
		if (mine)
		{
			this.isMine = true;
		}
		if (alwaysFire)
		{
			this.alwaysFire = true;
		}
		if (shieldFront)
		{
			this._hasShieldFront = true;
			console.debug('shield front');
		}
		if (shieldBack)
		{
			this._hasShieldBack = true;
			console.debug('shield back');
		}

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private gun!: Phaser.GameObjects.Image;
	public gunDirection!: GunDirection;
	/** is there an active timer event for the spray fire? */
	public gunSprayTimer!: Phaser.Time.TimerEvent;
	public gunCoolDownTimer!: Phaser.Time.TimerEvent;
	public alwaysFire: boolean;

	private _parasol!: Phaser.GameObjects.Image;
	protected get parasol() { return this._parasol }
	private _hasParasol = false;
	public get hasParasol() { return this._hasParasol }

	private _shieldFront!: Phaser.GameObjects.Image;
	protected get shieldFront() { return this._shieldFront }
	private _hasShieldFront = false;
	public hasShieldFront() { return this._hasShieldFront };

	private _shieldBack!: Phaser.GameObjects.Image;
	protected get shieldBack() { return this._shieldBack }
	private _hasShieldBack = false;
	public hasShieldBack() { return this._hasShieldBack };

	/** If true, enemy explodes on player contact even in attack states. */
	public isMine: boolean = false;
	private grenadeProp: Phaser.GameObjects.Image;

	public bombCooldownTimer!: Phaser.Time.TimerEvent;
	/** 
	 * Can be used to check if this is a bomb enemy, as it will be defined. 
	 * 
	 * Can be used to check if bomb can be dropped, as this will be visible.
	 * */
	public bombProp!: Phaser.GameObjects.Image;

	/** rotation applied to sprite when falling. */
	public spin: number = 0;
	public isFalling() { return (this.spin != 0) }
	public getSpin() { return this.spin }

	/** for debugging */
	public enemyListIndex = -1;

	public isGoal = false;

	private originalPos!: Phaser.Math.Vector2;

	public enemyType: 'ground' | 'pogo' | 'balloon' | 'goal' | undefined;

	public gunfireSFX!: Phaser.Sound.BaseSound;

	public get _scene()
	{
		return this.scene as Level;
	}

	/** update which runs on all enemy classes. Each enemy class has it's own start() for specific
	 *  setup */
	private enemyStart()
	{	
		this.gunfireSFX = this.scene.sound.add('gunfire', {volume: .3});
		this.gunfireSFX.stop();

		this.setScale(1);
		this.y -= 2;
		this.body.setAllowGravity(false);
		this.body.setVelocityY(0);
			// For some reason enemies sometimes float down if this isn't set.

	// create timers and have their progress set to complete
		this.gunSprayTimer = this.scene.time.addEvent({delay: 1});
		this.gunCoolDownTimer = this.scene.time.addEvent({delay: 1});

		if (this.alwaysFire)
		{
			// const scene = this.scene as Level;
			// scene.setGunFire(this, true);
			this.scene.time.addEvent({ delay: 2, callback: () =>
			{
				const scene = this.scene as Level;
				scene.setGunFire(this, true);
			}});
		}

		if (this.gunDirection)
		{
			this.createGun();
		}

		if (this._hasParasol)
		{
			this.createParasol();
		}

		if (this.isMine)
		{
			this.createGrenade();
		}

		if (this.hasShieldFront())
		{
			this.createShieldFront();
		}
		if (this.hasShieldBack())
		{
			this.createShieldBack();
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
				// this.gun.setPosition(this.x, this.y);
			}
		}
		if (this.hasParasol)
		{
			this.parasol.rotation += this.spin * 3;
		}

		if (this.hasShieldFront())
		{
			this.shieldFront.rotation += this.spin * 4;
			
			// this.shieldFront.setPosition(this.x + (this.flipX ? -10 : 10), this.y);
		}
		if (this.hasShieldBack())
		{
			this.shieldBack.rotation += this.spin * 4;
			// this.shieldBack.setPosition(this.x + (this.flipX ? 10 : -10), this.y);
		}

		if (this.bombProp && this.spin === 0)
		{
			this.bombProp.setPosition(this.x, this.y + 10);
		}

		if (this.isMine)
		{
			this.grenadeProp.rotation += this.spin * 2;
		}
	}

	protected offsetProps(x: number, y: number)
	{
		if (this.isFalling())
		{
			return;
		}

		if (this.isMine)
		{
			this.grenadeProp.setPosition(this.x + x, this.y + (-3) + y);
		}
		if (this.gun)
		{
			this.gun.setPosition(this.x + (this.flipX ? 8 : -8) + x, this.y + (+5) + (this.gunDirection === 'down' ? 8 : 0) + y);
		}
		if (this.hasParasol)
		{
			this.parasol.setPosition(this.x + x, this.y + (-15) + y);
		}
		if (this.hasShieldFront())
		{
			this.shieldFront.setPosition(this.x + (this.flipX ? -8 : 8) + x, this.y + y);
		}
		if (this.hasShieldBack())
		{
			this.shieldBack.setPosition(this.x + (this.flipX ? 8 : -8) + x, this.y + y);
		}
	}

	protected offsetPropsFloat(y: number)
	{
		if (this.isFalling())
		{
			return;
		}

		let x = 0;

		if (this.isMine)
		{
			this.grenadeProp.setPosition(this.x + (this.flipX ? 2 : -2) + x, this.y + (-1) + y);
		}
		if (this.gun)
		{
			if (this.gunDirection === 'forward')
			{
				this.gun.setPosition(this.x + (this.flipX ? 8 : -8) + x, this.y + (+5) + y);
			}
			else
			{

				this.gun.setPosition(this.x + x, this.y + (+5) + (this.gunDirection === 'down' ? 8 : 0) + y);
			}
		}
		if (this.hasParasol)
		{
			this.parasol.setPosition(this.x + x, this.y + (-15) + y);
		}
		if (this.hasShieldFront())
		{
			this.shieldFront.setPosition(this.x + (this.flipX ? -8 : 8) + x, this.y + y);
		}
		if (this.hasShieldBack())
		{
			this.shieldBack.setPosition(this.x + (this.flipX ? 8 : -8) + x, this.y + y);
		}
	}

	private createGun()
	{
		this.gun = this.scene.add.image(this.x, this.y, 'gun');
		this.scene.physics.add.existing(this.gun, false);
		this._scene.mainLayer.add(this.gun);
		this.gun.setDepth(-13);
		let _gunBody = this.gun.body as Phaser.Physics.Arcade.Body;
			// simply calling this.gun.body doesn't give me much to work with. There must be 
			// a better way to do this
		_gunBody.setAllowGravity(false);
		this.gun.setPosition(this.x, this.y);
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
				this.gun.setAngle(this.flipX? -90 : 90);
				break;
			}
			case 'down':
			{
				this.gun.setAngle(this.flipX? 90 : -90);
				break;
			}
		}
	}

	parasolBounce()
	{
		SoundManager.play('boing', this.scene);

		this.parasol.setTexture('parasol-2');
		this.scene.time.delayedCall(100, () =>
		{
			this.parasol.setTexture('parasol-3');
		});
		this.scene.time.delayedCall(200, () =>
		{
			this.parasol.setTexture('parasol');
		});
	}

	createParasol()
	{
		this._parasol = this.scene.add.sprite(this.x, this.y - 15, 'parasol');
		// this.parasol.setDepth(this.depth - 1);
		this.scene.physics.add.existing(this.parasol, false);
		this._scene.mainLayer.add(this._parasol);
		this._parasol.setDepth(-11)
		let _parasolBody = this.parasol.body as Phaser.Physics.Arcade.Body;
			// simply calling this.gun.body doesn't give me much to work with. There must be 
			// a better way to do this
		_parasolBody.setAllowGravity(false);
	}

	createShieldFront()
	{
		this._shieldFront = this.scene.add.image(this.x + (this.flipX ? -10 : 10), this.y, 'shield');
		this._shieldFront.setFlipX(this.flipX ? false : true );
		// this.parasol.setDepth(this.depth - 1);
		this.scene.physics.add.existing(this.shieldFront, false);
		this._scene.mainLayer.add(this._shieldFront);
		this._shieldFront.setDepth(-11);
		let _shieldFrontBody = this.shieldFront.body as Phaser.Physics.Arcade.Body;
			// simply calling this.gun.body doesn't give me much to work with. There must be 
			// a better way to do this
		_shieldFrontBody.setAllowGravity(false);
		this.shieldFront.setPosition(this.x + (this.flipX ? -10 : 10), this.y);


	}

	createShieldBack()
	{
		this._shieldBack = this.scene.add.image(this.x + (this.flipX ? 10 : -10), this.y, 'shield');
		this._shieldBack.setFlipX(this.flipX ? true : false );
		// this.parasol.setDepth(this.depth - 1);
		this.scene.physics.add.existing(this.shieldBack, false);
		this._scene.mainLayer.add(this._shieldBack);
		this._shieldBack.setDepth(-11);
		let _shieldBackBody = this.shieldBack.body as Phaser.Physics.Arcade.Body;
			// simply calling this.gun.body doesn't give me much to work with. There must be 
			// a better way to do this
		_shieldBackBody.setAllowGravity(false);
		this.shieldBack.setPosition(this.x + (this.flipX ? 10 : -10), this.y);

	}

	createGrenade()
	{
		this.grenadeProp = this.scene.add.image(this.x, this.y, 'bomb-mask');
		this.grenadeProp.setFlipX(this.flipX);
		this.scene.physics.add.existing(this.grenadeProp, false);
		this._scene.mainLayer.add(this.grenadeProp);
		this.grenadeProp.setDepth(-8);
		const grenadeBody = this.grenadeProp.body as Phaser.Physics.Arcade.Body;
		grenadeBody.setAllowGravity(false);
		this.grenadeProp.setPosition(this.x, this.y - 4);
	}

	createBombProp()
	{
		this.bombProp = this.scene.add.image(this.x, this.y + 10, 'bomb');
		this._scene.mainLayer.add(this.bombProp);
		this.bombProp.setDepth(-7);
	}

	/** activate fall behaviour
	 * 
	 * called by scene
	 */
	public hit(directionX: number, directionY: number)
	{
		this.gunfireSFX.stop();

		// reset balloon float offset
		if (this.enemyType === 'balloon')
		{
			this.setY(this.originalPos.y);
		}

		this.body.allowGravity = true;
			// since floating enemies have gravity disabled
		this.body.setVelocity(directionX, (directionY < -300 ? -300 : -150));
		// this.body.checkCollision.none = true;
		this.body.setAllowGravity(true);

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
		if (this.shieldFront)
		{
			let _shieldFrontBody = this.shieldFront.body as Phaser.Physics.Arcade.Body;
			_shieldFrontBody.setAllowGravity(true);
			_shieldFrontBody.setVelocity(directionX * 1.2, -205);
		}
		if (this.shieldBack)
		{
			let _shieldBackBody = this.shieldBack.body as Phaser.Physics.Arcade.Body;
			_shieldBackBody.setAllowGravity(true);
			_shieldBackBody.setVelocity(directionX * 1.3, -195);
		}
		if (this.bombProp)
		{
			if (this.bombProp.visible)
			{
				let scene = this.scene as Level
				const bombVelocity = new Phaser.Math.Vector2
					(scene.player.body.velocity.x * 1.3, (scene.player.body.velocity.y * 1.5) - 150);
				if (bombVelocity.y < -200)
					// player is diving
				{
					bombVelocity.y = 200;
				}
				scene.setBomb(this.x, this.y, this, bombVelocity, true);
			}
		}
		if(this.isMine)
		{
			// const grenadeBody = this.grenadeProp.body as Phaser.Physics.Arcade.Body;
			// grenadeBody.setAllowGravity(true);
			// grenadeBody.setVelocity(directionX * 1.5 , -100)

			this.grenadeProp.setVisible(false);
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
