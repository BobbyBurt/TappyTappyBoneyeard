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
		const parallax_Cityscape_5 = this.add.image(357, 619, "Parallax-Cityscape");
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

		// mobileButtonPunchRight
		const mobileButtonPunchRight = this.add.rectangle(71, -163, 100, 100);
		mobileButtonPunchRight.setOrigin(1, 1);
		mobileButtonPunchRight.alpha = 0.5;
		mobileButtonPunchRight.isFilled = true;
		mobileButtonPunchRight.fillColor = 8168429;
		uILayer.add(mobileButtonPunchRight);

		// mobileButtonJump
		const mobileButtonJump = this.add.rectangle(101, -273, 100, 100);
		mobileButtonJump.setOrigin(1, 1);
		mobileButtonJump.alpha = 0.5;
		mobileButtonJump.isFilled = true;
		mobileButtonJump.fillColor = 8318332;
		uILayer.add(mobileButtonJump);

		// mobileButtonDive
		const mobileButtonDive = this.add.rectangle(-304, -244, 100, 100);
		mobileButtonDive.setOrigin(0, 1);
		mobileButtonDive.alpha = 0.5;
		mobileButtonDive.isFilled = true;
		mobileButtonDive.fillColor = 15591036;
		uILayer.add(mobileButtonDive);

		// mobileButtonPunchLeft
		const mobileButtonPunchLeft = this.add.rectangle(-305, -142, 100, 100);
		mobileButtonPunchLeft.setOrigin(0, 1);
		mobileButtonPunchLeft.alpha = 0.5;
		mobileButtonPunchLeft.isFilled = true;
		mobileButtonPunchLeft.fillColor = 15563900;
		uILayer.add(mobileButtonPunchLeft);

		// mobileButtonUppercut
		const mobileButtonUppercut = this.add.rectangle(-302, -346, 100, 100);
		mobileButtonUppercut.setOrigin(0, 1);
		mobileButtonUppercut.alpha = 0.5;
		mobileButtonUppercut.isFilled = true;
		mobileButtonUppercut.fillColor = 15579772;
		uILayer.add(mobileButtonUppercut);

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
		winText.visible = false;
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
		const enemiesText = this.add.bitmapText(475, -58, "nokia", "5/6");
		enemiesText.setOrigin(1, 0);
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

		// endEgg
		const endEgg = this.add.image(286, 143, "bird1egg") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(endEgg, false);
		endEgg.body.moves = false;
		endEgg.body.pushable = false;
		endEgg.body.setSize(11, 12, false);

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const collidesWithBombList: Array<any> = [];
		const gunEnemyList: Array<any> = [];
		const bombEnemyList: Array<any> = [];
		const bulletList: Array<any> = [];

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

		// mobileButtonPunchRight (components)
		const mobileButtonPunchRightAlign = new Align(mobileButtonPunchRight);
		mobileButtonPunchRightAlign.down = true;
		mobileButtonPunchRightAlign.right = true;
		new MobileDependent(mobileButtonPunchRight);
		const mobileButtonPunchRightMobileButton = new MobileButton(mobileButtonPunchRight);
		mobileButtonPunchRightMobileButton.input = "jump";

		// mobileButtonJump (components)
		const mobileButtonJumpAlign = new Align(mobileButtonJump);
		mobileButtonJumpAlign.down = true;
		mobileButtonJumpAlign.right = true;
		mobileButtonJumpAlign.verticalOffset = -100;
		new MobileDependent(mobileButtonJump);
		new MobileButton(mobileButtonJump);

		// mobileButtonDive (components)
		const mobileButtonDiveAlign = new Align(mobileButtonDive);
		mobileButtonDiveAlign.down = true;
		mobileButtonDiveAlign.left = true;
		mobileButtonDiveAlign.verticalOffset = -100;
		new MobileDependent(mobileButtonDive);
		new MobileButton(mobileButtonDive);

		// mobileButtonPunchLeft (components)
		const mobileButtonPunchLeftAlign = new Align(mobileButtonPunchLeft);
		mobileButtonPunchLeftAlign.down = true;
		mobileButtonPunchLeftAlign.left = true;
		new MobileDependent(mobileButtonPunchLeft);
		new MobileButton(mobileButtonPunchLeft);

		// mobileButtonUppercut (components)
		const mobileButtonUppercutAlign = new Align(mobileButtonUppercut);
		mobileButtonUppercutAlign.down = true;
		mobileButtonUppercutAlign.left = true;
		mobileButtonUppercutAlign.verticalOffset = -200;
		new MobileDependent(mobileButtonUppercut);
		new MobileButton(mobileButtonUppercut);

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
		enemiesTextAlign.verticalOffset = -75;

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

		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.player = player;
		this.uILayer = uILayer;
		this.buildText = buildText;
		this.debugText = debugText;
		this.debugText2 = debugText2;
		this.debugText3 = debugText3;
		this.mobileButtonPunchRight = mobileButtonPunchRight;
		this.mobileButtonJump = mobileButtonJump;
		this.mobileButtonDive = mobileButtonDive;
		this.mobileButtonPunchLeft = mobileButtonPunchLeft;
		this.mobileButtonUppercut = mobileButtonUppercut;
		this.mobileButtonLevelSelect = mobileButtonLevelSelect;
		this.winText = winText;
		this.enemiesText = enemiesText;
		this.chargeText = chargeText;
		this.scoreText = scoreText;
		this.endEgg = endEgg;
		this.public_list = public_list;
		this.enemyList = enemyList;
		this.collidesWithBombList = collidesWithBombList;
		this.gunEnemyList = gunEnemyList;
		this.bombEnemyList = bombEnemyList;
		this.bulletList = bulletList;

		this.events.emit("scene-awake");
	}

	private bGLayer!: Phaser.GameObjects.Layer;
	public mainLayer!: Phaser.GameObjects.Layer;
	public player!: playerPrefab;
	public uILayer!: Phaser.GameObjects.Layer;
	private buildText!: Phaser.GameObjects.BitmapText;
	private debugText!: Phaser.GameObjects.BitmapText;
	private debugText2!: Phaser.GameObjects.BitmapText;
	private debugText3!: Phaser.GameObjects.BitmapText;
	private mobileButtonPunchRight!: Phaser.GameObjects.Rectangle;
	private mobileButtonJump!: Phaser.GameObjects.Rectangle;
	private mobileButtonDive!: Phaser.GameObjects.Rectangle;
	private mobileButtonPunchLeft!: Phaser.GameObjects.Rectangle;
	private mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	private mobileButtonLevelSelect!: Phaser.GameObjects.Rectangle;
	private winText!: Phaser.GameObjects.BitmapText;
	private enemiesText!: Phaser.GameObjects.BitmapText;
	private chargeText!: Phaser.GameObjects.BitmapText;
	private scoreText!: Phaser.GameObjects.BitmapText;
	private endEgg!: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
	public public_list!: Array<any>;
	private enemyList!: Array<any>;
	private collidesWithBombList!: Array<any>;
	private gunEnemyList!: Array<any>;
	private bombEnemyList!: Array<any>;
	private bulletList!: Array<any>;

	/* START-USER-CODE */

