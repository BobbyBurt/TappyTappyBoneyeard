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

	public jumpInput: input = 'up';
	private jumpKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	private jumpButton: number = 1;

	public punchInput: input = 'up';
	private punchKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
	private punchButton: number = 0;

	/** updated by scene, used by states */
	public onFloor: boolean = true;
	/** updated by scene, used by states */
	public onWallLeft: boolean = false;
	/** updated by scene, used by states */
	public onWallRight: boolean = false;

	public moveSpeed = 120;
	public jumpForce = 250;

	start()
	{
		this.setVelocityX(this.moveSpeed);

		this.flipX = true;
	}

	update()
	{	
		this.inputCheck();

		this.stateController.update();

		
	}

	/** update input values based on key / gamepad button state */
	inputCheck()
	{
	// jump
		if (this.gamepad?.isButtonDown(this.jumpButton) || this.jumpKey.isDown)
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
		if (this.gamepad?.isButtonDown(this.punchButton) || this.punchKey.isDown)
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
