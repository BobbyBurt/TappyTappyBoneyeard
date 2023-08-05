
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import LevelIconPrefab from "../prefabs/LevelIconPrefab";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import { getEarnedAward, levelScoreMilestones } from "~/components/LevelScores";
import SoundManager from "~/components/SoundManager";
import cloudSaves from "~/API/cloudSaves";

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

		// rectangle
		const rectangle = this.add.rectangle(338, 22, 100, 60);
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;

		// preview_bomb_punch
		const preview_bomb_punch = this.add.image(390, 52, "preview-bomb-punch");
		preview_bomb_punch.scaleX = 0.538068679604508;
		preview_bomb_punch.scaleY = 0.33771521273288463;

		// highscoreWindowContainer
		const highscoreWindowContainer = this.add.container(0, 0);
		highscoreWindowContainer.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(41, 24, 250, 60);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 4934475;
		highscoreWindowContainer.add(rectangle_1);

		// titleText_2
		const titleText_2 = this.add.bitmapText(113, 68, "nokia", "2000\n");
		titleText_2.setOrigin(1, 0);
		titleText_2.tintFill = true;
		titleText_2.tintTopLeft = 13275481;
		titleText_2.tintTopRight = 13275481;
		titleText_2.tintBottomLeft = 13275481;
		titleText_2.tintBottomRight = 13275481;
		titleText_2.text = "2000\n";
		titleText_2.fontSize = -8;
		titleText_2.align = 2;
		highscoreWindowContainer.add(titleText_2);

		// titleText_3
		const titleText_3 = this.add.bitmapText(203, 68, "nokia", "4000\n");
		titleText_3.setOrigin(1, 0);
		titleText_3.tintFill = true;
		titleText_3.tintTopLeft = 13553358;
		titleText_3.tintTopRight = 13553358;
		titleText_3.tintBottomLeft = 13553358;
		titleText_3.tintBottomRight = 13553358;
		titleText_3.text = "4000\n";
		titleText_3.fontSize = -8;
		titleText_3.align = 2;
		highscoreWindowContainer.add(titleText_3);

		// titleText_4
		const titleText_4 = this.add.bitmapText(280, 68, "nokia", "6000\n");
		titleText_4.setOrigin(1, 0);
		titleText_4.tintFill = true;
		titleText_4.tintTopLeft = 15720529;
		titleText_4.tintTopRight = 15720529;
		titleText_4.tintBottomLeft = 15720529;
		titleText_4.tintBottomRight = 15720529;
		titleText_4.text = "6000\n";
		titleText_4.fontSize = -8;
		titleText_4.align = 2;
		highscoreWindowContainer.add(titleText_4);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(51, 54, 230, 10);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 10132122;
		highscoreWindowContainer.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(50, 54, 70, 10);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 5675510;
		highscoreWindowContainer.add(rectangle_3);

		// titleText_1
		const titleText_1 = this.add.bitmapText(50, 34, "nokia", "Highscore: 3000\n");
		titleText_1.tintFill = true;
		titleText_1.text = "Highscore: 3000\n";
		titleText_1.fontSize = -10;
		titleText_1.align = 1;
		highscoreWindowContainer.add(titleText_1);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(279, 54, 2, 10);
		rectangle_4.setOrigin(0, 0);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 15720529;
		highscoreWindowContainer.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(201, 54, 2, 10);
		rectangle_5.setOrigin(0, 0);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 13553358;
		highscoreWindowContainer.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(111, 54, 2, 10);
		rectangle_6.setOrigin(0, 0);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 13275481;
		highscoreWindowContainer.add(rectangle_6);

		// LockedWindowContainer
		const lockedWindowContainer = this.add.container(0, 0);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(41, 24, 250, 60);
		rectangle_12.setOrigin(0, 0);
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 4934475;
		lockedWindowContainer.add(rectangle_12);

		// titleText_22
		const titleText_22 = this.add.bitmapText(116, 54, "nokia", "x 6");
		titleText_22.setOrigin(1, 0);
		titleText_22.tintFill = true;
		titleText_22.tintTopLeft = 13275481;
		titleText_22.tintTopRight = 13275481;
		titleText_22.tintBottomLeft = 13275481;
		titleText_22.tintBottomRight = 13275481;
		titleText_22.text = "x 6";
		titleText_22.fontSize = -16;
		titleText_22.align = 2;
		lockedWindowContainer.add(titleText_22);

		// titleText_32
		const titleText_32 = this.add.bitmapText(195, 54, "nokia", "x 4");
		titleText_32.setOrigin(1, 0);
		titleText_32.tintFill = true;
		titleText_32.tintTopLeft = 13553358;
		titleText_32.tintTopRight = 13553358;
		titleText_32.tintBottomLeft = 13553358;
		titleText_32.tintBottomRight = 13553358;
		titleText_32.text = "x 4";
		titleText_32.fontSize = -16;
		titleText_32.align = 2;
		lockedWindowContainer.add(titleText_32);

		// titleText_42
		const titleText_42 = this.add.bitmapText(277, 55, "nokia", "x 2\n");
		titleText_42.setOrigin(1, 0);
		titleText_42.tintFill = true;
		titleText_42.tintTopLeft = 15720529;
		titleText_42.tintTopRight = 15720529;
		titleText_42.tintBottomLeft = 15720529;
		titleText_42.tintBottomRight = 15720529;
		titleText_42.text = "x 2\n";
		titleText_42.fontSize = -16;
		titleText_42.align = 2;
		lockedWindowContainer.add(titleText_42);

		// titleText_12
		const titleText_12 = this.add.bitmapText(50, 34, "nokia", "Awards needed to unlock level:\n");
		titleText_12.tintFill = true;
		titleText_12.text = "Awards needed to unlock level:\n";
		titleText_12.fontSize = -10;
		titleText_12.align = 1;
		lockedWindowContainer.add(titleText_12);

		// rectangle_42
		const rectangle_42 = this.add.rectangle(219, 53, 20, 20);
		rectangle_42.setOrigin(0, 0);
		rectangle_42.isFilled = true;
		rectangle_42.fillColor = 15720529;
		lockedWindowContainer.add(rectangle_42);

		// rectangle_52
		const rectangle_52 = this.add.rectangle(139, 53, 20, 20);
		rectangle_52.setOrigin(0, 0);
		rectangle_52.isFilled = true;
		lockedWindowContainer.add(rectangle_52);

		// rectangle_62
		const rectangle_62 = this.add.rectangle(59, 53, 20, 20);
		rectangle_62.setOrigin(0, 0);
		rectangle_62.isFilled = true;
		rectangle_62.fillColor = 13275481;
		lockedWindowContainer.add(rectangle_62);

		// levelSelectContainer
		const levelSelectContainer = this.add.container(649, 43);

		// levelBack
		const levelBack = this.add.rectangle(585, 323, 150, 40);
		levelBack.isFilled = true;
		levelBack.fillColor = 2697513;
		levelSelectContainer.add(levelBack);

		// levelText
		const levelText = this.add.bitmapText(585, 323, "nokia", "intro\n");
		levelText.setOrigin(0.5, 0.5);
		levelText.text = "intro\n";
		levelText.fontSize = -8;
		levelText.align = 1;
		levelSelectContainer.add(levelText);

		// downBack
		const downBack = this.add.rectangle(585, 377, 100, 40);
		downBack.isFilled = true;
		downBack.fillColor = 2697513;
		levelSelectContainer.add(downBack);

		// downText
		const downText = this.add.bitmapText(585, 377, "nokia", "v\n");
		downText.setOrigin(0.5, 0.5);
		downText.text = "v\n";
		downText.fontSize = -16;
		downText.align = 1;
		levelSelectContainer.add(downText);

		// upBack
		const upBack = this.add.rectangle(585, 269, 100, 40);
		upBack.isFilled = true;
		upBack.fillColor = 2697513;
		levelSelectContainer.add(upBack);

		// upText
		const upText = this.add.bitmapText(585, 269, "nokia", "v");
		upText.angle = -180;
		upText.setOrigin(0.5, 0.5);
		upText.text = "v";
		upText.fontSize = -16;
		upText.align = 1;
		levelSelectContainer.add(upText);

		// titleText
		const titleText = this.add.bitmapText(36, -33, "nokia", "Level Select\n");
		titleText.tintFill = true;
		titleText.tintTopLeft = 3158064;
		titleText.tintTopRight = 3158064;
		titleText.tintBottomLeft = 3158064;
		titleText.tintBottomRight = 3158064;
		titleText.text = "Level Select\n";
		titleText.fontSize = -16;
		titleText.align = 1;
		levelSelectContainer.add(titleText);

		// levelInfoText
		const levelInfoText = this.add.bitmapText(580, 269, "nokia", "\n");
		levelInfoText.text = "\n";
		levelInfoText.fontSize = -8;
		levelSelectContainer.add(levelInfoText);

		// levelIconPrefab
		const levelIconPrefab = new LevelIconPrefab(this, 60, 123);
		this.add.existing(levelIconPrefab);

		// levelIconPrefab_1
		const levelIconPrefab_1 = new LevelIconPrefab(this, 105, 123);
		this.add.existing(levelIconPrefab_1);

		// levelIconPrefab_2
		const levelIconPrefab_2 = new LevelIconPrefab(this, 150, 123);
		this.add.existing(levelIconPrefab_2);

		// levelIconPrefab_3
		const levelIconPrefab_3 = new LevelIconPrefab(this, 195, 123);
		this.add.existing(levelIconPrefab_3);

		// levelIconPrefab_4
		const levelIconPrefab_4 = new LevelIconPrefab(this, 240, 123);
		this.add.existing(levelIconPrefab_4);

		// levelIconPrefab_5
		const levelIconPrefab_5 = new LevelIconPrefab(this, 285, 123);
		this.add.existing(levelIconPrefab_5);

		// levelIconPrefab_6
		const levelIconPrefab_6 = new LevelIconPrefab(this, 330, 123);
		this.add.existing(levelIconPrefab_6);

		// levelIconPrefab_7
		const levelIconPrefab_7 = new LevelIconPrefab(this, 375, 123);
		this.add.existing(levelIconPrefab_7);

		// levelIconPrefab_8
		const levelIconPrefab_8 = new LevelIconPrefab(this, 420, 123);
		this.add.existing(levelIconPrefab_8);

		// levelIconPrefab_9
		const levelIconPrefab_9 = new LevelIconPrefab(this, 105, 173);
		this.add.existing(levelIconPrefab_9);

		// levelIconPrefab_10
		const levelIconPrefab_10 = new LevelIconPrefab(this, 420, 173);
		this.add.existing(levelIconPrefab_10);

		// levelIconPrefab_11
		const levelIconPrefab_11 = new LevelIconPrefab(this, 375, 173);
		this.add.existing(levelIconPrefab_11);

		// levelIconPrefab_12
		const levelIconPrefab_12 = new LevelIconPrefab(this, 330, 173);
		this.add.existing(levelIconPrefab_12);

		// levelIconPrefab_13
		const levelIconPrefab_13 = new LevelIconPrefab(this, 60, 173);
		this.add.existing(levelIconPrefab_13);

		// levelIconPrefab_14
		const levelIconPrefab_14 = new LevelIconPrefab(this, 285, 173);
		this.add.existing(levelIconPrefab_14);

		// levelIconPrefab_15
		const levelIconPrefab_15 = new LevelIconPrefab(this, 240, 173);
		this.add.existing(levelIconPrefab_15);

		// levelIconPrefab_16
		const levelIconPrefab_16 = new LevelIconPrefab(this, 195, 173);
		this.add.existing(levelIconPrefab_16);

		// levelIconPrefab_17
		const levelIconPrefab_17 = new LevelIconPrefab(this, 150, 173);
		this.add.existing(levelIconPrefab_17);

		// levelIconPrefab_18
		const levelIconPrefab_18 = new LevelIconPrefab(this, 105, 223);
		this.add.existing(levelIconPrefab_18);

		// levelIconPrefab_19
		const levelIconPrefab_19 = new LevelIconPrefab(this, 420, 223);
		this.add.existing(levelIconPrefab_19);

		// levelIconPrefab_20
		const levelIconPrefab_20 = new LevelIconPrefab(this, 375, 223);
		this.add.existing(levelIconPrefab_20);

		// levelIconPrefab_21
		const levelIconPrefab_21 = new LevelIconPrefab(this, 330, 223);
		this.add.existing(levelIconPrefab_21);

		// levelIconPrefab_22
		const levelIconPrefab_22 = new LevelIconPrefab(this, 60, 223);
		this.add.existing(levelIconPrefab_22);

		// levelIconPrefab_23
		const levelIconPrefab_23 = new LevelIconPrefab(this, 285, 223);
		this.add.existing(levelIconPrefab_23);

		// levelIconPrefab_24
		const levelIconPrefab_24 = new LevelIconPrefab(this, 240, 223);
		this.add.existing(levelIconPrefab_24);

		// levelIconPrefab_25
		const levelIconPrefab_25 = new LevelIconPrefab(this, 195, 223);
		this.add.existing(levelIconPrefab_25);

		// levelIconPrefab_26
		const levelIconPrefab_26 = new LevelIconPrefab(this, 150, 223);
		this.add.existing(levelIconPrefab_26);

		// lists
		const levelBackList = [levelBack, downBack, upBack];

		// levelIconPrefab (prefab fields)
		levelIconPrefab.levelIndex = 0;

		// levelIconPrefab_1 (prefab fields)
		levelIconPrefab_1.levelIndex = 1;

		// levelIconPrefab_2 (prefab fields)
		levelIconPrefab_2.levelIndex = 2;

		// levelIconPrefab_3 (prefab fields)
		levelIconPrefab_3.levelIndex = 3;

		// levelIconPrefab_4 (prefab fields)
		levelIconPrefab_4.levelIndex = 4;

		// levelIconPrefab_5 (prefab fields)
		levelIconPrefab_5.levelIndex = 5;

		// levelIconPrefab_6 (prefab fields)
		levelIconPrefab_6.levelIndex = 6;

		// levelIconPrefab_7 (prefab fields)
		levelIconPrefab_7.levelIndex = 7;

		// levelIconPrefab_8 (prefab fields)
		levelIconPrefab_8.levelIndex = 8;

		// levelIconPrefab_9 (prefab fields)
		levelIconPrefab_9.levelIndex = 10;

		// levelIconPrefab_10 (prefab fields)
		levelIconPrefab_10.levelIndex = 17;

		// levelIconPrefab_11 (prefab fields)
		levelIconPrefab_11.levelIndex = 16;

		// levelIconPrefab_12 (prefab fields)
		levelIconPrefab_12.levelIndex = 15;

		// levelIconPrefab_13 (prefab fields)
		levelIconPrefab_13.levelIndex = 9;

		// levelIconPrefab_14 (prefab fields)
		levelIconPrefab_14.levelIndex = 14;

		// levelIconPrefab_15 (prefab fields)
		levelIconPrefab_15.levelIndex = 13;

		// levelIconPrefab_16 (prefab fields)
		levelIconPrefab_16.levelIndex = 12;

		// levelIconPrefab_17 (prefab fields)
		levelIconPrefab_17.levelIndex = 11;

		// levelIconPrefab_18 (prefab fields)
		levelIconPrefab_18.levelIndex = 19;

		// levelIconPrefab_19 (prefab fields)
		levelIconPrefab_19.levelIndex = 26;

		// levelIconPrefab_20 (prefab fields)
		levelIconPrefab_20.levelIndex = 25;

		// levelIconPrefab_21 (prefab fields)
		levelIconPrefab_21.levelIndex = 24;

		// levelIconPrefab_22 (prefab fields)
		levelIconPrefab_22.levelIndex = 18;

		// levelIconPrefab_23 (prefab fields)
		levelIconPrefab_23.levelIndex = 23;

		// levelIconPrefab_24 (prefab fields)
		levelIconPrefab_24.levelIndex = 22;

		// levelIconPrefab_25 (prefab fields)
		levelIconPrefab_25.levelIndex = 21;

		// levelIconPrefab_26 (prefab fields)
		levelIconPrefab_26.levelIndex = 20;

		this.highscoreWindowContainer = highscoreWindowContainer;
		this.titleText_2 = titleText_2;
		this.titleText_3 = titleText_3;
		this.titleText_4 = titleText_4;
		this.titleText_1 = titleText_1;
		this.lockedWindowContainer = lockedWindowContainer;
		this.titleText_22 = titleText_22;
		this.titleText_32 = titleText_32;
		this.titleText_42 = titleText_42;
		this.titleText_12 = titleText_12;
		this.levelSelectContainer = levelSelectContainer;
		this.levelBack = levelBack;
		this.levelText = levelText;
		this.downBack = downBack;
		this.upBack = upBack;
		this.titleText = titleText;
		this.levelInfoText = levelInfoText;
		this.levelIconPrefab = levelIconPrefab;
		this.levelIconPrefab_1 = levelIconPrefab_1;
		this.levelIconPrefab_2 = levelIconPrefab_2;
		this.levelIconPrefab_3 = levelIconPrefab_3;
		this.levelIconPrefab_4 = levelIconPrefab_4;
		this.levelIconPrefab_5 = levelIconPrefab_5;
		this.levelIconPrefab_6 = levelIconPrefab_6;
		this.levelIconPrefab_7 = levelIconPrefab_7;
		this.levelIconPrefab_8 = levelIconPrefab_8;
		this.levelIconPrefab_9 = levelIconPrefab_9;
		this.levelIconPrefab_10 = levelIconPrefab_10;
		this.levelIconPrefab_11 = levelIconPrefab_11;
		this.levelIconPrefab_12 = levelIconPrefab_12;
		this.levelIconPrefab_13 = levelIconPrefab_13;
		this.levelIconPrefab_14 = levelIconPrefab_14;
		this.levelIconPrefab_15 = levelIconPrefab_15;
		this.levelIconPrefab_16 = levelIconPrefab_16;
		this.levelIconPrefab_17 = levelIconPrefab_17;
		this.levelIconPrefab_18 = levelIconPrefab_18;
		this.levelIconPrefab_19 = levelIconPrefab_19;
		this.levelIconPrefab_20 = levelIconPrefab_20;
		this.levelIconPrefab_21 = levelIconPrefab_21;
		this.levelIconPrefab_22 = levelIconPrefab_22;
		this.levelIconPrefab_23 = levelIconPrefab_23;
		this.levelIconPrefab_24 = levelIconPrefab_24;
		this.levelIconPrefab_25 = levelIconPrefab_25;
		this.levelIconPrefab_26 = levelIconPrefab_26;
		this.levelBackList = levelBackList;

		this.events.emit("scene-awake");
	}

	private highscoreWindowContainer!: Phaser.GameObjects.Container;
	private titleText_2!: Phaser.GameObjects.BitmapText;
	private titleText_3!: Phaser.GameObjects.BitmapText;
	private titleText_4!: Phaser.GameObjects.BitmapText;
	private titleText_1!: Phaser.GameObjects.BitmapText;
	private lockedWindowContainer!: Phaser.GameObjects.Container;
	private titleText_22!: Phaser.GameObjects.BitmapText;
	private titleText_32!: Phaser.GameObjects.BitmapText;
	private titleText_42!: Phaser.GameObjects.BitmapText;
	private titleText_12!: Phaser.GameObjects.BitmapText;
	private levelSelectContainer!: Phaser.GameObjects.Container;
	private levelBack!: Phaser.GameObjects.Rectangle;
	private levelText!: Phaser.GameObjects.BitmapText;
	private downBack!: Phaser.GameObjects.Rectangle;
	private upBack!: Phaser.GameObjects.Rectangle;
	private titleText!: Phaser.GameObjects.BitmapText;
	private levelInfoText!: Phaser.GameObjects.BitmapText;
	private levelIconPrefab!: LevelIconPrefab;
	private levelIconPrefab_1!: LevelIconPrefab;
	private levelIconPrefab_2!: LevelIconPrefab;
	private levelIconPrefab_3!: LevelIconPrefab;
	private levelIconPrefab_4!: LevelIconPrefab;
	private levelIconPrefab_5!: LevelIconPrefab;
	private levelIconPrefab_6!: LevelIconPrefab;
	private levelIconPrefab_7!: LevelIconPrefab;
	private levelIconPrefab_8!: LevelIconPrefab;
	private levelIconPrefab_9!: LevelIconPrefab;
	private levelIconPrefab_10!: LevelIconPrefab;
	private levelIconPrefab_11!: LevelIconPrefab;
	private levelIconPrefab_12!: LevelIconPrefab;
	private levelIconPrefab_13!: LevelIconPrefab;
	private levelIconPrefab_14!: LevelIconPrefab;
	private levelIconPrefab_15!: LevelIconPrefab;
	private levelIconPrefab_16!: LevelIconPrefab;
	private levelIconPrefab_17!: LevelIconPrefab;
	private levelIconPrefab_18!: LevelIconPrefab;
	private levelIconPrefab_19!: LevelIconPrefab;
	private levelIconPrefab_20!: LevelIconPrefab;
	private levelIconPrefab_21!: LevelIconPrefab;
	private levelIconPrefab_22!: LevelIconPrefab;
	private levelIconPrefab_23!: LevelIconPrefab;
	private levelIconPrefab_24!: LevelIconPrefab;
	private levelIconPrefab_25!: LevelIconPrefab;
	private levelIconPrefab_26!: LevelIconPrefab;
	private levelBackList!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	private levelPreviewImage: Phaser.GameObjects.Image;

	private UICam!: Phaser.Cameras.Scene2D.BaseCamera | any;

	public static levelsKey = 
		[
		'jump', 'flap', 'punch',
		'airborne', 'dive', 'dive-practice',
		'uppercut', 'charge', 'tutorial-finale', 

		'bomb-intro', 'bomb-holder', 'bomb-punch', 
		'combo', 'mine-intro', 'mine-wall',
		'multi-move', 'gun-intro', 'bullet-ceiling',

		'grenade',
		'parasol', 'umbrella-trap',
		'pogo-intro', 'pogo-ideas', 'pogo-challenge', 
		'finale',
		];

	private gamepad:Phaser.Input.Gamepad.Gamepad | undefined;
	private SelectKey!: Phaser.Input.Keyboard.Key;
	private StartKey!: Phaser.Input.Keyboard.Key;

	private levelIcons!: Array<LevelIconPrefab>;

	/** True during post-level sequence. Don't set directly. */
	private lockInput = false;

