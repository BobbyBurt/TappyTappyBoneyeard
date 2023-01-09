import Level from './scenes/Level';
import Preload from './scenes/Preload';

window.addEventListener('load', function ()
{
	var game = new Phaser.Game(
	{
		title: 'Tappy Tappy Boneyard',
		url: 'https://www.newgrounds.com/projects/games/1923225/preview',
		version: '4',
		
	// visuals
		type: Phaser.AUTO,
		backgroundColor: "#ffeaf0",
		pixelArt: true,
		roundPixels: true,
		input: {
			gamepad: true
		},
		scale: {
			mode: Phaser.Scale.NONE,
			width: window.innerWidth * window.devicePixelRatio,
        	height: window.innerHeight * window.devicePixelRatio,
        	zoom: 1 / window.devicePixelRatio
				// TODO: specify max w/h
		},

	// physics
		physics: {
			default: 'arcade',
			arcade: {
				// debug: true,
				gravity: {
					y: 500,
					x: 0
				}
			}
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene
{
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
		window.addEventListener('resize', this.resize.bind(this));
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
				// scene.cameras.cameras[0].setViewport(0, 0, w, h);
				// scene.cameras.cameras[1].setViewport(0, 0, w, h);
				scene.cameras.main.setViewport(0, 0, w, h);
					// TODO: make this dymanic for more cameras

			// prerender UICam so that scale is up to date
				const uiCam = scene.cameras.getCamera('UIcam') as any;
				if (uiCam)
				{
					uiCam.preRender(1);
						// TODO: fix this. Doesn't work in Typescript.
						// I can't call it outside of the scene it seems
				}
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