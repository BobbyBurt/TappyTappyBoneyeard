
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import NGIOPlugin from "~/plugins/NGIOPlugin";

/* END-USER-IMPORTS */

export default class LevelSelect extends Phaser.Scene {

	constructor() {
		super("LevelSelect");

		/* START-USER-CTR-CODE */

		let _this = this;

	// setup gamepad
	// this.input.gamepad.on('down', function 
	// 		(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number)
	// 		{
	// 			_this.gamepad = pad;
	// 		});

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mainLayer
		const mainLayer = this.add.layer();

		// uiLayer
		const uiLayer = this.add.layer();

		// levelBack
		const levelBack = this.add.rectangle(0, 0, 150, 40);
		levelBack.isFilled = true;
		levelBack.fillColor = 2697513;
		uiLayer.add(levelBack);

		// levelText
		const levelText = this.add.bitmapText(0, 0, "nokia", "intro\n");
		levelText.setOrigin(0.5, 0.5);
		levelText.text = "intro\n";
		levelText.fontSize = -8;
		levelText.align = 1;
		uiLayer.add(levelText);

		// downBack
		const downBack = this.add.rectangle(-3, 48, 100, 40);
		downBack.isFilled = true;
		downBack.fillColor = 2697513;
		uiLayer.add(downBack);

		// downText
		const downText = this.add.bitmapText(6, 48, "nokia", "v\n");
		downText.setOrigin(0.5, 0.5);
		downText.text = "v\n";
		downText.fontSize = -16;
		downText.align = 1;
		uiLayer.add(downText);

		// upBack
		const upBack = this.add.rectangle(3, 96, 100, 40);
		upBack.isFilled = true;
		upBack.fillColor = 2697513;
		uiLayer.add(upBack);

		// upText
		const upText = this.add.bitmapText(7, 91, "nokia", "v");
		upText.angle = -180;
		upText.setOrigin(0.5, 0.5);
		upText.text = "v";
		upText.fontSize = -16;
		upText.align = 1;
		uiLayer.add(upText);

		// lists
		const levelBackList = [levelBack, downBack, upBack];

		// levelBack (components)
		const levelBackAlign = new Align(levelBack);
		levelBackAlign.middle = true;
		levelBackAlign.center = true;

		// levelText (components)
		const levelTextAlign = new Align(levelText);
		levelTextAlign.middle = true;
		levelTextAlign.center = true;

		// downBack (components)
		const downBackAlign = new Align(downBack);
		downBackAlign.middle = true;
		downBackAlign.center = true;
		downBackAlign.verticalOffset = 50;

		// downText (components)
		const downTextAlign = new Align(downText);
		downTextAlign.middle = true;
		downTextAlign.center = true;
		downTextAlign.verticalOffset = 50;

		// upBack (components)
		const upBackAlign = new Align(upBack);
		upBackAlign.middle = true;
		upBackAlign.center = true;
		upBackAlign.verticalOffset = -50;

		// upText (components)
		const upTextAlign = new Align(upText);
		upTextAlign.middle = true;
		upTextAlign.center = true;
		upTextAlign.verticalOffset = -50;

		this.mainLayer = mainLayer;
		this.uiLayer = uiLayer;
		this.levelBack = levelBack;
		this.levelText = levelText;
		this.downBack = downBack;
		this.upBack = upBack;
		this.levelBackList = levelBackList;

		this.events.emit("scene-awake");
	}

	private mainLayer!: Phaser.GameObjects.Layer;
	private uiLayer!: Phaser.GameObjects.Layer;
	private levelBack!: Phaser.GameObjects.Rectangle;
	private levelText!: Phaser.GameObjects.BitmapText;
	private downBack!: Phaser.GameObjects.Rectangle;
	private upBack!: Phaser.GameObjects.Rectangle;
	private levelBackList!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	private UICam!: Phaser.Cameras.Scene2D.BaseCamera | any;

	public static levelsKey = 
		// ['jump', 'flap', 'punch', 'airborne', 'dive', 'gunfire', 'uppercut', 'charge', 'combo', 'tutorial-finale', 
		// 'bomb-intro', 'bomb-uppercut', 'mine-intro', 'cool-combo', 'bomb-launch', 'dive-tec', 'parasol', 'pogo', 'grenade'];
		['jump', 'flap', 'punch', 'airborne', 'dive', 'gunfire', 'uppercut', 'charge', 'combo', 'tutorial-finale', 
		'bomb-intro', 'cool-combo', 'bomb-uppercut', 'parasol', 'pogo', 'grenade'];

