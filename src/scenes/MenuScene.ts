
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
/* END-USER-IMPORTS */

export default class MenuScene extends Phaser.Scene {

	constructor() {
		super("menu-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// menuContainer
		const menuContainer = this.add.container(0, 0);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(240, 0, 250, 270);
		rectangle_4.setOrigin(0.5, 0);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 8542833;
		menuContainer.add(rectangle_4);

		// characterSelectRect
		const characterSelectRect = this.add.rectangle(240, 63, 150, 25);
		characterSelectRect.isFilled = true;
		characterSelectRect.fillColor = 6966365;
		characterSelectRect.isStroked = true;
		characterSelectRect.lineWidth = 3;
		menuContainer.add(characterSelectRect);

		// controlsRect
		const controlsRect = this.add.rectangle(240, 107, 150, 25);
		controlsRect.isFilled = true;
		controlsRect.fillColor = 6966365;
		controlsRect.isStroked = true;
		controlsRect.strokeColor = 10054789;
		controlsRect.lineWidth = 3;
		menuContainer.add(controlsRect);

		// fullscreenRect
		const fullscreenRect = this.add.rectangle(240, 150, 150, 25);
		fullscreenRect.isFilled = true;
		fullscreenRect.fillColor = 6966365;
		fullscreenRect.isStroked = true;
		fullscreenRect.strokeColor = 10054789;
		fullscreenRect.lineWidth = 3;
		menuContainer.add(fullscreenRect);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(240, 107, "nokia", "Controls");
		bitmaptext_4.setOrigin(0.5, 0.5);
		bitmaptext_4.text = "Controls";
		bitmaptext_4.fontSize = -10;
		bitmaptext_4.align = 1;
		menuContainer.add(bitmaptext_4);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(240, 149, "nokia", "Fullscreen");
		bitmaptext_6.setOrigin(0.5, 0.5);
		bitmaptext_6.text = "Fullscreen";
		bitmaptext_6.fontSize = -10;
		bitmaptext_6.align = 1;
		menuContainer.add(bitmaptext_6);

		// creditsRect
		const creditsRect = this.add.rectangle(240, 192, 150, 25);
		creditsRect.isFilled = true;
		creditsRect.fillColor = 6966365;
		creditsRect.isStroked = true;
		creditsRect.strokeColor = 10054789;
		creditsRect.lineWidth = 3;
		menuContainer.add(creditsRect);

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(240, 192, "nokia", "Credits\n");
		bitmaptext_7.setOrigin(0.5, 0.5);
		bitmaptext_7.text = "Credits\n";
		bitmaptext_7.fontSize = -10;
		bitmaptext_7.align = 1;
		menuContainer.add(bitmaptext_7);

		// levelSelectRect
		const levelSelectRect = this.add.rectangle(240, 234, 150, 25);
		levelSelectRect.isFilled = true;
		levelSelectRect.fillColor = 6966365;
		levelSelectRect.isStroked = true;
		levelSelectRect.strokeColor = 10054789;
		levelSelectRect.lineWidth = 3;
		menuContainer.add(levelSelectRect);

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(240, 234, "nokia", "Back to Level Select\n");
		bitmaptext_8.setOrigin(0.5, 0.5);
		bitmaptext_8.text = "Back to Level Select\n";
		bitmaptext_8.fontSize = -10;
		bitmaptext_8.align = 1;
		menuContainer.add(bitmaptext_8);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(240, 28, "nokia", "Menu");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.tintTopLeft = 12158627;
		bitmaptext_1.tintTopRight = 12158627;
		bitmaptext_1.tintBottomLeft = 12158627;
		bitmaptext_1.tintBottomRight = 12158627;
		bitmaptext_1.text = "Menu";
		bitmaptext_1.fontSize = -26;

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(240, 63, "nokia", "Character Select");
		bitmaptext_3.setOrigin(0.5, 0.5);
		bitmaptext_3.text = "Character Select";
		bitmaptext_3.fontSize = -10;
		bitmaptext_3.align = 1;

		this.characterSelectRect = characterSelectRect;
		this.controlsRect = controlsRect;
		this.fullscreenRect = fullscreenRect;
		this.creditsRect = creditsRect;
		this.levelSelectRect = levelSelectRect;

		this.events.emit("scene-awake");
	}

	private characterSelectRect!: Phaser.GameObjects.Rectangle;
	private controlsRect!: Phaser.GameObjects.Rectangle;
	private fullscreenRect!: Phaser.GameObjects.Rectangle;
	private creditsRect!: Phaser.GameObjects.Rectangle;
	private levelSelectRect!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	private selectedOption: 'character' | 'controls' | 'fullscreen' | 'credits' | 'level' = 'character';
	private activeMenu: 'menu' | 'character' | 'controls' | 'fullscreen' = 'menu';

	create() {

		this.editorCreate();

		this.setupCamera();

	// input
	this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-down', 'keyboard')}`, () =>
	{
		this.setSelected(false);
	});
	this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-up', 'keyboard')}`, () =>
	{
		this.setSelected(true);
	});
		this.input.keyboard.on
			(`keydown-${InputManager.getInput('menu-confirm', 'keyboard')}`, () =>
		{
			this.setMenu(true)
		});
	}

	setMenu(enter: boolean)
	{
		switch (this.selectedOption)
		{
			case 'character':
				this.scene.pause();	
				this.scene.launch('character-select-scene');
				break;
			case 'credits':
				this.cameras.main.fadeOut(1000, 255, 234, 240);

				this.time.delayedCall(1500, () =>
				{
					this.scene.stop(this);
					this.scene.stop('LevelSelect')
					this.scene.launch('Credits');
					this.sound.stopAll();
				});
				break;

			case 'level':
				this.scene.stop();
				this.scene.resume('LevelSelect');
		}
	}

	setSelected(increase: boolean)
	{
		// increase / decrease
		switch (this.selectedOption)
		{
			case 'character':
				this.selectedOption = (increase ? 'level' : 'controls');
				break;
			case 'controls':
				this.selectedOption = (increase ? 'character' : 'fullscreen');
				break;
			case 'fullscreen':
				this.selectedOption = (increase ? 'controls' : 'credits');
				break;
			case 'credits':
				this.selectedOption = (increase ? 'fullscreen' : 'level');
				break;
			case 'level':
				this.selectedOption = (increase ? 'credits' : 'character');
				break;
		}

		// visual feedback
		this.characterSelectRect.strokeColor = (this.selectedOption === 'character' ? 0xffffff : 0x996C85 );
		this.controlsRect.strokeColor = (this.selectedOption === 'controls' ? 0xffffff : 0x996C85 );
		this.fullscreenRect.strokeColor = (this.selectedOption === 'fullscreen' ? 0xffffff : 0x996C85 );
		this.creditsRect.strokeColor = (this.selectedOption === 'credits' ? 0xffffff : 0x996C85 );
		this.levelSelectRect.strokeColor = (this.selectedOption === 'level' ? 0xffffff : 0x996C85 );
	}

	setupCamera()
	{
		CameraUtil.configureMainCamera(this);
		// this.cameras.main.setBackgroundColor();
		this.cameras.main.setOrigin(0, 0);
		// this.cameras.main.
		// this.cameras.main.setBackgroundColor(0x8d4049);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
