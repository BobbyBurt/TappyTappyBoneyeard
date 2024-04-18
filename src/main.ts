import cloudSaves from './API/cloudSaves';
import medalScene from './API/medalScene';
import { newgroundsIOWrapper } from './API/newgroundsIOWrapper';
import CharacterSelectScene from './scenes/CharacterSelectScene';
import ControlsGuideScene from './scenes/ControlsGuideScene';
import Credits from './scenes/Credits';
import CreditsMP from './scenes/CreditsMP';
import FullscreenPopupScene from './scenes/FullscreenPopupScene';
import Level from './scenes/Level';
import LevelSelect from './scenes/LevelSelect';
import LevelUI from './scenes/LevelUI';
import MenuScene from './scenes/MenuScene';
import Pause from './scenes/Pause';
import Preload from './scenes/Preload';
import Titlescreen from './scenes/Titlescreen';


window.addEventListener('load', function ()
{
	console.clear();

	var game = new Phaser.Game( 
	{
		title: 'Bird Tapper',
		url: 'https://www.newgrounds.com/projects/games/1923225/preview',
		version: '34 patch',
		
	// visuals
		type: Phaser.AUTO,
		backgroundColor: "#ffeaf0",
		pixelArt: true,
		roundPixels: true,
		input: {
			gamepad: true
		},
		// scale: {
		// 	mode: Phaser.Scale.NONE,
		// 	width: window.innerWidth * window.devicePixelRatio,
        // 	height: window.innerHeight * window.devicePixelRatio,
        // 	zoom: 1 / window.devicePixelRatio,
		// 		// TODO: specify max w/h
		// 	autoRound: true
		// 		// this removes the scrollbars while I'm testing in Chrome
		// 		// TODO: reconsider this before release
		// },
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 960,
			height: 540
		},

	// physics
		physics: {
			default: 'arcade',
			arcade: {
				// debug: tsrue,
				fps: 120,
				tileBias: 16,
				gravity: {
					y: 500,
					x: 0
				}
			}
		},
		// parent: ''
		dom: {
			createContainer: true
		}

		// plugins:
		// {
		// 	global:
		// 	[
		// 		{
		// 			key: 'NGIO-plugin', 
		// 			plugin: NGIOPlugin, 
		// 			start: true
		// 		}
		// 	],
		// 	scene:
		// 	[
		// 		// {
		// 		// 	key: 'scene-plugin-test',
		// 		// 	plugin: ScenePluginTest,
		// 		// 	mapping: 'scenePluginMap'
		// 		// }
		// 	]
		// }
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Credits", Credits);
	game.scene.add("Level", Level);
	game.scene.add("LevelSelect", LevelSelect);
	game.scene.add("Titlescreen", Titlescreen);
	game.scene.add("Boot", Boot, true);
	game.scene.add("LevelUI", LevelUI);
	game.scene.add("Pause", Pause);
	game.scene.add('medal-scene', medalScene);
	game.scene.add('menu-scene', MenuScene);
	game.scene.add('character-select-scene', CharacterSelectScene);
	game.scene.add('fullscreen-popup-scene', FullscreenPopupScene);
	game.scene.add('control-guide-scene', ControlsGuideScene);
	game.scene.add('CreditsMP', CreditsMP);
});

class Boot extends Phaser.Scene
{
	private ngWrap: newgroundsIOWrapper;

	/**
	 * load preload assets, then the scene
	 */
	preload()
	{

		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}

	create()
	{
		// chrome prevent arrow key scrolling
		window.addEventListener("keydown", function(e) {
			if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
					e.preventDefault();
			}
	}, false);

		this.game.events.once(Phaser.Core.Events.STEP, () => 
		{
			this.ngWrap = new newgroundsIOWrapper();
			this.ngWrap.start();
		});
		
		this.game.events.on(Phaser.Core.Events.STEP, () => 
		{
			NGIO.keepSessionAlive();
			if (NGIO.isInitialized)
			{
				this.ngWrap.update(this.game);
			}
		});

		let dataKeys = new Array<string>();
		if (__MAP_PACK__) {
			LevelSelect.mpLevelsKey.forEach((value, index) => {
				dataKeys.push(`top-score: ${value}`);
				dataKeys.push(`unlocked: ${value}`);
			});	
		}
		else {
			LevelSelect.levelsKey.forEach((value, index) =>
			{
				dataKeys.push(`top-score: ${value}`);
				dataKeys.push(`unlocked: ${value}`);
			});
		}
		
		// eggs
		// HARDCODED: new egg rooms need to be added manually
		dataKeys.push(`got-egg: bomb-holder`);
		dataKeys.push(`got-egg: umbrella-shield`);
		dataKeys.push(`got-egg: mine-intro`);
		dataKeys.push(`got-egg: mine-wall`);
		// dataKeys.push(`new-uppercut-input`);
		dataKeys.push(`unlocked-character: puck`);
		dataKeys.push(`unlocked-character: gappy`);
		dataKeys.push(`unlocked-character: kid`);
		dataKeys.push(`unlocked-alt: puck`);
		dataKeys.push(`unlocked-alt: gappy`);
		dataKeys.push(`unlocked-alt: kid`);

		dataKeys.push(`no-more-unlocks`);
		dataKeys.push('played-credits');

		cloudSaves.setDataKeys(dataKeys);
		// cloudSaves.setDataKeys([
		// 	'top-score: punch', 'top-score: airborne', 'top-score: dive', 'top-score: gunfire', 'top-score: uppercut', 'top-score: charge', 'top-score: combo', 'top-score: tutorial-finale',
		// 	'top-score'
		// ]);
		// TODO: add all level key topscores
		this.registry.set('manually-selected-character', 'tapper');
		this.registry.set('character-alt', false);
	}

	/**
	 * Persistent function called at window resize event.
	 * 
	 * Sets scalemanager size based on window and calls resize() in all active scenes
	 * 
	 * adapted from [resize solution](https://supernapie.com/blog/support-retina-with-phaser-3/) 
	 * by SuperNappie
	 */
	resize()
	{
	// manually resize the game with the Phaser 3.16 scalemanager
		let w = window.innerWidth * window.devicePixelRatio;
		let h = window.innerHeight * window.devicePixelRatio;
		this.scale.resize(w, h);

	// for each scene: scale main camera viewport, call resize()
		for (let scene of this.scene.manager.scenes)
		{	
			if (scene.scene.settings.active)
			{
				scene.cameras.main.setViewport(0, 0, w, h);
			}
		}

	// emit resize event
		this.scene.manager.getScenes(true)[0].events.emit('pre-resize');
		this.scene.manager.getScenes(true)[0].events.emit('resize');
			// Emits from first active scene, whichever it is, since this boot scene will be gone.
			// scenes listen for pre-resize and prerender their cameras so components and such can
			// have updated camera values. Thes listen to the resize event.
	}
}