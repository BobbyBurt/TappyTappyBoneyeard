/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import playerPrefab from "../prefabs/playerPrefab";
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
import tutorialManager from "~/components/tutorialManager";
import InputManager from "~/components/InputManager";
import LevelSelect from "./LevelSelect";

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

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const gunEnemyList: Array<any> = [];
		const bombEnemyList: Array<any> = [];
		const bulletList: Array<any> = [];
		const hiddenByTutorialList: Array<any> = [];

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

		this.bGLayer = bGLayer;
		this.parallax_Backing = parallax_Backing;
		this.mainLayer = mainLayer;
		this.player = player;
		this.public_list = public_list;
		this.enemyList = enemyList;
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
	public public_list!: Array<any>;
	public enemyList!: Array<any>;
	private gunEnemyList!: Array<any>;
	private bombEnemyList!: Array<any>;
	private bulletList!: Array<any>;
	private hiddenByTutorialList!: Array<any>;

	/* START-USER-CODE */

// game state
	/** used to make sure level restart is only called once */
	private restarting = false;
	private reachedGoal = false;
	private currentLevelIndex: number;

// audio
	private music: Phaser.Sound.BaseSound;
	private environmentAudio: Phaser.Sound.BaseSound;

// tilemap
	private tileMap: Phaser.Tilemaps.Tilemap;
	public tileLayer: Phaser.Tilemaps.TilemapLayer;
	private bgTileLayer: Phaser.Tilemaps.TilemapLayer;

// object groups / arrays
	private bombGroup: Phaser.GameObjects.Group;
	private explosionGroup: Phaser.GameObjects.Group;
	private bulletGroup: Phaser.GameObjects.Group;
	/** Polygons used for enemies' player detection. */
	private visionPolys: Array<VisionPoly>;

// particles
	private enemyBloodEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private enemyBloodEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private enemyBloodEmitterManager2: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private enemyBloodEmitter2: Phaser.GameObjects.Particles.ParticleEmitter;

// debug
	private debugVisionPolyGraphics: Phaser.GameObjects.Graphics;
	private debugPlaneRectGraphics: Phaser.GameObjects.Graphics;

// plane
	public plane: Phaser.GameObjects.Image;
	private planeRect: Phaser.Geom.Rectangle;
	/** As it's found in enemyList. */

// enemy ref
	/** 
	 * All objects in the elements layer in the tilemap.
	 * 
	 * Indexes correlate to the object's ID, so most of this array's indexes are empty.
	 */
	private mapElementList: Array<any>;
	private goalEnemyIndex: number;
	public enemiesDefeated = 0;

// arcade
	private combo = 0;
	public highestCombo = 0;
	private comboTextTween: Phaser.Tweens.Tween;
	private scorePopupGroup: Phaser.GameObjects.Group;
	private levelScore: number;
	private levelTimer: Phaser.Time.TimerEvent;

