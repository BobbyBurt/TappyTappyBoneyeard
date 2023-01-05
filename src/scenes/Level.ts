
/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import playerPrefab from "../prefabs/playerPrefab";
import SoldierPrefab from "../prefabs/SoldierPrefab";
import Align from "../components/Align";
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
		const player = new playerPrefab(this, 264, 141);
		mainLayer.add(player);

		// tileLayer
		const tileLayer = test_map_3.createLayer("Tile Layer 1", ["tileset"], -549, -227);
		mainLayer.add(tileLayer);

		// soldiermid
		const soldiermid = new SoldierPrefab(this, 223, 181);
		mainLayer.add(soldiermid);

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

		// lists
		const public_list: Array<any> = [];

		// playerTilemapCollider
		this.physics.add.collider(player, tileLayer, this.playerHitTilemap, undefined, this);

		// soldierTilemapCollide
		this.physics.add.collider(soldiermid, tileLayer);

		// playerEnemyOverlap
		this.physics.add.overlap(player, soldiermid, this.playerEnemyOverlap, undefined, this);

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
		debugTextAlign.down = true;
		debugTextAlign.left = true;
		debugTextAlign.horizontalOffset = 5;
		debugTextAlign.verticalOffset = -5;

		// debugText2 (components)
		const debugText2Align = new Align(debugText2);
		debugText2Align.down = true;
		debugText2Align.left = true;
		debugText2Align.horizontalOffset = 5;
		debugText2Align.verticalOffset = -15;

		// debugText3 (components)
		const debugText3Align = new Align(debugText3);
		debugText3Align.down = true;
		debugText3Align.left = true;
		debugText3Align.horizontalOffset = 5;
		debugText3Align.verticalOffset = -25;

		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.player = player;
		this.tileLayer = tileLayer;
		this.uILayer = uILayer;
		this.buildText = buildText;
		this.debugText = debugText;
		this.debugText2 = debugText2;
		this.debugText3 = debugText3;
		this.test_map_2 = test_map_2;
		this.test_map_3 = test_map_3;
		this.public_list = public_list;

		this.events.emit("scene-awake");
	}

	private bGLayer!: Phaser.GameObjects.Layer;
	private mainLayer!: Phaser.GameObjects.Layer;
	private player!: playerPrefab;
	private tileLayer!: Phaser.Tilemaps.TilemapLayer;
	private uILayer!: Phaser.GameObjects.Layer;
	private buildText!: Phaser.GameObjects.BitmapText;
	private debugText!: Phaser.GameObjects.BitmapText;
	private debugText2!: Phaser.GameObjects.BitmapText;
	private debugText3!: Phaser.GameObjects.BitmapText;
	private test_map_2!: Phaser.Tilemaps.Tilemap;
	private test_map_3!: Phaser.Tilemaps.Tilemap;
	public public_list!: Array<any>;

	/* START-USER-CODE */

	create()
	{
		this.editorCreate();

		this.initCameras();

	// tilemap`
		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

	// DEPRECATED input event handler
		// this.input.on("pointerdown", () =>
		// {
		// 	if (this.player.body.velocity.x != 0)
		// 	{
		// 	// jump
		// 		this.player.setVelocityY(-this.playerJumpForce);
		// 	}
		// 	else
		// 	{
		// 	// launch from wall
		// 		this.player.flipX = !this.player.flipX;
		// 		if (this.player.flipX)
		// 		{
		// 			this.player.setVelocityX(this.playerMoveSpeed);
		// 			// this.player.moves = true;
		// 				// TODO: refactor
		// 		}
		// 		else
		// 		{
		// 			this.player.setVelocityX(-this.playerMoveSpeed);
		// 			// this.player.moves = true;
		// 				// TODO: refactor
		// 		}
		// 	}
		// });
			// TODO: delete when this has been recreated with state machine

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);
	}

	update(dt:number)
	{
		// this.debugText.setText(`${this.player.stateController.currentState.name}`);
		this.debugText.setText(`${this.player.stateController.currentState.name}`);
		this.debugText2.setText(`on floor: ${this.player.onFloor}`);
		this.debugText3.setText(`punch charge: ${this.player.punchCharged}`);
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

	playerEnemyOverlap(_player:any, _enemy:any)
	{
		console.log(_player, _enemy);
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

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
