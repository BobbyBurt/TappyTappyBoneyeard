
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
/* END-USER-IMPORTS */

export default class Pause extends Phaser.Scene {

	constructor() {
		super("Pause");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// PauseText
		const pauseText = this.add.bitmapText(35, 10, "nokia", "Paused");
		pauseText.setOrigin(0.5, 0.5);
		pauseText.text = "Paused";
		pauseText.fontSize = -16;
		pauseText.dropShadowX = -1;
		pauseText.dropShadowY = 1;
		pauseText.dropShadowAlpha = 1;

		// pauseText (components)
		const pauseTextAlign = new Align(pauseText);
		pauseTextAlign.middle = true;
		pauseTextAlign.center = true;

		this.pauseText = pauseText;

		this.events.emit("scene-awake");
	}

	public pauseText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */



	create() {

		this.editorCreate();

		this.setupCamera();
	}

	private setupCamera()
	{
		this.cameras.main.setName('UICam');
		this.cameras.main.setSize(this.scale.width, this.scale.height);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));

		const _camera = this.cameras.main as any;
		_camera.preRender(1);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
