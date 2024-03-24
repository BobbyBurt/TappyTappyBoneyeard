
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
/* END-USER-IMPORTS */

export default class FullscreenPopupScene extends Phaser.Scene {

	constructor() {
		super("fullscreen-popup-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// back
		const back = this.add.rectangle(240, 135, 250, 300);
		back.isFilled = true;
		back.fillColor = 8542833;
		back.isStroked = true;
		back.strokeColor = 12158627;
		back.lineWidth = 3;

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(240, 111, "nokia", "- Click to enable fullscreen -");
		bitmaptext_1.setOrigin(0.5, 0);
		bitmaptext_1.text = "- Click to enable fullscreen -";
		bitmaptext_1.fontSize = -8;

		// levelSelectRect
		const levelSelectRect = this.add.rectangle(240, 228, 100, 25);
		levelSelectRect.isFilled = true;
		levelSelectRect.fillColor = 6966365;
		levelSelectRect.isStroked = true;
		levelSelectRect.lineWidth = 3;

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(240, 228, "nokia", "Back\n");
		bitmaptext_8.setOrigin(0.5, 0.5);
		bitmaptext_8.text = "Back\n";
		bitmaptext_8.fontSize = -10;
		bitmaptext_8.align = 1;

		this.back = back;
		this.levelSelectRect = levelSelectRect;

		this.events.emit("scene-awake");
	}

	private back!: Phaser.GameObjects.Rectangle;
	private levelSelectRect!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		CameraUtil.configureMainCamera(this);
		this.cameras.main.setOrigin(0, 0);

		this.back.setInteractive();
		this.back.on('pointerup', () =>
		{
			if (!this.scale.isFullscreen)
			{
				this.scale.startFullscreen();

				this.sound.play('menu-confirm');
			}

			this.scene.stop();
			this.scene.resume('menu-scene');

		});

		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-back', 'keyboard')}`, () =>
		{
			this.sound.play('menu-back');
			
			this.scene.stop();
			this.scene.resume('menu-scene');
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-back', 'gamepad'))
			{
				this.sound.play('menu-back');

				this.scene.stop();
				this.scene.resume('menu-scene');
			}
		});
		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-confirm', 'keyboard')}`, () =>
		{
			this.sound.play('menu-back');

			this.scene.stop();
			this.scene.resume('menu-scene');
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				this.sound.play('menu-back');

				this.scene.stop();
				this.scene.resume('menu-scene');
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
