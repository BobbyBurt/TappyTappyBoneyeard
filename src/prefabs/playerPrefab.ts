type input = 'down' | 'up' | 'just-down' | 'just-up';

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import StateController from "~/states/StateController";

/* END-USER-IMPORTS */

export default interface playerPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class playerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bird1mid", frame);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 100;
		this.body.friction.x = 0;
		this.body.allowRotation = false;
		this.body.setOffset(3, 6);
		this.body.setSize(12, 12, false);

		/* START-USER-CTR-CODE */

		this.stateController = new StateController(this);
		this.stateController.setState('running');

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		let _this = this;

	// setup gamepad
		this.scene.input.gamepad.on('down', function 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number)
			{
				_this.gamepad = pad;
			});

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	stateController: StateController;

	private gamepad:Phaser.Input.Gamepad.Gamepad | undefined;

	/** set based on key, gamepad or mobile input */
	public jumpInput: input = 'up';
	private jumpKey: Phaser.Input.Keyboard.Key 
	= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	private jumpButton: number = 1;
	public jumpMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public punchInput: input = 'up';
	private punchKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
	private punchButton: number = 0;
	public punchCharged: boolean = true;
	public punchMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public uppercutInput: input = 'up';
	private uppercutKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	private uppercutButton: number = 5;
	public uppercutCharged: boolean = true;
	public uppercutMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public diveInput: input = 'up';
	private diveKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
	private diveButton: number = 2;
	public diveMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public eggInput: input = 'up';
	private eggKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
	private eggButton: number = 3;
	public eggMobileButton: boolean = false;
	/** set by scene based on egg state, determines is player can drop egg */
	public eggReady: boolean = true;

	/** updated by scene, used by states */
	public onFloor: boolean = true;
	/** updated by scene, used by states */
	public onWallLeft: boolean = false;
	/** updated by scene, used by states */
	public onWallRight: boolean = false;

	public moveSpeed = 120;
	public jumpForce = 250;
	public maxFlaps = 3;
		// TODO: should this be const? It would have to be outside the class

	public flapCharge: number = this.maxFlaps;

	start()
	{
		this.setVelocityX(this.moveSpeed);

		this.flipX = true;

		this.setName('player');
	}

	update()
	{	
		this.inputCheck();

		this.stateController.update();

	// punch charge
		if (this.onFloor && !this.punchCharged)
		{
			this.punchCharged = true;
		}

	// uppercut charge
		if (this.onFloor && !this.uppercutCharged)
		{
			this.uppercutCharged = true;
		}

	// jump charge
		if (this.onFloor && this.flapCharge != this.maxFlaps)
		{
			this.flapCharge = this.maxFlaps;
		}

		
	}

	/** update input values based on key / gamepad / mobile button state */
	inputCheck()
	{
	// jump
		if (this.gamepad?.isButtonDown(this.jumpButton) 
			|| this.jumpKey.isDown || this.jumpMobileButton)
		{
			if (this.jumpInput != 'just-down' && this.jumpInput != 'down')
			{
				this.jumpInput = 'just-down'
			}
			else
			{
				this.jumpInput = 'down'
			}
		}
		else
		{
			if (this.jumpInput != 'just-up' && this.jumpInput != 'up')
			{
				this.jumpInput = 'just-up'
			}
			else
			{
				this.jumpInput = 'up'
			}
		}

	// punch
		if (this.gamepad?.isButtonDown(this.punchButton) 
			|| this.punchKey.isDown || this.punchMobileButton)
		{
			if (this.punchInput != 'just-down' && this.punchInput != 'down')
			{
				this.punchInput = 'just-down'
			}
			else
			{
				this.punchInput = 'down'
			}
		}
		else
		{
			if (this.punchInput != 'just-up' && this.punchInput != 'up')
			{
				this.punchInput = 'just-up'
			}
			else
			{
				this.punchInput = 'up'
			}
		}

	// uppercut
		if (this.gamepad?.isButtonDown(this.uppercutButton)
		|| this.uppercutKey.isDown || this.uppercutMobileButton)
		{
			if (this.uppercutInput != 'just-down' && this.uppercutInput != 'down')
			{
				this.uppercutInput = 'just-down'
			}
			else
			{
				this.uppercutInput = 'down'
			}
		}
		else
		{
			if (this.uppercutInput != 'just-up' && this.uppercutInput != 'up')
			{
				this.uppercutInput = 'just-up'
			}
			else
			{
				this.uppercutInput = 'up'
			}
		}

	// dive
		if (this.gamepad?.isButtonDown(this.diveButton) 
			|| this.diveKey.isDown || this.diveMobileButton)
		{
			if (this.diveInput != 'just-down' && this.diveInput != 'down')
			{
				this.diveInput = 'just-down'
			}
			else
			{
				this.diveInput = 'down'
			}
		}
		else
		{
			if (this.diveInput != 'just-up' && this.diveInput != 'up')
			{
				this.diveInput = 'just-up'
			}
			else
			{
				this.diveInput = 'up'
			}
		}

	// egg
		if (this.gamepad?.isButtonDown(this.eggButton) 
			|| this.eggKey.isDown || this.eggMobileButton)
		{
			if (this.eggInput != 'just-down' && this.eggInput != 'down')
			{
				this.eggInput = 'just-down'
			}
			else
			{
				this.eggInput = 'down'
			}
		}
		else
		{
			if (this.eggInput != 'just-up' && this.eggInput != 'up')
			{
				this.eggInput = 'just-up'
			}
			else
			{
				this.eggInput = 'up'
			}
		}
	}


	/** 
	 * called by scene by enemy overlap. */
	hitEnemy(_enemy:Phaser.Types.Physics.Arcade.GameObjectWithBody)
		// TODO: specify type annotation
	{
		if (this.stateController.currentState.name == 'punch' 
			|| this.stateController.currentState.name == 'dive'
			|| this.stateController.currentState.name == 'uppercut')
		{
			_enemy.destroy();

			// TODO: have the enemy go flying or something cool
				// I can't set velocity on this type, but that's the type that the callback gives 
				// me.
		}
		else
		{
			this.reset();
		}
	}

	hitExplosion()
	{
		this.reset();
	}

	reset()
	{
		this.setPosition(351, 131);
		this.stateController.setState('airborne');
		this.setVelocity(this.moveSpeed, 0);
	}

	sqaush()
	{
		this.setScale(1, .3);

		this.scene.tweens.add
		({
			targets: this,
			scaleY: 1,
			duration: 300,
			ease: Phaser.Math.Easing.Quartic.Out
		});
			// TODO: replace this with acutal squash & stretch sprites
	}

	/**
	 * is the player against the wall in front of behind them?
	 * @param ahead or behind
	 * @returns on wall
	 */
	onWallFacing(ahead: boolean): boolean
	{
		if (ahead)
		{
			if (this.flipX)
			{
				return this.onWallRight;
			}
			else
			{
				return this.onWallLeft;
			}
		}
		else
		{
			if (this.flipX)
			{
				return this.onWallLeft;
			}
			else
			{
				return this.onWallRight;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
