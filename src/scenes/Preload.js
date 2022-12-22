
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(0, 0, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "nokia cellphone fc small", "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	loaded = false

	preload()
	{
		this.editorCreate();

		this.editorPreload();

		this.resize();

	// camera
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);

	// start input
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);

	// load event
		this.load.on(Phaser.Loader.Events.COMPLETE, () => 
		{
			this.loaded = true;
		});
	}

	/** 
	 * Set registry's mobile value based on input.
	 * 
	 * Start the game if loaded.
	 */
	onPointer = (event) => 
	{
	// set registry's mobile value
		if (event.type == 'touchstart')
		{
			this.registry.set('mobile', true);
		}
		else if (event.type == 'click')
		{
			this.registry.set('mobile', false);
		}
	
		if (this.loaded)
		{
			this.start();
		}
	}

	/**
	 * loads next scene
	 */
	start()
	{
		window.removeEventListener('touchstart', this.onPointer);
		window.removeEventListener('click', this.onPointer);

		// remove music here if applicable

		this.scene.stop(this);
		this.scene.launch("Level");
	}

	resize()
	{
		this.cameras.main.centerOn(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
