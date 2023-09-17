
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../components/PreloadText";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import LevelSelect from "./LevelSelect";

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
		const progress = this.add.bitmapText(480, 270, "nokia", "0%");
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.fontSize = -16;

		// fileText
		const fileText = this.add.bitmapText(369, 324, "nokia", "New BitmapText");
		fileText.alpha = 0.2;
		fileText.alphaTopLeft = 0.2;
		fileText.alphaTopRight = 0.2;
		fileText.alphaBottomLeft = 0.2;
		fileText.alphaBottomRight = 0.2;
		fileText.text = "New BitmapText";
		fileText.fontSize = -8;
		fileText.maxWidth = 200;

		// progress_1
		const progress_1 = this.add.bitmapText(480, 302, "nokia", "Log into Newgrounds to earn medals and use cloud save data.");
		progress_1.setOrigin(0.5, 0.5);
		progress_1.text = "Log into Newgrounds to earn medals and use cloud save data.";
		progress_1.fontSize = -10;
		progress_1.align = NaN;

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

		// TEMP 
		this.game.registry.set('total-score', 0);

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
				// this.start();
					// mobile detection will not run if enabled
			}
		});

		this.load.on('filecomplete', (key: string, type: string, data: any) =>
		{
			this.fileText.setText(this.fileText.text + `\nloaded: ${key} ${type}`)
			this.fileText.setY(this.fileText.y - 10)
		});

		this.scene.launch('medal-scene');
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
			this.input.addPointer(3);
		}
		else if (event.type == 'click')
		{
			// this.registry.set('mobile', false);
			this.registry.set('mobile', true);
			InputManager.activeInputMode = 'touch';
		}

		if (this.loaded)
		{
			this.start();
		}
	}

	/**s
	 * loads next scene
	 */
	start()
	{


		window.removeEventListener('touchstart', this.onPointer);
		window.removeEventListener('click', this.onPointer);

		// remove music here if applicable

		this.scene.stop(this);
		LevelSelect.levelSelectEntry = 'titlescreen';
		this.scene.launch("LevelSelect");
	}

	resize()
	{
		// this.cameras.main.centerOn(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
