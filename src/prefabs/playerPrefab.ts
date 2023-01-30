type input = 'down' | 'up' | 'just-down' | 'just-up';

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Level from "~/scenes/Level";
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
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
	private punchButton: number = 2;
	public punchCharged: boolean = true;
	public punchMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public punchLeftInput: input = 'up';
	private punchLeftKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	private punchLeftButton: number = 14;
	public punchLeftCharged: boolean = true;
	public punchLeftMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public punchRightInput: input = 'up';
	private punchRightKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	private punchRightButton: number = 15;
	public punchRightCharged: boolean = true;
	public punchRightMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public uppercutInput: input = 'up';
	private uppercutKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	private uppercutButton: number = 12;
	public uppercutMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public diveInput: input = 'up';
	private diveKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	private diveButton: number = 13;
	public diveMobileButton: boolean = false;

	/** set based on key, gamepad or mobile input */
	public eggInput: input = 'up';
	private eggKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
	private eggButton: number = 0;
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
		this.flipX = true;

		this.setName('player');

		this.createAnimations();
		this.play('idle');
	}

	update()
	{	
	// punch charge
		if (this.onFloor && !this.punchCharged 
			&& this.stateController.currentState.name != 'punch' 
			&& this.stateController.currentState.name != 'uppercut')
		{
			this.punchCharged = true;
		}

	// jump charge
		if (this.onFloor && this.flapCharge != this.maxFlaps)
		{
			this.flapCharge = this.maxFlaps;
		}

		this.inputCheck();

		this.stateController.update();
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
		// if (this.gamepad?.isButtonDown(this.punchButton) 
		// 	|| this.punchKey.isDown || this.punchMobileButton)
		// {
		// 	if (this.punchInput != 'just-down' && this.punchInput != 'down')
		// 	{
		// 		this.punchInput = 'just-down'
		// 	}
		// 	else
		// 	{
		// 		this.punchInput = 'down'
		// 	}
		// }
		// else
		// {
		// 	if (this.punchInput != 'just-up' && this.punchInput != 'up')
		// 	{
		// 		this.punchInput = 'just-up'
		// 	}
		// 	else
		// 	{
		// 		this.punchInput = 'up'
		// 	}
		// }

	// punch left
		if (this.gamepad?.isButtonDown(this.punchLeftButton) 
			|| this.punchLeftKey.isDown || this.punchLeftMobileButton)
		{
			if (this.punchLeftInput != 'just-down' && this.punchLeftInput != 'down')
			{
				this.punchLeftInput = 'just-down'
			}
			else
			{
				this.punchLeftInput = 'down'
			}
		}
		else
		{
			if (this.punchLeftInput != 'just-up' && this.punchLeftInput != 'up')
			{
				this.punchLeftInput = 'just-up'
			}
			else
			{
				this.punchLeftInput = 'up'
			}
		}

	// punch right
		if (this.gamepad?.isButtonDown(this.punchRightButton) 
			|| this.punchRightKey.isDown || this.punchRightMobileButton)
		{
			if (this.punchRightInput != 'just-down' && this.punchRightInput != 'down')
			{
				this.punchRightInput = 'just-down'
			}
			else
			{
				this.punchRightInput = 'down'
			}
		}
		else
		{
			if (this.punchRightInput != 'just-up' && this.punchRightInput != 'up')
			{
				this.punchRightInput = 'just-up'
			}
			else
			{
				this.punchRightInput = 'up'
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

	// restart
		if (this.gamepad?.isButtonDown(9))
		{
			let _scene = this.scene as Level;

			_scene.resetLevel();
		}

	// level select
		if (this.gamepad?.isButtonDown(8))
		{
			let _scene = this.scene as Level;

			_scene.LoadLevelSelect();
		}

	// egg
		// if (this.gamepad?.isButtonDown(this.eggButton) 
		// 	|| this.eggKey.isDown || this.eggMobileButton)
		// {
		// 	if (this.eggInput != 'just-down' && this.eggInput != 'down')
		// 	{
		// 		this.eggInput = 'just-down'
		// 	}
		// 	else
		// 	{
		// 		this.eggInput = 'down'
		// 	}
		// }
		// else
		// {
		// 	if (this.eggInput != 'just-up' && this.eggInput != 'up')
		// 	{
		// 		this.eggInput = 'just-up'
		// 	}
		// 	else
		// 	{
		// 		this.eggInput = 'up'
		// 	}
		// }
	}

	/** resets the player to starting state
	 * 
	 * currently unused because it's done automatically by restarting the scene.
	 */
	reset()
	{	
		let _startPoint = this.scene.data.get('startPoint');
		this.setPosition(_startPoint.x, _startPoint.y);
		this.stateController.setState('running');
		this.setVelocity(0, 0);
		this.flipX = true;
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

	/** called on start to initialize animations */
	private createAnimations()
	{
		this.anims.create
		({
			key: 'flap',
			frames:
			[
				{ key: 'bird1squash' },
				{ key: 'bird1mid' },
				{ key: 'bird1stretch' },
				{ key: 'bird1stretch' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'no-more-flaps-flap',
				// TODO: think of a better name
			frames:
			[
				{ key: 'bird1squash' },
				{ key: 'bird1mid' },
				{ key: 'bird1stretch' },
				{ key: 'bird1stretch' },
				{ key: 'bird1squash' }
			],
			frameRate: 16,
			repeat: 0
		});
		
		this.anims.create
		({
			key: 'no-more-flaps',
				// TODO: think of a better name
			frames:
			[
				{ key: 'bird1squash' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'jump',
			frames:
			[
				{ key: 'bird1squash' },
				{ key: 'bird1squash' },
				{ key: 'bird1stretch' },
				{ key: 'bird1stretch' },
				{ key: 'bird1mid' },
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'running',
			frames:
			[
				{ key: 'bird1squash' },
				{ key: 'bird1squash' },
				{ key: 'bird1squash' },
				{ key: 'bird1mid' },
				{ key: 'bird1mid' },
				{ key: 'bird1mid' },
				{ key: 'bird1mid' },
				{ key: 'bird1mid' }
			],
			frameRate: 16,
			repeat: -1
		});

		this.anims.create
		({
			key: 'idle',
			frames:
			[
				{ key: 'bird1mid' },
				{ key: 'bird1mid' },
				{ key: 'bird1mid' },
				{ key: 'bird1mid' },
				{ key: 'bird1squash' },
				{ key: 'bird1squash' },
				{ key: 'bird1stretch' },
				{ key: 'bird1stretch' }
			],
			frameRate: 8,
			repeat: -1
		});

		this.anims.create
		({
			key: 'punch',
			frames:
			[
				{ key: 'bird1punch' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'dive',
			frames:
			[
				{ key: 'bird1dive' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'airborne',
			frames:
			[
				{ key: 'bird1mid' }
			],
			frameRate: 16,
			repeat: 0
		});
	}

	/** to be called upon scene reset, otherwise the update will still be called and likely 
	 * cause a crash */
	public removeUpdateListener()
	{
		this.off(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.off(Phaser.Scenes.Events.UPDATE, this.update, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
