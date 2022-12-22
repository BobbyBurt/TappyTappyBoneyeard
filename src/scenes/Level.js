
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// test-map-2
		const test_map_2 = this.add.tilemap("test-map-2");
		test_map_2.addTilesetImage("tileset", "tileset");

		// UILayer
		const uILayer = this.add.layer();

		// buildText
		const buildText = this.add.bitmapText(3, -4, "nokia", "Tappy Tappy Boneyard\nv1");
		buildText.text = "Tappy Tappy Boneyard\nv1";
		buildText.fontSize = -8;
		buildText.dropShadowX = -1;
		buildText.dropShadowY = 1;
		uILayer.add(buildText);

		// mainLayer
		const mainLayer = this.add.layer();

		// tileLayer
		const tileLayer = test_map_2.createLayer("Tile Layer 1", ["tileset"], 0, 0);
		mainLayer.add(tileLayer);

		// player
		const player = new playerPrefab(this, 351, 131);
		mainLayer.add(player);

		// lists
		const public_list = [];

		// collidePlayerVsTilemap
		const collidePlayerVsTilemap = this.physics.add.collider(player, tileLayer, this.playerHitTilemap);

		// buildText (components)
		const buildTextAlign = new Align(buildText);
		buildTextAlign.up = true;
		buildTextAlign.left = true;
		buildTextAlign.horizontalOffset = 5;
		buildTextAlign.verticalOffset = 5;

		this.uILayer = uILayer;
		this.mainLayer = mainLayer;
		this.tileLayer = tileLayer;
		this.player = player;
		this.test_map_2 = test_map_2;
		this.collidePlayerVsTilemap = collidePlayerVsTilemap;
		this.public_list = public_list;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	uILayer;
	/** @type {Phaser.GameObjects.Layer} */
	mainLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	tileLayer;
	/** @type {playerPrefab} */
	player;
	/** @type {Phaser.Tilemaps.Tilemap} */
	test_map_2;
	/** @type {Phaser.Physics.Arcade.Collider} */
	collidePlayerVsTilemap;
	/** @type {Array<any>} */
	public_list;

	/* START-USER-CODE */

	playerMoveSpeed = 120;
	playerMaxSpeed = 200;
	playerJumpForce = 300;

	create()
	{
		this.editorCreate();

		this.newgroundsioTest();

		this.initCameras();

	// tilemap
		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);
		this.physics.add.collider(this.player, this.tileLayer);

	// player
		this.player.setVelocityX(this.playerMoveSpeed);
		this.player.flipX = true;

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
					this.player.moves = true;
				}
				else
				{
					this.player.setVelocityX(-this.playerMoveSpeed);
					this.player.moves = true;
				}
			}
		});

	// resize init
		this.events.on('resize', this.resize, this);
		this.resize();
	}

	update()
	{

	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 */
	playerHitTilemap(_player, _tilemap)
	{
	// stop player when hitting wall
		if (_player.body.onWall())
		{
			_player.allowGravity = false;
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
		this.adaptiveZoom = new AdaptiveZoom();

	// main
		this.cameras.main.setName('main');
		this.cameras.main.setZoom(3);
		this.cameras.main.startFollow(this.player, true, .1, .1);
		this.cameras.main.ignore(this.uILayer.getChildren());

	// UI		
		this.UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height);
		this.UICam.setName('UIcam')
		this.UICam.setZoom(3);
		this.UICam.ignore(this.mainLayer.getChildren());
		this.UICam.preRender(1);
			// Must prerender for Align component to have up-to-date scale data for initial 
			// adjustment.

		// TODO: set adaptive zoom or whatever solution to different PPIs
	}

	newgroundsioTest()
	{
		let options = {
			version: "0",
			debugMode: true,
			preloadMedals: true
		}
		NGIO.init('55003:7XXBXFge', '+bCOHps/t4tPrSSTJYJ8xg==', options);
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
