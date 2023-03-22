type input = 'down' | 'up' | 'just-down' | 'just-up';

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import Level from "~/scenes/Level";
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
		this.body.setSize(14, 12, false);

		/* START-USER-CTR-CODE */

		this.stateController = new StateController(this, this.scene as Level);

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
	private levelScene: Level;

	public lockInput = false;

	private gamepad:Phaser.Input.Gamepad.Gamepad | undefined;

	public moveSpeed = 120;
	// I want to make the game faster, but increasing this causes the graphics to flicker

	/** Replaces sprite & animations with debug sprite in dev mode. */
	private debugImage = false;

// jump

	/** set based on key, gamepad or mobile input */
	public jumpInput: input = 'up';
	private jumpKey: Phaser.Input.Keyboard.Key 
	= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	private jumpButton: number = 1;
	public jumpMobileButton: boolean = false;

	/** applies to flaps */
	public jumpForce = 250;

	public maxFlaps = 2;
	/** How many flaps can the player do? */
	public flapCharge: number = this.maxFlaps;

// punch

	/** set based on key, gamepad or mobile input */
	public punchInput: input = 'up';
	private punchKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
	private punchButton: number = 0;
	public punchCharged: boolean = true;
	public punchMobileButton: boolean = false;
	public punchCooldownTimer: Phaser.Time.TimerEvent;

	public punchSpeed = 300;
	/** effected by hitting targets */
	public variablePunchSpeed = 0;

// uppercut

	/** set based on key, gamepad or mobile input */
	public uppercutInput: input = 'up';
	private uppercutKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
	private uppercutButton: number = 12;
	public uppercutMobileButton: boolean = false;

	public uppercutSpeed = 325;
	public reducedUppercutSpeed = 200;
	public variableUppercutSpeed = 325;

// dive

	/** set based on key, gamepad or mobile input */
	public diveInput: input = 'up';
	private diveKey: Phaser.Input.Keyboard.Key 
		= this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
	private diveButton: number = 13;
	public diveMobileButton: boolean = false;

// collision

	/** updated by scene, used by states */
	public onFloor: boolean = true;
	/** updated by scene, used by states */
	public onWallLeft: boolean = false;
	/** updated by scene, used by states */
	public onWallRight: boolean = false;

	/** Offset from player.body position. Array of two vector2s for top and bottom check. */
	public leftWallChecksOffset = [ new Phaser.Math.Vector2(-1, 8), new Phaser.Math.Vector2(-1, 1) ];
	/** Offset from player.body position. Array of two vector2s for top and bottom check. */
	public rightWallChecksOffset = [ new Phaser.Math.Vector2(14, 8), new Phaser.Math.Vector2(14, 1) ];

	private debugWallDetectGraphics: Phaser.GameObjects.Graphics;

