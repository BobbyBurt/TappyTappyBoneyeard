
/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
import playerPrefab from "../prefabs/playerPrefab";

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

		// mainLayer
		const mainLayer = this.add.layer();

		// player
		const player = new playerPrefab(this, 351, 131);
		mainLayer.add(player);

		// tileLayer
		const tileLayer = test_map_2.createLayer("Tile Layer 1", ["tileset"], 0, 0);
		mainLayer.add(tileLayer);

		// lists
		const public_list: Array<any> = [];

		// playerTilemapCollider
		this.physics.add.collider(player, tileLayer, this.playerHitTilemap, undefined, this);

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

		this.uILayer = uILayer;
		this.buildText = buildText;
		this.debugText = debugText;
		this.mainLayer = mainLayer;
		this.player = player;
		this.tileLayer = tileLayer;
		this.test_map_2 = test_map_2;
		this.public_list = public_list;

		this.events.emit("scene-awake");
	}

	private uILayer!: Phaser.GameObjects.Layer;
	private buildText!: Phaser.GameObjects.BitmapText;
	private debugText!: Phaser.GameObjects.BitmapText;
	private mainLayer!: Phaser.GameObjects.Layer;
	private player!: playerPrefab;
	private tileLayer!: Phaser.Tilemaps.TilemapLayer;
	private test_map_2!: Phaser.Tilemaps.Tilemap;
	public public_list!: Array<any>;

	/* START-USER-CODE */

	playerMoveSpeed = 120;
	playerMaxSpeed = 200;
	playerJumpForce = 300;

	create()
	{
		this.editorCreate();

		this.initCameras();

	// tilemap
		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);
			// TODO: typescript migration broke tileLayer initialization and I'm confused

	// player
		this.player.setVelocityX(this.playerMoveSpeed);
		this.player.flipX = true;
		// this.player.moves = new Boolean;
		// this.player.status = new StateController(this.player, this);
		// this.player.status.setState('running');
			// TODO: make the player it's own class and attach the statemachine to it. Can't do 
			// things the wrong way anymore :(

	// input event handler
		this.input.on("pointerdown", () =>
		{
			if (this.player.body.velocity.x != 0)
			{
			// jump
				this.player.setVelocityY(-this.playerJumpForce);
			}
			else
			{
			// launch from wall
				this.player.flipX = !this.player.flipX;
				if (this.player.flipX)
				{
					this.player.setVelocityX(this.playerMoveSpeed);
					// this.player.moves = true;
						// TODO: refactor
				}
				else
				{
					this.player.setVelocityX(-this.playerMoveSpeed);
					// this.player.moves = true;
						// TODO: refactor
				}
			}
		});

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);
	}

	update()
	{
		// this.player.status.update();
			// TODO: refactor
	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 */
	playerHitTilemap(_player:any, _tilemap:any)
		// TODO: define these types
	{
		// console.log('tilemap collide!');

	// stop player when hitting wall
		if (_player.body.onWall())
		{
			// _player.allowGravity = false;
			_player.moves = false;
		}
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
		var UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height);
		UICam.setName('UIcam')
		UICam.setZoom(3);
		UICam.ignore(this.mainLayer.getChildren());
		// prerender UI cam
	}

	resize()
	{
		// prerender UI cap
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