// pause
	private hitStopPause = false;
	/** Player / blur initiated pause */
	private manualPause = false;
	private tutorialPuase = false;

	private cameraFollow: Phaser.Math.Vector2;

	private uiScene: LevelUI;

	create()
	{
		this.editorCreate();

	// reset properties
		this.reachedGoal = false;
		this.restarting = false;
		this.combo = 0;
		this.highestCombo = 0;
		this.cameraFollow = new Phaser.Math.Vector2(this.player.x, this.player.y);
		this.currentLevelIndex = this.registry.get('current-level-index');

	// UI
		this.uiScene = this.scene.get('LevelUI') as LevelUI;
		this.updateEnemiesUI(true);
		this.time.addEvent({ delay: 300, callback: () => 
		{
			this.setTutorialUI(true, true);
		}});
		if (this.registry.get('mobile'))
		{
			this.bindMobileButtons();
		}

		this.player.setDepth(-20)

	// tilemap
		this.tileMap = this.add.tilemap(this.registry.get('current-level'));
		this.tileMap.addTilesetImage("tilleset", "tileset");
		this.tileMap.addTilesetImage("bg-tileset", "bg-tileset");

		this.tileLayer = this.tileMap.createLayer("Tile Layer 1", ["tilleset"], 0, 0);
		// why is it misspelled 'tillset'?
		this.mainLayer.add(this.tileLayer);
		this.tileLayer.setDepth(-15)

		this.bgTileLayer = this.tileMap.createLayer('Tile Layer 2', ['bg-tileset'], 0, 0);
		if (this.bgTileLayer)
		{
			this.bgTileLayer.depth = -10;
			this.bGLayer.add(this.bgTileLayer);
			this.bgTileLayer.setDepth(10);
		}


		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

		this.player.createFist();
		this.mainLayer.add(this.player.fist);

	// physics callbacks
		// playerTilemapCollider
		this.physics.add.collider(this.player, this.tileLayer, this.playerTilemapCollide, undefined, this);

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

	// camera
		CameraUtil.configureMainCamera(this);
		// this.cameras.main.setScroll(this.player.x, this.player.y);
		this.cameras.main.startFollow(this.cameraFollow, true, .1, .1);
		this.cameras.main.setBounds(0, 0, this.tileLayer.width, this.tileLayer.height);

	// enemies
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

		const endPlane: Phaser.Math.Vector2 | null = TilemapUtil.getObjectPositionByGID(39, this.tileMap);
		if (endPlane)
		{
			this.createPlane(endPlane!.x, endPlane.y);
		}

	// object groups
		this.bombGroup = this.add.group({ maxSize: 10, classType: BombPrefab });
		this.physics.add.overlap(this.bombGroup, this.player, this.bombPlayerOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.player.fist, this.bombFistOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.enemyList, this.bombEnemyOverlap, undefined, this);
		this.physics.add.collider(this.bombGroup, this.tileLayer, this.bombTilemapCollide, undefined, this);

		this.bulletGroup = this.add.group({ maxSize: 100, classType: BulletPrefab })

		this.explosionGroup = this.add.group({ maxSize: 30, classType: explosionPrefab })
		// TODO: define max

		this.scorePopupGroup = this.add.group({ maxSize: 10, classType: ScorePopup })

		this.music = SoundManager.setLevelMusic(this.music, this.registry.get('current-level-index'), this);
		this.addSounds();
		SoundManager.play('reflect', this);
		// this.environmentAudio.play(undefined, {volume: 0.03, loop: true});

	// set active inputMode
		this.input.keyboard.on('keydown', ()=>
		{
			InputManager.activeInputMode = 'keyboard';
		});
		this.input.gamepad.on('down', () =>
		{
			InputManager.activeInputMode = 'gamepad';
		});

	// DEV - quick restart & exit
		if (__DEV__)
		{
			this.input.keyboard.on('keydown-S', () =>
			{
				this.resetLevel();
			});

			// level select input
			this.input.keyboard.on('keydown-A', () =>
			{
				this.LoadLevelSelect();
			});
		}

	// summary continue
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-confirm', 'keyboard') , () =>
		{
			if (this.uiScene.summaryVisible)
			{
				this.LoadNextLevel();
			}
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				if (this.uiScene.summaryVisible)
				{
					this.LoadNextLevel();
				}
			}
		});

	// pause / summary exit
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-back', 'keyboard') , () =>
		{
			if (this.manualPause || this.uiScene.summaryVisible)
			{
				this.LoadLevelSelect();
			}
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-back', 'gamepad'))
			{
				if (this.manualPause || this.uiScene.summaryVisible)
				{
					this.LoadLevelSelect();
				}
			}
		});

	// pause restart
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-confirm', 'keyboard') , () =>
		{
			if (this.manualPause)
			{
				this.resetLevel();
			}
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				if (this.manualPause)
				{
					this.resetLevel();
				}
			}
		});

	// tutorial show / hide
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('tutorial-toggle', 'keyboard') , () =>
		{
			this.setTutorialUI(!this.uiScene.tutorialVisible, false);
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('tutorial-toggle', 'gamepad'))
			{
				this.setTutorialUI(!this.uiScene.tutorialVisible, false);
			}
		});

	// pause
		this.game.events.on(Phaser.Core.Events.BLUR, this.pause, this);
		if (__DEV__)
		{
			this.game.events.on(Phaser.Core.Events.FOCUS, this.unpause, this);
		}
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index === InputManager.getInput('pause', 'gamepad'))
			{
				this.toggleManualPause();
			}
		});
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('pause', 'keyboard'), () =>
		{
			this.toggleManualPause();
		});

	// mute
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
			// TEMP: this will eventually be replaced with a menu option.

	// DEBUG: console clear key
		if (__DEV__)
		{
			this.input.keyboard.on('keydown-C', () =>
			{
				console.clear();
			});
		}

	// level timer
		this.events.once('player-start', () =>	
		{
			this.levelTimer = this.time.addEvent({
				delay: 30000, callback: () =>
				{
					if (!this.reachedGoal && !__DEV__)
					{
						this.resetLevel();
					}
				}
			});
		});

	// particles
		this.enemyBloodEmitterManager = this.add.particles('soldier-blood-1')
		this.mainLayer.add(this.enemyBloodEmitterManager);
		this.enemyBloodEmitterManager.setDepth(-13);
		this.enemyBloodEmitter = this.enemyBloodEmitterManager.createEmitter({ on: false });

		this.enemyBloodEmitterManager2 = this.add.particles('soldier-blood-2')
		this.mainLayer.add(this.enemyBloodEmitterManager2);
		this.enemyBloodEmitterManager2.setDepth(-13);
		this.enemyBloodEmitter2 = this.enemyBloodEmitterManager2.createEmitter({ on: false });

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

		if (this.levelTimer && this.player.started)
		{
			this.uiScene.setTimer(this.levelTimer.getRemaining());
		}

		// reset collision values to be overridden by callbacks
		this.player.onFloor = false;

		if (__DEV__)
		{
			this.updateDebugWallDetect();
		}

		this.checkVisionPolys();

		// player-plane check
		if (this.planeRect)
		{
			this.planeCheck();
		}

	// out-of-bounds checks
		if (this.player.y > this.cameras.main.getBounds().bottom)
		{
			// this.player.reset();

			this.resetLevel();
		}
		this.bombGroup.getChildren().forEach(member =>
		{
			const _member = member as BombPrefab;
			// _member.reset();
		});

	// update camera follow
		this.cameraFollow.set(this.player.body.x, this.player.body.y);
		if (this.uiScene.tutorialContainer.visible && !this.registry.get('mobile'))
		{
			this.cameraFollow.x += (this.uiScene.tutorialBox.width / 2);
		}
	}

	/**
	 * removes all listeners
	 */
	destroyScene()
	{
		this.scene.resume();
			// in case hitstop is also active

		this.game.events.off(Phaser.Core.Events.BLUR, this.pause, this);
		this.game.events.off(Phaser.Core.Events.FOCUS, this.unpause, this)

		this.events.off(Phaser.Scenes.Events.UPDATE);
		this.player.removeUpdateListener();
		this.enemyList.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			_enemy.removeUpdateListener();
		});
	}

	/** reloads the scene */
	resetLevel()
	{
		console.debug('reset level');

		// this function should only happen once
		if (!this.restarting)
		{
			this.restarting = true;
		}
		else 
		{
			return;
		}

		// set level played
		this.registry.set('level-played-' + this.currentLevelIndex, true)

		this.destroyScene();
		this.uiScene.scene.restart();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
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

		// set level played
		this.registry.set('level-played-' + this.currentLevelIndex, true)

		this.destroyScene();
		this.uiScene.scene.stop();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
		this.scene.start('LevelSelect');
	}

	/** stops this scene, shutting down update listeners, and starts level select scene */
	LoadNextLevel()
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

		// set level played
		this.registry.set('level-played-' + this.currentLevelIndex, true)

		this.destroyScene();
		this.uiScene.scene.restart();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
		this.registry.set('current-level-index', this.currentLevelIndex + 1);
			// TODO: add wrap!
		this.registry.set('current-level', LevelSelect.levelsKey[this.registry.get('current-level-index')]);
		this.scene.start('Level');
	}

	/** DEPRECATED - Checks for tiles and updates player onWallLeft/Right  */
	playerWallCheck()
	{
		const x = this.player.body.x;
		const y = this.player.body.y;
		const leftOffset = this.player.leftWallChecksOffset;
		const rightOffset = this.player.rightWallChecksOffset;

		this.player.onWallLeft = 
			(this.tileLayer.getTileAtWorldXY(x + leftOffset[0].x, y + leftOffset[0].y) != undefined 
			|| this.tileLayer.getTileAtWorldXY(x + leftOffset[1].x, y + leftOffset[1].y) != undefined);

		this.player.onWallRight = 
			(this.tileLayer.getTileAtWorldXY(x + rightOffset[0].x, y + rightOffset[0].y) != undefined 
			|| this.tileLayer.getTileAtWorldXY(x + rightOffset[1].x, y + rightOffset[1].y) != undefined);
	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 * 
	 * sets Player.onFloor
	 */
	playerTilemapCollide(_player: Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap: any)
	{
		if (_player.body.blocked.down)
		{
			this.player.onFloor = true;

			this.uiScene.setPunchCharge(true);

			this.combo = 0;
			this.updateCombo();
		}
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

			this.takeoutEnemy(_enemy, 'dive');

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

		this.takeoutEnemy(_enemy, 
			(this.player.stateController.currentState.name === 'punch'? 'punch' : 'uppercut'));
			// TODO: this isn't foolproof. Not sure how to recreate it, but sometimes it passes uppercut during a punch.

		this.player.punchCharged = true;
		this.uiScene.setPunchCharge(true);

		this.player.variablePunchSpeed = this.player.moveSpeed;
		this.player.variableUppercutSpeed = this.player.reducedUppercutSpeed;
	}

	enemyEnemyCollide(_enemy1: any, _enemy2: any)
	{
		let enemy1 = _enemy1 as EnemyPrefab;
		let enemy2 = _enemy2 as EnemyPrefab;

		if (!enemy1.isFalling())
		{
			enemy1.hit(enemy2.body.velocity.x, enemy2.body.velocity.y);
			this.takeoutEnemy(enemy1, 'chain', new Phaser.Math.Vector2
				(enemy2.body.velocity.x, enemy2.body.velocity.y))
		}

		if (!enemy2.isFalling())
		{
			this.takeoutEnemy(enemy2, 'chain', new Phaser.Math.Vector2
				(enemy1.body.velocity.x, enemy1.body.velocity.y));
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

		_bomb.setBombFuse();
		_bomb.setPosition(_bomb.x, _bomb.y - 3);
		const velocity = this.getKnockbackVelocty(false, (this.player.stateController.currentState.name === 'punch' ? 'punch' : 'uppercut'));
		_bomb.body.setVelocity(velocity.x, velocity.y);
		// _bomb.body.setVelocity(this.player.body.velocity.x * 1.3, (this.player.body.velocity.y * 1.5) - 150);
		_bomb.punched = true;
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
			_bomb.setBombFuse();
		}
	}

	bulletPlayerCollide(_bullet: any, _player: any)
	{
		this.resetLevel();
	}

	bulletTilemapCollide(_bullet: any, _tilemap: any)
	{
		_bullet.disappear();
	}

	/**
	 * Set enemy to falling state, set velocity, set particles.
	 * 
	 * Update UI & score.
	 * @param enemy 
	 * @param cause
	 * @param overrideVelocity if not provided, pre-set values from getKnockBackvelocity will be used based on cause
	 * @returns 
	 */
	takeoutEnemy(enemy: EnemyPrefab, cause: EnemyHitCause, overrideVelocity?: Phaser.Math.Vector2)
	{
		let velocity = overrideVelocity;
		if (!velocity)
		{
			velocity = this.getKnockbackVelocty(true, cause);
		}
		enemy.hit(velocity.x, velocity.y);
		SoundManager.play('enemy-death', this);

		this.createEnemyBloodParticles(enemy, cause, velocity);

		if (cause === 'dive' || cause === 'punch' || cause === 'uppercut')
		{
			this.hitStop();
		}

		if (!this.player.onFloor)
		{
			this.combo++;
			this.updateCombo();
		}

		this.addEnemyScore();

		if (enemy.isMine)
		{
			this.explode(enemy.x, enemy.y);
			return;
		}

		if (enemy.bombCooldownTimer != undefined)
		{
			enemy.bombCooldownTimer.destroy();
		}

		// this.enemiesDefeatedCheck();

		this.updateEnemiesUI(false);

		// if (this.player.stateController.currentState.name !== 'dive')
		// {
		// 	this.goalEnemyCheck(enemy);
		// }
	}

	/**
	 * Must be called after updateCombo()
	 */
	addEnemyScore()
	{
		let scoreToAdd = 200 * this.combo;
		this.levelScore += scoreToAdd;

		const scorePopup = this.scorePopupGroup.get(this.player.x, this.player.y - 1020);
		this.mainLayer.add(scorePopup);
		scorePopup.setDepth(20);
		scorePopup.appear(scoreToAdd);
	}

	updateCombo()
	{
		if (this.combo > this.highestCombo)
		{
			this.highestCombo = this.combo;
		}

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
	setBomb(x: number, y: number, enemy: EnemyPrefab, velocity?: Phaser.Math.Vector2, 
		punched?: boolean)
	{
		let newBomb = this.bombGroup.get(x, y) as BombPrefab;
		newBomb.appear(enemy);
		this.mainLayer.add(newBomb);
		newBomb.setDepth(-9);

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
		bomb.setBombFuse();

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
	public bombExplode(bomb: BombPrefab)
	{
		bomb.disappear();
		bomb.fuseVisualTimer.paused = true;
		bomb.fuseTimer.paused = true;

		let newExplosion = this.explosionGroup.get(bomb.x, bomb.y);
		newExplosion.appear();
		this.mainLayer.add(newExplosion);
		// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(bomb.x, bomb.y);

		// explosion visual / audio
		if (this.cameras.main.worldView.contains(bomb.x, bomb.y))
		{
			this.cameras.main.shake(200, 0.0005);
		}

		SoundManager.play('explosion', this);

		bomb.reset();
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
		newExplosion.setDepth(15);
		// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(x, y);

		// explosion visual / audio
		if (this.cameras.main.worldView.contains(x, y))
		{
			this.cameras.main.shake(200, 0.0005);
		}

		SoundManager.play('explosion', this);
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
		_newBullet.setDepth(3);
		this.bulletList.push(_newBullet);
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
	 * Recturns vector2 for pre-set knockback velocity based on cause of knockback
	 * @param enemy Velocity may be modified for other objects such as bombs.
	 */
	getKnockbackVelocty(enemy: boolean, cause?: EnemyHitCause): Phaser.Math.Vector2
	{
		let velocity = new Phaser.Math.Vector2(0, 0);

		// dive
		if (cause === 'dive')
		{
			velocity.set(100, -150);
		}
		else if (cause === 'punch')
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
		else if (cause === 'uppercut')
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
		else if (cause === 'explosion')
		{
			if (enemy)
			{
				velocity.set(0, -150);
			}
			else
			{
				velocity.set(0, -250);
			}
		}

		if (!this.player.flipX && velocity.x !== 0)
		{
			velocity.x = -velocity.x;
		}

		return velocity;
	}

	/**
	 * 
	 * @param enemy Origin point
	 * @param cause Determines which pre-set config parameters are used.
	 * @param velocity Used if cause is 'chain` to determine angle
	 * @returns 
	 */
	createEnemyBloodParticles(enemy:EnemyPrefab, cause: EnemyHitCause, velocity: Phaser.Math.Vector2)
	{
		let angle = 0;
		let speedMin = 300;
		let speedMax = 400;
		let spread = 4;

		switch(cause)
		{
			case 'punch':
				angle = (velocity.x <-15 ? 190 : -10	);
				break;

			case 'uppercut':
				angle = 270;
				break;

			case 'dive':
				angle = (velocity.x > 0 ? 60 : 120)
				speedMin = 200;
				speedMax = 300;
				spread = 10;
				break;
					// TODO: change speed

			default:
				angle = velocity.angle() * (180/Math.PI);
				break;
		}
		console.debug(`blood particles - angle: ${angle}`)

		this.enemyBloodEmitter = this.enemyBloodEmitterManager.createEmitter
		({
			lifespan: 3000,
			speed: { min: speedMin, max: speedMax },
			angle: { min: angle - spread, max: angle + spread },
			// alpha: { start: 1, end: 0 },
			scale: { start: 1, end: 0 },
			gravityY: 200,
			quantity: 100,
			on: false
		});
		this.enemyBloodEmitter2 = this.enemyBloodEmitterManager2.createEmitter
		({
			lifespan: 2000,
			speed: { min: 200, max: 700 },
			angle: { min: angle - 2, max: angle + 2 },
			// alpha: { start: 1, end: 0 },
			scale: { start: 1, end: 0 },
			gravityY: 200,
			on: false
		});
		this.enemyBloodEmitter.explode(10, enemy.x, enemy.y);
		this.enemyBloodEmitter2.explode(25, enemy.x, enemy.y);
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

	levelEndFeedback()
	{
		// this.uiScene.showLevelCompleteText();
		this.uiScene.showSummaryUI();

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

		this.cameras.main.stopFollow();

		this.levelTimer.paused = true;
		this.time.addEvent({
			delay: 200, repeat: -1, callback: () =>
			{
				this.uiScene.timerText.setVisible(!this.uiScene.timerText.visible);
			}
		});

		this.registry.set('completed-level-' + this.registry.get('current-level-index'), true);

		SoundManager.play('victory', this);
		this.music.pause();
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
			this.mainLayer.add(enemy);
			enemy.setDepth(-10);
		});
	}

	createPlane(x: number, y: number)
	{
		this.plane = this.add.image(x + 7, y + 2, 'plane');
		this.mainLayer.add(this.plane);
		this.plane.setDepth(15);
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
		}
	}

	/** Checks if the player is overlapping plane and if an enemy is in it. If so, triggers level end */
	planeCheck()
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
				}
			}
		});
	}

	checkVisionPolys()
	{
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
					if (object.parentEnemy.bombCooldownTimer.getProgress() === 1
						&& !object.parentEnemy.isFalling())
					{
						let brk;

						this.setBomb(object.parentEnemy.x, object.parentEnemy.y, object.parentEnemy);
						object.parentEnemy.bombCooldownTimer.reset({});
					}
				}
			}
		});
	}

	/**
	 * Initializes sound variables with set volumes
	 */
	addSounds()
	{
		this.sound.add('bird-flap');
		this.sound.add('enemy-death');
		this.sound.add('explosion');
		this.sound.add('bird-die');
		this.sound.add('victory');
		this.sound.add('reflect');
		this.sound.add('punch-swing');
		this.sound.add('combo-hit');
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

	/** Uncontional manual pause.
	 * 
	 * 	Used as window focus event handler */
	pause()
	{
		if (this.uiScene.tutorialVisible || this.uiScene.summaryVisible)
		{
			return;
		}

		this.scene.pause();
		this.scene.launch('Pause');
		this.manualPause = true;
	}

	/** Uncontional manual unpause.
	 * 
	 * 	Used as window focus event handler */
	unpause()
	{
		if (this.uiScene.tutorialVisible || this.uiScene.summaryVisible)
		{
			return;
		}

		this.scene.resume();
		this.scene.stop('Pause');
		this.manualPause = false;
	}

	/** User controled pause function.
	 * 
	 * 	Pause is conditional to game state.
	 */
	toggleManualPause()
	{
		if (this.manualPause)
		{
			this.unpause();
		}
		else
		{
			this.pause();
		}
	}

	hitStop()
	{
		if (this.restarting || this.scene.isPaused())
		{
			return;
		}

		console.debug('hitStop - start');

		// TODO: have this not conflict with blur pause
		this.scene.pause();
		this.hitStopPause = true;

		// TODO: Can I rely on uiScene time? Is this a bad hack?
		this.uiScene.time.addEvent({delay: 50, callback: () =>
		{
			if (this.manualPause)
			{
				return;
			}

			console.debug('hitStop - end');

			this.scene.resume();
			this.hitStopPause = false;
		}});
	}

	/**
	 * Calls UI scene to show or hide tutorial.
	 * 
	 * Will check if tutorial it's necessary based on level, it's completion & dev override.
	 * @param show 
	 * @param initial If this is upon scene setup, will be instant rather than tweened animation.
	 */
	setTutorialUI(show: boolean, initial: boolean)
	{
	// redndancy check
		if ((show && this.uiScene.tutorialVisible) || (!show && !this.uiScene.tutorialVisible))
		{
			return;
		}

		if (this.scene.isPaused() && show)
		{
			return;
		}

		if (this.uiScene.summaryVisible)
		{
			return;
		}

		if (this.uiScene.tutorialOffsetTween)
		{
			if (this.uiScene.tutorialOffsetTween.progress < 1)
			{
				return;
			}
		}

		if (show && !tutorialManager.doTutorialInDevMode)
		{
			show = false;
		}

		if (!show)
		{
			this.uiScene.setTutorialUI(false, true);

			this.scene.resume();

			return;
		}

		let tutorialNecessary = (this.currentLevelIndex < 10);
			// hardcoded: change this if tutorial level count changes


		if (tutorialManager.getTutorialText(this.currentLevelIndex))
		{
			if (this.registry.get('level-played-' + this.currentLevelIndex) && initial)
			{
				this.uiScene.setTutorialUI(false, false, this.currentLevelIndex);
			}
			else
			{
				this.uiScene.setTutorialUI(true, true, this.currentLevelIndex);

				this.scene.pause();
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

		this.enemiesDefeated = defeatedEnemyCount;

		if (!initialize)
		{
			this.uiScene.animateEnemiesText();
		}
	}

	setDebugUI()
	{
		if (this.uiScene.scene.isActive())
		{
			// this.uiScene.setDebugText(0, `${this.player.stateController.currentState.name}`);
			this.uiScene.setDebugText(0, `level completed: ${this.registry.get('completed-level-' + this.currentLevelIndex)}`);
			this.uiScene.setDebugText(1, `manual pause : ${this.manualPause}`);
			this.uiScene.setDebugText(2, `tutorial visible : ${this.uiScene.tutorialVisible}`);
		}
	}


	/** DEPRECATED */
	updateDebugWallDetect()
	{
		// const x = this.player.body.x;
		// const y = this.player.body.y;
		// const leftOffset = this.player.leftWallChecksOffset;
		// const rightOffset = this.player.rightWallChecksOffset;

		// this.debugWallDetectGraphics.clear();
		// this.debugWallDetectGraphics.fillPoint(x + leftOffset[0].x, y + leftOffset[0].y);
		// this.debugWallDetectGraphics.fillPoint(x + leftOffset[1].x, y + leftOffset[1].y);
		// this.debugWallDetectGraphics.fillPoint(x + rightOffset[0].x, y + rightOffset[0].y);
		// this.debugWallDetectGraphics.fillPoint(x + rightOffset[1].x, y + rightOffset[1].y);
	}

	resize()
	{
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));

		// const _camera = this.cameras.main as any;
		// _camera.preRender(1);
			// this scene's objects shouldn't need align component
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
