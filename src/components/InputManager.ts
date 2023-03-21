export default class InputManager {
	
	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	public static inputMode: 0 | 1 | 2 = 0;

	public gamepad: Phaser.Input.Gamepad.Gamepad | undefined;
	
	private static jumpInputName = 
	[
		'up arrow key' ,
		`right button`,
		'green button'
	];

	public static getJumpInputName(): string
	{
		return this.jumpInputName[this.inputMode];
	}

	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	private static jumpInputHintKey = 
	[
		'bg-tileset',
		'bg-tileset',
		'bg-tileset'
	];

	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	private static punchInputName = 
	[
		'X key' ,
		`down button`,
		'red button'
	];

	public static getPunchInputName(): string
	{
		return this.punchInputName[this.inputMode];
	}

	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	private static punchInputHintKey = 
	[
		'tileset',
		'tileset',
		'tileset'
	];

	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	private static uppercutInputName = 
	[
		'Z key' ,
		`D-pad up`,
		'yellow button'
	];

	public static getUppercutInputName(): string
	{
		return this.uppercutInputName[this.inputMode];
	}

	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	private static diveInputName = 
	[
		'down arrow key' ,
		`D-pad down`,
		'blue button'
	];

	public static getDiveInputName(): string
	{
		return this.diveInputName[this.inputMode];
	}

	/** 0 = keyboard, 1 = gamepad, 2 = mobile */
	private static tutorialDismissInputName = 
	[
		'space key' ,
		`up button`,
		'tap'
	];

	public static getTutoiralDismissInputName(): string
	{
		return this.tutorialDismissInputName[this.inputMode];
	}

	setupGamepad(scene: Phaser.Scene)
	{
		const _this = this;
		scene.input.gamepad.on('down', function 
		(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number)
		{
			console.debug('gamepad set');

			_this.gamepad = pad;

			InputManager.inputMode = 1;
				// TEMP: For playtesting. A final solution needs to update input mode at any time.

				// _this.gamepad?.on
		});

	}

	gamepadEventHandler()
	{

	}
}