	private gamepad:Phaser.Input.Gamepad.Gamepad | undefined;
	private SelectKey!: Phaser.Input.Keyboard.Key;
	private StartKey!: Phaser.Input.Keyboard.Key;

// selected level
	private selectedLevel = 0;

	/** used to only call functionality on down */
	private gamepadSelectorDown = false;

	private NGIOPlugin:NGIOPlugin;

	create() {

	// plugin test

		this.NGIOPlugin = this.plugins.get('NGIO-plugin', true) as NGIOPlugin;

		this.editorCreate();
		this.createCameras();

	// use previously selected level
		if (this.registry.get('current-level-index'))
		{
			this.selectedLevel = this.registry.get('current-level-index');
		}
		this.setSelectedLevel('neutral');

	// load level: pointer, key, button
		this.levelBack.setInteractive();
		this.levelBack.on('pointerdown', () =>
		{
			this.loadLevel();
		});
		this.input.keyboard.on('keydown-' + InputManager.getInput('menu-confirm', 'keyboard') , () =>
		{
			this.loadLevel();
		});
		this.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				this.loadLevel();
			}
		});

	// navigation: pointer, key, button
		this.upBack.setInteractive();
		this.upBack.on('pointerdown', () =>
		{
			this.setSelectedLevel('up');
		});		
		this.downBack.setInteractive();
		this.downBack.on('pointerdown', () =>
		{
			this.setSelectedLevel('down');
		});
		this.input.keyboard.on('keydown-' + InputManager.getInput('menu-up', 'keyboard') , () =>
		{
			this.setSelectedLevel('up');
		});
		this.input.keyboard.on('keydown-' + InputManager.getInput('menu-down', 'keyboard') , () =>
		{
			this.setSelectedLevel('down');
		});
		this.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-up', 'gamepad'))
			{
				this.setSelectedLevel('up');
			}
		});
		this.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-down', 'gamepad'))
			{
				this.setSelectedLevel('down');
			}
		});
	}

	update(time: number, delta: number): void
	{
	// NGIO test
		this.NGIOPlugin.update(this.levelText);

		// if (this.gamepad?.isButtonDown(9) || this.StartKey.isDown)
		// {
		// 	this.registry.set('current-level', LevelSelect.levelsKey[this.selectedLevel]);
		// 	this.loadLevel();
		// }

		// if ((this.gamepad?.isButtonDown(8) || this.SelectKey.isDown) && !this.gamepadSelectorDown)
		// {
		// 	this.gamepadSelectorDown = true;

		// 	this.setSelectedLevel('down');
		// }
		// if (!this.gamepad?.isButtonDown(8) && !this.SelectKey.isDown)
		// {
		// 	this.gamepadSelectorDown = false;
		// }

	}

	/** Also updates visual. */
	setSelectedLevel(direction: 'up' | 'neutral' | 'down')
	{
		let indexChange = 0
		if (direction === 'up')
		{
			indexChange = 1;
		}
		else if (direction === 'down')
		{
			indexChange = -1;
		}
		this.selectedLevel += indexChange;

	// wrap variable to levelsKey array length
		if (this.selectedLevel == LevelSelect.levelsKey.length)
		{
			this.selectedLevel = 0;
		}
		else if (this.selectedLevel == -1)
		{
			this.selectedLevel = LevelSelect.levelsKey.length - 1;
		}

	// update text
		this.levelText.setText('Level ' + (this.selectedLevel + 1) 
			+ ' - ' + (__DEV__ ? LevelSelect.levelsKey[this.selectedLevel] : ''));
	}

	loadLevel()
	{
		this.registry.set('current-level', LevelSelect.levelsKey[this.selectedLevel]);
		this.registry.set('current-level-index', this.selectedLevel)
		this.scene.stop(this);
		this.scene.launch('LevelUI');
		this.scene.launch('Level');
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	createCameras()
	{
		CameraUtil.configureMainCamera(this);
		this.cameras.main.ignore(this.uiLayer.getChildren());

		this.UICam = CameraUtil.createUICamera(this);
		this.UICam.ignore(this.mainLayer.getChildren());
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
