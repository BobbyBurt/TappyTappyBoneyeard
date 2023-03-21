
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../components/PreloadText";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";

/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorPreload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	editorCreate(): void {

		// progress
		const progress = this.add.text(48, 55, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "nokia cellphone fc small", "fontSize": "30px" });

		// logo
		const logo = this.add.image(35, -94, "logo");
		logo.scaleX = 3.09831503427523;
		logo.scaleY = 3.09831503427523;

		// fileText
		const fileText = this.add.bitmapText(-154, 212, "nokia", "New BitmapText");
		fileText.alpha = 0.3;
		fileText.alphaTopLeft = 0.3;
		fileText.alphaTopRight = 0.3;
		fileText.alphaBottomLeft = 0.3;
		fileText.alphaBottomRight = 0.3;
		fileText.text = "New BitmapText";
		fileText.fontSize = -8;
		fileText.maxWidth = 200;

		// progress (components)
		new PreloadText(progress);

		this.fileText = fileText;

		this.events.emit("scene-awake");
	}

	private fileText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	loaded = false

	preload()
	{
		this.editorCreate();

		this.editorPreload();

		this.resize();

		this.scale.autoRound = true;

	// camera
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this))

	// start input
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);

	// load event
		this.load.on(Phaser.Loader.Events.COMPLETE, () => 
		{
			this.loaded = true;

		// DEBUG: auto load
			if (__DEV__)
			{
				this.start();
					// mobile detection will not run if enabled
			}
		});

		this.load.on('filecomplete', (key: string, type: string, data: any) =>
		{
			this.fileText.setText(this.fileText.text + `\nloaded: ${key}`)
			this.fileText.setY(this.fileText.y - 10)
		});
	}

	/** 
	 * Set registry's mobile value based on input.
	 * 
	 * Start the game if loaded.
	 */
	onPointer = (event:any) => 
	{
	// set registry's mobile value
		if (event.type == 'touchstart')
		{
			this.registry.set('mobile', true);
			InputManager.activeInputMode = 'touch';
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
		this.scene.launch("LevelSelect");
	}

	resize()
	{
		this.cameras.main.centerOn(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
