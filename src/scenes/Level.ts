
/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import playerPrefab from "../prefabs/playerPrefab";
import Align from "../components/Align";
import MobileDependent from "../components/MobileDependent";
import MobileButton from "../components/MobileButton";
/* START-USER-IMPORTS */

import AdaptiveZoom from "../AdaptiveZoom";
import BalloonEnemy from "~/prefabs/BalloonEnemy";
import EnemyPrefab from "~/prefabs/EnemyPrefab";
import GroundEnemy from "~/prefabs/GroundEnemy";
import BulletPrefab from "~/prefabs/BulletPrefab";
import BombPrefab from "~/prefabs/BombPrefab";
import explosionPrefab from "~/prefabs/explosionPrefab";

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

		// player
		const player = new playerPrefab(this, 295, 194);
		mainLayer.add(player);

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

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const collidesWithBombList = [player, tileLayer];
		const gunEnemyList: Array<any> = [];
		const bombEnemyList: Array<any> = [];
		const bulletList: Array<any> = [];

		// playerTilemapCollider
		this.physics.add.collider(player, tileLayer, this.playerTilemapCollide, undefined, this);

		// soldierTilemapCollide
		this.physics.add.collider(enemyList, tileLayer);

		// playerEnemyOverlap
		this.physics.add.overlap(player, enemyList, this.playerEnemyOverlap, undefined, this);

		// bulletTilemapCollide
		this.physics.add.collider(bulletList, tileLayer, this.bulletTilemapCollide, undefined, this);

		// playerBulletOverlap
		this.physics.add.overlap(bulletList, player, this.bulletPlayerCollide, undefined, this);

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

		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.player = player;
		this.tileLayer = tileLayer;
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
		this.test_map_2 = test_map_2;
		this.test_map_3 = test_map_3;
		this.test_map_4 = test_map_4;
		this.test_map_5 = test_map_5;
		this.test_map_6 = test_map_6;
		this.public_list = public_list;
		this.enemyList = enemyList;
		this.collidesWithBombList = collidesWithBombList;
		this.gunEnemyList = gunEnemyList;
		this.bombEnemyList = bombEnemyList;
		this.bulletList = bulletList;

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
	private mobileButtonPunchRight!: Phaser.GameObjects.Rectangle;
	private mobileButtonJump!: Phaser.GameObjects.Rectangle;
	private mobileButtonDive!: Phaser.GameObjects.Rectangle;
	private mobileButtonPunchLeft!: Phaser.GameObjects.Rectangle;
	private mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	private test_map_2!: Phaser.Tilemaps.Tilemap;
	private test_map_3!: Phaser.Tilemaps.Tilemap;
	private test_map_4!: Phaser.Tilemaps.Tilemap;
	private test_map_5!: Phaser.Tilemaps.Tilemap;
	private test_map_6!: Phaser.Tilemaps.Tilemap;
	public public_list!: Array<any>;
	private enemyList!: Array<any>;
	private collidesWithBombList!: Array<playerPrefab|Phaser.Tilemaps.TilemapLayer>;
	private gunEnemyList!: Array<any>;
	private bombEnemyList!: Array<any>;
	private bulletList!: Array<any>;

	/* START-USER-CODE */

	private bombGroup!: Phaser.GameObjects.Group;
	private explosionGroup!: Phaser.GameObjects.Group;
	private bulletGroup!: Phaser.GameObjects.Group;

	private UICam!: Phaser.Cameras.Scene2D.BaseCamera | any;
		// TODO: define type annotation. the infered type doesn't have access to prerender()

	private debugWallDetectGraphics!: Phaser.GameObjects.Graphics;

	/** player is reset, objects are removed if below this Y coordinate. Set based on tilemap object */
	private bottomBoundary: number | undefined;

	private music!: Phaser.Sound.BaseSound;

	/** used to make sure level restart is only called once */
	private restarting = false;

	create()
	{	
		this.editorCreate();

		this.createCameras();

		this.createMobileButtons();

		this.restarting = false;

		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

		this.createMapEnemies();

	// start point
		let _startPoint = this.test_map_6.findObject('elements', function (obj) 
		{
			return obj.name === 'startPoint';
		});
		this.player.setPosition(_startPoint.x! + 8, _startPoint.y! - 8);
		this.data.set('startPoint', {x: _startPoint.x! + 8, y: _startPoint.y! - 8});

	// bottom boundary
		this.bottomBoundary = this.test_map_6.findObject('elements', function (obj) 
		{
			return obj.name === 'resetY';
		}).y;

	// bombs
		this.bombGroup = this.add.group({maxSize: 30, classType: BombPrefab});
			// TODO: define max
		this.physics.add.collider
			(this.bombGroup, this.collidesWithBombList, this.bombCollide, undefined, this);
		this.time.addEvent({delay: 1000, callback: this.dropBombs, callbackScope: this, loop: true});

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
		this.music = this.sound.add('main-game', {volume: .7});
		if (!__DEV__)
		{
			this.music.play({loop: true});
		}

	// SFX
		this.sound.add('bird-flap', {volume: 1});
		this.sound.add('enemy-death', {volume: 1});
		this.sound.add('explosion', {volume: 1});
		this.sound.add('bird-die', {volume: 1});
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
		if (__DEV__)
		{
			this.debugText.setText(`${this.player.stateController.currentState.name}`);
			this.debugText2.setText(`wall left: ${this.player.onWallLeft}`);
			this.debugText3.setText(`bullets: ${this.bulletGroup.countActive()}`);	
		}
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
				if (_member.texture.key == 'bird1egg')
				{
					this.player.eggReady = true;
				}

				_member.disappear();
			}
		});
			// TODO: change this to bomb group

		this.gunFireCheck();

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

			this.player.punchCharged = true;

			this.sound.play('enemy-death');

			if (this.player.stateController.currentState.name == 'dive')
			{
				this.player.setVelocityY(-this.player.jumpForce);
			}
		}
		else
		{
			this.resetLevel();
		}
	}

	/** egg collision callback */
	bombCollide(_bomb:any, _collidedWith:any)
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

	/** drops bombs from each active balloon soldier */
	dropBombs()
	{
		this.bombEnemyList.forEach(element =>
		{
			let _enemy = element as EnemyPrefab
			if (!_enemy.isFalling())	
			{
				this.setBomb(element.x, element.y + 25, 'bomb');
			}
		});
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
				element.gameObject.destroy();
			}
			if (element.gameObject.name == 'player')
			{
				// _this.player.reset();
				_this.resetLevel();
			}
		});
	}

	/** checks line of sight for each active gun enemy and fires if player is detected */
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
						(_enemy.x + 7.5, _enemy.y + 10, _enemy.x + 7.5, _enemy.y - lineLength,);
					break;
				}
				case 'upward':
				{
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
					break;
				}
				case 'down':
				{
					break;
				}
			}
				/* setting up a new line on each frame is not efficient, but it's dynamic for 
				moving enemies which could have a greater presence later for all i know. */

			if (Phaser.Geom.Intersects.LineToRectangle(lineOfSight, new Phaser.Geom.Rectangle(this.player.x, this.player.y, this.player.width, this.player.height)))
			{
				// this.gunFire(_enemy);

				_enemy.firingGun = true;
			}
			else
			{
				_enemy.firingGun = false;
			}

			/* TODO: this is a quick solution which isn't efficient and doesn't account tile tiles
			being in the way. There's a raycaster plugin which is probably the best option for a 
			more permenent solution. */
		});
	}

	/** fires gun from any enemy */
	gunFire(enemy: EnemyPrefab)
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
		switch(enemy.gunDirection)
		{
			case 'up':
			{
				velocity = {x: 0, y: -60};
				break;
			}
			case 'down':
			{
				velocity = {x: 0, y: 60};
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
				velocity = {x: (enemy.flipX? 60 : -60), y: 0};
				break;
			}
		}

		_newBullet.body.setVelocity(velocity.x, velocity.y);
	}

	/** creates bullets from all enemies with a gun */
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

	/** iterates through everything in the 'elements' object layer of the map and creates enemies 
	 * based on their GID. */
	createMapEnemies()
	{
		let _mapObjects = this.test_map_6.getObjectLayer('elements')
		_mapObjects.objects.forEach((object, index) =>
		{
			let _enemy: any = undefined;
			let _gunDirection: GunDirection;
			let _bomb = false;

		// determine weapon from tile gid
			switch (object.gid)
			{
				case 37:
				{
					_gunDirection = undefined;
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
					_gunDirection = undefined;
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
			if (object.type == 'balloon')
			{
				_enemy = new BalloonEnemy(this, object.x! + 8, object.y! - 8, _gunDirection);
			}
			else
			{
				_enemy = new GroundEnemy(this, object.x! + 8, object.y! - 8, _gunDirection);
			}

			if (_gunDirection !== undefined)
			{
				this.gunEnemyList.push(_enemy);
			}
			if (_bomb)
			{
				this.bombEnemyList.push(_enemy)
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
	createCameras()
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
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
