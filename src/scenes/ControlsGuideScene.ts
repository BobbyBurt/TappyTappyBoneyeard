
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import InputManager from "~/components/InputManager";
import CameraUtil from "~/components/CameraUtil";
/* END-USER-IMPORTS */

export default class ControlsGuideScene extends Phaser.Scene {

	constructor() {
		super("control-guide-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bgColour_1
		const bgColour_1 = this.add.rectangle(0, 0, 480, 270);
		bgColour_1.setOrigin(0, 0);
		bgColour_1.isFilled = true;
		bgColour_1.fillColor = 6966365;

		// bgColour
		const bgColour = this.add.rectangle(65, 90, 480, 270);
		bgColour.setOrigin(0, 0);
		bgColour.isFilled = true;
		bgColour.fillColor = 10054789;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(47, 49, "nokia", "Control Guide");
		bitmaptext.angle = 90;
		bitmaptext.tintTopLeft = 10054789;
		bitmaptext.tintTopRight = 10054789;
		bitmaptext.tintBottomLeft = 10054789;
		bitmaptext.tintBottomRight = 10054789;
		bitmaptext.text = "Control Guide";
		bitmaptext.fontSize = -24;

		// controllerImage
		const controllerImage = this.add.image(264, 173, "keyboard");

		// keyboardButtonRect
		const keyboardButtonRect = this.add.rectangle(133, 26, 100, 20);
		keyboardButtonRect.isFilled = true;
		keyboardButtonRect.fillColor = 8542833;
		keyboardButtonRect.isStroked = true;
		keyboardButtonRect.lineWidth = 2;

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(133, 26, "nokia", "Keyboard");
		bitmaptext_3.setOrigin(0.5, 0.5);
		bitmaptext_3.text = "Keyboard";
		bitmaptext_3.fontSize = -10;
		bitmaptext_3.align = 1;

		// gamepadButtonRect
		const gamepadButtonRect = this.add.rectangle(250, 26, 100, 20);
		gamepadButtonRect.isFilled = true;
		gamepadButtonRect.fillColor = 8542833;
		gamepadButtonRect.isStroked = true;
		gamepadButtonRect.strokeColor = 10054789;
		gamepadButtonRect.lineWidth = 2;

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(250, 26, "nokia", "Gamepad");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Gamepad";
		bitmaptext_1.fontSize = -10;
		bitmaptext_1.align = 1;

		// touchscreenButtonRect
		const touchscreenButtonRect = this.add.rectangle(366, 26, 100, 20);
		touchscreenButtonRect.isFilled = true;
		touchscreenButtonRect.fillColor = 8542833;
		touchscreenButtonRect.isStroked = true;
		touchscreenButtonRect.strokeColor = 10054789;
		touchscreenButtonRect.lineWidth = 2;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(366, 26, "nokia", "Touchscreen");
		bitmaptext_2.setOrigin(0.5, 0.5);
		bitmaptext_2.text = "Touchscreen";
		bitmaptext_2.fontSize = -10;
		bitmaptext_2.align = 1;

		// keyboardGameplayContainer
		const keyboardGameplayContainer = this.add.container(12, 0);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(178, 110, "nokia", "Punch");
		bitmaptext_6.text = "Punch";
		bitmaptext_6.fontSize = -16;
		keyboardGameplayContainer.add(bitmaptext_6);

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(209, 130, "nokia", "I");
		bitmaptext_9.text = "I";
		bitmaptext_9.fontSize = -8;
		keyboardGameplayContainer.add(bitmaptext_9);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(327, 113, "nokia", "Jump");
		bitmaptext_4.text = "Jump";
		bitmaptext_4.fontSize = -16;
		keyboardGameplayContainer.add(bitmaptext_4);

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(367, 137, "nokia", "I");
		bitmaptext_10.text = "I";
		bitmaptext_10.fontSize = -8;
		keyboardGameplayContainer.add(bitmaptext_10);

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(117, 187, "nokia", "Uppercut");
		bitmaptext_7.text = "Uppercut";
		bitmaptext_7.fontSize = -16;
		keyboardGameplayContainer.add(bitmaptext_7);

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(185, 175, "nokia", "I");
		bitmaptext_8.text = "I";
		bitmaptext_8.fontSize = -8;
		keyboardGameplayContainer.add(bitmaptext_8);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(331, 217, "nokia", "Dive");
		bitmaptext_5.text = "Dive";
		bitmaptext_5.fontSize = -16;
		keyboardGameplayContainer.add(bitmaptext_5);

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(366, 210, "nokia", "I");
		bitmaptext_11.text = "I";
		bitmaptext_11.fontSize = -8;
		keyboardGameplayContainer.add(bitmaptext_11);

		// keyboardMenuConatainer
		const keyboardMenuConatainer = this.add.container(0, 0);
		keyboardMenuConatainer.visible = false;

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(349, 210, "nokia", "Navigate\nmenu");
		bitmaptext_12.text = "Navigate\nmenu";
		bitmaptext_12.fontSize = -16;
		keyboardMenuConatainer.add(bitmaptext_12);

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(215, 112, "nokia", "Select");
		bitmaptext_13.text = "Select";
		bitmaptext_13.fontSize = -16;
		keyboardMenuConatainer.add(bitmaptext_13);

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(161, 194, "nokia", "Back");
		bitmaptext_14.text = "Back";
		bitmaptext_14.fontSize = -16;
		keyboardMenuConatainer.add(bitmaptext_14);

		// bitmaptext_15
		const bitmaptext_15 = this.add.bitmapText(195, 182, "nokia", "I");
		bitmaptext_15.text = "I";
		bitmaptext_15.fontSize = -8;
		keyboardMenuConatainer.add(bitmaptext_15);

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(224, 132, "nokia", "I");
		bitmaptext_16.text = "I";
		bitmaptext_16.fontSize = -8;
		keyboardMenuConatainer.add(bitmaptext_16);

		// keyboardShortcutsContainer
		const keyboardShortcutsContainer = this.add.container(0, 0);
		keyboardShortcutsContainer.visible = false;

		// bitmaptext_20
		const bitmaptext_20 = this.add.bitmapText(156, 130, "nokia", "I");
		bitmaptext_20.text = "I";
		bitmaptext_20.fontSize = -8;
		keyboardShortcutsContainer.add(bitmaptext_20);

		// bitmaptext_21
		const bitmaptext_21 = this.add.bitmapText(298, 209, "nokia", "I");
		bitmaptext_21.text = "I";
		bitmaptext_21.fontSize = -8;
		keyboardShortcutsContainer.add(bitmaptext_21);

		// bitmaptext_22
		const bitmaptext_22 = this.add.bitmapText(216, 221, "nokia", "Toggle Tutorial");
		bitmaptext_22.text = "Toggle Tutorial";
		bitmaptext_22.fontSize = -16;
		keyboardShortcutsContainer.add(bitmaptext_22);

		// bitmaptext_23
		const bitmaptext_23 = this.add.bitmapText(147, 110, "nokia", "Restart Level");
		bitmaptext_23.text = "Restart Level";
		bitmaptext_23.fontSize = -16;
		keyboardShortcutsContainer.add(bitmaptext_23);

		// optionsContainer
		const optionsContainer = this.add.container(132, 48);

		// shortcutsOptionText
		const shortcutsOptionText = this.add.bitmapText(0, 14, "nokia", "Shortcuts");
		shortcutsOptionText.setOrigin(0.5, 0.5);
		shortcutsOptionText.tintTopLeft = 10054789;
		shortcutsOptionText.tintTopRight = 10054789;
		shortcutsOptionText.tintBottomLeft = 10054789;
		shortcutsOptionText.tintBottomRight = 10054789;
		shortcutsOptionText.text = "Shortcuts";
		shortcutsOptionText.fontSize = -8;
		shortcutsOptionText.align = 1;
		optionsContainer.add(shortcutsOptionText);

		// gameplayOptionText
		const gameplayOptionText = this.add.bitmapText(0, 0, "nokia", "Gameplay");
		gameplayOptionText.setOrigin(0.5, 0.5);
		gameplayOptionText.text = "Gameplay";
		gameplayOptionText.fontSize = -8;
		gameplayOptionText.align = 1;
		optionsContainer.add(gameplayOptionText);

		// menuOptionText
		const menuOptionText = this.add.bitmapText(0, 28, "nokia", "Menu");
		menuOptionText.setOrigin(0.5, 0.5);
		menuOptionText.tintTopLeft = 10054789;
		menuOptionText.tintTopRight = 10054789;
		menuOptionText.tintBottomLeft = 10054789;
		menuOptionText.tintBottomRight = 10054789;
		menuOptionText.text = "Menu";
		menuOptionText.fontSize = -8;
		menuOptionText.align = 1;
		optionsContainer.add(menuOptionText);

		// gamepadGameplayContainer
		const gamepadGameplayContainer = this.add.container(0, 0);
		gamepadGameplayContainer.visible = false;

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(367, 176, "nokia", "Jump");
		bitmaptext_17.text = "Jump";
		bitmaptext_17.fontSize = -16;
		gamepadGameplayContainer.add(bitmaptext_17);

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(312, 229, "nokia", "I");
		bitmaptext_18.text = "I";
		bitmaptext_18.fontSize = -8;
		gamepadGameplayContainer.add(bitmaptext_18);

		// bitmaptext_19
		const bitmaptext_19 = this.add.bitmapText(365, 186, "nokia", "I");
		bitmaptext_19.angle = 90;
		bitmaptext_19.text = "I";
		bitmaptext_19.fontSize = -8;
		gamepadGameplayContainer.add(bitmaptext_19);

		// bitmaptext_24
		const bitmaptext_24 = this.add.bitmapText(178, 202, "nokia", "I");
		bitmaptext_24.angle = 90;
		bitmaptext_24.text = "I";
		bitmaptext_24.fontSize = -8;
		gamepadGameplayContainer.add(bitmaptext_24);

		// bitmaptext_25
		const bitmaptext_25 = this.add.bitmapText(178, 171, "nokia", "I");
		bitmaptext_25.angle = 90;
		bitmaptext_25.text = "I";
		bitmaptext_25.fontSize = -8;
		gamepadGameplayContainer.add(bitmaptext_25);

		// bitmaptext_26
		const bitmaptext_26 = this.add.bitmapText(80, 161, "nokia", "Uppercut");
		bitmaptext_26.text = "Uppercut";
		bitmaptext_26.fontSize = -16;
		gamepadGameplayContainer.add(bitmaptext_26);

		// bitmaptext_28
		const bitmaptext_28 = this.add.bitmapText(126, 193, "nokia", "Dive");
		bitmaptext_28.text = "Dive";
		bitmaptext_28.fontSize = -16;
		gamepadGameplayContainer.add(bitmaptext_28);

		// bitmaptext_30
		const bitmaptext_30 = this.add.bitmapText(294, 235, "nokia", "Punch");
		bitmaptext_30.text = "Punch";
		bitmaptext_30.fontSize = -16;
		gamepadGameplayContainer.add(bitmaptext_30);

		// gamepadShortcutsContainer
		const gamepadShortcutsContainer = this.add.container(0, 0);
		gamepadShortcutsContainer.visible = false;

		// bitmaptext_27
		const bitmaptext_27 = this.add.bitmapText(285, 120, "nokia", "Toggle Tutorial");
		bitmaptext_27.text = "Toggle Tutorial";
		bitmaptext_27.fontSize = -16;
		gamepadShortcutsContainer.add(bitmaptext_27);

		// bitmaptext_35
		const bitmaptext_35 = this.add.bitmapText(313, 141, "nokia", "I");
		bitmaptext_35.text = "I";
		bitmaptext_35.fontSize = -8;
		gamepadShortcutsContainer.add(bitmaptext_35);

		// bitmaptext_37
		const bitmaptext_37 = this.add.bitmapText(204, 235, "nokia", "Restart Level");
		bitmaptext_37.text = "Restart Level";
		bitmaptext_37.fontSize = -16;
		gamepadShortcutsContainer.add(bitmaptext_37);

		// bitmaptext_29
		const bitmaptext_29 = this.add.bitmapText(251, 218, "nokia", "I");
		bitmaptext_29.text = "I";
		bitmaptext_29.fontSize = -8;
		gamepadShortcutsContainer.add(bitmaptext_29);

		// bitmaptext_31
		const bitmaptext_31 = this.add.bitmapText(251, 225, "nokia", "I");
		bitmaptext_31.text = "I";
		bitmaptext_31.fontSize = -8;
		gamepadShortcutsContainer.add(bitmaptext_31);

		// gamepadMenuContainer
		const gamepadMenuContainer = this.add.container(0, 0);
		gamepadMenuContainer.visible = false;

		// bitmaptext_34
		const bitmaptext_34 = this.add.bitmapText(84, 169, "nokia", "Navigate\nmenu");
		bitmaptext_34.text = "Navigate\nmenu";
		bitmaptext_34.fontSize = -16;
		bitmaptext_34.align = 2;
		gamepadMenuContainer.add(bitmaptext_34);

		// bitmaptext_40
		const bitmaptext_40 = this.add.bitmapText(367, 176, "nokia", "Select");
		bitmaptext_40.text = "Select";
		bitmaptext_40.fontSize = -16;
		gamepadMenuContainer.add(bitmaptext_40);

		// bitmaptext_41
		const bitmaptext_41 = this.add.bitmapText(294, 235, "nokia", "Back");
		bitmaptext_41.text = "Back";
		bitmaptext_41.fontSize = -16;
		gamepadMenuContainer.add(bitmaptext_41);

		// bitmaptext_46
		const bitmaptext_46 = this.add.bitmapText(365, 186, "nokia", "I");
		bitmaptext_46.angle = 90;
		bitmaptext_46.text = "I";
		bitmaptext_46.fontSize = -8;
		gamepadMenuContainer.add(bitmaptext_46);

		// bitmaptext_47
		const bitmaptext_47 = this.add.bitmapText(312, 229, "nokia", "I");
		bitmaptext_47.text = "I";
		bitmaptext_47.fontSize = -8;
		gamepadMenuContainer.add(bitmaptext_47);

		// touchscreenGameplayContainer
		const touchscreenGameplayContainer = this.add.container(0, 0);
		touchscreenGameplayContainer.visible = false;

		// bitmaptext_32
		const bitmaptext_32 = this.add.bitmapText(233, 235, "nokia", "Dive");
		bitmaptext_32.text = "Dive";
		bitmaptext_32.fontSize = -16;
		touchscreenGameplayContainer.add(bitmaptext_32);

		// bitmaptext_36
		const bitmaptext_36 = this.add.bitmapText(112, 163, "nokia", "Jump");
		bitmaptext_36.text = "Jump";
		bitmaptext_36.fontSize = -16;
		touchscreenGameplayContainer.add(bitmaptext_36);

		// bitmaptext_38
		const bitmaptext_38 = this.add.bitmapText(175, 173, "nokia", "I");
		bitmaptext_38.angle = 90;
		bitmaptext_38.text = "I";
		bitmaptext_38.fontSize = -8;
		touchscreenGameplayContainer.add(bitmaptext_38);

		// bitmaptext_42
		const bitmaptext_42 = this.add.bitmapText(365, 172, "nokia", "I");
		bitmaptext_42.angle = 90;
		bitmaptext_42.text = "I";
		bitmaptext_42.fontSize = -8;
		touchscreenGameplayContainer.add(bitmaptext_42);

		// bitmaptext_43
		const bitmaptext_43 = this.add.bitmapText(245, 224, "nokia", "I");
		bitmaptext_43.text = "I";
		bitmaptext_43.fontSize = -8;
		touchscreenGameplayContainer.add(bitmaptext_43);

		// bitmaptext_44
		const bitmaptext_44 = this.add.bitmapText(368, 163, "nokia", "Punch");
		bitmaptext_44.text = "Punch";
		bitmaptext_44.fontSize = -16;
		touchscreenGameplayContainer.add(bitmaptext_44);

		// bitmaptext_33
		const bitmaptext_33 = this.add.bitmapText(308, 228, "nokia", "Punch + Jump = Uppercut");
		bitmaptext_33.text = "Punch + Jump = Uppercut";
		bitmaptext_33.fontSize = -10;
		touchscreenGameplayContainer.add(bitmaptext_33);

		// bitmaptext_39
		const bitmaptext_39 = this.add.bitmapText(202, 100, "nokia", "Restart Level");
		bitmaptext_39.text = "Restart Level";
		bitmaptext_39.fontSize = -16;
		touchscreenGameplayContainer.add(bitmaptext_39);

		// bitmaptext_45
		const bitmaptext_45 = this.add.bitmapText(267, 121, "nokia", "I");
		bitmaptext_45.text = "I";
		bitmaptext_45.fontSize = -8;
		touchscreenGameplayContainer.add(bitmaptext_45);

		// touchScreenRestart
		const touchScreenRestart = this.add.image(268, 142, "combo-particle");
		touchScreenRestart.scaleX = 2;
		touchScreenRestart.scaleY = 2;
		touchScreenRestart.tintFill = true;
		touchScreenRestart.tintTopLeft = 12045740;
		touchScreenRestart.tintTopRight = 12045740;
		touchScreenRestart.tintBottomLeft = 12045740;
		touchScreenRestart.tintBottomRight = 12045740;
		touchscreenGameplayContainer.add(touchScreenRestart);

		// backButtonRect
		const backButtonRect = this.add.rectangle(43, 26, 40, 20);
		backButtonRect.isFilled = true;
		backButtonRect.fillColor = 8542833;
		backButtonRect.isStroked = true;
		backButtonRect.strokeColor = 10054789;
		backButtonRect.lineWidth = 2;

		// bitmaptext_48
		const bitmaptext_48 = this.add.bitmapText(43, 26, "nokia", "Back");
		bitmaptext_48.setOrigin(0.5, 0.5);
		bitmaptext_48.text = "Back";
		bitmaptext_48.fontSize = -10;
		bitmaptext_48.align = 1;

		this.controllerImage = controllerImage;
		this.keyboardButtonRect = keyboardButtonRect;
		this.gamepadButtonRect = gamepadButtonRect;
		this.touchscreenButtonRect = touchscreenButtonRect;
		this.keyboardGameplayContainer = keyboardGameplayContainer;
		this.keyboardMenuConatainer = keyboardMenuConatainer;
		this.keyboardShortcutsContainer = keyboardShortcutsContainer;
		this.optionsContainer = optionsContainer;
		this.shortcutsOptionText = shortcutsOptionText;
		this.gameplayOptionText = gameplayOptionText;
		this.menuOptionText = menuOptionText;
		this.gamepadGameplayContainer = gamepadGameplayContainer;
		this.gamepadShortcutsContainer = gamepadShortcutsContainer;
		this.gamepadMenuContainer = gamepadMenuContainer;
		this.touchscreenGameplayContainer = touchscreenGameplayContainer;
		this.touchScreenRestart = touchScreenRestart;
		this.backButtonRect = backButtonRect;

		this.events.emit("scene-awake");
	}

	private controllerImage!: Phaser.GameObjects.Image;
	private keyboardButtonRect!: Phaser.GameObjects.Rectangle;
	private gamepadButtonRect!: Phaser.GameObjects.Rectangle;
	private touchscreenButtonRect!: Phaser.GameObjects.Rectangle;
	private keyboardGameplayContainer!: Phaser.GameObjects.Container;
	private keyboardMenuConatainer!: Phaser.GameObjects.Container;
	private keyboardShortcutsContainer!: Phaser.GameObjects.Container;
	private optionsContainer!: Phaser.GameObjects.Container;
	private shortcutsOptionText!: Phaser.GameObjects.BitmapText;
	private gameplayOptionText!: Phaser.GameObjects.BitmapText;
	private menuOptionText!: Phaser.GameObjects.BitmapText;
	private gamepadGameplayContainer!: Phaser.GameObjects.Container;
	private gamepadShortcutsContainer!: Phaser.GameObjects.Container;
	private gamepadMenuContainer!: Phaser.GameObjects.Container;
	private touchscreenGameplayContainer!: Phaser.GameObjects.Container;
	private touchScreenRestart!: Phaser.GameObjects.Image;
	private backButtonRect!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	private selectedOption: 'gameplay' | 'shortcuts' | 'menu' = 'gameplay';
	private selectedControls: 'keyboard' | 'gamepad' | 'touchscreen' | 'back' = 'keyboard';

	private containerTween: Phaser.Tweens.Tween;

	create() {

		this.editorCreate();

		CameraUtil.configureMainCamera(this);
		this.cameras.main.setOrigin(0, 0);

		// default
		if (this.registry.get('mobile'))
		{
			this.setControls(true);
			this.setControls(true);
		}
		else if (InputManager.activeInputMode === 'gamepad')
		{
			this.setControls(true);
		}
		else
		{
			this.setControls(true);
			this.setControls(false);	
		}

		// up input
		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-up', 'keyboard')}`, () =>
		{
			if (this.selectedControls !== 'touchscreen')
			{
				this.sound.play('menu-tick');

				this.setOption(true);
			}

		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-up', 'gamepad'))
			{
				if (this.selectedControls !== 'touchscreen')
				{
					this.sound.play('menu-tick');

					this.setOption(true);
				}
			}
		});

		// down input
		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-down', 'keyboard')}`, () =>
		{
			if (this.selectedControls !== 'touchscreen')
			{
				this.sound.play('menu-tick');

				this.setOption(false);
			}
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-down', 'gamepad'))
			{
				if (this.selectedControls !== 'touchscreen')
				{
					this.sound.play('menu-tick');

					this.setOption(false);
				}
			}
		});

