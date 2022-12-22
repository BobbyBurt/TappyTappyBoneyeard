window.addEventListener('load', function ()
{
	var game = new Phaser.Game(
	{
		title: 'Tappy Tappy Boneyard',
		url: 'https://www.newgrounds.com/projects/games/1923225/preview',
		version: '2',
		
	// visuals
		type: Phaser.AUTO,
		backgroundColor: "#FFD3DF",
		pixelArt: true,
		roundPixels: true,
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
				debug: true,
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
				scene.cameras.main.setViewport(0, 0, w, h);

			// prerender UICam so that scale is up to date
				this.uiCam = scene.cameras.getCamera('UIcam');
				if (this.uiCam)
				{
					this.uiCam.preRender(1);
				}

				// if (scene.resize)
				// {
				// 	scene.resize();
				// 		// Scale/position stuff in the scene itself with this method that the 
				// 		// scene must implement.
				// }
			}
		}

	// emit resize event
		this.scene.manager.getScenes(true)[0].events.emit('resize');
			// Emits from first active scene, whichever it is, since this boot scene will be gone.
			// Secondary event that components can observe without dependency on the scene.
			// I use my own event knowing it will be called after the window event listener, and
			// thus the scale data is up to date.
	}
}