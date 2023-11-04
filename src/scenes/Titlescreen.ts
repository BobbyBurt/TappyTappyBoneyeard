
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import LevelSelect from "./LevelSelect";
import cloudSaves from "~/API/cloudSaves";
/* END-USER-IMPORTS */

export default class Titlescreen extends Phaser.Scene {

	constructor() {
		super("Titlescreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// parallax_Backing111
		const parallax_Backing111 = this.add.image(248, 128, "Parallax-Backing");
		parallax_Backing111.scaleX = 8.415017240244449;

		// parallax_Cityscape
		const parallax_Cityscape = this.add.image(156, 169, "Parallax-Cityscape");
		parallax_Cityscape.tintFill = true;
		parallax_Cityscape.tintTopLeft = 16756150;
		parallax_Cityscape.tintTopRight = 16756150;
		parallax_Cityscape.tintBottomLeft = 16756150;
		parallax_Cityscape.tintBottomRight = 16756150;

		// parallax_Cityscape_20
		const parallax_Cityscape_20 = this.add.image(36, 224, "Parallax-Cityscape");
		parallax_Cityscape_20.tintFill = true;
		parallax_Cityscape_20.tintTopLeft = 16028060;
		parallax_Cityscape_20.tintTopRight = 16028060;
		parallax_Cityscape_20.tintBottomLeft = 16028060;
		parallax_Cityscape_20.tintBottomRight = 16028060;

		// parallax_Cityscape_1
		const parallax_Cityscape_1 = this.add.image(472, 169, "Parallax-Cityscape");
		parallax_Cityscape_1.tintFill = true;
		parallax_Cityscape_1.tintTopLeft = 16756150;
		parallax_Cityscape_1.tintTopRight = 16756150;
		parallax_Cityscape_1.tintBottomLeft = 16756150;
		parallax_Cityscape_1.tintBottomRight = 16756150;

		// parallax_Cityscape_2
		const parallax_Cityscape_2 = this.add.image(355, 224, "Parallax-Cityscape");
		parallax_Cityscape_2.tintFill = true;
		parallax_Cityscape_2.tintTopLeft = 16028060;
		parallax_Cityscape_2.tintTopRight = 16028060;
		parallax_Cityscape_2.tintBottomLeft = 16028060;
		parallax_Cityscape_2.tintBottomRight = 16028060;

		// logo
		const logo = this.add.image(240, 125, "logo");
		logo.scaleX = 2;
		logo.scaleY = 2;

		// progress_2
		const progress_2 = this.add.bitmapText(240, 234, "nokia", "Click / tap to start");
		progress_2.setOrigin(0.5, 0.5);
		progress_2.tintTopLeft = 5388102;
		progress_2.tintTopRight = 5388102;
		progress_2.tintBottomLeft = 5388102;
		progress_2.tintBottomRight = 5388102;
		progress_2.text = "Click / tap to start";
		progress_2.fontSize = -10;
		progress_2.align = 1;
		progress_2.dropShadowColor = 9737364;

		// progress
		const progress = this.add.bitmapText(240, 30, "nokia", "BobbyBurt - ProsciuttoMan - Dry - Shane Mesa");
		progress.setOrigin(0.5, 0.5);
		progress.tintTopLeft = 5388102;
		progress.tintTopRight = 5388102;
		progress.tintBottomLeft = 5388102;
		progress.tintBottomRight = 5388102;
		progress.text = "BobbyBurt - ProsciuttoMan - Dry - Shane Mesa";
		progress.fontSize = -10;
		progress.align = 1;
		progress.dropShadowColor = 9737364;

		// parallax_Backing111 (components)
		new ScrollFactor(parallax_Backing111);

		this.parallax_Backing111 = parallax_Backing111;

		this.events.emit("scene-awake");
	}

	private parallax_Backing111!: Phaser.GameObjects.Image;

	/* START-USER-CODE */



	create() {

		this.editorCreate();

		// camera
		this.cameras.main.setOrigin(0, 0); 	
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));
		this.cameras.main.fadeIn(200, 255, 255, 255);

		// start input
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);
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

			NGIO.logEvent('Mobile Start', (event) => 
			{
				console.debug(`logEvent: ${event}`);
			});
		}
		else if (event.type == 'click')
		{
			this.registry.set('mobile', false);

			NGIO.logEvent('Desktop Start', (event) => 
			{
				console.debug(`logEvent: ${event}`);
			});
		}

		this.start();
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
		// this.scene.launch("Titlescreen");

		cloudSaves.loadData(this);

		// play first level on new save file
		let noExistingSaveData = false;
		// TODO

		if (noExistingSaveData)
		{
			this.registry.set('last-scene', this.scene.key);

			this.registry.set('current-level', 'jump');
			this.registry.set('current-level-index', 0)
			this.scene.stop(this);
			this.scene.launch('LevelUI');
			this.scene.launch('Level');
			return;
		}

		LevelSelect.levelSelectEntry = 'titlescreen';
		this.scene.launch("LevelSelect");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
