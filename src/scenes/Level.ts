/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import playerPrefab from "../prefabs/playerPrefab";
import Align from "../components/Align";
import MobileDependent from "../components/MobileDependent";
import MobileButton from "../components/MobileButton";
/* START-USER-IMPORTS */

import BalloonEnemy from "~/prefabs/BalloonEnemy";
import EnemyPrefab from "~/prefabs/EnemyPrefab";
import GroundEnemy from "~/prefabs/GroundEnemy";
import BulletPrefab from "~/prefabs/BulletPrefab";
import BombPrefab from "~/prefabs/BombPrefab";
import explosionPrefab from "~/prefabs/explosionPrefab";
import CameraUtil from "~/components/CameraUtil";
import TilemapUtil from "~/components/TilemapUtil";
import VisionPoly from "~/components/VisionPoly";
import PogoEnemy from "~/prefabs/PogoEnemy";
import ScorePopup from "~/prefabs/scorePopup";
import SoundManager from "~/components/SoundManager";
import LevelUI from "./LevelUI";

/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// BGLayer
		const bGLayer = this.add.layer();

		// parallax_Backing
		const parallax_Backing = this.add.image(352, 474, "Parallax-Backing");
		parallax_Backing.scaleX = 8.415017240244449;
		bGLayer.add(parallax_Backing);

		// parallax_Cityscape
		const parallax_Cityscape = this.add.image(480, 552, "Parallax-Cityscape");
		bGLayer.add(parallax_Cityscape);

		// parallax_Cityscape_1
		const parallax_Cityscape_1 = this.add.image(160, 552, "Parallax-Cityscape");
		bGLayer.add(parallax_Cityscape_1);

		// parallax_Cityscape_2
		const parallax_Cityscape_2 = this.add.image(800, 552, "Parallax-Cityscape");
		bGLayer.add(parallax_Cityscape_2);

		// parallax_Cityscape_3
		const parallax_Cityscape_3 = this.add.image(-160, 552, "Parallax-Cityscape");
		bGLayer.add(parallax_Cityscape_3);

		// parallax_Cityscape_4
		const parallax_Cityscape_4 = this.add.image(1119, 552, "Parallax-Cityscape");
		bGLayer.add(parallax_Cityscape_4);

		// parallax_Cityscape_5
		const parallax_Cityscape_5 = this.add.image(357.0000305175781, 619, "Parallax-Cityscape");
		parallax_Cityscape_5.scaleX = 9.144642541425284;
		parallax_Cityscape_5.scaleY = 9.144642541425284;
		parallax_Cityscape_5.setOrigin(0.5, 0);
		parallax_Cityscape_5.flipY = true;
		bGLayer.add(parallax_Cityscape_5);

		// parallax_Cityscape_6
		const parallax_Cityscape_6 = this.add.image(1439, 552, "Parallax-Cityscape");
		bGLayer.add(parallax_Cityscape_6);

		// mainLayer
		const mainLayer = this.add.layer();

		// player
		const player = new playerPrefab(this, 383, 203);
		mainLayer.add(player);

		// UILayer
		const uILayer = this.add.layer();

		// buildText
		const buildText = this.add.bitmapText(3, -4, "nokia", "Tappy Tappy Boneyard\nv2");
		buildText.text = "Tappy Tappy Boneyard\nv2";
		buildText.fontSize = -8;
		buildText.dropShadowY = 100;
		uILayer.add(buildText);

		// debugText
		const debugText = this.add.bitmapText(-9, 66, "nokia", "");
		debugText.setOrigin(0, 1);
		debugText.fontSize = -8;
		debugText.dropShadowY = 100;
		uILayer.add(debugText);

		// debugText2
		const debugText2 = this.add.bitmapText(-10, 38, "nokia", "");
		debugText2.setOrigin(0, 1);
		debugText2.fontSize = -8;
		debugText2.dropShadowY = 100;
		uILayer.add(debugText2);

		// debugText3
		const debugText3 = this.add.bitmapText(-9, 52, "nokia", "");
		debugText3.setOrigin(0, 1);
		debugText3.fontSize = -8;
		debugText3.dropShadowY = 100;
		uILayer.add(debugText3);

		// mobileButtonDive
		const mobileButtonDive = this.add.rectangle(71, -163, 150, 120);
		mobileButtonDive.setOrigin(1, 1);
		mobileButtonDive.alpha = 0.5;
		mobileButtonDive.isFilled = true;
		mobileButtonDive.fillColor = 8168429;
		uILayer.add(mobileButtonDive);

		// mobileButtonJump
		const mobileButtonJump = this.add.rectangle(101, -273, 150, 120);
		mobileButtonJump.setOrigin(1, 1);
		mobileButtonJump.alpha = 0.5;
		mobileButtonJump.isFilled = true;
		mobileButtonJump.fillColor = 8318332;
		uILayer.add(mobileButtonJump);

		// mobileButtonUppercut
		const mobileButtonUppercut = this.add.rectangle(-304, -244, 150, 120);
		mobileButtonUppercut.setOrigin(0, 1);
		mobileButtonUppercut.alpha = 0.5;
		mobileButtonUppercut.isFilled = true;
		mobileButtonUppercut.fillColor = 15591036;
		uILayer.add(mobileButtonUppercut);

		// mobileButtonPunch
		const mobileButtonPunch = this.add.rectangle(-305, -142, 150, 120);
		mobileButtonPunch.setOrigin(0, 1);
		mobileButtonPunch.alpha = 0.5;
		mobileButtonPunch.isFilled = true;
		mobileButtonPunch.fillColor = 15563900;
		uILayer.add(mobileButtonPunch);

		// mobileButtonLevelSelect
		const mobileButtonLevelSelect = this.add.rectangle(103.45460510253906, -587.1264343261719, 75, 75);
		mobileButtonLevelSelect.setOrigin(1, 0);
		mobileButtonLevelSelect.alpha = 0.5;
		mobileButtonLevelSelect.isFilled = true;
		mobileButtonLevelSelect.fillColor = 13532397;
		uILayer.add(mobileButtonLevelSelect);

		// winText
		const winText = this.add.bitmapText(435, 100, "nokia", "Level Complete!!!");
		winText.scaleX = 1.3;
		winText.angle = -30;
		winText.setOrigin(0.5, 0.5);
		winText.text = "Level Complete!!!";
		winText.fontSize = -16;
		winText.align = 1;
		winText.dropShadowX = 1;
		winText.dropShadowY = 1;
		uILayer.add(winText);

		// enemiesLabelText
		const enemiesLabelText = this.add.bitmapText(479, -72, "nokia", "Enemies \ndefeated:");
		enemiesLabelText.setOrigin(1, 0);
		enemiesLabelText.text = "Enemies \ndefeated:";
		enemiesLabelText.fontSize = -8;
		enemiesLabelText.align = 2;
		enemiesLabelText.dropShadowY = 100;
		enemiesLabelText.dropShadowAlpha = 1;
		enemiesLabelText.dropShadowColor = 2236962;
		uILayer.add(enemiesLabelText);

		// enemiesText
		const enemiesText = this.add.bitmapText(475, -48, "nokia", "5/6");
		enemiesText.setOrigin(1, 0.5);
		enemiesText.text = "5/6";
		enemiesText.fontSize = -16;
		enemiesText.align = 2;
		enemiesText.dropShadowY = 100;
		enemiesText.dropShadowAlpha = 1;
		enemiesText.dropShadowColor = 2236962;
		uILayer.add(enemiesText);

		// chargeText
		const chargeText = this.add.bitmapText(365, -2, "nokia", "Punch");
		chargeText.setOrigin(1, 0.5);
		chargeText.text = "Punch";
		chargeText.fontSize = -16;
		chargeText.align = 2;
		chargeText.dropShadowX = -100;
		chargeText.dropShadowAlpha = 1;
		chargeText.dropShadowColor = 15081504;
		uILayer.add(chargeText);

		// scoreText
		const scoreText = this.add.bitmapText(-39.30818271636963, 66.3349609375, "nokia", "12359135");
		scoreText.setOrigin(0.5, 0);
		scoreText.text = "12359135";
		scoreText.fontSize = -16;
		scoreText.align = 1;
		scoreText.dropShadowY = 100;
		scoreText.dropShadowAlpha = 1;
		scoreText.dropShadowColor = 2236962;
		uILayer.add(scoreText);

		// comboText
		const comboText = this.add.bitmapText(702.6669311523438, -48.28031539916992, "nokia", "3");
		comboText.angle = -10;
		comboText.setOrigin(0, 0.5);
		comboText.text = "3";
		comboText.fontSize = -36;
		comboText.dropShadowX = 100;
		comboText.dropShadowAlpha = 1;
		comboText.dropShadowColor = 714549;
		uILayer.add(comboText);

		// comboLabelText
		const comboLabelText = this.add.bitmapText(681.6669311523438, -67.28031921386719, "nokia", "COMBO!");
		comboLabelText.angle = -10;
		comboLabelText.setOrigin(0, 0.5);
		comboLabelText.text = "COMBO!";
		comboLabelText.fontSize = -16;
		comboLabelText.dropShadowX = 100;
		comboLabelText.dropShadowAlpha = 1;
		comboLabelText.dropShadowColor = 714549;
		uILayer.add(comboLabelText);

		// timerText
		const timerText = this.add.bitmapText(-158.61434936523438, 53.32390213012695, "nokia", "12:04");
		timerText.text = "12:04";
		timerText.fontSize = -16;
		timerText.dropShadowY = 100;
		timerText.dropShadowAlpha = 1;
		timerText.dropShadowColor = 2236962;
		uILayer.add(timerText);

		// tutorialContainer
		const tutorialContainer = this.add.container(0, 0);
		tutorialContainer.visible = false;
		uILayer.add(tutorialContainer);

		// tutorialBox
		const tutorialBox = this.add.rectangle(0, 0, 150, 230);
		tutorialBox.scaleY = 1.0527259860642193;
		tutorialBox.isFilled = true;
		tutorialBox.fillColor = 5675510;
		tutorialContainer.add(tutorialBox);

		// tutorialText
		const tutorialText = this.add.bitmapText(0, -32, "nokia", "Welcome to life, Bird Tapper! Before you can take on the violet army, lets brush up on the basics.\n\nYou can jump with <input>. You'll move forward automatically, but you can change direction from walls. While against one, try jumping against it and jumping again to perform a wall jump.");
		tutorialText.setOrigin(0.5, 0.5);
		tutorialText.text = "Welcome to life, Bird Tapper! Before you can take on the violet army, lets brush up on the basics.\n\nYou can jump with <input>. You'll move forward automatically, but you can change direction from walls. While against one, try jumping against it and jumping again to perform a wall jump.";
		tutorialText.fontSize = -8;
		tutorialText.maxWidth = 120;
		tutorialText.dropShadowAlpha = 0;
		tutorialContainer.add(tutorialText);

		// tutorialCloseText
		const tutorialCloseText = this.add.bitmapText(0, 102, "nokia", "- TAP TO CONTINUE -");
		tutorialCloseText.setOrigin(0.5, 0.5);
		tutorialCloseText.text = "- TAP TO CONTINUE -";
		tutorialCloseText.fontSize = -8;
		tutorialCloseText.maxWidth = 120;
		tutorialCloseText.dropShadowAlpha = 0;
		tutorialContainer.add(tutorialCloseText);

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const collidesWithBombList: Array<any> = [];
		const gunEnemyList: Array<any> = [];
		const bombEnemyList: Array<any> = [];
		const bulletList: Array<any> = [];
		const hiddenByTutorialList = [enemiesLabelText, enemiesText];

		// parallax_Backing (components)
		new ScrollFactor(parallax_Backing);

		// parallax_Cityscape (components)
		const parallax_CityscapeScrollFactor = new ScrollFactor(parallax_Cityscape);
		parallax_CityscapeScrollFactor.factorX = 0.2;
		parallax_CityscapeScrollFactor.factorY = 0.1;

		// parallax_Cityscape_1 (components)
		const parallax_Cityscape_1ScrollFactor = new ScrollFactor(parallax_Cityscape_1);
		parallax_Cityscape_1ScrollFactor.factorX = 0.2;
		parallax_Cityscape_1ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_2 (components)
		const parallax_Cityscape_2ScrollFactor = new ScrollFactor(parallax_Cityscape_2);
		parallax_Cityscape_2ScrollFactor.factorX = 0.2;
		parallax_Cityscape_2ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_3 (components)
		const parallax_Cityscape_3ScrollFactor = new ScrollFactor(parallax_Cityscape_3);
		parallax_Cityscape_3ScrollFactor.factorX = 0.2;
		parallax_Cityscape_3ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_4 (components)
		const parallax_Cityscape_4ScrollFactor = new ScrollFactor(parallax_Cityscape_4);
		parallax_Cityscape_4ScrollFactor.factorX = 0.2;
		parallax_Cityscape_4ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_5 (components)
		const parallax_Cityscape_5ScrollFactor = new ScrollFactor(parallax_Cityscape_5);
		parallax_Cityscape_5ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_6 (components)
		const parallax_Cityscape_6ScrollFactor = new ScrollFactor(parallax_Cityscape_6);
		parallax_Cityscape_6ScrollFactor.factorX = 0.2;
		parallax_Cityscape_6ScrollFactor.factorY = 0.1;

		// buildText (components)
		const buildTextAlign = new Align(buildText);
		buildTextAlign.up = true;
		buildTextAlign.left = true;
		buildTextAlign.horizontalOffset = 5;
		buildTextAlign.verticalOffset = -95;

		// debugText (components)
		const debugTextAlign = new Align(debugText);
		debugTextAlign.up = true;
		debugTextAlign.left = true;
		debugTextAlign.horizontalOffset = 5;
		debugTextAlign.verticalOffset = -75;

		// debugText2 (components)
		const debugText2Align = new Align(debugText2);
		debugText2Align.up = true;
		debugText2Align.left = true;
		debugText2Align.horizontalOffset = 5;
		debugText2Align.verticalOffset = -65;

		// debugText3 (components)
		const debugText3Align = new Align(debugText3);
		debugText3Align.up = true;
		debugText3Align.left = true;
		debugText3Align.horizontalOffset = 5;
		debugText3Align.verticalOffset = -55;

		// mobileButtonDive (components)
		const mobileButtonDiveAlign = new Align(mobileButtonDive);
		mobileButtonDiveAlign.down = true;
		mobileButtonDiveAlign.right = true;
		new MobileDependent(mobileButtonDive);
		const mobileButtonDiveMobileButton = new MobileButton(mobileButtonDive);
		mobileButtonDiveMobileButton.input = "jump";

		// mobileButtonJump (components)
		const mobileButtonJumpAlign = new Align(mobileButtonJump);
		mobileButtonJumpAlign.down = true;
		mobileButtonJumpAlign.right = true;
		mobileButtonJumpAlign.verticalOffset = -140;
		new MobileDependent(mobileButtonJump);
		new MobileButton(mobileButtonJump);

		// mobileButtonUppercut (components)
		const mobileButtonUppercutAlign = new Align(mobileButtonUppercut);
		mobileButtonUppercutAlign.down = true;
		mobileButtonUppercutAlign.left = true;
		mobileButtonUppercutAlign.verticalOffset = -140;
		new MobileDependent(mobileButtonUppercut);
		new MobileButton(mobileButtonUppercut);

		// mobileButtonPunch (components)
		const mobileButtonPunchAlign = new Align(mobileButtonPunch);
		mobileButtonPunchAlign.down = true;
		mobileButtonPunchAlign.left = true;
		new MobileDependent(mobileButtonPunch);
		new MobileButton(mobileButtonPunch);

		// mobileButtonLevelSelect (components)
		const mobileButtonLevelSelectAlign = new Align(mobileButtonLevelSelect);
		mobileButtonLevelSelectAlign.up = true;
		mobileButtonLevelSelectAlign.right = true;
		new MobileDependent(mobileButtonLevelSelect);
		new MobileButton(mobileButtonLevelSelect);

		// winText (components)
		const winTextAlign = new Align(winText);
		winTextAlign.middle = true;
		winTextAlign.center = true;
		winTextAlign.verticalOffset = -50;

		// enemiesLabelText (components)
		const enemiesLabelTextAlign = new Align(enemiesLabelText);
		enemiesLabelTextAlign.up = true;
		enemiesLabelTextAlign.right = true;
		enemiesLabelTextAlign.horizontalOffset = -5;
		enemiesLabelTextAlign.verticalOffset = -95;

		// enemiesText (components)
		const enemiesTextAlign = new Align(enemiesText);
		enemiesTextAlign.up = true;
		enemiesTextAlign.right = true;
		enemiesTextAlign.horizontalOffset = -5;
		enemiesTextAlign.verticalOffset = -65;

		// chargeText (components)
		const chargeTextAlign = new Align(chargeText);
		chargeTextAlign.middle = true;
		chargeTextAlign.right = true;
		chargeTextAlign.horizontalOffset = 95;

		// scoreText (components)
		const scoreTextAlign = new Align(scoreText);
		scoreTextAlign.up = true;
		scoreTextAlign.center = true;
		scoreTextAlign.verticalOffset = -95;

		// comboText (components)
		const comboTextAlign = new Align(comboText);
		comboTextAlign.middle = true;
		comboTextAlign.left = true;
		comboTextAlign.horizontalOffset = -85;
		comboTextAlign.verticalOffset = -30;

		// comboLabelText (components)
		const comboLabelTextAlign = new Align(comboLabelText);
		comboLabelTextAlign.middle = true;
		comboLabelTextAlign.left = true;
		comboLabelTextAlign.horizontalOffset = -90;

		// timerText (components)
		const timerTextAlign = new Align(timerText);
		timerTextAlign.up = true;
		timerTextAlign.center = true;
		timerTextAlign.verticalOffset = -95;

		// tutorialContainer (components)
		const tutorialContainerAlign = new Align(tutorialContainer);
		tutorialContainerAlign.middle = true;
		tutorialContainerAlign.right = true;
		tutorialContainerAlign.horizontalOffset = -75;

		// tutorialCloseText (components)
		new MobileDependent(tutorialCloseText);

		this.bGLayer = bGLayer;
		this.parallax_Backing = parallax_Backing;
		this.mainLayer = mainLayer;
		this.player = player;
		this.uILayer = uILayer;
		this.buildText = buildText;
		this.debugText = debugText;
		this.debugText2 = debugText2;
		this.debugText3 = debugText3;
		this.mobileButtonDive = mobileButtonDive;
		this.mobileButtonJump = mobileButtonJump;
		this.mobileButtonUppercut = mobileButtonUppercut;
		this.mobileButtonPunch = mobileButtonPunch;
		this.mobileButtonLevelSelect = mobileButtonLevelSelect;
		this.winText = winText;
		this.enemiesText = enemiesText;
		this.chargeText = chargeText;
		this.scoreText = scoreText;
		this.comboText = comboText;
		this.comboLabelText = comboLabelText;
		this.timerText = timerText;
		this.tutorialContainer = tutorialContainer;
		this.tutorialBox = tutorialBox;
		this.tutorialText = tutorialText;
		this.tutorialCloseText = tutorialCloseText;
		this.public_list = public_list;
		this.enemyList = enemyList;
		this.collidesWithBombList = collidesWithBombList;
		this.gunEnemyList = gunEnemyList;
		this.bombEnemyList = bombEnemyList;
		this.bulletList = bulletList;
		this.hiddenByTutorialList = hiddenByTutorialList;

		this.events.emit("scene-awake");
	}

	private bGLayer!: Phaser.GameObjects.Layer;
	private parallax_Backing!: Phaser.GameObjects.Image;
	public mainLayer!: Phaser.GameObjects.Layer;
	public player!: playerPrefab;
	public uILayer!: Phaser.GameObjects.Layer;
	private buildText!: Phaser.GameObjects.BitmapText;
	private debugText!: Phaser.GameObjects.BitmapText;
	private debugText2!: Phaser.GameObjects.BitmapText;
	private debugText3!: Phaser.GameObjects.BitmapText;
	private mobileButtonDive!: Phaser.GameObjects.Rectangle;
	private mobileButtonJump!: Phaser.GameObjects.Rectangle;
	private mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	private mobileButtonPunch!: Phaser.GameObjects.Rectangle;
	private mobileButtonLevelSelect!: Phaser.GameObjects.Rectangle;
	private winText!: Phaser.GameObjects.BitmapText;
	private enemiesText!: Phaser.GameObjects.BitmapText;
	private chargeText!: Phaser.GameObjects.BitmapText;
	private scoreText!: Phaser.GameObjects.BitmapText;
	private comboText!: Phaser.GameObjects.BitmapText;
	private comboLabelText!: Phaser.GameObjects.BitmapText;
	private timerText!: Phaser.GameObjects.BitmapText;
	private tutorialContainer!: Phaser.GameObjects.Container;
	private tutorialBox!: Phaser.GameObjects.Rectangle;
	private tutorialText!: Phaser.GameObjects.BitmapText;
	private tutorialCloseText!: Phaser.GameObjects.BitmapText;
	public public_list!: Array<any>;
	private enemyList!: Array<any>;
	private collidesWithBombList!: Array<any>;
	private gunEnemyList!: Array<any>;
	private bombEnemyList!: Array<any>;
	private bulletList!: Array<any>;
	private hiddenByTutorialList!: Phaser.GameObjects.BitmapText[];

	/* START-USER-CODE */

	// game state
	/** used to make sure level restart is only called once */
	private restarting = false;
	private reachedGoal = false;

	// sounds
	private flapSound: Phaser.Sound.BaseSound;
	private enemyDeathSound: Phaser.Sound.BaseSound;
	private explosionSound: Phaser.Sound.BaseSound;
	private playerDeathSound: Phaser.Sound.BaseSound;
	private victorySound: Phaser.Sound.BaseSound;
	private reflectSound: Phaser.Sound.BaseSound;
	private punchSound: Phaser.Sound.BaseSound;
	private comboHitSound: Phaser.Sound.BaseSound;

	// tilemap
	private tileMap: Phaser.Tilemaps.Tilemap;
	private tileLayer: Phaser.Tilemaps.TilemapLayer;
	private bgTileLayer: Phaser.Tilemaps.TilemapLayer;
	/** player is reset, objects are removed if below this Y coordinate. Set based on tilemap object */
	private bottomBoundary: number;

	// object groups
	private bombGroup: Phaser.GameObjects.Group;
	private explosionGroup: Phaser.GameObjects.Group;
	private bulletGroup: Phaser.GameObjects.Group;

	// debug
	private debugWallDetectGraphics: Phaser.GameObjects.Graphics;
	private debugVisionPolyGraphics: Phaser.GameObjects.Graphics;

	public UICam: Phaser.Cameras.Scene2D.BaseCamera;

	private music: Phaser.Sound.BaseSound;
	private environmentAudio: Phaser.Sound.BaseSound;

	/** Polygons used for enemies' player detection. */
	private visionPolys: Array<VisionPoly>;

	/** 
	 * All objects in the elements layer in the tilemap.
	 * 
	 * Indexes correlate to the object's ID, so most of this array's indexes are empty.
	 */
	private mapElementList: Array<any>;

	public plane: Phaser.GameObjects.Image;
	private planeRect: Phaser.Geom.Rectangle;
	private debugPlaneRectGraphics: Phaser.GameObjects.Graphics;
	/** As it's found in enemyList. */
	private goalEnemyIndex: number;

	private combo = 0;
	private comboTextTween: Phaser.Tweens.Tween;

	private levelTimer: Phaser.Time.TimerEvent;

	private enemiesUITween: Phaser.Tweens.Tween;

	private cameraFollow: Phaser.Math.Vector2;

	private scorePopupGroup: Phaser.GameObjects.Group;
	private levelScore: number;

	private uiScene: LevelUI;

	create()
	{
		this.editorCreate();

		this.reachedGoal = false;
		this.restarting = false;
		
		this.combo = 0;

		this.cameraFollow = new Phaser.Math.Vector2(this.player.x, this.player.y);

	// UI
		this.scene.launch('LevelUI');
		this.uiScene = this.scene.get('LevelUI') as LevelUI;
		this.uiScene.events.on('created', () =>
		{
			this.updateEnemiesUI(true);

			if (this.registry.get('mobile'))
			{
				this.bindMobileButtons();
			}
		});

		this.tileMap = this.add.tilemap(this.registry.get('current-level'));
		this.tileMap.addTilesetImage("tilleset", "tileset");
		this.tileMap.addTilesetImage("bg-tileset", "bg-tileset");

		this.bgTileLayer = this.tileMap.createLayer('Tile Layer 2', ['bg-tileset'], 0, 0);
		if (this.bgTileLayer)
		{
			this.bgTileLayer.depth = -10;
			this.mainLayer.add(this.bgTileLayer);
		}

		this.tileLayer = this.tileMap.createLayer("Tile Layer 1", ["tilleset"], 0, 0);
		// why is it misspelled 'tillset'?
		this.mainLayer.add(this.tileLayer);

		// this.mainLayer.add(this.hazardTileLayer);

		this.collidesWithBombList.push(this.player);
		this.collidesWithBombList.push(this.tileLayer);

		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

		// this.hazardTileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
		// 	19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

		this.player.createFist();

		// playerTilemapCollider
		this.physics.add.collider(this.player, this.tileLayer, this.playerTilemapCollide, undefined, this);

		// soldierTilemapCollide
		// this.physics.add.collider(this.enemyList, this.tileLayer);

		// soldierSoldierCollide
		this.physics.add.collider(this.enemyList, this.enemyList, this.enemyEnemyCollide, undefined, this);

		// playerEnemyOverlap
		this.physics.add.overlap
			(this.player, this.enemyList, this.playerEnemyOverlap, undefined, this);

		// playerEnemyOverlap
		this.physics.add.overlap
			(this.player.fist, this.enemyList, this.fistEnemyOverlap, undefined, this);

		// bulletTilemapCollide
		this.physics.add.collider
			(this.bulletList, this.tileLayer, this.bulletTilemapCollide, undefined, this);

		// playerBulletOverlap
		this.physics.add.overlap
			(this.bulletList, this.player, this.bulletPlayerCollide, undefined, this);

		// playerEndEggOverlap
		// this.physics.add.overlap
		// 	(this.player, this.endEgg, this.playerEndEggOverlap, undefined, this);

		this.createCameras();

		this.UICam.ignore(this.player.fist);

		this.mapElementList = new Array(150);
		/* TODO: make this array length dynamic to the highest element id in the map, as if there 
		is an id greater than this array length then the game will crash.
		*/
		this.visionPolys = new Array(0);
		// /* TODO: make this array length dynamic to the amount of vision rects that are in the 
		// map, otherwise this acts as an arbitrary max which crashes the game if exceeded.
		// */

		this.createMapEnemies();

		this.createMapVisionPolys();

		// tilemap special elements
		let startPoint = TilemapUtil.getObjectPositionByGID(38, this.tileMap);
		if (startPoint === null)
		{
			startPoint = new Phaser.Math.Vector2(0, 0);
		}
		startPoint!.x += 8;
		startPoint!.y -= 8;
		this.player.setPosition(startPoint!.x, startPoint!.y);
		this.data.set('startPoint', startPoint);
		this.player.setFlipX(TilemapUtil.getObjectFlipByGID(38, this.tileMap));

		this.cameras.main.setScroll(this.player.x, this.player.y);
		// Apparently this doesn't help

		// const endEgg = TilemapUtil.getObjectPosition('endEgg', this.tileMap);
		// endEgg.x += 6;
		// endEgg.y -= 6;
		// this.endEgg.setPosition(endEgg.x, endEgg.y);

		const endPlane: Phaser.Math.Vector2 | null = TilemapUtil.getObjectPositionByGID(39, this.tileMap);
		if (endPlane)
		{
			this.createPlane(endPlane!.x, endPlane.y);
		}

		// bombs
		this.bombGroup = this.add.group({ maxSize: 30, classType: BombPrefab });
		// TODO: define max
		// this.physics.add.collider
		// 	(this.bombGroup, this.collidesWithBombList, this.bombCollide, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.player, this.bombPlayerOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.player.fist, this.bombFistOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.enemyList, this.bombEnemyOverlap, undefined, this);
		this.physics.add.collider(this.bombGroup, this.tileLayer, this.bombTilemapCollide, undefined, this);

		// bullets
		this.bulletGroup = this.add.group({ maxSize: 100, classType: BulletPrefab })
		// TODO: define justifies max size
		// for (let i = 0; i < 100; i++)
		// {
		// let _newBullet = this.bulletGroup.get(i, i);
		// this.mainLayer.add(_newBullet);
		// this.bulletList.push(_newBullet);
		// console.log(i);
		// this.bulletGroup.getChildren()[i].setActive(false)
		// }
		// this.time.addEvent({delay: 3000, callback: this.enemyGunFire, callbackScope: this, loop: true})

		// balloon physics
		// let _balloonEnemy = this.balloonEnemyList[0] as BalloonEnemy;
		// let _balloon = _balloonEnemy.balloon;
		// console.log(_balloon);
		// this.physics.add.overlap(_balloon, this.player, this.balloonHit)

		// explosions
		this.explosionGroup = this.add.group({ maxSize: 30, classType: explosionPrefab })
		// TODO: define max

		// score popup
		this.scorePopupGroup = this.add.group({ maxSize: 10, classType: ScorePopup })

		// music - DEPRECATED - Marked for deletion.
		// if (this.music == undefined 
		// 	|| (this.music.key === 'main-game' && this.registry.get('current-level-index') < 4)
		// 	|| (this.music.key === 'tutorial' && this.registry.get('current-level-index') >= 4))
		// {
		// 	if (this.music)
		// 	{
		// 		this.music.stop();
		// 	}

		// 	if (this.registry.get('current-level-index') < 3)
		// 	{
		// 		this.music = this.sound.add('tutorial', {volume: .7});
		// 		console.log('added tutorial music');
		// 	}
		// 	else
		// 	{
		// 		this.music = this.sound.add('main-game', {volume: .7});
		// 		console.log('added main game music');
		// 	}

		// 	if (!__DEV__ && !this.registry.get('muted'))
		// 	{F
		// 		this.music.play({loop: true});
		// 	}

		this.music = SoundManager.setLevelMusic(this.music, this.registry.get('current-level-index'), this);
		this.addSounds();
		this.reflectSound.play();

		// this.environmentAudio.play(undefined, {volume: 0.03, loop: true});

		// debug wall detect visual
		this.debugWallDetectGraphics = this.add.graphics
			({ fillStyle: { color: 0x0000ff, alpha: (__DEV__ ? 1 : 0) } });
		this.UICam.ignore(this.debugWallDetectGraphics);

		// quick restart input
		this.input.keyboard.on('keydown-S', () =>
		{
			this.resetLevel();
		});

		// level select input
		this.input.keyboard.on('keydown-A', () =>
		{
			this.LoadLevelSelect();
		});

		// level select input
		this.input.keyboard.on('keydown-M', () =>
		{
			if (this.registry.get('muted'))
			{
				this.music.play();
				this.environmentAudio.play();
				this.registry.set('muted', false);
			}
			else
			{
				this.music.stop();
				this.environmentAudio.stop();
				this.registry.set('muted', true);
			}
		});

		this.levelTimer = this.time.addEvent({
			delay: 30000, callback: () =>
			{
				if (!this.reachedGoal)
				{
					this.resetLevel();
				}
			}
		});

		if (!this.registry.get('seen-tutorial-level-' + this.registry.get('current-level-index')))
		{
			this.setTutorialUI(true, this.registry.get('mobile'), this.registry.get('current-level-index'));
		}

		this.game.events.on(Phaser.Core.Events.BLUR, () =>
		{
			console.debug('blur');

			this.scene.pause();
		})

		this.game.events.on(Phaser.Core.Events.FOCUS, () =>
		{
			console.debug('focus');

			this.scene.resume();
		})

		// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();
	}

	update(time: number, delta: number): void
	{
		if (__DEV__)
		{
			this.setDebugUI();
		}

		const milliseconds = Math.floor(this.levelTimer.getRemaining());
		const seconds = milliseconds * 0.001;
		const secondsString = seconds.toString();
		this.uiScene.timerText.setText(secondsString.replace('.', ':').slice(0, (secondsString.lastIndexOf('.') + 3)));

		if (this.player.punchCharged)
		{
			this.chargeText.dropShadowColor = 714549;
		}
		else
		{
			this.chargeText.dropShadowColor = 15081504;
		}
		// TEMP: this shouldn't be checked each frame

		// reset collision values to be overridden by callbacks
		this.player.onFloor = false;

		// player wall check
		this.player.onWallLeft =
			(this.tileLayer.getTileAtWorldXY(this.player.body.x - 1, this.player.body.y + 9) != undefined
				|| this.tileLayer.getTileAtWorldXY(this.player.body.x - 1, this.player.body.y) != undefined);
		this.player.onWallRight =
			(this.tileLayer.getTileAtWorldXY(this.player.body.x + 12, this.player.body.y + 9) != undefined
				|| this.tileLayer.getTileAtWorldXY(this.player.body.x + 12, this.player.body.y) != undefined);
		// TODO: decorative tiles without collision, as defined at tileLayer.setCollision, 
		// should not count as wall.
		// DEBUG: collision points visual
		this.debugWallDetectGraphics.clear();
		this.debugWallDetectGraphics.fillPoint(this.player.body.x - 1, this.player.body.y + 9);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x - 1, this.player.body.y);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x + 12, this.player.body.y + 9);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x + 12, this.player.body.y);

		// Vision rect check
		this.visionPolys.forEach((object, index) =>
		{
			if (Phaser.Geom.Polygon.ContainsPoint
				(object, new Phaser.Geom.Point(this.player.x, this.player.y)))
			{
				if (object.parentEnemy.gunDirection)
				{
					this.setGunFire(object.parentEnemy);
				}
				else if (object.parentEnemy.bombProp)
				{
					if (object.parentEnemy.bombCooldownTimer.getProgress() == 1
						&& !object.parentEnemy.isFalling())
					{
						this.setBomb(object.parentEnemy.x, object.parentEnemy.y, object.parentEnemy);
						object.parentEnemy.bombCooldownTimer.reset({});
					}
				}
			}
		});

		// player-plane check
		if (this.planeRect)
		{
			if (Phaser.Geom.Rectangle.ContainsPoint
				(this.planeRect, new Phaser.Geom.Point(this.player.x, this.player.y)))
			{
				if (!this.reachedGoal)
				{
					if (this.enemyList[this.goalEnemyIndex])
					{
						if (this.enemyList[this.goalEnemyIndex].isFalling())
						{
							this.reachedGoal = true;

							this.levelEndFeedback();

							this.player.putInPlane(this.plane.x, this.plane.y);
						}
					}
					else
					{
						this.reachedGoal = true;

						this.levelEndFeedback();

						this.player.putInPlane(this.plane.x, this.plane.y);
					}
				}
			}
		}

		// out-of-bounds checks
		if (this.player.y > this.cameras.main.getBounds().bottom)
		{
			// this.player.reset();

			this.resetLevel();
		}
		this.bombGroup.getChildren().forEach(member =>
		{
			let _member = member as BombPrefab;
			if (_member.y > this.cameras.main.getBounds().bottom)
			{
				_member.disappear();
				_member.setPosition(9999, -9999);
				_member.enemy.bombCooldownTimer.destroy();
				_member.enemy.bombCooldownTimer = this.time.addEvent({
					delay: 1000, callback: () =>
					{
						if (!_member.enemy.isFalling())
						{
							_member.enemy.bombProp.setVisible(true);
						}
					}
				});
			}
		});
		// TODO: change this to bomb group

		// this.gunFireCheck();

		this.cameraFollow.set(this.player.body.x, this.player.body.y);
		if (this.tutorialContainer.visible && !this.registry.get('mobile'))
		{
			this.cameraFollow.x += (this.tutorialBox.width / 2);
		}
	}

	destory()
	{
		// TODO
	}

	/** reloads the scene */
	resetLevel()
	{
		// this function should only happen once
		if (!this.restarting)
		{
			this.restarting = true;
		}
		else 
		{
			return;
		}

		// remove update listeners to avoid crash
		this.events.off(Phaser.Scenes.Events.UPDATE);
		this.player.removeUpdateListener();
		this.enemyList.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			_enemy.removeUpdateListener();
		});

		this.scene.stop('LevelUI')
		this.scene.restart();
	}

	/** stops this scene, shutting down update listeners, and starts level select scene */
	LoadLevelSelect()
	{
		// this function should only happen once
		if (!this.restarting)
		{
			this.restarting = true;
		}
		else 
		{
			return;
		}

		// remove update listeners to avoid crash
		this.events.off(Phaser.Scenes.Events.UPDATE);
		this.player.removeUpdateListener();
		this.enemyList.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			_enemy.removeUpdateListener();
		});

		// this.environmentAudio.stop();

		this.scene.stop('LevelUI');
		this.scene.start('LevelSelect');
	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 * 
	 * sets Player.onFloor
	 */
	playerTilemapCollide(_player: Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap: any)
	// TODO: specify type annotation. Call back gives 
	// Phaser.Types.Physics.Arcade.GameObjectWithBody, but onFloor() is a member
	{
		if (_player.body.blocked.down)
		{
			this.player.onFloor = true;

			this.combo = 0;
			this.updateCombo();
		}

		let tilemap = _tilemap as Phaser.Tilemaps.Tilemap;
	}

	playerHazardTilemapCollide(_player: Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap: any)
	{
		// this.resetLevel();

		console.log('overlapping. for some reason?')
	}

	playerEnemyOverlap(player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
		enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody)
	// TODO: specify type annotation
	{
		let _enemy = enemy as EnemyPrefab;

		if (_enemy.isFalling())
		{
			return;
		}

		if (this.player.stateController.currentState.name == 'dive')
		{
			// velocity of knockback

			this.player.setVelocityY(-this.player.jumpForce);

			if (_enemy.hasParasol)
			{
				return;
			}

			// let velocity = new Phaser.Math.Vector2((this.player.flipX ? 120 : -120), this.player.body.velocity.y)
			const velocity = this.getKnockbackVelocty(true);
			_enemy.hit(velocity.x, velocity.y);
			this.enemyDeathSound.play();

			if (!this.player.onFloor)
			{
				this.combo++;
				this.updateCombo();
			}

			this.addEnemyScore();

			if (_enemy.isMine)
			{
				this.explode(_enemy.x, _enemy.y);
				return;
			}

			if (_enemy.bombCooldownTimer != undefined)
			{
				_enemy.bombCooldownTimer.destroy();
			}

			// this.enemiesDefeatedCheck();

			this.updateEnemiesUI(false);

			// this.goalEnemyCheck(_enemy);

			this.player.stateController.setState('airborne');
		}
		else if (_enemy.isMine)
		{
			this.explode(_enemy.x, _enemy.y);
		}
		else
		{
			this.resetLevel();
		}
	}

	fistEnemyOverlap(_fist: any, _enemy: any)
	{
		if (!this.player.fist.active)
		{
			return;
		}

		if (_enemy.isFalling())
		{
			return;
		}

		const enemy = _enemy as EnemyPrefab;

		// velocity of knockback
		// let velocity = new Phaser.Math.Vector2((this.player.flipX ? 300 : -300), this.player.body.velocity.y)
		// if (this.player.stateController.currentState.name == 'uppercut')
		// {
		// 	velocity.x = 0;
		// }	
		if (_enemy.isMine)
		{
			this.explode(_enemy.x, _enemy.y);
			return;
		}

		const velocity = this.getKnockbackVelocty(true);
		_enemy.hit(velocity.x, velocity.y);
		this.enemyDeathSound.play();

		if (!this.player.onFloor)
		{
			this.combo++;
			this.updateCombo();
		}

		this.addEnemyScore();

		// this.enemiesDefeatedCheck();

		this.player.punchCharged = true;

		this.updateEnemiesUI(false);

		this.goalEnemyCheck(_enemy);
	}

	enemyEnemyCollide(_enemy1: any, _enemy2: any)
	{
		let enemy1 = _enemy1 as EnemyPrefab;
		let enemy2 = _enemy2 as EnemyPrefab;

		if (!enemy1.isFalling())
		{
			enemy1.hit(enemy2.body.velocity.x, enemy2.body.velocity.y);
			this.enemyDeathSound.play();

			if (!this.player.onFloor)
			{
				this.combo++;
				this.updateCombo();
			}

			this.addEnemyScore();

			// this.goalEnemyCheck(enemy1);
		}

		if (!enemy2.isFalling())
		{
			enemy2.hit(enemy1.body.velocity.x, enemy1.body.velocity.y);
			this.enemyDeathSound.play();

			if (!this.player.onFloor)
			{
				this.combo++;
				this.updateCombo();
			}

			this.addEnemyScore();

			// this.goalEnemyCheck(enemy2);
		}
	}

	bombPlayerOverlap(bomb: any, player: any)
	{
		let _bomb = bomb as BombPrefab;
		let _player = bomb as playerPrefab;

		if (_bomb.ignoreTimer.getProgress() < 1)
		{
			return;
		}

		_bomb.fuseTimer.destroy();
		this.bombExplode(_bomb);
	}

	bombFistOverlap(_bomb: any, _fistBody: any)
	{
		const bomb = _bomb as BombPrefab;

		if (!this.player.fist.active)
		{
			return;
		}

		this.setBombFuse(_bomb);
		_bomb.setPosition(_bomb.x, _bomb.y - 3);
		const velocity = this.getKnockbackVelocty(false);
		_bomb.body.setVelocity(velocity.x, velocity.y);
		// _bomb.body.setVelocity(this.player.body.velocity.x * 1.3, (this.player.body.velocity.y * 1.5) - 150);
		_bomb.punched = true;
		this.player.punchCharged = true;
	}

	bombEnemyOverlap(bomb: any, enemy: any)
	{
		let _bomb = bomb as BombPrefab;
		let _enemy = enemy as EnemyPrefab;

		if (_bomb.ignoreTimer.getProgress() < 1)
		{
			return;
		}

		// if (_enemy == _bomb.enemy)
		// {
		// 	return;
		// }

		_bomb.fuseTimer.destroy();
		this.bombExplode(bomb);
	}

	bombTilemapCollide(bomb: any, tileLayer: any)
	{
		let _bomb = bomb as BombPrefab;

		if (_bomb.punched)
		{
			this.bombExplode(_bomb);
		}
		else if (_bomb.fuseTimer.getProgress() == 1)
		{
			this.setBombFuse(_bomb);
		}
	}

	/** egg collision callback */
	bombCollide(bomb: any, _collidedWith: any)
	{
		let _bomb = bomb as BombPrefab;

		// player is included in the bomb collision list, but egg - player should be ignored
	}

	/** TEST */
	balloonPlayerCollide(_balloon: any, _player: any)
	{
		console.log('balloon hit');
	}

	bulletPlayerCollide(_bullet: any, _player: any)
	{
		this.resetLevel();
	}

	bulletTilemapCollide(_bullet: any, _tilemap: any)
	{
		_bullet.disappear();
	}

	playerEndEggOverlap(_player: any, _endEgg: any)
	{
		if (!this.reachedGoal)
		{
			this.levelEndFeedback();

			this.reachedGoal = true;
		}
	}

	/**
	 * Must be called after updateCombo()
	 */
	addEnemyScore()
	{
		let scoreToAdd = 200 * this.combo;
		this.levelScore += scoreToAdd;

		const scorePopup = this.scorePopupGroup.get(this.player.x, this.player.y - 1020);
		scorePopup.appear(scoreToAdd);
	}

	updateCombo()
	{
		if (this.combo > 1)
		{
			this.uiScene.showComboUI(this.combo)
		}
		else
		{
			this.uiScene.hideComboUI();
		}
	}

	/** activates bomb in bombGroup pool */
	setBomb(x: number, y: number, enemy: EnemyPrefab, velocity?: Phaser.Math.Vector2, punched?: boolean)
	{
		let newBomb = this.bombGroup.get(x, y) as BombPrefab;
		newBomb.appear(enemy);
		this.mainLayer.add(newBomb);
		this.UICam.ignore(newBomb);

		if (velocity)
		{
			newBomb.body.setVelocity(velocity.x, velocity.y);
		}

		if (punched)
		{
			newBomb.punched = punched;
		}

		enemy.bombProp.setVisible(false);

		if (this.bombGroup.countActive() == this.bombGroup.maxSize)
		{
			this.bombGroup.getFirstAlive()?.setActive(false);
			this.bombGroup.shuffle();
			// TODO: figure out what exactly shuffle() does. Worked for me before
		}
	}

	/** starts or restarts bomb fuse timer & visual */
	setBombFuse(bomb: BombPrefab)
	{
		// fuse visual blink
		bomb.fuseVisualTimer.destroy();
		bomb.fuseVisualTimer = this.time.addEvent({
			delay: 100, loop: true, callback: () =>
			{
				if (bomb.isTinted)
				{
					bomb.clearTint();
				}
				else
				{
					bomb.setTintFill(0xffffff);
				}
			}
		});

		// explosion delay
		bomb.fuseTimer.destroy();
		bomb.fuseTimer = this.time.addEvent({
			delay: 1000, callback: () =>
			{
				if (bomb.active)
				{
					this.bombExplode(bomb);
				}
			}
		});
	}

	/** bomb behaviour, explosion setup */
	bombExplode(bomb: BombPrefab)
	{
		bomb.disappear();
		bomb.fuseVisualTimer.paused = true;

		let newExplosion = this.explosionGroup.get(bomb.x, bomb.y);
		newExplosion.appear();
		this.mainLayer.add(newExplosion);
		this.UICam.ignore(newExplosion);
		// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(bomb.x, bomb.y);

		// explosion visual / audio
		if (this.cameras.main.worldView.contains(bomb.x, bomb.y))
		{
			this.cameras.main.shake(200, 0.0005);
		}

		this.explosionSound.play();

		let bombEnemy = bomb.enemy;
		/* For whatever reason, bomb.enemy changes from this line to callback, so this is used 
		as a consistent reference.
		Or it would be in the timer below, but I've since removed the callback.
		*/

		bomb.enemy.bombCooldownTimer.destroy();
		bomb.ignoreTimer.destroy();
		bomb.enemy.bombCooldownTimer = this.time.addEvent({
			delay: 700, callback: () =>
			{
				if (!bomb.enemy.isFalling())
				{
					bomb.enemy.bombProp.setVisible(true);
				}
			}
		});
	}

	/**
	 * explosion setup. Same as bombExplode() but without the bomb stuff.
	 * @param x 
	 * @param y 
	 */
	explode(x: number, y: number)
	{
		let newExplosion = this.explosionGroup.get(x, y);
		newExplosion.appear();
		this.mainLayer.add(newExplosion);
		this.UICam.ignore(newExplosion);
		// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(x, y);

		// explosion visual / audio
		if (this.cameras.main.worldView.contains(x, y))
		{
			this.cameras.main.shake(200, 0.0005);
		}

		this.sound.play('explosion');
		this.explosionSound.play();
	}

	/** detects physics bodies within explosion range and impacts them appropriately */
	explosionCheck(x: number, y: number)
	{
		let _this = this;
		this.physics.overlapCirc(x, y, 25, true, false).forEach(function (element: any)
		// TODO: specify type annotation
		{
			if (_this.enemyList.includes(element.gameObject))
			{
				element.gameObject.hit(0, -250);

				if (!_this.player.onFloor)
				{
					_this.combo++;
					_this.updateCombo();
				}
			}
			if (element.gameObject.name == 'player')
			{
				// _this.player.reset();
				_this.resetLevel();
			}
		});
	}
	// TODO: make

	/** 
	 * DEPRECATED
	 * checks line of sight for each active gun enemy and fires if player is detected */
	gunFireCheck()
	{
		this.gunEnemyList.forEach((enemey) =>
		{
			let _enemy = enemey as EnemyPrefab;

			if (_enemy.isFalling())
			{
				return;
			}

			// setup line
			let lineOfSight = new Phaser.Geom.Line(0, 0, 0, 0);
			let lineLength = 300;
			switch (_enemy.gunDirection)
			{
				case 'up':
					{
						lineOfSight.setTo
							(_enemy.x + 7.5, _enemy.y + 10, _enemy.x + 7.5, (_enemy.y + 10) - lineLength,);
						break;
					}
				case 'upward':
					{
						lineOfSight.setTo
							(_enemy.x + 7.5, _enemy.y + 10,
								_enemy.x + (_enemy.flipX ? lineLength : -lineLength),
								(_enemy.y + 10) - lineLength,);
						break;
					}
				case 'forward':
					{
						lineOfSight.setTo
							(_enemy.x + 7.5, _enemy.y + 10,
								_enemy.x + (_enemy.flipX ? lineLength : -lineLength), _enemy.y + 10,);
						break;
					}
				case 'downward':
					{
						lineOfSight.setTo
							(_enemy.x + 7.5, _enemy.y + 10,
								_enemy.x + (_enemy.flipX ? lineLength : -lineLength),
								(_enemy.y + 10) + lineLength,);
						break;
					}
				case 'down':
					{
						lineOfSight.setTo
							(_enemy.x + 7.5, _enemy.y + 10, _enemy.x + 7.5, (_enemy.y + 10) + lineLength,);
						break;
					}
			}
			/* setting up a new line on each frame is not efficient, but it's dynamic for 
			moving enemies which could have a greater presence later for all i know. */

			if (Phaser.Geom.Intersects.LineToRectangle
				(lineOfSight, new Phaser.Geom.Rectangle
					(this.player.x, this.player.y, this.player.width, this.player.height)))
			{
				// this.gunFire(_enemy);

				if (_enemy.gunSprayTimer.getProgress() == 1 && _enemy.gunCoolDownTimer.getProgress() == 1)
				{
					_enemy.gunSprayTimer = this.time.addEvent({
						delay: 100, repeat: 10, callback: () =>
						{
							if (!_enemy.isFalling())
							{
								this.fireGun(_enemy);
							}
						}
					});

					_enemy.gunCoolDownTimer = this.time.addEvent({ delay: 1500 });
				}
			}
			else
			{

			}

			/* TODO: this is a quick solution which isn't efficient and doesn't account tile tiles
			being in the way. There's a raycaster plugin which is probably the best option for a 
			more permenent solution. */
		});
	}

	/**
	 * starts timers for a gun spray.
	 * 
	 * Can be called anytime, as nothing will happen if the cooldown timer hasn't completed.
	 * 
	 * @param enemy to fire from
	 * @param constant 
	 */
	setGunFire(enemy: EnemyPrefab, constant?: boolean)
	{
		const bullets = (constant ? -1 : 10);

		if (constant)
		{
			// console.log('hello??')
		}

		if (enemy.gunSprayTimer.getProgress() == 1 && enemy.gunCoolDownTimer.getProgress() == 1)
		{
			enemy.gunSprayTimer = this.time.addEvent({
				delay: 100, repeat: bullets, callback: () =>
				{
					if (!enemy.isFalling())
					{
						this.fireGun(enemy);
					}
				}
			});

			enemy.gunCoolDownTimer = this.time.addEvent({ delay: 1500 });
		}
	}

	/**
	 * fires bullet from any enemy
	 * @param enemy to fire from
	 */
	fireGun(enemy: EnemyPrefab): void
	{
		let _newBullet = this.bulletGroup.get(enemy.x, enemy.y) as BulletPrefab;
		if (_newBullet == undefined)
		{
			console.log('out of bullets')
			return;
		}
		_newBullet.appear();
		this.mainLayer.add(_newBullet);
		this.bulletList.push(_newBullet);
		this.UICam.ignore(_newBullet);
		/* does this add existing bullets to the list, adding them infinitely? */
		// TODO: these should be added once on object initialization, not recycle
		let velocity = { x: 0, y: 0 };
		const _speed = 300;
		const _speedHorizontal = 250;
		switch (enemy.gunDirection)
		{
			case 'up':
				{
					velocity = { x: 0, y: -_speed };
					break;
				}
			case 'down':
				{
					velocity = { x: 0, y: _speed };
					break;
				}
			case 'downward':
				{
					velocity = {
						x: (enemy.flipX ? _speedHorizontal : -_speedHorizontal),
						y: _speedHorizontal
					};
					break;
				}
			case 'upward':
				{
					velocity = {
						x: (enemy.flipX ? _speedHorizontal : -_speedHorizontal),
						y: -_speedHorizontal
					};
					break;
				}
			case 'forward':
				{
					velocity = { x: (enemy.flipX ? _speed : -_speed), y: 0 };
					break;
				}
		}

		_newBullet.body.setVelocity(velocity.x, velocity.y);
	}

	/**  
	 * DEPRECATED
	 * creates bullets from all enemies with a gun 
	*/
	enemyGunFire()
	{
		this.gunEnemyList.forEach((_enemy, _index) => 
		{
			let enemy = _enemy as EnemyPrefab;
			if (enemy.isFalling())
			{
				return;
			}
			let _newBullet = this.bulletGroup.get(enemy.x, enemy.y) as BulletPrefab;
			if (_newBullet == undefined)
			{
				console.log('out of bullets')
				return;
			}
			_newBullet.appear();
			this.mainLayer.add(_newBullet);
			this.bulletList.push(_newBullet);
			this.UICam.ignore(_newBullet);
			/* does this add existing bullets to the list, adding them infinitely? */
			// TODO: these should be added once on object initialization, not recycle
			let velocity = { x: 0, y: 0 };
			switch (enemy.gunDirection)
			{
				case 'up':
					{
						velocity = { x: 0, y: -30 };
						break;
					}
				case 'down':
					{
						velocity = { x: 0, y: 30 };
						break;
					}
				case 'downward':
					{
						velocity = { x: (enemy.flipX ? 15 : -15), y: 15 };
						break;
					}
				case 'upward':
					{
						velocity = { x: (enemy.flipX ? 15 : -15), y: -15 };
						break;
					}
				case 'forward':
					{
						velocity = { x: (enemy.flipX ? 30 : -30), y: 0 };
						break;
					}
			}
			_newBullet.body.setVelocity(velocity.x, velocity.y);
		});
	}

	/**
	 * Recturns vector2 for knockback velocity based on player state.
	 * @param enemy Velocity may be modified for other objects such as bombs.
	 */
	getKnockbackVelocty(enemy: boolean): Phaser.Math.Vector2
	{
		let velocity = new Phaser.Math.Vector2(0, 0);

		// dive
		if (this.player.stateController.currentState.name === 'dive')
		{
			velocity.set(100, -150);
		}
		else if (this.player.stateController.currentState.name === 'punch')
		{
			if (enemy)
			{
				velocity.set(300, -150);
			}
			else
			{
				velocity.set(400, -100);
			}
		}
		else if (this.player.stateController.currentState.name == 'uppercut')
		{
			if (enemy)
			{
				velocity.set(0, -350);
			}
			else
			{
				velocity.set(0, -450);
			}
		}

		if (!this.player.flipX && velocity.x !== 0)
		{
			velocity.x = -velocity.x;
		}

		return velocity;
	}

	/**
	 * CURRENTLY UNUSED
	 * 
	 * checks if all enemies are defeated and shows victory audio / visual
	 * @returns 
	 */
	enemiesDefeatedCheck()
	{
		// check
		let _anyEnemies = false;
		this.enemyList.forEach((enemy) => 
		{
			let _enemy = enemy as EnemyPrefab;
			if (!_enemy.isFalling())
			{
				_anyEnemies = true;
			}
		});
		if (_anyEnemies)
		{
			return;
		}

		// here is where the level end code would go
	}

	/** DEPRECATED */
	goalEnemyCheck(enemy: EnemyPrefab)
	{
		if (enemy.isGoal)
		{
			if (!this.reachedGoal)
			{
				this.reachedGoal = true;

				this.levelEndFeedback();

				this.player.putInPlane(this.plane.x, this.plane.y);
			}
		}
	}

	/**
	 * 
	 * @param initialize skips animation
	 */
	updateEnemiesUI(initialize: boolean): void
	{
		let defeatedEnemyCount = 0;
		this.enemyList.forEach((enemy) => 
		{
			let _enemy = enemy as EnemyPrefab;
			if (_enemy.isFalling())
			{
				defeatedEnemyCount++;
			}
		});

		this.uiScene.setEnemiesText(defeatedEnemyCount, this.enemyList.length)

		if (!initialize)
		{
			this.uiScene.animateEnemiesText();
		}
	}

	levelEndFeedback()
	{
		// win text visual
		this.winText.setVisible(true);
		this.tweens.add
			({
				targets: this.winText,
				duration: 1000,
				yoyo: true,
				// hold: 1000,
				// repeatDelay: 1000,
				repeat: -1,
				ease: Phaser.Math.Easing.Sine.In,
				scaleY: 1.3,
				scaleX: 1,
				angle: 30
			});
		this.time.addEvent({
			delay: 5000, callback: () => 
			{
				this.winText.setVisible(false);
			}
		});

		// Plane fly away tween
		this.tweens.add
			({
				targets: this.plane,
				duration: 4000,
				hold: 1000,
				// repeatDelay: 1000,
				repeat: 0,
				ease: Phaser.Math.Easing.Cubic.In,
				y: this.plane.y - 300,
				x: this.plane.x + 1000
			});

		// Getting into Plane bob tween
		// this.tweens.add
		// ({
		// 	targets: this.plane,
		// 	duration: 100,
		// 	// repeatDelay: 1000,
		// 	repeat: 0,
		// 	yoyo: true,
		// 	ease: Phaser.Math.Easing.Cubic.Out,
		// 	y: this.plane.y + 10,
		// });
		// TODO: Turn off the regular looping tween before starting this one.
		// TODO: Tweak this tween's timing and easing.

		this.setTutorialUI(false, false, 0);

		this.cameras.main.stopFollow();

		this.levelTimer.paused = true;
		this.time.addEvent({
			delay: 200, repeat: -1, callback: () =>
			{
				this.uiScene.timerText.setVisible(!this.uiScene.timerText.visible);
			}
		});

		// win audio
		this.sound.play('victory');
		this.victorySound.play();
		this.music.pause();
	}

	/**
	 * 
	 * @param show 
	 * @param level 
	 */
	setTutorialUI(show: boolean, mobile: boolean, level: number,)
	{
		let tutorialString = ''

		switch (level)
		{
			case 0:
				tutorialString = "Welcome to life, Bird Tapper! Before you can take on the violet army, lets brush up on the basics.\n\nYou can jump with <input>. You'll move forward automatically, but you can change direction from walls. While against one, try jumping against it and jumping again to perform a wall jump."
				break;
			case 1:
				tutorialString = "Have you tried using your wings yet? Use <input> while midair to flap and gain some more height.\n\nYour tiny wings only have the strength to do this twice, and you'll get more and more pale as you become weaker."
				break;
			case 2:
				tutorialString = "Soldiers are dangerous, so it's time to attack! Hit <input> to punch forward with a burst of speed.\n\nDo this in front of an enemy to take them out with your fist. Punches are also an easy way to launch yourself from a wall."
				break;
			case 4:
				tutorialString = "OK, time to dive. Use <input> to boost yourself downwards. If you hit an enemy, you'll take them out!\n\nDiving also aids your mobility, helping you control / time your landings."
				break;
			case 6:
				tutorialString = "When punching forward isn't enough, hit 'em with an uppercut!\n\nUse <input> to launch upward and take out the enemies above you."
				break;
			case 7:
				tutorialString = "Punches and uppercuts take a lot out of you...\n\nLanding on ground is one way to recharge, but you'll also automatically regain charge if you take out an enemy with your attack!"
				break;
			case 8:
				tutorialString = "Each enemy you take out will add to your combo as long as you're not grounded.\n\nTry to figure out ways to build that combo!"
				break;
			// case 9:
			// 	tutorialString = "Good hustle out there! Time to test your skills."
			// 	break;
		}

		this.registry.set('seen-tutorial-level-' + this.registry.get('current-level-index'), true);
		/*  This is set even if no tutorial is present, allowing this function to be skipped
			  next time.
		 */

		if (!show || tutorialString === '')
		{
			this.tutorialContainer.setVisible(false);
			this.hiddenByTutorialList.forEach((element) =>
			{
				element.setVisible(true);
			});
			return;
		}
		else
		{
			this.tutorialContainer.setVisible(true);
			this.tutorialText.setText(tutorialString);
			this.hiddenByTutorialList.forEach((element) =>
			{
				element.setVisible(false);
			});
		}

		if (mobile)
		{
			// this.tutorialText.setMaxWidth(200);
			// this.tutorialBox.width = 250;
			// this.tutorialBox.setX(0);
			console.log(Align.getComponent(this.tutorialContainer));
			Align.getComponent(this.tutorialContainer).right = false;
			Align.getComponent(this.tutorialContainer).center = true;
			Align.getComponent(this.tutorialContainer).horizontalOffset = 0;

			this.player.lockInput = true;

			this.tutorialBox.setInteractive();
			this.tutorialBox.on('pointerdown', () =>
			{
				this.setTutorialUI(false, true, 0);
				this.player.lockInput = false;
				this.player.startMoving();
			});
		}
	}

	/** iterates through everything in the 'elements' object layer of the map and creates enemies 
	 * based on their GID. */
	createMapEnemies()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((object, index) =>
		{
			// Return if this isn't the enemy tile
			if (object.gid)
			{
				if (object.gid !== 37)
				{
					return;
				}
			}
			else
			{
				return;
			}

			// Settings
			let enemy: EnemyPrefab;

			const balloon: boolean = object.properties[0].value;
			const bomb: boolean = object.properties[1].value;
			const goal: boolean = object.properties[2].value;
			const gunDirection: GunDirection = object.properties[3].value;
			const alwaysFire: boolean = (object.properties[3].value);
			const mine = object.properties[4].value;
			const parasol: boolean = object.properties[5].value;
			const pogo: boolean = object.properties[6].value;
			// const vision: ? = object.properties[7].value;

			// Enemy type
			if (balloon)
			{
				enemy = new BalloonEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
			}
			else if (pogo)
			{
				enemy = new PogoEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
			}
			else if (goal)
			{
				enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
				enemy.isGoal = true;
				this.goalEnemyIndex = this.enemyList.length;

				this.createPlane(object.x!, object.y!);
			}
			else
			{
				enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
			}

			if (gunDirection !== undefined)
			{
				this.gunEnemyList.push(enemy);
			}
			if (bomb)
			{
				this.bombEnemyList.push(enemy);
				enemy.createBombProp();
				enemy.bombCooldownTimer = this.time.addEvent({
					delay: 1000, callback: () =>
					{
						if (!enemy.isFalling())
						{
							enemy.bombProp.setVisible(true);
						}
					}
				});
			}

			enemy.flipX = object.flippedHorizontal!;

			this.enemyList.push(enemy);
			enemy.enemyListIndex = this.enemyList.length - 1;
			this.mapElementList[object.id] = enemy;
			// this.mainLayer.add(enemy);
			// this.UICam.ignore(enemy);
			// this.addToMainLayer(enemy);
		});
	}

	createPlane(x: number, y: number)
	{
		this.plane = this.add.image(x + 7, y + 2, 'plane');
		// this.addToMainLayer(this.plane);
		this.plane.flipX = true;

		// this.tweens.add
		// ({
		// 	targets: this.plane,
		// 	y: this.plane.y - 10,
		// 	duration: 1000,
		// 	ease: Phaser.Math.Easing.Quadratic.InOut,
		// 	yoyo: true,
		// 	repeat: -1
		// });
		// TODO: have plane enemy position reflect this.

		this.planeRect = new Phaser.Geom.Rectangle(x - 5, y - 30, this.plane.width, this.plane.height + 25);

		if (__DEV__)
		{
			this.debugPlaneRectGraphics = this.add.graphics();
			this.debugPlaneRectGraphics.lineStyle(1, 0x00ff00);
			this.debugPlaneRectGraphics.strokeRect
				(this.planeRect.x, this.planeRect.y, this.planeRect.width, this.planeRect.height);
			this.UICam.ignore(this.debugPlaneRectGraphics);
		}
	}

	createMapVisionPolys()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((_object, index) =>
		{
			if (_object.polygon)
			{
				let object = _object as any;

				const parentEnemy = this.mapElementList[object.properties[0].value];

				const p0 = new Phaser.Geom.Point
					((object.polygon[0].x + object.x), (object.polygon[0].y + object.y));
				const p1 = new Phaser.Geom.Point
					((object.polygon[1].x + object.x), (object.polygon[1].y + object.y));
				const p2 = new Phaser.Geom.Point
					((object.polygon[2].x + object.x), (object.polygon[2].y + object.y));
				const p3 = new Phaser.Geom.Point
					((object.polygon[3].x + object.x), (object.polygon[3].y + object.y));
				/* Tiled polygons are relative / local points, which Phaser polygons are 
				worldspace points. This converts the points.
				*/
				/* TODO: make this dynamic to support polygons of more than 2 points
				*/
				const visionPoly = new VisionPoly(parentEnemy, [p0, p1, p2, p3]);

				const _parentEnemy = parentEnemy as EnemyPrefab;
				_parentEnemy.alwaysFire = false;

				this.visionPolys.push(visionPoly);
				this.mapElementList[object.id] = visionPoly;

				if (__DEV__)
				{
					this.debugVisionPolyGraphics = this.add.graphics();
					this.debugVisionPolyGraphics.lineStyle(1, 0xff0000);
					this.debugVisionPolyGraphics.strokePoints(visionPoly.points, true)
					this.UICam.ignore(this.debugVisionPolyGraphics);
				}
			}
		});
	}

	/**
	 * Initializes sound variables with set volumes
	 */
	addSounds()
	{
		this.flapSound = this.sound.add('bird-flap', { volume: 1 });
		this.enemyDeathSound = this.sound.add('enemy-death', { volume: 1 });
		this.explosionSound = this.sound.add('explosion', { volume: .7 });
		this.playerDeathSound = this.sound.add('bird-die', { volume: 1 });
		this.victorySound = this.sound.add('victory', { volume: 1 });
		this.reflectSound = this.sound.add('reflect', { volume: .6 });
		this.punchSound = this.sound.add('punch-swing', { volume: 1 });
		this.comboHitSound = this.sound.add('combo-hit');

		this.flapSound.play();
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	createCameras()
	{
		CameraUtil.configureMainCamera(this);
		// this.cameras.main.setScroll(this.player.x, this.player.y);
		this.cameras.main.startFollow(this.cameraFollow, true, .1, .1);
		this.cameras.main.setBounds(0, 0, this.tileLayer.width, this.tileLayer.height);
		this.cameras.main.ignore(this.uILayer.getChildren());

		this.UICam = CameraUtil.createUICamera(this);
		this.UICam.ignore(this.mainLayer.getChildren());
		this.UICam.ignore(this.bGLayer.getChildren());
		this.UICam.setVisible(false);
	}

	bindMobileButtons()
	{
		// jump
		this.uiScene.mobileButtonJump.setInteractive();
		this.uiScene.mobileButtonJump.on('pointerdown', () =>
		{
			this.player.jumpMobileButton = true;
		});
		this.uiScene.mobileButtonJump.on('pointerup', () =>
		{
			this.player.jumpMobileButton = false;
		});
		this.uiScene.mobileButtonJump.on('pointerout', () =>
		{
			this.player.jumpMobileButton = false;
		});

		// punch
		this.uiScene.mobileButtonPunch.setInteractive();
		this.uiScene.mobileButtonPunch.on('pointerdown', () =>
		{
			this.player.punchMobileButton = true;
		});
		this.uiScene.mobileButtonPunch.on('pointerup', () =>
		{
			this.player.punchMobileButton = false;
		});
		this.uiScene.mobileButtonPunch.on('pointerout', () =>
		{
			this.player.punchMobileButton = false;
		});

		// uppercut
		this.uiScene.mobileButtonUppercut.setInteractive();
		this.uiScene.mobileButtonUppercut.on('pointerdown', () =>
		{
			this.player.uppercutMobileButton = true;
		});
		this.uiScene.mobileButtonUppercut.on('pointerup', () =>
		{
			this.player.uppercutMobileButton = false;
		});
		this.uiScene.mobileButtonUppercut.on('pointerout', () =>
		{
			this.player.uppercutMobileButton = false;
		});

		// dive
		this.uiScene.mobileButtonDive.setInteractive();
		this.uiScene.mobileButtonDive.on('pointerdown', () =>
		{
			this.player.diveMobileButton = true;
		});
		this.uiScene.mobileButtonDive.on('pointerup', () =>
		{
			this.player.diveMobileButton = false;
		});
		this.uiScene.mobileButtonDive.on('pointerout', () =>
		{
			this.player.diveMobileButton = false;
		});

		// level select
		this.uiScene.mobileButtonLevelSelect.setInteractive();
		this.uiScene.mobileButtonLevelSelect.on('pointerdown', () =>
		{
			this.LoadLevelSelect();
		});
	}

	setDebugUI()
	{
		if (this.uiScene.scene.isActive())
		{
			this.uiScene.setDebugText(0, `${this.player.stateController.currentState.name}`);
			this.uiScene.setDebugText(1, ``);
			this.uiScene.setDebugText(2, ``);
		}
	}

	resize()
	{
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));
		this.UICam.setZoom(CameraUtil.getAdaptiveZoom(this));

		const _camera = this.UICam as any;
		_camera.preRender(1);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