// game state
	/** used to make sure level restart is only called once */
	private restarting = false;
	private won = false;

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

	/** Polygons used for enemies' player detection. */
	private visionPolys: Array<VisionPoly>;

	/** 
	 * All objects in the elements layer in the tilemap.
	 * 
	 * Indexes correlate to the object's ID, so most of this array's indexes are empty.
	 */
	private mapElementList: Array<any>;

	create()
	{	
		// super.create();

		this.editorCreate();

		this.createMobileButtons();

		this.restarting = false;
		this.won = false;

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

		// playerTilemapCollider
		this.physics.add.collider(this.player, this.tileLayer, this.playerTilemapCollide, undefined, this);

		// soldierTilemapCollide
		this.physics.add.collider(this.enemyList, this.tileLayer);

		// playerEnemyOverlap
		this.physics.add.overlap
			(this.player, this.enemyList, this.playerEnemyOverlap, undefined, this);

		// bulletTilemapCollide
		this.physics.add.collider
			(this.bulletList, this.tileLayer, this.bulletTilemapCollide, undefined, this);

		// playerBulletOverlap
		this.physics.add.overlap
			(this.bulletList, this.player, this.bulletPlayerCollide, undefined, this);

		// playerEndEggOverlap
		this.physics.add.overlap
			(this.player, this.endEgg, this.playerEndEggOverlap, undefined, this);

		this.createCameras();

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
		const startPoint = TilemapUtil.getObjectPosition('startPoint', this.tileMap);
		startPoint.x += 8;
		startPoint.y -= 8;
		this.player.setPosition(startPoint.x, startPoint.y);
		this.data.set('startPoint', startPoint);

		const endEgg = TilemapUtil.getObjectPosition('endEgg', this.tileMap);
		endEgg.x += 6;
		endEgg.y -= 6;
		this.endEgg.setPosition(endEgg.x, endEgg.y);

		this.bottomBoundary = TilemapUtil.getObjectPosition('resetY', this.tileMap).y

	// bombs
		this.bombGroup = this.add.group({maxSize: 30, classType: BombPrefab});
			// TODO: define max
		// this.physics.add.collider
		// 	(this.bombGroup, this.collidesWithBombList, this.bombCollide, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.player, this.bombPlayerOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.enemyList, this.bombEnemyOverlap, undefined, this);
		this.physics.add.collider(this.bombGroup, this.tileLayer, this.bombTilemapCollide, undefined, this);

	// bullets
		this.bulletGroup = this.add.group({maxSize: 100, classType: BulletPrefab})
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
		this.explosionGroup = this.add.group({maxSize: 30, classType: explosionPrefab})
			// TODO: define max

	// music
		if (this.music == undefined)	
		{
			this.music = this.sound.add('main-game', {volume: .7});

			if (!__DEV__)
			{
				this.music.play({loop: true});
			}
		}
		this.music.resume();

	// SFX
		this.sound.add('bird-flap', {volume: 1});
		this.sound.add('enemy-death', {volume: 1});
		this.sound.add('explosion', {volume: .7});
		this.sound.add('bird-die', {volume: 1});
		this.sound.add('victory', {volume: 1});
		this.sound.add('reflect', {volume: 1});
			// TODO: impliment explosion sound w/ spacial audio or something
		this.sound.add('punch-swing', {volume: 1});

		this.sound.play('reflect');

	// debug wall detect visual
		this.debugWallDetectGraphics = this.add.graphics({fillStyle: { color: 0x0000ff, alpha: (__DEV__? 1 : 0)}});
		this.UICam.ignore(this.debugWallDetectGraphics);

	// quick restart input
		this.input.keyboard.on('keydown-R', () =>
		{
			this.resetLevel();
		});

	// level select input
		this.input.keyboard.on('keydown-E', () =>
		{
			this.LoadLevelSelect();
		});

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);
	}

	update(time:number, delta: number): void
	{	
		super.update(time, delta);

		// this.debugText.setText(`${this.player.stateController.currentState.name}`);
		if (__DEV__)
		{
			this.debugText.setText(`${this.player.stateController.currentState.name}`);
			// this.debugText2.setText(`flap charge: ${this.player.flapCharge}`);
			// this.debugText3.setText(`punch charge: ${this.player.punchCharged}`);	
			this.debugText2.setText(`player x: ${this.player.x}`);
			this.debugText3.setText(`player vel x: ${this.player.body.velocity.x}`);
		}

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
			(this.tileLayer.getTileAtWorldXY(this.player.body.x - 2, this.player.body.y + 9) != undefined 
			|| this.tileLayer.getTileAtWorldXY(this.player.body.x - 2, this.player.body.y - 1) != undefined);
		this.player.onWallRight = 
			(this.tileLayer.getTileAtWorldXY(this.player.body.x + 12, this.player.body.y + 9) != undefined
			|| this.tileLayer.getTileAtWorldXY(this.player.body.x + 12, this.player.body.y - 1) != undefined);
				// TODO: decorative tiles without collision, as defined at tileLayer.setCollision, 
				// should not count as wall.
	// DEBUG: collision points visual
		this.debugWallDetectGraphics.clear();
		this.debugWallDetectGraphics.fillPoint(this.player.body.x - 2, this.player.body.y + 9);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x - 2, this.player.body.y - 1);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x + 12, this.player.body.y + 9);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x + 12, this.player.body.y - 1);

	// Vision rect check
	this.visionPolys.forEach((object, index) =>
	{
		if (Phaser.Geom.Polygon.ContainsPoint(object, new Phaser.Geom.Point(this.player.x, this.player.y)))
		{
			if (object.parentEnemy.gunDirection)
			{
				this.setGunFire(object.parentEnemy);
			}
			else if (object.parentEnemy.bombProp)
			{
				if (object.parentEnemy.bombCooldownTimer.getProgress() == 1 && !object.parentEnemy.isFalling())
				{
					this.setBomb(object.parentEnemy.x, object.parentEnemy.y, object.parentEnemy);
					object.parentEnemy.bombCooldownTimer.reset({});
				}
			}
		}
	});

	// out-of-bounds checks
		if (this.player.y > this.bottomBoundary!)
		{
			// this.player.reset();

			this.resetLevel();
		}
		this.bombGroup.getChildren().forEach(member =>
		{
			let _member = member as BombPrefab;
			if (_member.y > this.bottomBoundary!)
				// why can't I access y just by member.y?
			{
				_member.disappear();
				_member.setPosition(9999, -9999);
				_member.enemy.bombCooldownTimer.destroy();
				_member.enemy.bombCooldownTimer = this.time.addEvent({delay: 1000, callback: () =>
				{
					if (!_member.enemy.isFalling())
					{
						_member.enemy.bombProp.setVisible(true);
					}
				}});
			}
		});
			// TODO: change this to bomb group

		this.updateEnemiesUI();

		// this.gunFireCheck();
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

	// OLD
		// this.player.reset();

		// this.sound.play('bird-die');

	// remove update listeners to avoid crash
		this.events.off(Phaser.Scenes.Events.UPDATE);
		this.player.removeUpdateListener();
		this.enemyList.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			_enemy.removeUpdateListener();
		});

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

	// OLD
		// this.player.reset();

		// this.sound.play('bird-die');

	// remove update listeners to avoid crash
		this.events.off(Phaser.Scenes.Events.UPDATE);
		this.player.removeUpdateListener();
		this.enemyList.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			_enemy.removeUpdateListener();
		});

		this.scene.start('LevelSelect');
	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 * 
	 * sets Player.onFloor
	 */
	playerTilemapCollide(_player:Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap:any)
		// TODO: specify type annotation. Call back gives 
		// Phaser.Types.Physics.Arcade.GameObjectWithBody, but onFloor() is a member
	{
		if (_player.body.blocked.down)
		{
			this.player.onFloor = true;
		}

		let tilemap = _tilemap as Phaser.Tilemaps.Tilemap;
	}

	playerHazardTilemapCollide(_player:Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap:any)
	{
		// this.resetLevel();

		console.log('overlapping. for some reason?')
	}

	playerEnemyOverlap(player:Phaser.Types.Physics.Arcade.GameObjectWithBody, 
		enemy:Phaser.Types.Physics.Arcade.GameObjectWithBody)
		// TODO: specify type annotation
	{
		let _enemy = enemy as EnemyPrefab;

		if (this.player.stateController.currentState.name == 'punch' 
			|| this.player.stateController.currentState.name == 'dive'
			|| this.player.stateController.currentState.name == 'uppercut')
		{
			if (this.player.stateController.currentState.name == 'dive')
			{
				this.player.setVelocityY(-this.player.jumpForce);
				if (_enemy.hasParasol)
				{
					return;
				}
			}

			_enemy.hit(this.player.body.velocity.x, this.player.body.velocity.y);

			if (_enemy.bombCooldownTimer != undefined)
			{
				_enemy.bombCooldownTimer.destroy();
			}

			this.player.punchCharged = true;

			this.sound.play('enemy-death');

			// this.enemiesDefeatedCheck();

			this.updateEnemiesUI();
			this.animatedEnemiesUI();
		}
		else
		{
			this.resetLevel();
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

		if (this.player.stateController.currentState.name == 'punch' 
		|| this.player.stateController.currentState.name == 'uppercut')
		{
			this.setBombFuse(_bomb);
			_bomb.setPosition(_bomb.x, _bomb.y -3);
			_bomb.body.setVelocity(this.player.body.velocity.x * 1.3, (this.player.body.velocity.y * 1.5) - 150);
			_bomb.punched = true;
		}
		else
		{
			_bomb.fuseTimer.destroy();
			this.bombExplode(_bomb);
		}
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
	bombCollide(bomb:any, _collidedWith:any)
	{
		let _bomb = bomb as BombPrefab;

		// player is included in the bomb collision list, but egg - player should be ignored
	}

	/** TEST */
	balloonPlayerCollide(_balloon:any, _player:any)
	{
		console.log('balloon hit');
	}

	bulletPlayerCollide(_bullet:any, _player:any)
	{
		this.resetLevel();
	}

	bulletTilemapCollide(_bullet: any, _tilemap: any)
	{
		_bullet.disappear();
	}

	playerEndEggOverlap(_player: any, _endEgg: any)
	{
		if (!this.won)
		{
			this.levelEndFeedback();

			this.won = true;
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
		bomb.fuseVisualTimer = this.time.addEvent({ delay: 100, loop: true, callback: () =>
		{
			if (bomb.isTinted)
			{
				bomb.clearTint();
			}
			else
			{
				bomb.setTintFill(0xffffff);
			}
		}});

	// explosion delay
		bomb.fuseTimer.destroy();
		bomb.fuseTimer = this.time.addEvent({ delay: 1000, callback: () =>
		{
			if (bomb.active)
			{
				this.bombExplode(bomb);
			}
		}});
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

		this.sound.play('explosion');

		let bombEnemy = bomb.enemy;
			/* For whatever reason, bomb.enemy changes from this line to callback, so this is used 
			as a consistent reference.
			Or it would be in the timer below, but I've since removed the callback.
			*/

		bomb.enemy.bombCooldownTimer.destroy();
		bomb.enemy.bombCooldownTimer = this.time.addEvent({delay: 700, callback: () =>
		{
			if (!bomb.enemy.isFalling())
			{
				bomb.enemy.bombProp.setVisible(true);
			}
		}});
	}

	/** detects physics bodies within explosion range and impacts them appropriately */
	explosionCheck(x: number, y: number)
	{
		let _this = this;
		this.physics.overlapCirc(x, y, 20, true, false).forEach(function (element: any)
		// TODO: specify type annotation
		{
			if (_this.enemyList.includes(element.gameObject))
			{
				element.gameObject.hit(0, -400);
			}
			if (element.gameObject.name == 'player')
			{
				// _this.player.reset();
				_this.resetLevel();
			}
		});
	}

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
						_enemy.x + (_enemy.flipX? lineLength : -lineLength ), 
						(_enemy.y + 10) - lineLength,);
					break;
				}
				case 'forward':
				{
					lineOfSight.setTo
						(_enemy.x + 7.5, _enemy.y + 10, 
						_enemy.x + (_enemy.flipX? lineLength : -lineLength ), _enemy.y + 10,);
					break;
				}
				case 'downward':
				{
					lineOfSight.setTo
						(_enemy.x + 7.5, _enemy.y + 10, 
						_enemy.x + (_enemy.flipX? lineLength : -lineLength ), 
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
					_enemy.gunSprayTimer = this.time.addEvent({ delay: 100, repeat: 10, callback: () =>
					{
						if (!_enemy.isFalling())
						{
							this.fireGun(_enemy);
						}
					}});

					_enemy.gunCoolDownTimer = this.time.addEvent({delay: 1500});
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
	 */
	setGunFire(enemy: EnemyPrefab)
	{
		if (enemy.gunSprayTimer.getProgress() == 1 && enemy.gunCoolDownTimer.getProgress() == 1)
		{
			enemy.gunSprayTimer = this.time.addEvent({ delay: 100, repeat: 10, callback: () =>
			{
				if (!enemy.isFalling())
				{
					this.fireGun(enemy);
				}
			}});

			enemy.gunCoolDownTimer = this.time.addEvent({delay: 1500});
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
		let velocity = {x: 0, y: 0};
		const _speed = 200;
		const _speedHorizontal = 150;
		switch(enemy.gunDirection)
		{
			case 'up':
			{
				velocity = {x: 0, y: -_speed};
				break;
			}
			case 'down':
			{
				velocity = {x: 0, y: _speed};
				break;
			}
			case 'downward':
			{
				velocity = {x: (enemy.flipX? _speedHorizontal : -_speedHorizontal),
					y: _speedHorizontal};
				break;
			}
			case 'upward':
			{
				velocity = {x: (enemy.flipX? _speedHorizontal : -_speedHorizontal), 
					y: -_speedHorizontal};
				break;
			}
			case 'forward':
			{
				velocity = {x: (enemy.flipX? _speed : -_speed), y: 0};
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
			let velocity = {x: 0, y: 0};
			switch(enemy.gunDirection)
			{
				case 'up':
				{
					velocity = {x: 0, y: -30};
					break;
				}
				case 'down':
				{
					velocity = {x: 0, y: 30};
					break;
				}
				case 'downward':
				{
					velocity = {x: (enemy.flipX? 15 : -15), y: 15};
					break;
				}
				case 'upward':
				{
					velocity = {x: (enemy.flipX? 15 : -15), y: -15};
					break;
				}
				case 'forward':
				{
					velocity = {x: (enemy.flipX? 30 : -30), y: 0};
					break;
				}
			}
			_newBullet.body.setVelocity(velocity.x, velocity.y);
		});
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

	updateEnemiesUI(): void
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

		this.enemiesText.setText(`${defeatedEnemyCount} / ${this.enemyList.length}`);

		if (defeatedEnemyCount === this.enemyList.length)
		{
			this.enemiesText.dropShadowColor = 714549;
		}
	}

	animatedEnemiesUI(): void
	{
		this.enemiesText.setPosition(this.enemiesText.x, this.enemiesText.y + 10)
		this.tweens.add
		({
			targets: this.enemiesText,
			duration: 500,
			// hold: 1000,
			// repeatDelay: 1000,
			// repeat: -1,
			ease: Phaser.Math.Easing.Circular.Out,
			y: this.enemiesText.y - 10
		});
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
		this.time.addEvent({ delay: 5000, callback: () => 
		{
			this.winText.setVisible(false);
		}});

	// win audio
		this.sound.play('victory');
		this.music.pause();
	}


	/** iterates through everything in the 'elements' object layer of the map and creates enemies 
	 * based on their GID. */
	createMapEnemies()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((object, index) =>
		{
			let _enemy: any = null;
			let _gunDirection: GunDirection;
			let _bomb = false;

		// determine weapon from tile gid
			switch (object.gid)
			{
				case 37:
				{
					_gunDirection = null;
					break;
				}
				case 38:
				{
					_gunDirection = 'forward';
					break;
				}
				case 39:
				{
					_gunDirection = 'upward';
					break;
				}
				case 40:
				{
					_gunDirection = 'up';
					break;
				}
				case 41:
				{
					_gunDirection = 'downward';
					break;
				}
				case 42:
				{
					_gunDirection = 'down';
					break;
				}
				case 48:
				{
					_gunDirection = null;
					_bomb = true;
					break;
				}
				default:
				{
					return;
						// this isn't an enemy tile
				}
			}

		// enemy type
			if (object.type == 'balloon' || object.type == 'balloon-parasol')
			{
				_enemy = new BalloonEnemy
					(this, object.x! + 8, object.y! - 8, _gunDirection, 
						(object.type == 'balloon-parasol'));
			}
			else
			{
				_enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, _gunDirection, 
						(object.type == 'parasol'));
			}

			if (_gunDirection !== undefined)
			{
				this.gunEnemyList.push(_enemy);
			}
			if (_bomb)
			{
				this.bombEnemyList.push(_enemy);
				_enemy.createBombProp();
				_enemy.bombCooldownTimer = this.time.addEvent({delay: 1000, callback: () =>
				{
					if (!_enemy.isFalling())
					{
						_enemy.bombProp.setVisible(true);
					}
				}});
			}

			_enemy.flipX = object.flippedHorizontal;

			this.enemyList.push(_enemy);
			_enemy.enemyListIndex = this.enemyList.length - 1;
			this.mapElementList[object.id] = _enemy;
			this.mainLayer.add(_enemy);
			this.UICam.ignore(_enemy);
		});
	}

	createMapVisionPolys()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((_object, index) =>
		{
			if (_object.name === 'enemyVision')
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
	 * Decoupled from createMapEnemies(). Currently unused.
	 * @param x 
	 * @param y 
	 * @param flipX 
	 * @param gunDirection 
	 * @param balloon 
	 * @param bomb 
	 * @param parasol 
	 */
	public createEnemy(x: number, y: number, flipX: boolean, gunDirection: GunDirection, balloon: boolean, 
		bomb: boolean, parasol: boolean): void
	{
		let newEnemy: EnemyPrefab;

		if (balloon)
		{
			newEnemy = new BalloonEnemy(this, x + 8, y - 8, gunDirection, parasol);
		}
		else
		{
			newEnemy = new GroundEnemy(this, x + 8, y - 8, gunDirection, parasol);
		}

		newEnemy.flipX = flipX;

		if (gunDirection !== null)
		{
			this.gunEnemyList.push(newEnemy);
		}
		if (bomb)
		{
			this.bombEnemyList.push(newEnemy);
			newEnemy.bombCooldownTimer = this.time.addEvent({delay: 1000, callback: () =>
			{
				if (!newEnemy.isFalling())
				{
					newEnemy.bombProp.setVisible(true);
				}
			}});
		}

		this.enemyList.push(newEnemy);
		newEnemy.enemyListIndex = this.enemyList.length - 1;
		// this.mainLayer.add(newEnemy);
		// this.UICam.ignore(newEnemy);
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	createCameras()
	{
		CameraUtil.configureMainCamera(this);
		this.cameras.main.setScroll(this.player.x, this.player.y);
		this.cameras.main.startFollow(this.player, true, .1, .1);
		this.cameras.main.setBounds(0, 0, this.tileLayer.width, this.tileLayer.height);
		this.cameras.main.ignore(this.uILayer.getChildren());

		this.UICam = CameraUtil.createUICamera(this);
		this.UICam.ignore(this.mainLayer.getChildren());
		this.UICam.ignore(this.bGLayer.getChildren());
	}

	createMobileButtons()
	{
	// jump
		this.mobileButtonJump.setInteractive();
		this.mobileButtonJump.on('pointerdown', () =>
		{
			this.player.jumpMobileButton = true;
		});
		this.mobileButtonJump.on('pointerup', () =>
		{
			this.player.jumpMobileButton = false;
		});
		this.mobileButtonJump.on('pointerout', () =>
		{
			this.player.jumpMobileButton = false;
		});

	// punch
		this.mobileButtonPunchLeft.setInteractive();
		this.mobileButtonPunchLeft.on('pointerdown', () =>
		{
			this.player.punchLeftMobileButton = true;
		});
		this.mobileButtonPunchLeft.on('pointerup', () =>
		{
			this.player.punchLeftMobileButton = false;
		});
		this.mobileButtonPunchLeft.on('pointerout', () =>
		{
			this.player.punchLeftMobileButton = false;
		});

	// uppercut
		this.mobileButtonUppercut.setInteractive();
		this.mobileButtonUppercut.on('pointerdown', () =>
		{
			this.player.uppercutMobileButton = true;
		});
		this.mobileButtonUppercut.on('pointerup', () =>
		{
			this.player.uppercutMobileButton = false;
		});
		this.mobileButtonUppercut.on('pointerout', () =>
		{
			this.player.uppercutMobileButton = false;
		});

	// egg
		this.mobileButtonPunchRight.setInteractive();
		this.mobileButtonPunchRight.on('pointerdown', () =>
		{
			this.player.punchRightMobileButton = true;
		});
		this.mobileButtonPunchRight.on('pointerup', () =>
		{
			this.player.punchRightMobileButton = false;
		});
		this.mobileButtonPunchRight.on('pointerout', () =>
		{
			this.player.punchRightMobileButton = false;
		});

	// dive
		this.mobileButtonDive.setInteractive();
		this.mobileButtonDive.on('pointerdown', () =>
		{
			this.player.diveMobileButton = true;
		});
		this.mobileButtonDive.on('pointerup', () =>
		{
			this.player.diveMobileButton = false;
		});
		this.mobileButtonDive.on('pointerout', () =>
		{
			this.player.diveMobileButton = false;
		});

	// level select
		this.mobileButtonLevelSelect.setInteractive();
		this.mobileButtonLevelSelect.on('pointerdown', () =>
		{
			this.LoadLevelSelect();
		});
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
