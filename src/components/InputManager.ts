
type outPutName = 'jump' | 'punch' | 'uppercut' | 'dive' 
	| 'tutorial-toggle' | 'pause' 
	| 'menu-up' | 'menu-down' | 'menu-left' | 'menu-right' | 'menu-confirm' | 'menu-back';

interface outputTest
{
	names: string;
}

export default class InputManager {

	/** Input mode currently in use. */
	public static activeInputMode: inputMode = 'keyboard';

	private static inputNames = new Map<outPutName, Array<string | null>>
	([
		['jump', 
		[
			'X key',
			`right button`,
			'green button'
		]],
		['punch',
		[
			'Z key',
			`down button`,
			'red button'
		]],
		['uppercut',
		[
			'up arrow key',
			`D-pad up`,
			'yellow button'
		]],
		['dive',
		[
			'down arrow key',
			`D-pad down`,
			'blue button'
		]],
		['tutorial-toggle',
		[
			'space key' ,
			`up button`,
			'tap'
		]],
		['pause',
		[
			'P key',
			`start button`,
			'top right button'
		]],
		['menu-up',
		[
			'up arrow key',
			`D-pad up`,
			null
		]],
		['menu-down',
		[
			'down arrow key',
			`D-pad down`,
			null
		]],
		['menu-left',
		[
			'left arrow key',
			`D-pad left`,
			null
		]],
		['menu-right',
		[
			'right arrow key',
			`D-pad right`,
			null
		]],
		['menu-confirm',
		[
			'X key',
			`right button`,
			'tap'
		]],
		['menu-back',
		[
			'Z key',
			`left button`,
			'back button'
		]]
	]);

	// TODO: fill these in as they become needed.
	private static inputs = new Map<outPutName, Array<string | number | null>>
	([
		['jump', 
		[
			'up arrow key',
			1,
			'green button'
		]],
		['punch',
		[
			'X key',
			0,
			'red button'
		]],
		['uppercut',
		[
			'Z key',
			12,
			'yellow button'
		]],
		['dive',
		[
			'down arrow key',
			13,
			'blue button'
		]],
		['punch',
		[
			'X key',
			0,
			'red button'
		]],
		['tutorial-toggle',
		[
			'SPACE' ,
			3,
			null
		]],
		['pause',
		[
			'P',
			9,
			'top right button'
		]],
		['menu-up',
		[
			'UP',
			12,
			null
		]],
		['menu-down',
		[
			'DOWN',
			13,
			null
		]],
		['menu-left',
		[
			'LEFT',
			14,
			null
		]],
		['menu-right',
		[
			'RIGHT',
			15,
			null
		]],
		['menu-confirm',
		[
			'X',
			1,
			'tap'
		]],
		['menu-back',
		[
			'Z',
			2,
			'back button'
		]]
	]);

	private static inputModeToNumber(inputMode: inputMode): number
	{
		switch(inputMode)
		{
			case 'gamepad':
				return 1;
			case 'touch':
				return 2;
			default:
				return 0;
		}
	}

	/**
	 * 
	 * @param outputName
	 * @param inputMode If `null`, `currentInputMode` will be used.
	 * @returns Input name which can be used to instruct the player.
	 */
	public static getInputName(outputName: outPutName, inputMode?: inputMode): string | null
	{
		if (inputMode == null)
		{
			inputMode = this.activeInputMode;
		}
		const inputModeNumber = this.inputModeToNumber(inputMode);

		return this.inputNames.get(outputName)![inputModeNumber];
	}

	/**
	 * 
	 * @param outputName
	 * @param inputMode If `null`, `currentInputMode` will be used.
	 * @returns Input `string` which can be postfixed to an event name.
	 */
	public static getInput(outputName: outPutName, inputMode?: inputMode): string | number | null
	{
		if (inputMode == null)
		{
			inputMode = this.activeInputMode;
		}
		const inputModeNumber = this.inputModeToNumber(inputMode);

		return this.inputs.get(outputName)![inputModeNumber];
	}

	/**
	 * 
	 * @param outputName
	 * @param inputMode If `null`, `currentInputMode` will be used.
	 * @returns key for hint image
	 */
	public static getInputHintKey(outputName: outPutName, inputMode?: inputMode): string | null
	{
		return 'asdf';
	}

	/**
	 * 
	 * @param outputName
	 * @param inputMode If `null`, `currentInputMode` will be used.
	 * @returns Input name which can be postfixed to an event name.
	 */
	public static setInputName(outputName: outPutName, inputMode?: inputMode): void
	{
		// TODO
	}
}