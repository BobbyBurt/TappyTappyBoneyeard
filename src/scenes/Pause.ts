
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
/* END-USER-IMPORTS */

export default class Pause extends Phaser.Scene {

	constructor() {
		super("Pause");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 1, 9999, 9999);
		rectangle_1.alpha = 0.5;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 14383236;

		// inputText
		const inputText = this.add.bitmapText(29, 2, "nokia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam,");
		inputText.setOrigin(0.5, 0);
		inputText.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam,";
		inputText.fontSize = -8;
		inputText.maxWidth = 120;
		inputText.dropShadowAlpha = 1;

		// PauseText
		const pauseText = this.add.bitmapText(35, 10, "nokia", "Paused");
		pauseText.setOrigin(0.5, 0.5);
		pauseText.text = "Paused";
		pauseText.fontSize = -16;
		pauseText.dropShadowX = -2;
		pauseText.dropShadowY = 2;
		pauseText.dropShadowAlpha = 1;

		// inputText (components)
		const inputTextAlign = new Align(inputText);
		inputTextAlign.middle = true;
		inputTextAlign.center = true;
		inputTextAlign.verticalOffset = 10;

		// pauseText (components)
		const pauseTextAlign = new Align(pauseText);
		pauseTextAlign.middle = true;
		pauseTextAlign.center = true;
		pauseTextAlign.verticalOffset = -10;

		this.inputText = inputText;
		this.pauseText = pauseText;

		this.events.emit("scene-awake");
	}

	private inputText!: Phaser.GameObjects.BitmapText;
	public pauseText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */



	create() {

		this.editorCreate();

		this.setupCamera();

		this.inputText.setText(`${InputManager.getInputName('pause')} to resume.\n\n${InputManager.getInputName('menu-confirm')} to restart.\n\n${InputManager.getInputName('menu-back')} to exit.`)
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