		// right input
		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-right', 'keyboard')}`, () =>
		{
			this.sound.play('menu-tick');

			this.setControls(true);
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-right', 'gamepad'))
			{
				this.sound.play('menu-tick');

				this.setControls(true);
			}
		});

		// left input
		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-left', 'keyboard')}`, () =>
		{
			this.sound.play('menu-tick');

			this.setControls(false);
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-left', 'gamepad'))
			{
				this.sound.play('menu-tick');

				this.setControls(false);
			}
		});

		// back input
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

		// confirm input
		this.input.keyboard.on
		(`keydown-${InputManager.getInput('menu-confirm', 'keyboard')}`, () =>
		{
			if (this.selectedControls === 'back')
			{
				this.sound.play('menu-back');
	
				this.scene.stop();
				this.scene.resume('menu-scene');
			}
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				if (this.selectedControls === 'back')
				{
					this.sound.play('menu-back');

					this.scene.stop();
					this.scene.resume('menu-scene');
				}
			}
		});

		// pointer input
		this.backButtonRect.setInteractive();
		this.backButtonRect.on('pointerup', ()=>
		{
			if (this.selectedControls === 'back')
			{
				this.sound.play('menu-back');

				this.scene.stop();
				this.scene.resume('menu-scene');
			}
			else
			{
				this.sound.play('menu-tick');

				this.setControls(true, 'back');
			}
		});

		this.keyboardButtonRect.setInteractive();
		this.keyboardButtonRect.on('pointerup', ()=>
		{
			if (this.selectedControls === 'keyboard')
			{
				this.sound.play('menu-tick');

				this.setOption(false);
			}
			else
			{
				this.sound.play('menu-tick');

				this.setControls(true, 'keyboard');
			}
		});
		this.gamepadButtonRect.setInteractive();
		this.gamepadButtonRect.on('pointerup', ()=>
		{
			if (this.selectedControls === 'gamepad')
			{
				this.sound.play('menu-tick');

				this.setOption(false);
			}
			else
			{
				this.sound.play('menu-tick');

				this.setControls(true, 'gamepad');
			}
		});
		this.touchscreenButtonRect.setInteractive();
		this.touchscreenButtonRect.on('pointerup', ()=>
		{
			if (this.selectedControls === 'touchscreen')
			{

			}
			else
			{
				this.sound.play('menu-tick');

				this.setControls(true, 'touchscreen');
			}
		});
	}

	setOption(increase: boolean)
	{
		switch (this.selectedOption)
		{
			case 'gameplay':
				this.selectedOption = (increase ? 'menu' : 'shortcuts');
				break;
			case 'shortcuts':
				this.selectedOption = (increase ? 'gameplay' : 'menu');
				break;
			case 'menu':
				this.selectedOption = (increase ? 'shortcuts' : 'gameplay');
				break;
				
		}

		// option text visual
		this.gameplayOptionText.setTint(this.selectedOption === 'gameplay' ? 0xffffff : 0x996C85 );
		this.shortcutsOptionText.setTint(this.selectedOption === 'shortcuts' ? 0xffffff : 0x996C85 );
		this.menuOptionText.setTint(this.selectedOption === 'menu' ? 0xffffff : 0x996C85 );

		this.setGuideVisibility();
	}

	setControls(increase: boolean, controls?: 'keyboard' | 'gamepad' | 'touchscreen' | 'back')
	{
		if (controls == undefined)
		{
			switch (this.selectedControls)
			{
				case 'keyboard':
					this.selectedControls = (increase ? 'gamepad' : 'back');
					break;
				case 'gamepad':
					this.selectedControls = (increase ? 'touchscreen' : 'keyboard');
					break;
				case 'touchscreen':
					this.selectedControls = (increase ? 'back' : 'gamepad');
					break;
				case 'back':
					this.selectedControls = (increase ? 'keyboard' : 'touchscreen');
					break;
			}
		}
		else
		{
			this.selectedControls = controls;
		}

		// control button visual
		this.keyboardButtonRect.strokeColor = (this.selectedControls === 'keyboard' ? 0xffffff : 0x996C85);
		this.gamepadButtonRect.strokeColor = (this.selectedControls === 'gamepad' ? 0xffffff : 0x996C85);
		this.touchscreenButtonRect.strokeColor = (this.selectedControls === 'touchscreen' ? 0xffffff : 0x996C85);
		this.backButtonRect.strokeColor = (this.selectedControls === 'back' ? 0xffffff : 0x996C85);

		// options
		switch (this.selectedControls)
		{
			case 'keyboard':
				this.optionsContainer.setX(132);
				this.optionsContainer.setVisible(true);
				break;
			case 'gamepad':
				this.optionsContainer.setX(250);
				this.optionsContainer.setVisible(true);
				break;
			case 'touchscreen':
				// this.optionsContainer.setX(366);
				this.optionsContainer.setVisible(false);
				break;
			case 'back':
				// this.optionsContainer.setX(366);
				this.optionsContainer.setVisible(false);
				break;
		}

		// option text
		this.selectedOption = 'gameplay';
		this.gameplayOptionText.setTint(0xffffff);
		this.shortcutsOptionText.setTint(0x996C85);
		this.menuOptionText.setTint(0x996C85);

		this.setGuideVisibility()
	}

	setGuideVisibility()
	{
		// controller image
		switch (this.selectedControls)
		{
			case 'keyboard':
				this.controllerImage.setTexture('keyboard');
				this.controllerImage.setScale(1, 1);
				break;
			case 'gamepad':
				this.controllerImage.setTexture('gamepad');
				this.controllerImage.setScale(.5, .5);
				break;
			case 'touchscreen':
				this.controllerImage.setTexture('mobile-gameplay');
				this.controllerImage.setScale(2, 2);
				break;
		}

		// guide containers
		this.keyboardGameplayContainer.setVisible(this.selectedControls === 'keyboard' && this.selectedOption === 'gameplay');
		this.keyboardShortcutsContainer.setVisible(this.selectedControls === 'keyboard' && this.selectedOption === 'shortcuts');
		this.keyboardMenuConatainer.setVisible(this.selectedControls === 'keyboard' && this.selectedOption === 'menu');

		this.gamepadGameplayContainer.setVisible(this.selectedControls === 'gamepad' && this.selectedOption === 'gameplay');
		this.gamepadShortcutsContainer.setVisible(this.selectedControls === 'gamepad' && this.selectedOption === 'shortcuts');
		this.gamepadMenuContainer.setVisible(this.selectedControls === 'gamepad' && this.selectedOption === 'menu');

		this.touchscreenGameplayContainer.setVisible(this.selectedControls === 'touchscreen');

		// tween
		this.gamepadMenuContainer.setAlpha(0); 
		this.gamepadGameplayContainer.setAlpha(0); 
		this.gamepadShortcutsContainer.setAlpha(0); 
		this.keyboardGameplayContainer.setAlpha(0); 
		this.keyboardShortcutsContainer.setAlpha(0); 
		this.keyboardMenuConatainer.setAlpha(0); 
		this.touchscreenGameplayContainer.setAlpha(0);

		if (this.containerTween)
		{
			this.containerTween.stop();
		}
		this.containerTween = this.tweens.add
		({
			targets: [this.gamepadMenuContainer, this.gamepadGameplayContainer, this.gamepadShortcutsContainer, this.keyboardGameplayContainer, this.keyboardShortcutsContainer, this.keyboardMenuConatainer, this.touchscreenGameplayContainer],
			delay: 100,
			duration: 200,
			alpha: 1,
			ease: Phaser.Math.Easing.Quadratic.Out,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here