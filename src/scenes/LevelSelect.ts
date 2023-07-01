
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import NGIOPlugin from "~/plugins/NGIOPlugin";
import { levelScoreMilestones } from "~/components/LevelScores";
import SoundManager from "~/components/SoundManager";

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

		// back
		const back = this.add.rectangle(480, 270, 960, 540);
		back.isFilled = true;
		back.fillColor = 14383236;

		// mainLayer
		const mainLayer = this.add.layer();

		// uiLayer
		const uiLayer = this.add.layer();

		// levelSelectContainer
		const levelSelectContainer = this.add.container(0, 0);
		levelSelectContainer.visible = false;

		// levelBack
		const levelBack = this.add.rectangle(480, 290, 150, 40);
		levelBack.isFilled = true;
		levelBack.fillColor = 2697513;
		levelSelectContainer.add(levelBack);

		// levelText
		const levelText = this.add.bitmapText(480, 290, "nokia", "intro\n");
		levelText.setOrigin(0.5, 0.5);
		levelText.text = "intro\n";
		levelText.fontSize = -8;
		levelText.align = 1;
		levelSelectContainer.add(levelText);

		// downBack
		const downBack = this.add.rectangle(480, 344, 100, 40);
		downBack.isFilled = true;
		downBack.fillColor = 2697513;
		levelSelectContainer.add(downBack);

		// downText
		const downText = this.add.bitmapText(480, 344, "nokia", "v\n");
		downText.setOrigin(0.5, 0.5);
		downText.text = "v\n";
		downText.fontSize = -16;
		downText.align = 1;
		levelSelectContainer.add(downText);

		// upBack
		const upBack = this.add.rectangle(480, 236, 100, 40);
		upBack.isFilled = true;
		upBack.fillColor = 2697513;
		levelSelectContainer.add(upBack);

		// upText
		const upText = this.add.bitmapText(480, 236, "nokia", "v");
		upText.angle = -180;
		upText.setOrigin(0.5, 0.5);
		upText.text = "v";
		upText.fontSize = -16;
		upText.align = 1;
		levelSelectContainer.add(upText);

		// titleText
		const titleText = this.add.bitmapText(480, 176, "nokia", "Level Select\n");
		titleText.setOrigin(0.5, 0.5);
		titleText.text = "Level Select\n";
		titleText.fontSize = -16;
		titleText.align = 1;
		levelSelectContainer.add(titleText);

		// backBack
		const backBack = this.add.rectangle(356, 179, 50, 30);
		backBack.isFilled = true;
		backBack.fillColor = 2697513;
		levelSelectContainer.add(backBack);

		// backText
		const backText = this.add.bitmapText(356, 179, "nokia", "back");
		backText.setOrigin(0.5, 0.5);
		backText.text = "back";
		backText.fontSize = -8;
		backText.align = 1;
		levelSelectContainer.add(backText);

		// levelInfoText
		const levelInfoText = this.add.bitmapText(580, 269, "nokia", "\n");
		levelInfoText.text = "\n";
		levelInfoText.fontSize = -8;
		levelSelectContainer.add(levelInfoText);

		// mainMenuContainer
		const mainMenuContainer = this.add.container(0, 0);

		// arcadeBack
		const arcadeBack = this.add.rectangle(480, 267, 150, 40);
		arcadeBack.isFilled = true;
		arcadeBack.fillColor = 2697513;
		mainMenuContainer.add(arcadeBack);

		// arcadeText
		const arcadeText = this.add.bitmapText(480, 267, "nokia", "Arcade Mode\n");
		arcadeText.setOrigin(0.5, 0.5);
		arcadeText.text = "Arcade Mode\n";
		arcadeText.fontSize = -8;
		arcadeText.align = 1;
		mainMenuContainer.add(arcadeText);

		// levelSelectBack
		const levelSelectBack = this.add.rectangle(480, 331, 150, 40);
		levelSelectBack.scaleX = 0.8172138893396567;
		levelSelectBack.isFilled = true;
		levelSelectBack.fillColor = 2697513;
		mainMenuContainer.add(levelSelectBack);

		// levelSelectText
		const levelSelectText = this.add.bitmapText(480, 331, "nokia", "Level Select");
		levelSelectText.setOrigin(0.5, 0.5);
		levelSelectText.text = "Level Select";
		levelSelectText.fontSize = -8;
		levelSelectText.align = 1;
		mainMenuContainer.add(levelSelectText);

		// logo
		const logo = this.add.image(480, 193, "logo");
		mainMenuContainer.add(logo);

		// highScoreText
		const highScoreText = this.add.bitmapText(570, 247, "nokia", "Arcade Mode\n");
		highScoreText.text = "Arcade Mode\n";
		highScoreText.fontSize = -8;
		mainMenuContainer.add(highScoreText);

		// lists
		const levelBackList = [levelBack, downBack, upBack];

		this.back = back;
		this.mainLayer = mainLayer;
		this.uiLayer = uiLayer;
		this.levelSelectContainer = levelSelectContainer;
		this.levelBack = levelBack;
		this.levelText = levelText;
		this.downBack = downBack;
		this.upBack = upBack;
		this.titleText = titleText;
		this.backBack = backBack;
		this.backText = backText;
		this.levelInfoText = levelInfoText;
		this.mainMenuContainer = mainMenuContainer;
		this.arcadeBack = arcadeBack;
		this.arcadeText = arcadeText;
		this.levelSelectBack = levelSelectBack;
		this.levelSelectText = levelSelectText;
		this.highScoreText = highScoreText;
		this.levelBackList = levelBackList;

		this.events.emit("scene-awake");
	}

	private back!: Phaser.GameObjects.Rectangle;
	private mainLayer!: Phaser.GameObjects.Layer;
	private uiLayer!: Phaser.GameObjects.Layer;
	private levelSelectContainer!: Phaser.GameObjects.Container;
	private levelBack!: Phaser.GameObjects.Rectangle;
	private levelText!: Phaser.GameObjects.BitmapText;
	private downBack!: Phaser.GameObjects.Rectangle;
	private upBack!: Phaser.GameObjects.Rectangle;
	private titleText!: Phaser.GameObjects.BitmapText;
	private backBack!: Phaser.GameObjects.Rectangle;
	private backText!: Phaser.GameObjects.BitmapText;
	private levelInfoText!: Phaser.GameObjects.BitmapText;
	private mainMenuContainer!: Phaser.GameObjects.Container;
	private arcadeBack!: Phaser.GameObjects.Rectangle;
	private arcadeText!: Phaser.GameObjects.BitmapText;
	private levelSelectBack!: Phaser.GameObjects.Rectangle;
	private levelSelectText!: Phaser.GameObjects.BitmapText;
	private highScoreText!: Phaser.GameObjects.BitmapText;
	private levelBackList!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	private UICam!: Phaser.Cameras.Scene2D.BaseCamera | any;

	public static levelsKey = 
		[ 'bullet-ceiling',
		'jump', 'flap', 'punch', 'airborne', 'dive', 'gunfire', 'uppercut', 'charge', 'combo', 'tutorial-finale', 
		'bomb-intro', 'bomb-holder', 'bomb-punch', 'bomb-uppercut', 
		'mine-intro', 'bullet-ceiling', 
		'parasol', 
		'pogo-intro', 'pogo-ideas', 'pogo-challenge', 
		'grenade'];

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

		// this.NGIOPlugin = this.plugins.get('NGIO-plugin', true) as NGIOPlugin;

		this.editorCreate();
		this.createCameras();

	// show level select in DEV
		if (__DEV__)
		{
			this.registry.set('game-mode', 'level');
			this.mainMenuContainer.setVisible(false);
			this.levelSelectContainer.setVisible(true);
		}

	// arcade mode
		this.arcadeBack.setInteractive();
		this.arcadeBack.on('pointerdown', () =>
		{
			this.registry.set('game-mode', 'arcade');
			this.selectedLevel = 0;
			this.loadLevel();
		});

	// level select
		this.levelSelectBack.setInteractive()
		this.levelSelectBack.on('pointerdown', () =>
		{
			this.registry.set('game-mode', 'level');
			this.mainMenuContainer.setVisible(false);
			this.levelSelectContainer.setVisible(true);
		});

	// level select back
		this.backBack.setInteractive();
		this.backBack.on('pointerdown', () =>
		{
			this.mainMenuContainer.setVisible(true);
			this.levelSelectContainer.setVisible(false);
		});

		if (this.registry.get('game-mode') === 'level')
		{
			this.mainMenuContainer.setVisible(false);
			this.levelSelectContainer.setVisible(true);
		}

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
		// this.NGIOPlugin.update(this.levelText);

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
			+ (__DEV__ ? `- ${LevelSelect.levelsKey[this.selectedLevel]}` : ''));

		let score = this.game.registry.get
		(
			`top-score: ${LevelSelect.levelsKey[this.selectedLevel]}`
		);

		let awardString: 'none' | 'Bronze' | 'Silver' | 'Gold' = 'none';
		let awardColour = 0;

		let milestones = levelScoreMilestones.get
		(LevelSelect.levelsKey[this.selectedLevel]) as Array<number>;
		if (milestones === undefined)
		{
			console.warn('No level score milestone data found for this level key.');
			milestones = [9999, 9999, 9999]
		}
		if (score == null)
		{
			score = 0;
		}

		if (score >= milestones[0]&& score < milestones[1])
		{
			awardString = 'Bronze';
			awardColour = 10971430;
		}
		else if (score >= milestones[1]&& score < milestones[2])
		{
			awardString = 'Silver';
			awardColour = 13816530;
		}
		else if (score >= milestones[2])
		{
			awardString = 'Gold';
			awardColour = 16769358;
		}

			this.levelInfoText.setText(
			`${(score !== 0 && this.selectedLevel > 1) ? `` : `- LOCKED -`}\n
			Best: ${score}\n
			Award: ${awardString}`
		);
	}

	loadLevel()
	{
		console.debug(this.game.registry.get(`top-score: ${LevelSelect.levelsKey[this.selectedLevel]}`))
		if (!__DEV__
		&& this.game.registry.get('game-mode') === 'level' 
		&& this.game.registry.get(`top-score: ${LevelSelect.levelsKey[this.selectedLevel]}`) == undefined)
		{
			return;
		}

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
		this.cameras.main.setBackgroundColor();
		// this.cameras.main.ignore(this.uiLayer.getChildren());

		// this.UICam = CameraUtil.createUICamera(this);
		// this.UICam.ignore(this.mainLayer.getChildren());
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
