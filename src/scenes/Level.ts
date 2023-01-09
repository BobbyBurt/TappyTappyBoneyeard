
/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import playerPrefab from "../prefabs/playerPrefab";
import SoldierPrefab from "../prefabs/SoldierPrefab";
import Align from "../components/Align";
import MobileDependent from "../components/MobileDependent";
import MobileButton from "../components/MobileButton";
/* START-USER-IMPORTS */

import AdaptiveZoom from "../AdaptiveZoom";

/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// test_map_2
		const test_map_2 = this.add.tilemap("test-map-2");
		test_map_2.addTilesetImage("tileset", "tileset");

		// test_map_3
		const test_map_3 = this.add.tilemap("test-map-3");
		test_map_3.addTilesetImage("tileset", "tileset");

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
		parallax_Cityscape_5.scaleX = 5.641336094532861;
		parallax_Cityscape_5.scaleY = 5.641336094532861;
		parallax_Cityscape_5.setOrigin(0.5, 0);
		parallax_Cityscape_5.flipY = true;
		bGLayer.add(parallax_Cityscape_5);

		// mainLayer
		const mainLayer = this.add.layer();

		// player
		const player = new playerPrefab(this, 265, 141);
		mainLayer.add(player);

		// tileLayer
		const tileLayer = test_map_3.createLayer("Tile Layer 1", ["tileset"], -549, -227);
		mainLayer.add(tileLayer);

		// soldiermid
		const soldiermid = new SoldierPrefab(this, 223, 181);
		mainLayer.add(soldiermid);

		// balloon
		const balloon = this.add.image(2, 170, "balloon");
		mainLayer.add(balloon);

		// soldieronballoon
		const soldieronballoon = this.add.image(-3, 179, "soldieronballoon") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(soldieronballoon, false);
		soldieronballoon.body.allowGravity = false;
		soldieronballoon.body.setSize(16, 17, false);
		mainLayer.add(soldieronballoon);

		// balloon_1
		const balloon_1 = this.add.image(460, 54, "balloon");
		mainLayer.add(balloon_1);

		// soldieronballoon_1
		const soldieronballoon_1 = this.add.image(455, 63, "soldieronballoon") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(soldieronballoon_1, false);
		soldieronballoon_1.body.allowGravity = false;
		soldieronballoon_1.body.setSize(16, 17, false);
		mainLayer.add(soldieronballoon_1);

		// balloon_2
		const balloon_2 = this.add.image(250, -63, "balloon");
		mainLayer.add(balloon_2);

		// soldieronballoon_2
		const soldieronballoon_2 = this.add.image(245, -54, "soldieronballoon") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(soldieronballoon_2, false);
		soldieronballoon_2.body.allowGravity = false;
		soldieronballoon_2.body.setSize(16, 17, false);
		mainLayer.add(soldieronballoon_2);

		// balloon_3
		const balloon_3 = this.add.image(-168, 34, "balloon");
		mainLayer.add(balloon_3);

		// soldieronballoon_3
		const soldieronballoon_3 = this.add.image(-173, 43, "soldieronballoon") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(soldieronballoon_3, false);
		soldieronballoon_3.body.allowGravity = false;
		soldieronballoon_3.body.setSize(16, 17, false);
		mainLayer.add(soldieronballoon_3);

		// balloon_4
		const balloon_4 = this.add.image(-384.24695617335885, 16.301220894787473, "balloon");
		mainLayer.add(balloon_4);

		// soldieronballoon_4
		const soldieronballoon_4 = this.add.image(-389.24695617335885, 25.301220894787473, "soldieronballoon") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(soldieronballoon_4, false);
		soldieronballoon_4.body.allowGravity = false;
		soldieronballoon_4.body.setSize(16, 17, false);
		mainLayer.add(soldieronballoon_4);

		// soldiermid_1
		const soldiermid_1 = new SoldierPrefab(this, 414, -19);
		mainLayer.add(soldiermid_1);

		// soldiermid_2
		const soldiermid_2 = new SoldierPrefab(this, -389, 155);
		mainLayer.add(soldiermid_2);

		// soldiermid_3
		const soldiermid_3 = new SoldierPrefab(this, -55, 91);
		mainLayer.add(soldiermid_3);

		// egg
		const egg = this.add.image(272, 170, "bird1egg") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(egg, false);
		egg.body.gravity.y = 100;
		egg.body.setSize(11, 12, false);
		mainLayer.add(egg);

		// UILayer
		const uILayer = this.add.layer();

		// buildText
		const buildText = this.add.bitmapText(3, -4, "nokia", "Tappy Tappy Boneyard\nv2");
		buildText.text = "Tappy Tappy Boneyard\nv2";
		buildText.fontSize = -8;
		buildText.dropShadowX = -1;
		buildText.dropShadowY = 1;
		uILayer.add(buildText);

		// debugText
		const debugText = this.add.bitmapText(-9, 66, "nokia", "debug textdfdfasdf");
		debugText.setOrigin(0, 1);
		debugText.text = "debug textdfdfasdf";
		debugText.fontSize = -8;
		debugText.dropShadowX = -1;
		debugText.dropShadowY = 1;
		uILayer.add(debugText);

		// debugText2
		const debugText2 = this.add.bitmapText(-10, 38, "nokia", "debug textdfdfasdf");
		debugText2.setOrigin(0, 1);
		debugText2.text = "debug textdfdfasdf";
		debugText2.fontSize = -8;
		debugText2.dropShadowX = -1;
		debugText2.dropShadowY = 1;
		uILayer.add(debugText2);

		// debugText3
		const debugText3 = this.add.bitmapText(-9, 52, "nokia", "debug textdfdfasdf");
		debugText3.setOrigin(0, 1);
		debugText3.text = "debug textdfdfasdf";
		debugText3.fontSize = -8;
		debugText3.dropShadowX = -1;
		debugText3.dropShadowY = 1;
		uILayer.add(debugText3);

		// mobileButtonJump
		const mobileButtonJump = this.add.rectangle(71, -163, 100, 100);
		mobileButtonJump.setOrigin(1, 1);
		mobileButtonJump.alpha = 0.5;
		mobileButtonJump.isFilled = true;
		mobileButtonJump.fillColor = 8168429;
		uILayer.add(mobileButtonJump);

		// mobileButtonDive
		const mobileButtonDive = this.add.rectangle(72, -266, 100, 100);
		mobileButtonDive.setOrigin(1, 1);
		mobileButtonDive.alpha = 0.5;
		mobileButtonDive.isFilled = true;
		mobileButtonDive.fillColor = 8318332;
		uILayer.add(mobileButtonDive);

		// mobileButtonEgg
		const mobileButtonEgg = this.add.rectangle(-304, -244, 100, 100);
		mobileButtonEgg.setOrigin(0, 1);
		mobileButtonEgg.alpha = 0.5;
		mobileButtonEgg.isFilled = true;
		mobileButtonEgg.fillColor = 15591036;
		uILayer.add(mobileButtonEgg);

		// mobileButtonPunch
		const mobileButtonPunch = this.add.rectangle(-305, -142, 100, 100);
		mobileButtonPunch.setOrigin(0, 1);
		mobileButtonPunch.alpha = 0.5;
		mobileButtonPunch.isFilled = true;
		mobileButtonPunch.fillColor = 15563900;
		uILayer.add(mobileButtonPunch);

		// lists
		const public_list: Array<any> = [];
		const enemyList = [soldiermid, soldieronballoon, soldieronballoon_1, soldieronballoon_2, soldieronballoon_3, soldieronballoon_4, soldiermid_1, soldiermid_2, soldiermid_3];

		// playerTilemapCollider
		this.physics.add.collider(player, tileLayer, this.playerHitTilemap, undefined, this);

		// soldierTilemapCollide
		this.physics.add.collider(enemyList, tileLayer);

		// playerEnemyOverlap
		this.physics.add.overlap(player, enemyList, this.playerEnemyOverlap, undefined, this);

		// eggTilemapCollider
		this.physics.add.collider(egg, tileLayer);

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

		// buildText (components)
		const buildTextAlign = new Align(buildText);
		buildTextAlign.up = true;
		buildTextAlign.left = true;
		buildTextAlign.horizontalOffset = 5;
		buildTextAlign.verticalOffset = 5;

		// debugText (components)
		const debugTextAlign = new Align(debugText);
		debugTextAlign.up = true;
		debugTextAlign.left = true;
		debugTextAlign.horizontalOffset = 5;
		debugTextAlign.verticalOffset = 25;

		// debugText2 (components)
		const debugText2Align = new Align(debugText2);
		debugText2Align.up = true;
		debugText2Align.left = true;
		debugText2Align.horizontalOffset = 5;
		debugText2Align.verticalOffset = 35;

		// debugText3 (components)
		const debugText3Align = new Align(debugText3);
		debugText3Align.up = true;
		debugText3Align.left = true;
		debugText3Align.horizontalOffset = 5;
		debugText3Align.verticalOffset = 45;

		// mobileButtonJump (components)
		const mobileButtonJumpAlign = new Align(mobileButtonJump);
		mobileButtonJumpAlign.down = true;
		mobileButtonJumpAlign.right = true;
		new MobileDependent(mobileButtonJump);
		const mobileButtonJumpMobileButton = new MobileButton(mobileButtonJump);
		mobileButtonJumpMobileButton.input = "jump";

		// mobileButtonDive (components)
		const mobileButtonDiveAlign = new Align(mobileButtonDive);
		mobileButtonDiveAlign.down = true;
		mobileButtonDiveAlign.right = true;
		mobileButtonDiveAlign.verticalOffset = -100;
		new MobileDependent(mobileButtonDive);
		new MobileButton(mobileButtonDive);

		// mobileButtonEgg (components)
		const mobileButtonEggAlign = new Align(mobileButtonEgg);
		mobileButtonEggAlign.down = true;
		mobileButtonEggAlign.left = true;
		mobileButtonEggAlign.verticalOffset = -100;
		new MobileDependent(mobileButtonEgg);
		new MobileButton(mobileButtonEgg);

		// mobileButtonPunch (components)
		const mobileButtonPunchAlign = new Align(mobileButtonPunch);
		mobileButtonPunchAlign.down = true;
		mobileButtonPunchAlign.left = true;
		new MobileDependent(mobileButtonPunch);
		new MobileButton(mobileButtonPunch);

		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.player = player;
		this.tileLayer = tileLayer;
		this.egg = egg;
		this.uILayer = uILayer;
		this.buildText = buildText;
		this.debugText = debugText;
		this.debugText2 = debugText2;
		this.debugText3 = debugText3;
		this.mobileButtonJump = mobileButtonJump;
		this.mobileButtonDive = mobileButtonDive;
		this.mobileButtonEgg = mobileButtonEgg;
		this.mobileButtonPunch = mobileButtonPunch;
		this.test_map_2 = test_map_2;
		this.test_map_3 = test_map_3;
		this.public_list = public_list;
		this.enemyList = enemyList;

		this.events.emit("scene-awake");
	}

	private bGLayer!: Phaser.GameObjects.Layer;
	private mainLayer!: Phaser.GameObjects.Layer;
	private player!: playerPrefab;
	private tileLayer!: Phaser.Tilemaps.TilemapLayer;
	private egg!: Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
	private uILayer!: Phaser.GameObjects.Layer;
	private buildText!: Phaser.GameObjects.BitmapText;
	private debugText!: Phaser.GameObjects.BitmapText;
	private debugText2!: Phaser.GameObjects.BitmapText;
	private debugText3!: Phaser.GameObjects.BitmapText;
	private mobileButtonJump!: Phaser.GameObjects.Rectangle;
	private mobileButtonDive!: Phaser.GameObjects.Rectangle;
	private mobileButtonEgg!: Phaser.GameObjects.Rectangle;
	private mobileButtonPunch!: Phaser.GameObjects.Rectangle;
	private test_map_2!: Phaser.Tilemaps.Tilemap;
	private test_map_3!: Phaser.Tilemaps.Tilemap;
	public public_list!: Array<any>;
	private enemyList!: Array<SoldierPrefab|Phaser.GameObjects.Image>;

	/* START-USER-CODE */

	create()
	{
		this.editorCreate();

		this.initCameras();

		this.initMobileButtons();

	// tilemap`
		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

	// egg drop listener
		this.events.on('egg-drop', this.dropEgg, this);

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);
	}

	update(dt:number)
	{
		// this.debugText.setText(`${this.player.stateController.currentState.name}`);
		this.debugText.setText(`${this.player.stateController.currentState.name}`);
		this.debugText2.setText(`mobile jump: ${this.player.jumpMobileButton}`);
		this.debugText3.setText(`jump charge: ${this.player.flapCharge}`);
		// this.debugText.setText(`${this.player.onFloor}`);

	// reset collision values to be overridden by callbacks
		this.player.onFloor = false;

	// player wall check
		this.player.onWallLeft = 
			(this.tileLayer.getTileAtWorldXY(this.player.x - 7, this.player.y) != undefined);
		this.player.onWallRight = 
			(this.tileLayer.getTileAtWorldXY(this.player.x + 6, this.player.y) != undefined);
			// TODO: decorative tiles without collision, as defined at tileLayer.setCollision, 
			// should not count as wall.

	// player out-of-bounds check
		if (this.player.y > 400)
		{
			this.player.setPosition(351, 131);
			this.player.stateController.setState('airborne');
			this.player.setVelocity(this.player.moveSpeed, 0);
		}

	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 */
	playerHitTilemap(_player:Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap:any)
		// TODO: specify type annotation. Call back gives 
		// Phaser.Types.Physics.Arcade.GameObjectWithBody, but onFloor() is a member
	{
		if (_player.body.blocked.down)
		{
			this.player.onFloor = true;
		}

		// if (_player.body.touching.down)
		// {
		// 	console.log('touch');
		// }
			// touching just doesn't seem to work with tilemaps

		// if (_player.body.blocked.left)
		// {
		// 	this.player.onWall = 'left';
		// 	console.log('left')
		// }
		// else if (_player.body.blocked.right)
		// {
		// 	this.player.onWall = 'right';
		// 	console.log('right')
		// }
		// LEFT: this doesn't work as a way to continually check if touching a wall. Works fine 
		// for onFloor because gravity is causing a collision callback every frame

		// else if (_player.body.onWallRight())
		// {
		// 	this.player.onWallRight = true;
		// }
	}

	playerEnemyOverlap(_player:Phaser.Types.Physics.Arcade.GameObjectWithBody, _enemy:Phaser.Types.Physics.Arcade.GameObjectWithBody)
		// TODO: specify type annotation
	{
		this.player.hitEnemy(_enemy);
	}

	dropEgg()
	{
		this.egg.body.setVelocity(0, 0);
		this.egg.setPosition(this.player.x, this.player.y);
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	initCameras()
	{
		let adaptiveZoom = new AdaptiveZoom();
		// TODO: set adaptive zoom or whatever solution to different PPIs

	// main
		this.cameras.main.setName('main');
		this.cameras.main.setZoom(3);
		this.cameras.main.startFollow(this.player, true, .1, .1);
		this.cameras.main.ignore(this.uILayer.getChildren());

	// UI		
		var UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height) as any;
			// TODO: define type annotation. the infered type doesn't have access to prerender()
		UICam.setName('UIcam')
		UICam.setZoom(3);
		UICam.ignore(this.mainLayer.getChildren());
		UICam.ignore(this.bGLayer.getChildren());
		UICam.preRender(1);
	}

	initMobileButtons()
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
		this.mobileButtonPunch.setInteractive();
		this.mobileButtonPunch.on('pointerdown', () =>
		{
			this.player.punchMobileButton = true;
		});
		this.mobileButtonPunch.on('pointerup', () =>
		{
			this.player.punchMobileButton = false;
		});
		this.mobileButtonPunch.on('pointerout', () =>
		{
			this.player.punchMobileButton = false;
		});

	// egg
		this.mobileButtonEgg.setInteractive();
		this.mobileButtonEgg.on('pointerdown', () =>
		{
			this.player.eggMobileButton = true;
		});
		this.mobileButtonEgg.on('pointerup', () =>
		{
			this.player.eggMobileButton = false;
		});
		this.mobileButtonEgg.on('pointerout', () =>
		{
			this.player.eggMobileButton = false;
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
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
