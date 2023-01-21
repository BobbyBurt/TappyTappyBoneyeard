
/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import explosionPrefab from "../prefabs/explosionPrefab";
import eggPrefab from "../prefabs/eggPrefab";
import playerPrefab from "../prefabs/playerPrefab";
import BombPrefab from "../prefabs/BombPrefab";
import Align from "../components/Align";
import MobileDependent from "../components/MobileDependent";
import MobileButton from "../components/MobileButton";
/* START-USER-IMPORTS */

import AdaptiveZoom from "../AdaptiveZoom";
import BalloonEnemy from "~/prefabs/BalloonEnemy";
import EnemyPrefab from "~/prefabs/EnemyPrefab";
import GroundEnemy from "~/prefabs/GroundEnemy";

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

		// test_map_4
		const test_map_4 = this.add.tilemap("test-map-4");
		test_map_4.addTilesetImage("tileset", "tileset");

		// test_map_5
		const test_map_5 = this.add.tilemap("test-map-5");
		test_map_5.addTilesetImage("tileset", "tileset");

		// test_map_6
		const test_map_6 = this.add.tilemap("test-map-6");
		test_map_6.addTilesetImage("tilleset", "tileset");

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

		// explosion
		const explosion = new explosionPrefab(this, 272, -547);
		mainLayer.add(explosion);

		// egg
		const egg = new eggPrefab(this, -525, -53);
		mainLayer.add(egg);

		// player
		const player = new playerPrefab(this, 265, 141);
		mainLayer.add(player);

		// bomb
		const bomb = new BombPrefab(this, -525, -53);
		mainLayer.add(bomb);

		// tileLayer
		const tileLayer = test_map_6.createLayer("Tile Layer 1", ["tilleset"], 0, 0);
		mainLayer.add(tileLayer);

		// UILayer
		const uILayer = this.add.layer();

		// buildText
		const buildText = this.add.bitmapText(3, -4, "nokia", "Tappy Tappy Boneyard\nv2");
		buildText.text = "Tappy Tappy Boneyard\nv2";
		buildText.fontSize = -8;
		buildText.dropShadowY = 100;
		uILayer.add(buildText);

		// debugText
		const debugText = this.add.bitmapText(-9, 66, "nokia", "debug textdfdfasdf");
		debugText.setOrigin(0, 1);
		debugText.text = "debug textdfdfasdf";
		debugText.fontSize = -8;
		debugText.dropShadowY = 100;
		uILayer.add(debugText);

		// debugText2
		const debugText2 = this.add.bitmapText(-10, 38, "nokia", "debug textdfdfasdf");
		debugText2.setOrigin(0, 1);
		debugText2.text = "debug textdfdfasdf";
		debugText2.fontSize = -8;
		debugText2.dropShadowY = 100;
		uILayer.add(debugText2);

		// debugText3
		const debugText3 = this.add.bitmapText(-9, 52, "nokia", "debug textdfdfasdf");
		debugText3.setOrigin(0, 1);
		debugText3.text = "debug textdfdfasdf";
		debugText3.fontSize = -8;
		debugText3.dropShadowY = 100;
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

		// mobileButtonUppercut
		const mobileButtonUppercut = this.add.rectangle(-302, -346, 100, 100);
		mobileButtonUppercut.setOrigin(0, 1);
		mobileButtonUppercut.alpha = 0.5;
		mobileButtonUppercut.isFilled = true;
		mobileButtonUppercut.fillColor = 15579772;
		uILayer.add(mobileButtonUppercut);

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const collidesWithBombList = [player];
		const balloonEnemyList: Array<any> = [];

		// playerTilemapCollider
		this.physics.add.collider(player, tileLayer, this.playerHitTilemap, undefined, this);

		// soldierTilemapCollide
		this.physics.add.collider(enemyList, tileLayer);

		// playerEnemyOverlap
		this.physics.add.overlap(player, enemyList, this.playerEnemyOverlap, undefined, this);

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

		// mobileButtonUppercut (components)
		const mobileButtonUppercutAlign = new Align(mobileButtonUppercut);
		mobileButtonUppercutAlign.down = true;
		mobileButtonUppercutAlign.left = true;
		mobileButtonUppercutAlign.verticalOffset = -200;
		new MobileDependent(mobileButtonUppercut);
		new MobileButton(mobileButtonUppercut);

		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.explosion = explosion;
		this.egg = egg;
		this.player = player;
		this.bomb = bomb;
		this.tileLayer = tileLayer;
		this.uILayer = uILayer;
		this.buildText = buildText;
		this.debugText = debugText;
		this.debugText2 = debugText2;
		this.debugText3 = debugText3;
		this.mobileButtonJump = mobileButtonJump;
		this.mobileButtonDive = mobileButtonDive;
		this.mobileButtonEgg = mobileButtonEgg;
		this.mobileButtonPunch = mobileButtonPunch;
		this.mobileButtonUppercut = mobileButtonUppercut;
		this.test_map_2 = test_map_2;
		this.test_map_3 = test_map_3;
		this.test_map_4 = test_map_4;
		this.test_map_5 = test_map_5;
		this.test_map_6 = test_map_6;
		this.public_list = public_list;
		this.enemyList = enemyList;
		this.collidesWithBombList = collidesWithBombList;
		this.balloonEnemyList = balloonEnemyList;

		this.events.emit("scene-awake");
	}

	private bGLayer!: Phaser.GameObjects.Layer;
	private mainLayer!: Phaser.GameObjects.Layer;
	private explosion!: explosionPrefab;
	private egg!: eggPrefab;
	private player!: playerPrefab;
	private bomb!: BombPrefab;
	private tileLayer!: Phaser.Tilemaps.TilemapLayer;
	private uILayer!: Phaser.GameObjects.Layer;
	private buildText!: Phaser.GameObjects.BitmapText;
	private debugText!: Phaser.GameObjects.BitmapText;
	private debugText2!: Phaser.GameObjects.BitmapText;
	private debugText3!: Phaser.GameObjects.BitmapText;
	private mobileButtonJump!: Phaser.GameObjects.Rectangle;
	private mobileButtonDive!: Phaser.GameObjects.Rectangle;
	private mobileButtonEgg!: Phaser.GameObjects.Rectangle;
	private mobileButtonPunch!: Phaser.GameObjects.Rectangle;
	private mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	private test_map_2!: Phaser.Tilemaps.Tilemap;
	private test_map_3!: Phaser.Tilemaps.Tilemap;
	private test_map_4!: Phaser.Tilemaps.Tilemap;
	private test_map_5!: Phaser.Tilemaps.Tilemap;
	private test_map_6!: Phaser.Tilemaps.Tilemap;
	public public_list!: Array<any>;
	private enemyList!: Array<any>;
	private collidesWithBombList!: playerPrefab[];
	private balloonEnemyList!: Array<any>;

	/* START-USER-CODE */

	private bombGroup!: Phaser.GameObjects.Group;
	private explosionGroup!: Phaser.GameObjects.Group;
	private enemyGroup!: Phaser.GameObjects.Group;

	private UICam!: Phaser.Cameras.Scene2D.BaseCamera | any;
		// TODO: define type annotation. the infered type doesn't have access to prerender()

	private debugWallDetectGraphics!: Phaser.GameObjects.Graphics;

	/** player is reset, objects are removed if below this Y coordinate. Set based on tilemap object */
	private resetY: number | undefined;

	private music!: Phaser.Sound.BaseSound;

	create()
	{	
		this.editorCreate();

		this.initCameras();

		this.initMobileButtons();

	// enemy group
		this.enemyGroup = this.add.group({classType: EnemyPrefab});

	// tilemap`
		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

	// enemies
		// let _levelEnemies = this.test_map_5.createFromObjects('enemies', {name: 'soldier', classType: EnemyPrefab as any, key: 'soldiermid'});

		this.createMapEnemies();

		// let _levelEnemies = this.test_map_6.createFromObjects('elements', {gid: 37, classType: GroundEnemy as any});
		// _levelEnemies.forEach((enemy) =>
		// {
		// 	let _enemy = enemy as EnemyPrefab;
		// 	this.enemyList.push(_enemy);

		// 	this.mainLayer.add(enemy);
		// 	this.UICam.ignore(enemy);
		// });

		let _levelEnemies2 = this.test_map_6.createFromObjects('enemies', {name: 'soldierBalloon', classType: BalloonEnemy as any});
		_levelEnemies2.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			this.enemyList.push(_enemy);

			this.mainLayer.add(enemy);
			this.UICam.ignore(enemy);
		});
			// this is a weird way of adding the newly created enemies to the list

	// spawn point
		let _startPoint = this.test_map_6.findObject('elements', function (obj) 
		{
			return obj.name === 'startPoint';
		});
		this.player.setPosition(_startPoint.x! + 8, _startPoint.y! - 8);
		this.data.set('startPoint', {x: _startPoint.x! + 8, y: _startPoint.y! - 8});

	// reset Y
		this.resetY = this.test_map_6.findObject('elements', function (obj) 
		{
			return obj.name === 'resetY';
		}).y

	// egg
		this.egg.setActive(false);
		this.egg.setVisible(false);
		this.events.on('egg-drop', this.dropEgg, this);

	// bombs
		this.bombGroup = this.add.group({maxSize: 30, classType: BombPrefab});
			// TODO: define max
		// this.bombGroup.getChildren().forEach(member =>
		// {
		// 	this.mainLayer.add(member);
		// });
			// this would be necessary if any bombs are created initially, rather than during 
			// update
		this.physics.add.collider
			(this.bombGroup, this.collidesWithBombList, this.bombHit, undefined, this);
		this.time.addEvent({delay: 1000, callback: this.dropBombs, callbackScope: this, loop: true});

	// explosions
		this.explosionGroup = this.add.group({maxSize: 30, classType: explosionPrefab})
			// TODO: define max

	// music
		this.music = this.sound.add('main-game', {volume: .7});
		if (!__DEV__)
		{
			this.music.play({loop: true});
		}

	// SFX
		this.sound.add('bird-flap', {volume: 1});
		this.sound.add('enemy-death', {volume: 1});
		this.sound.add('explosion', {volume: 1});
			// TODO: impliment explosion sound w/ spacial audio or something
		this.sound.add('punch-swing', {volume: 1});

	// debug wall detect visual
		this.debugWallDetectGraphics = this.add.graphics({fillStyle: { color: 0x0000ff, alpha: (__DEV__? 1 : 0)}});

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);
	}

	update(dt:number)
	{
		// this.debugText.setText(`${this.player.stateController.currentState.name}`);
		this.debugText.setText(`${this.player.stateController.currentState.name}`);
		this.debugText2.setText(`wall left: ${this.player.onWallLeft}`);
		this.debugText3.setText(`wall right: ${this.player.onWallRight}`);
		// this.debugText.setText(`${this.player.onFloor}`);

	// reset collision values to be overridden by callbacks
		this.player.onFloor = false;

	// player wall check
		this.player.onWallLeft = 
			(this.tileLayer.getTileAtWorldXY(this.player.body.x - 1, this.player.body.y + 9) != undefined 
			|| this.tileLayer.getTileAtWorldXY(this.player.body.x - 1, this.player.body.y - 1) != undefined);
		this.player.onWallRight = 
			(this.tileLayer.getTileAtWorldXY(this.player.body.x + 12, this.player.body.y + 9) != undefined
			|| this.tileLayer.getTileAtWorldXY(this.player.body.x + 12, this.player.body.y - 1) != undefined);
				// TODO: decorative tiles without collision, as defined at tileLayer.setCollision, 
				// should not count as wall.
	// DEBUG: collision points visual
		this.debugWallDetectGraphics.clear();
		this.debugWallDetectGraphics.fillPoint(this.player.body.x - 1, this.player.body.y + 9);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x - 1, this.player.body.y - 1);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x + 12, this.player.body.y + 9);
		this.debugWallDetectGraphics.fillPoint(this.player.body.x + 12, this.player.body.y - 1);

	// out-of-bounds checks
		if (this.player.y > this.resetY!)
		{
			this.player.reset();
		}
		this.bombGroup.getChildren().forEach(member =>
		{
			let _member = member as BombPrefab;
			if (_member.y > this.resetY!)
				// why can't I access y just by member.y?
			{
				if (_member.texture.key == 'bird1egg')
				{
					this.player.eggReady = true;
				}

				_member.disappear();
			}
		});
			// TODO: change this to bomb group

	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 * 
	 * Only sets Player.onFloor
	 */
	playerHitTilemap(_player:Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap:any)
		// TODO: specify type annotation. Call back gives 
		// Phaser.Types.Physics.Arcade.GameObjectWithBody, but onFloor() is a member
	{
		if (_player.body.blocked.down)
		{
			this.player.onFloor = true;
		}
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
			_enemy.hit(this.player.body.velocity.x, this.player.body.velocity.y);

			this.sound.play('enemy-death');

			if (this.player.stateController.currentState.name == 'dive')
			{
				this.player.setVelocityY(-this.player.jumpForce);
			}
		}
		else
		{
			this.player.reset();
		}
	}


	/** detects physics bodies within explosion range and impacts them appropriately */
	explosionCheck(x: number, y: number)
	{
		let _this = this;
		this.physics.overlapCirc(x, y, 20, true, false).forEach(function (element: any)
		// TODO: specify type annotation
		{
			if (element.gameObject.name == 'player')
			{
				element.reset();
			}
			if (_this.enemyList.includes(element.gameObject))
			{
				element.gameObject.destroy();
			}
		});
	}

	/** egg collision callback */
	bombHit(_bomb:any, _collidedWith:any)
	{
		_bomb as BombPrefab;

	// player - egg collision check
		if (_bomb.texture.key == 'bird1egg' && _collidedWith.name == 'player')
		{	
			return;
		}
			// player is included in the bomb collision list, but egg - player should be ignored

		_bomb.disappear();

		let newExplosion = this.explosionGroup.get(_bomb.x, _bomb.y);
		newExplosion.appear();
		this.mainLayer.add(newExplosion);
		this.UICam.ignore(newExplosion);
			// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(_bomb.x, _bomb.y);

		if (_bomb.texture.key == 'bird1egg')
		{
			this.player.eggReady = true;
		}
	}

	dropEgg()
	{
		this.setBomb(this.player.x, this.player.y, 'bird1egg');

		this.player.eggReady = false;
	}

	/** drops bombs from each active balloon soldier */
	dropBombs()
	{
		this.balloonEnemyList.forEach(element =>
		{
			if (element.active)	
			{
				this.setBomb(element.x, element.y + 25, 'bomb');
			}
		});
	}

	/** activates bomb in bombGroup pool */
	setBomb(x: number, y: number, textureKey: string)
	{
		let newBomb = this.bombGroup.get(x, y);
		newBomb.appear(textureKey);
		this.mainLayer.add(newBomb);
		this.UICam.ignore(newBomb);

		if (this.bombGroup.countActive() == this.bombGroup.maxSize)
		{
			this.bombGroup.getFirstAlive()?.setActive(false);
			this.bombGroup.shuffle();
				// TODO: figure out what exactly shuffle() does. Worked for me before
		}
	}

	/** iterates through everything in the 'elements' object layer of the map and creates enemies 
	 * based on their GID. */
	createMapEnemies()
	{
		console.log(this.test_map_6.getObjectLayer('elements'));
		let _mapObjects = this.test_map_6.getObjectLayer('elements')
		_mapObjects.objects.forEach((object) =>
		{
			console.log('loop:' + object.gid)
			let _enemy: any = undefined;
			switch (object.gid)
			{
				case 37:
				{
					_enemy = new GroundEnemy(this, object.x! + 8, object.y! - 8);
					break;
				}
				case 38:
				{

					_enemy = new GroundEnemy(this, object.x! + 8, object.y! - 8, 'forward');
					break;
				}
				case 39:
				{

					_enemy = new GroundEnemy(this, object.x! + 8, object.y! - 8, 'upward');
					break;
				}
				case 40:
				{

					_enemy = new GroundEnemy(this, object.x! + 8, object.y! - 8, 'up');
					break;
				}
				case 41:
				{

					_enemy = new GroundEnemy(this, object.x! + 8, object.y! - 8, 'downward');
					break;
				}
				case 42:
				{

					_enemy = new BalloonEnemy(this, object.x! + 8, object.y! - 8);
					break;
				}
			}
			if (_enemy == undefined)
			{
				return;
			}

			_enemy.flipX = object.flippedHorizontal;

			this.enemyList.push(_enemy);
			this.mainLayer.add(_enemy);
			this.UICam.ignore(_enemy);
		});
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
		this.UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height) as any;
		this.UICam.setName('UIcam')
		this.UICam.setZoom(3);
		this.UICam.ignore(this.mainLayer.getChildren());
			// anything in the displayList not under one of the main layers is caught by the UI 
			// cam and appears at an offset
		this.UICam.ignore(this.bGLayer.getChildren());
		this.UICam.preRender(1);
		// UICam.alpha = 0;
			// TODO: add new bomb and explosions to the mainLayer so they aren't also being seen 
			// by the UICam
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