// fist

	public fist: Phaser.GameObjects.Image;
	private fistoffset: Phaser.Math.Vector2;
	private fistUppercutoffset: Phaser.Math.Vector2;

	start()
	{
		this.levelScene = this.scene as Level;

		this.setName('player');

		if (this.debugImage && __DEV__)
		{
			this.setTexture('20-test');
		}
		else
		{
			this.createAnimations();
		}

		this.punchCooldownTimer = this.scene.time.addEvent({delay: 1});

		if (!this.lockInput)
		{
			this.startMoving();
		}
		this.stateController.setState('running');

		this.debugWallDetectGraphics = this.levelScene.add.graphics({ 
			fillStyle: { color: 0x00ffff, alpha: (__DEV__ ? 1 : 0) } 
		});
		this.debugWallDetectGraphics.setDepth(100);
	}

	update()
	{	
		this.wallDetect();
		if (__DEV__)
		{
			this.updateWallDetectDebug();
		}

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

		if (this.stateController.currentState.name === 'inPlane')
		{
			this.setPosition(this.levelScene.plane.x, this.levelScene.plane.y - 9);
		}

		this.setFistPosition();

		this.inputCheck();

		this.stateController.update();
	}

	/** update input values based on key / gamepad / mobile button state */
	inputCheck()
	{
		if (this.lockInput)
		{
			return;
		}

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

	// // punch left
	// 	if (this.gamepad?.isButtonDown(this.punchLeftButton) 
	// 		|| this.punchLeftKey.isDown || this.punchLeftMobileButton)
	// 	{
	// 		if (this.punchLeftInput != 'just-down' && this.punchLeftInput != 'down')
	// 		{
	// 			this.punchLeftInput = 'just-down'
	// 		}
	// 		else
	// 		{
	// 			this.punchLeftInput = 'down'
	// 		}
	// 	}
	// 	else
	// 	{
	// 		if (this.punchLeftInput != 'just-up' && this.punchLeftInput != 'up')
	// 		{
	// 			this.punchLeftInput = 'just-up'
	// 		}
	// 		else
	// 		{
	// 			this.punchLeftInput = 'up'
	// 		}
	// 	}

	// // punch right
	// 	if (this.gamepad?.isButtonDown(this.punchRightButton) 
	// 		|| this.punchRightKey.isDown || this.punchRightMobileButton)
	// 	{
	// 		if (this.punchRightInput != 'just-down' && this.punchRightInput != 'down')
	// 		{
	// 			this.punchRightInput = 'just-down'
	// 		}
	// 		else
	// 		{
	// 			this.punchRightInput = 'down'
	// 		}
	// 	}
	// 	else
	// 	{
	// 		if (this.punchRightInput != 'just-up' && this.punchRightInput != 'up')
	// 		{
	// 			this.punchRightInput = 'just-up'
	// 		}
	// 		else
	// 		{
	// 			this.punchRightInput = 'up'
	// 		}
	// 	}

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

	public startMoving()
	{
		this.body.setVelocity((this.flipX? this.moveSpeed : -this.moveSpeed), 0);
	}

	putInPlane(x: number, y: number)
	{
		this.stateController.setState('inPlane');
		this.setPosition(x, y - 9);
		this.fist.setVisible(false);
			// otherwise the fist is visibly detatched from the body

		this.lockInput = true;
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

	public createFist():void
	{
		this.fistoffset = new Phaser.Math.Vector2(14, 4);
		this.fistUppercutoffset = new Phaser.Math.Vector2(0, -10);
		this.fist = this.scene.add.image(this.x, this.y, 'bird1fist');
		// this.fist.setDepth(this.depth - 1);
		this.setFist(false, false);
		this.setFistPosition();
		const level = this.scene as Level;
		level.physics.add.existing(this.fist, false);
		let fistBody = this.fist.body as Phaser.Physics.Arcade.Body;
		fistBody.setAllowGravity(false);
		fistBody.setVelocityY(0);
	}

	private setFistPosition(): void
	{
		let offset = new Phaser.Math.Vector2
			((this.flipX? this.fistoffset.x : -this.fistoffset.x), this.fistoffset.y);
		if (this.stateController.currentState.name === 'uppercut')
		{
			offset.set(this.fistUppercutoffset.x, this.fistUppercutoffset.y);
				// TODO: Add flipx ternary conditional if I set uppercut offset to anything other than 0.
		}
		let position = new Phaser.Math.Vector2((this.body.x + 6) + offset.x, this.body.y + offset.y);

		this.fist.flipX = this.flipX;
		this.fist.setPosition(position.x, position.y);
	}

	public setFist(active: boolean, above: boolean)
	{
		this.fist.setActive(active);
		this.fist.setVisible(active);

		this.fist.setTexture('bird' + this.flapCharge + 'fist');

		if (above)
		{
			this.fist.setRotation(this.flipX? -1.5 : 1.5);
		}
		else
		{
			this.fist.setRotation(0);
		}

		this.setFistPosition();
	}

	/**
	 * Plays animation correlated to flap state for applicable animations.
	 * @param key 
	 * @param queue wait until current animation is complete
	 */
	public playAnimation(key: string, queue?: boolean): void
	{	
		if (this.debugImage && __DEV__)
		{
			return;
		}

		let flapChargeAnim = false;
		let punchChargeAnim = false;

		if (key === 'flap' || key === 'punch' || key === 'dive' || key === 'cling' 
			|| key === 'airborne' || key === 'uppercut' || key === 'run')
		{
			if (this.flapCharge === 1)
			{
				key = key + '-tired';
			}
			else if (this.flapCharge === 0)
			{
				key = key + '-very-tired';
			}
		}

		if (queue)
		{
			this.playAfterRepeat(key);
		}
		else
		{
			this.play(key);
		}

		// LEFT: use playAfterRepeat() so airborne animation doesn't cancel flap
	}

	private createAnimations()
	{
	// airborne
		this.anims.create({key: 'airborne', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'airborne/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'airborne-tired', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'airborne-tired/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'airborne-very-tired', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'airborne-very-tired/', zeroPad: 2, end: 0 })});

	// blush flap
		this.anims.create({key: 'blush-flap', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'blush-flap/', zeroPad: 2, end: 5 })});

		this.anims.create({key: 'blush-flap-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'blush-flap-tired/', zeroPad: 2, end: 5 })});

		this.anims.create({key: 'blush-flap-very-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'blush-flap-very-tired/', zeroPad: 2, end: 5 })});

	// cling
		this.anims.create({key: 'cling', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'cling/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'cling-tired', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'cling-tired/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'cling-very-tired', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'cling-very-tired/', zeroPad: 2, end: 0 })});

	// dive
		this.anims.create({key: 'dive', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'dive/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'dive-tired', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'dive-tired/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'dive-very-tired', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'dive-very-tired/', zeroPad: 2, end: 0 })});

	// flap
		this.anims.create({key: 'flap', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'flap/', zeroPad: 2, end: 5 })});

		this.anims.create({key: 'flap-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'flap-tired/', zeroPad: 2, end: 5 })});

		this.anims.create({key: 'flap-very-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'flap-very-tired/', zeroPad: 2, end: 5 })});

	// jump
		this.anims.create({key: 'jump', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'jump/', zeroPad: 2, end: 4 })});

	// punch
		this.anims.create({key: 'punch', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'punch/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'punch-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'punch-tired/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'punch-very-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'punch-very-tired/', zeroPad: 2, end: 0 })});

	// run
		this.anims.create({key: 'run', repeat: -1,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'run/', zeroPad: 2, end: 11 })});

	// uppercut
		this.anims.create({key: 'uppercut', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'uppercut/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'uppercut-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'uppercut-tired/', zeroPad: 2, end: 0 })});

		this.anims.create({key: 'uppercut-very-tired', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'uppercut-very-tired/', zeroPad: 2, end: 0 })});

	// victory
		this.anims.create({key: 'victory', repeat: 0,
			frames: this.anims.generateFrameNames('tapper-atlas', 
			{ prefix: 'victory/', zeroPad: 2, end: 0 })});
	}

	/**
	 * DEPRECATED
	 * 
	 * Called on create(). Keys with versions correlating to flap state have the flap state number 
	 * postfix.
	 */
	private createAnimations2()
	{
		this.anims.create
		({
			key: 'run-2',
			frames: this.anims.generateFrameNumbers('bird1run', { frames: [ 0, 1, 1, 2, 3, 3, 4 ] }),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create
		({
			key: 'run-1',
			frames: this.anims.generateFrameNumbers('bird1run', { frames: [ 0, 1, 1, 2, 3, 3, 4 ] }),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create
		({
			key: 'run-0',
			frames: this.anims.generateFrameNumbers('bird1run', { frames: [ 0, 1, 1, 2, 3, 3, 4 ] }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create
		({
			key: 'flap-2',
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
			key: 'flap-1',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 3, 4, 5, 5 ] }),
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'flap-0',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 6, 7, 8, 8 ] }),
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'flap-exhausted-2',
			frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [ 0, 1, 2, 2 ] }),
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'flap-exhausted-1',
			frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [ 3, 4, 5, 5 ] }),
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'flap-exhausted-0',
			frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [ 6, 7, 8, 8 ] }),
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
			key: 'punch-2',
			frames:
			[
				{ key: 'bird1squash' }
			],
			frameRate: 16,
			repeat: 0,
		});

		this.anims.create
		({
			key: 'punch-1',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 3 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'punch-0',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 6 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'uppercut-2',
			frames:
			[
				{ key: 'bird1stretch' }
			],
			frameRate: 16,
			repeat: 0,
		});

		this.anims.create
		({
			key: 'uppercut-1',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 5 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'uppercut-0',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 8 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'dive-2',
			frames:
			[
				{ key: 'bird1dive' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'dive-1',
			frames:
			[
				{ key: 'bird3dive' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'dive-0',
			frames:
			[
				{ key: 'bird4dive' }
			],
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'dive-exhausted-2',
			frames:
			[
				{ key: 'bird1dive-exhausted' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'dive-exhausted-1',
			frames:
			[
				{ key: 'bird3dive-exhausted' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'dive-exhausted-0',
			frames:
			[
				{ key: 'bird4dive-exhausted' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'cling-2',
			frames:
			[
				{ key: 'bird1cling' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'cling-1',
			frames:
			[
				{ key: 'bird3cling' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'cling-0',
			frames:
			[
				{ key: 'bird4cling' }
			],
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'cling-exhausted-2',
			frames:
			[
				{ key: 'bird1cling-exhausted' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'cling-exhausted-1',
			frames:
			[
				{ key: 'bird3cling-exhausted' }
			],
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'cling-exhausted-0',
			frames:
			[
				{ key: 'bird4cling' }
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

		this.anims.create
		({
			key: 'airborne-2',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 1 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'airborne-1',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 4 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'airborne-0',
			frames: this.anims.generateFrameNumbers('flap-sprites', { frames: [ 7 ] }),
			frameRate: 16,
			repeat: 0
		});
		this.anims.create
		({
			key: 'airborne-exhausted-2',
			frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [ 1 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'airborne-exhausted-1',
			frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [ 4 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'airborne-exhausted-0',
			frames: this.anims.generateFrameNumbers('flap-exhausted-sprites', { frames: [ 7 ] }),
			frameRate: 16,
			repeat: 0
		});

		this.anims.create
		({
			key: 'victory',
			frames:
			[
				{ key: 'bird1victory' }
			],
			frameRate: 16,
			repeat: 0
		});
	}

	/**
	 * Checks for tiles in Level on either side of the player, updates onWall properties.
	 */
	private wallDetect()
	{
		const x = this.body.x;
		const y = this.body.y;
		const leftOffset = this.leftWallChecksOffset;
		const rightOffset = this.rightWallChecksOffset;

		this.onWallLeft = 
			(this.levelScene.tileLayer.getTileAtWorldXY(
				x + leftOffset[0].x, y + leftOffset[0].y) != undefined 
			|| this.levelScene.tileLayer.getTileAtWorldXY(
				x + leftOffset[1].x, y + leftOffset[1].y) != undefined);

		this.onWallRight = 
			(this.levelScene.tileLayer.getTileAtWorldXY(
				x + rightOffset[0].x, y + rightOffset[0].y) != undefined 
			|| this.levelScene.tileLayer.getTileAtWorldXY(
				x + rightOffset[1].x, y + rightOffset[1].y) != undefined);
	}

	/** Updates graphics based on current player position. */
	private updateWallDetectDebug()
	{
		const x = this.body.x;
		const y = this.body.y;
		const leftOffset = this.leftWallChecksOffset;
		const rightOffset = this.rightWallChecksOffset;

		this.debugWallDetectGraphics.clear();

		this.debugWallDetectGraphics.fillStyle(this.onWallLeft? 981514 : 16444161);
		this.debugWallDetectGraphics.fillPoint(x + leftOffset[0].x, y + leftOffset[0].y);
		this.debugWallDetectGraphics.fillPoint(x + leftOffset[1].x, y + leftOffset[1].y);

		this.debugWallDetectGraphics.fillStyle(this.onWallRight? 981514 : 16444161);
		this.debugWallDetectGraphics.fillPoint(x + rightOffset[0].x, y + rightOffset[0].y);
		this.debugWallDetectGraphics.fillPoint(x + rightOffset[1].x, y + rightOffset[1].y);
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