// selected level
	/**`-1`: none selected */
	private selectedLevel = -1;

	/** used to only call functionality on down */
	private gamepadSelectorDown = false;

	create() {

		this.editorCreate();
		this.createCameras();

		// this.levelPreviewImage = this.add.image(this.titleText.x, this.titleText.y, `preview-${LevelSelect.levelsKey[this.selectedLevel]}`);


	// top score
	if (!this.registry.get('top-score'))
	{
		this.highScoreText.setText('');
	}
	else
	{
		this.highScoreText.setText(`highscore:\n\n${this.registry.get('top-score')}`);
	}

	// arcade mode
		this.arcadeBack.setInteractive();
		this.arcadeBack.on('pointerdown', () =>
		{
			this.registry.set('game-mode', 'arcade');
			this.game.registry.set('total-score', 0);
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
		// this.backBack.setInteractive();
		// this.backBack.on('pointerdown', () =>
		// {
		// 	this.mainMenuContainer.setVisible(true);
		// 	this.levelSelectContainer.setVisible(false);

		// 	if (!this.registry.get('top-score'))
		// 	{
		// 		this.highScoreText.setText('');
		// 	}
		// 	else
		// 	{
		// 		this.highScoreText.setText(`highscore:\n\n${this.registry.get('top-score')}`);
		// 	}
		// });

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

		// cloud save data clear
		this.input.keyboard.on('keydown-C', () =>
		{
			LevelSelect.levelsKey.forEach((value, index) =>
			{
				this.registry.set(`top-score: ${value}`, null);
			});
			cloudSaves.saveData(this);
		});

		this.input.keyboard.on('keydown-L', () =>
		{
			cloudSaves.loadData(this);
			// this would be better with a status ready callback
		});

		// prefab setup
		this.levelIcons = new Array<LevelIconPrefab>();
		this.levelIcons.push(this.levelIconPrefab);
		this.levelIcons.push(this.levelIconPrefab_1);
		this.levelIcons.push(this.levelIconPrefab_2);
		this.levelIcons.push(this.levelIconPrefab_3);
		this.levelIcons.push(this.levelIconPrefab_4);
		this.levelIcons.push(this.levelIconPrefab_5);
		this.levelIcons.push(this.levelIconPrefab_6);
		this.levelIcons.push(this.levelIconPrefab_7);
		this.levelIcons.push(this.levelIconPrefab_8);
		this.levelIcons.push(this.levelIconPrefab_13);
		this.levelIcons.push(this.levelIconPrefab_9);
		this.levelIcons.push(this.levelIconPrefab_17);
		this.levelIcons.push(this.levelIconPrefab_16);
		this.levelIcons.push(this.levelIconPrefab_15);
		this.levelIcons.push(this.levelIconPrefab_14);
		this.levelIcons.push(this.levelIconPrefab_12);
		this.levelIcons.push(this.levelIconPrefab_11);
		this.levelIcons.push(this.levelIconPrefab_10);
		this.levelIcons.push(this.levelIconPrefab_22);
		this.levelIcons.push(this.levelIconPrefab_18);
		this.levelIcons.push(this.levelIconPrefab_26);
		this.levelIcons.push(this.levelIconPrefab_25);
		this.levelIcons.push(this.levelIconPrefab_24);
		this.levelIcons.push(this.levelIconPrefab_23);
		this.levelIcons.push(this.levelIconPrefab_21);
		this.levelIcons.push(this.levelIconPrefab_20);
		this.levelIcons.push(this.levelIconPrefab_19);
		LevelSelect.levelsKey.forEach((value, index) =>
		{
			if (index === this.selectedLevel)
			{
				return;
			}

			const award = getEarnedAward(value, this.registry.get(`top-score: ${value}`));
			if (award === 'bronze')
			{
				this.levelIcons[index].setIcon('bronze');
			}
			else if (award === 'silver')
			{
				this.levelIcons[index].setIcon('silver');
			}
			else if (award === 'gold')
			{
				this.levelIcons[index].setIcon('gold');
			}
			else 
			{
				this.levelIcons[index].setIcon('played');
			}
		});

		this.levelIcons.forEach((value, index) =>
		{
			value.setSize(35, 45);
			value.setInteractive();
			value.on('pointerdown', () =>
			{
				if (this.lockInput)
				{
					console.debug('returned; `lockInput` is true');
					return;
				}

				if (this.selectedLevel === index)
				{
					this.loadLevel();
				}
				else
				{
					this.selectedLevel = index;
					this.setHighlightedLevel(index);
				}
			});
		});

		if (this.selectedLevel > -1)
		{
			this.setHighlightedLevel(this.selectedLevel);


			this.time.delayedCall(1000, () =>
			{
				const award = getEarnedAward(LevelSelect.levelsKey[this.selectedLevel], this.registry.get(`top-score: ${LevelSelect.levelsKey[this.selectedLevel]}`));
				if (award === 'bronze')
				{
					this.levelIcons[this.selectedLevel].setIcon('bronze');
				}
				else if (award === 'silver')
				{
					this.levelIcons[this.selectedLevel].setIcon('silver');
				}
				else if (award === 'gold')
				{
					this.levelIcons[this.selectedLevel].setIcon('gold');
				}
				else 
				{
					this.levelIcons[this.selectedLevel].setIcon('played');
				}

				this.levelIcons[this.selectedLevel].runAchieveTween();
			});

			this.time.delayedCall(1500, () =>
			{
				this.lockInput = false;
			});
		}


	}

	setHighlightedLevel(levelIndex: number)
	{
		this.levelIcons.forEach((value, iconIndex) =>
		{
			if (iconIndex === levelIndex)
			{
				value.setHighlight(true);
				// value.runAchieveTween();
			}
			else
			{
				value.setHighlight(false);
			}
		});
	}

	update(time: number, delta: number): void
	{

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
			// + (__DEV__ ? `- ${LevelSelect.levelsKey[this.selectedLevel]}` : ''));
			+ (true ? `- ${LevelSelect.levelsKey[this.selectedLevel]}` : ''));

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

			// this.levelInfoText.setText(
			// `${(score !== 0) ? `` : `- LOCKED -`}\n
			// Best: ${score}\n
			// Award: ${awardString}`

			this.levelInfoText.setText(
				`Best: ${score}\n
				Award: ${awardString}`
		);

		// preview
		// this.levelPreviewImage.setTexture(`preview-${LevelSelect.levelsKey[this.selectedLevel]}`)
	}

	loadLevel()
	{
		// console.debug(this.game.registry.get(`top-score: ${LevelSelect.levelsKey[this.selectedLevel]}`))
		// if (!__DEV__
		// && this.game.registry.get('game-mode') === 'level' 
		// && this.game.registry.get(`top-score: ${LevelSelect.levelsKey[this.selectedLevel]}`) == undefined)
		// {
		// 	return;
		// }

		if (this.selectedLevel === -1)
		{
			console.debug('returned; no level selected');
			return;
		}

		this.registry.set('last-scene', this.scene.key);

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
		this.cameras.main.setOrigin(0, 0);
		this.cameras.main.setBackgroundColor(0x808080);
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
