
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
import MobileDependent from "../components/MobileDependent";
import MobileButton from "../components/MobileButton";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import tutorialManager from "~/components/tutorialManager";
import Level from "./Level";

/* END-USER-IMPORTS */

export default class LevelUI extends Phaser.Scene {

	constructor() {
		super("LevelUI");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// tutorialContainer
		const tutorialContainer = this.add.container(0, 0);
		tutorialContainer.visible = false;

		// tutorialOffsetContainer
		const tutorialOffsetContainer = this.add.container(0, 0);
		tutorialContainer.add(tutorialOffsetContainer);

		// tutorialBox
		const tutorialBox = this.add.rectangle(0, 2, 150, 230);
		tutorialBox.scaleX = 1.2139552314624713;
		tutorialBox.scaleY = 0.9107966439058469;
		tutorialBox.isFilled = true;
		tutorialBox.fillColor = 14383236;
		tutorialOffsetContainer.add(tutorialBox);

		// tutorialText
		const tutorialText = this.add.bitmapText(0, -24, "nokia", "");
		tutorialText.setOrigin(0.5, 0.5);
		tutorialText.fontSize = -8;
		tutorialText.maxWidth = 150;
		tutorialText.dropShadowAlpha = 0;
		tutorialOffsetContainer.add(tutorialText);

		// tutorialCloseText
		const tutorialCloseText = this.add.bitmapText(0, 93, "nokia", "- TAP TO CONTINUE -");
		tutorialCloseText.setOrigin(0.5, 0.5);
		tutorialCloseText.text = "- TAP TO CONTINUE -";
		tutorialCloseText.fontSize = -8;
		tutorialCloseText.maxWidth = 150;
		tutorialCloseText.dropShadowAlpha = 0;
		tutorialOffsetContainer.add(tutorialCloseText);

		// tutorial_ipad
		const tutorial_ipad = this.add.image(0, 0, "tutorial-ipad");
		tutorialOffsetContainer.add(tutorial_ipad);

		// inputHint
		const inputHint = this.add.image(0, 59, "soldierpogosquash");
		inputHint.visible = false;
		tutorialOffsetContainer.add(inputHint);

		// TimerBox
		const timerBox = this.add.rectangle(348, 961, 80, 23);
		timerBox.setOrigin(0.5, 0);
		timerBox.isFilled = true;

		// timerText
		const timerText = this.add.bitmapText(323.3856506347656, 857.4503784179688, "nokia", "12:04");
		timerText.text = "12:04";
		timerText.fontSize = -16;
		timerText.dropShadowY = 100;
		timerText.dropShadowAlpha = 1;
		timerText.dropShadowColor = 2236962;

		// comboLabelText
		const comboLabelText = this.add.bitmapText(1163.6669311523438, 736.8461456298828, "nokia", "COMBO!");
		comboLabelText.angle = -10;
		comboLabelText.setOrigin(0, 0.5);
		comboLabelText.visible = false;
		comboLabelText.text = "COMBO!";
		comboLabelText.fontSize = -16;
		comboLabelText.dropShadowX = 100;
		comboLabelText.dropShadowAlpha = 1;
		comboLabelText.dropShadowColor = 714549;

		// comboText
		const comboText = this.add.bitmapText(1184.6669311523438, 755.8461494445801, "nokia", "3");
		comboText.angle = -10;
		comboText.setOrigin(0, 0.5);
		comboText.visible = false;
		comboText.text = "3";
		comboText.fontSize = -36;
		comboText.dropShadowX = 100;
		comboText.dropShadowAlpha = 1;
		comboText.dropShadowColor = 714549;

		// scoreText
		const scoreText = this.add.bitmapText(442.6918182373047, 870.46142578125, "nokia", "12359135");
		scoreText.setOrigin(0.5, 0);
		scoreText.visible = false;
		scoreText.text = "12359135";
		scoreText.fontSize = -16;
		scoreText.align = 1;
		scoreText.dropShadowY = 100;
		scoreText.dropShadowAlpha = 1;
		scoreText.dropShadowColor = 2236962;

		// enemiesText
		const enemiesText = this.add.bitmapText(957, 756.12646484375, "nokia", "5/6");
		enemiesText.setOrigin(1, 0.5);
		enemiesText.visible = false;
		enemiesText.text = "5/6";
		enemiesText.fontSize = -16;
		enemiesText.align = 2;
		enemiesText.dropShadowY = 100;
		enemiesText.dropShadowAlpha = 1;
		enemiesText.dropShadowColor = 2236962;

		// enemiesLabelText
		const enemiesLabelText = this.add.bitmapText(961, 732.12646484375, "nokia", "Enemies \ndefeated:");
		enemiesLabelText.setOrigin(1, 0);
		enemiesLabelText.visible = false;
		enemiesLabelText.text = "Enemies \ndefeated:";
		enemiesLabelText.fontSize = -8;
		enemiesLabelText.align = 2;
		enemiesLabelText.dropShadowY = 100;
		enemiesLabelText.dropShadowAlpha = 1;
		enemiesLabelText.dropShadowColor = 2236962;

		// winText
		const winText = this.add.bitmapText(917, 904.12646484375, "nokia", "Level Complete!!!");
		winText.scaleX = 1.3;
		winText.angle = -30;
		winText.setOrigin(0.5, 0.5);
		winText.visible = false;
		winText.text = "Level Complete!!!";
		winText.fontSize = -16;
		winText.align = 1;
		winText.dropShadowX = 1;
		winText.dropShadowY = 1;

		// debugText3
		const debugText3 = this.add.bitmapText(473, 856.12646484375, "nokia", "");
		debugText3.setOrigin(0, 1);
		debugText3.fontSize = -8;
		debugText3.dropShadowY = -100;

		// debugText2
		const debugText2 = this.add.bitmapText(472, 842.12646484375, "nokia", "");
		debugText2.setOrigin(0, 1);
		debugText2.fontSize = -8;
		debugText2.dropShadowY = -100;

		// debugText
		const debugText = this.add.bitmapText(473, 870.12646484375, "nokia", "");
		debugText.setOrigin(0, 1);
		debugText.fontSize = -8;
		debugText.dropShadowY = -100;

		// buildText
		const buildText = this.add.bitmapText(485, 820.12646484375, "nokia", "Tappy Tappy Boneyard v2");
		buildText.setOrigin(0, 1);
		buildText.text = "Tappy Tappy Boneyard v2";
		buildText.fontSize = -8;
		buildText.dropShadowY = -100;

		// mobileButtonDive
		const mobileButtonDive = this.add.rectangle(713.4493914309744, 1060.0118990523656, 150, 120);
		mobileButtonDive.setOrigin(1, 1);
		mobileButtonDive.alpha = 0.5;
		mobileButtonDive.isFilled = true;
		mobileButtonDive.fillColor = 8168429;

		// mobileButtonLevelSelect
		const mobileButtonLevelSelect = this.add.rectangle(745.9039965335135, 635.8854342086155, 75, 75);
		mobileButtonLevelSelect.setOrigin(1, 0);
		mobileButtonLevelSelect.alpha = 0.5;
		mobileButtonLevelSelect.isFilled = true;
		mobileButtonLevelSelect.fillColor = 13532397;

		// mobileButtonPunch
		const mobileButtonPunch = this.add.rectangle(337.44939143097434, 1081.0118990523656, 150, 120);
		mobileButtonPunch.setOrigin(0, 1);
		mobileButtonPunch.alpha = 0.5;
		mobileButtonPunch.isFilled = true;
		mobileButtonPunch.fillColor = 15563900;

		// mobileButtonUppercut
		const mobileButtonUppercut = this.add.rectangle(359, 967, 150, 120);
		mobileButtonUppercut.setOrigin(0, 1);
		mobileButtonUppercut.alpha = 0.5;
		mobileButtonUppercut.isFilled = true;
		mobileButtonUppercut.fillColor = 16051043;

		// mobileButtonJump
		const mobileButtonJump = this.add.rectangle(743.4493914309744, 950.0118990523655, 150, 120);
		mobileButtonJump.setOrigin(1, 1);
		mobileButtonJump.alpha = 0.5;
		mobileButtonJump.isFilled = true;
		mobileButtonJump.fillColor = 8845444;

		// punchChargeEmpty
		const punchChargeEmpty = this.add.image(322, 694, "bird0fist");
		punchChargeEmpty.scaleX = 2;
		punchChargeEmpty.scaleY = 2;
		punchChargeEmpty.angle = 90;
		punchChargeEmpty.setOrigin(0, 1);

		// punchChargeFull
		const punchChargeFull = this.add.image(335, 682, "bird2fist");
		punchChargeFull.scaleX = 2;
		punchChargeFull.scaleY = 2;
		punchChargeFull.angle = 90;
		punchChargeFull.setOrigin(0, 1);

		// fullscreenTestButton
		const fullscreenTestButton = this.add.image(518, 631, "20-test");

		// tutorialContainer (components)
		const tutorialContainerAlign = new Align(tutorialContainer);
		tutorialContainerAlign.middle = true;
		tutorialContainerAlign.center = true;

		// timerBox (components)
		const timerBoxAlign = new Align(timerBox);
		timerBoxAlign.up = true;
		timerBoxAlign.center = true;
		timerBoxAlign.verticalOffset = 7;

		// timerText (components)
		const timerTextAlign = new Align(timerText);
		timerTextAlign.up = true;
		timerTextAlign.center = true;
		timerTextAlign.horizontalOffset = -25;
		timerTextAlign.verticalOffset = -90;

		// comboLabelText (components)
		const comboLabelTextAlign = new Align(comboLabelText);
		comboLabelTextAlign.middle = true;
		comboLabelTextAlign.left = true;
		comboLabelTextAlign.horizontalOffset = -90;

		// comboText (components)
		const comboTextAlign = new Align(comboText);
		comboTextAlign.middle = true;
		comboTextAlign.left = true;
		comboTextAlign.horizontalOffset = -85;
		comboTextAlign.verticalOffset = -30;

		// scoreText (components)
		const scoreTextAlign = new Align(scoreText);
		scoreTextAlign.up = true;
		scoreTextAlign.center = true;
		scoreTextAlign.verticalOffset = -95;

		// enemiesText (components)
		const enemiesTextAlign = new Align(enemiesText);
		enemiesTextAlign.up = true;
		enemiesTextAlign.right = true;
		enemiesTextAlign.horizontalOffset = -5;
		enemiesTextAlign.verticalOffset = -65;

		// enemiesLabelText (components)
		const enemiesLabelTextAlign = new Align(enemiesLabelText);
		enemiesLabelTextAlign.up = true;
		enemiesLabelTextAlign.right = true;
		enemiesLabelTextAlign.horizontalOffset = -5;
		enemiesLabelTextAlign.verticalOffset = -95;

		// winText (components)
		const winTextAlign = new Align(winText);
		winTextAlign.middle = true;
		winTextAlign.center = true;
		winTextAlign.verticalOffset = -50;

		// debugText3 (components)
		const debugText3Align = new Align(debugText3);
		debugText3Align.down = true;
		debugText3Align.left = true;
		debugText3Align.horizontalOffset = 5;
		debugText3Align.verticalOffset = 55;

		// debugText2 (components)
		const debugText2Align = new Align(debugText2);
		debugText2Align.down = true;
		debugText2Align.left = true;
		debugText2Align.horizontalOffset = 5;
		debugText2Align.verticalOffset = 65;

		// debugText (components)
		const debugTextAlign = new Align(debugText);
		debugTextAlign.down = true;
		debugTextAlign.left = true;
		debugTextAlign.horizontalOffset = 5;
		debugTextAlign.verticalOffset = 75;

		// buildText (components)
		const buildTextAlign = new Align(buildText);
		buildTextAlign.down = true;
		buildTextAlign.left = true;
		buildTextAlign.horizontalOffset = 5;
		buildTextAlign.verticalOffset = 95;

		// mobileButtonDive (components)
		const mobileButtonDiveAlign = new Align(mobileButtonDive);
		mobileButtonDiveAlign.down = true;
		mobileButtonDiveAlign.right = true;
		new MobileDependent(mobileButtonDive);
		const mobileButtonDiveMobileButton = new MobileButton(mobileButtonDive);
		mobileButtonDiveMobileButton.input = "jump";

		// mobileButtonLevelSelect (components)
		const mobileButtonLevelSelectAlign = new Align(mobileButtonLevelSelect);
		mobileButtonLevelSelectAlign.up = true;
		mobileButtonLevelSelectAlign.right = true;
		new MobileDependent(mobileButtonLevelSelect);
		new MobileButton(mobileButtonLevelSelect);

		// mobileButtonPunch (components)
		const mobileButtonPunchAlign = new Align(mobileButtonPunch);
		mobileButtonPunchAlign.down = true;
		mobileButtonPunchAlign.left = true;
		new MobileDependent(mobileButtonPunch);
		new MobileButton(mobileButtonPunch);

		// mobileButtonUppercut (components)
		const mobileButtonUppercutAlign = new Align(mobileButtonUppercut);
		mobileButtonUppercutAlign.down = true;
		mobileButtonUppercutAlign.left = true;
		mobileButtonUppercutAlign.verticalOffset = -140;
		new MobileDependent(mobileButtonUppercut);
		new MobileButton(mobileButtonUppercut);

		// mobileButtonJump (components)
		const mobileButtonJumpAlign = new Align(mobileButtonJump);
		mobileButtonJumpAlign.down = true;
		mobileButtonJumpAlign.right = true;
		mobileButtonJumpAlign.verticalOffset = -140;
		new MobileDependent(mobileButtonJump);
		new MobileButton(mobileButtonJump);

		// punchChargeEmpty (components)
		const punchChargeEmptyAlign = new Align(punchChargeEmpty);
		punchChargeEmptyAlign.up = true;
		punchChargeEmptyAlign.left = true;
		punchChargeEmptyAlign.horizontalOffset = 10;
		punchChargeEmptyAlign.verticalOffset = 10;

		// punchChargeFull (components)
		const punchChargeFullAlign = new Align(punchChargeFull);
		punchChargeFullAlign.up = true;
		punchChargeFullAlign.left = true;
		punchChargeFullAlign.horizontalOffset = 10;
		punchChargeFullAlign.verticalOffset = 10;

		// fullscreenTestButton (components)
		const fullscreenTestButtonAlign = new Align(fullscreenTestButton);
		fullscreenTestButtonAlign.middle = true;
		fullscreenTestButtonAlign.left = true;
		fullscreenTestButtonAlign.horizontalOffset = -10;

		this.tutorialContainer = tutorialContainer;
		this.tutorialOffsetContainer = tutorialOffsetContainer;
		this.tutorialBox = tutorialBox;
		this.tutorialText = tutorialText;
		this.tutorialCloseText = tutorialCloseText;
		this.inputHint = inputHint;
		this.timerText = timerText;
		this.comboLabelText = comboLabelText;
		this.comboText = comboText;
		this.scoreText = scoreText;
		this.enemiesText = enemiesText;
		this.enemiesLabelText = enemiesLabelText;
		this.winText = winText;
		this.debugText3 = debugText3;
		this.debugText2 = debugText2;
		this.debugText = debugText;
		this.buildText = buildText;
		this.mobileButtonDive = mobileButtonDive;
		this.mobileButtonLevelSelect = mobileButtonLevelSelect;
		this.mobileButtonPunch = mobileButtonPunch;
		this.mobileButtonUppercut = mobileButtonUppercut;
		this.mobileButtonJump = mobileButtonJump;
		this.punchChargeFull = punchChargeFull;
		this.fullscreenTestButton = fullscreenTestButton;

		this.events.emit("scene-awake");
	}

	public tutorialContainer!: Phaser.GameObjects.Container;
	private tutorialOffsetContainer!: Phaser.GameObjects.Container;
	public tutorialBox!: Phaser.GameObjects.Rectangle;
	public tutorialText!: Phaser.GameObjects.BitmapText;
	public tutorialCloseText!: Phaser.GameObjects.BitmapText;
	private inputHint!: Phaser.GameObjects.Image;
	public timerText!: Phaser.GameObjects.BitmapText;
	public comboLabelText!: Phaser.GameObjects.BitmapText;
	public comboText!: Phaser.GameObjects.BitmapText;
	public scoreText!: Phaser.GameObjects.BitmapText;
	public enemiesText!: Phaser.GameObjects.BitmapText;
	public enemiesLabelText!: Phaser.GameObjects.BitmapText;
	public winText!: Phaser.GameObjects.BitmapText;
	public debugText3!: Phaser.GameObjects.BitmapText;
	public debugText2!: Phaser.GameObjects.BitmapText;
	public debugText!: Phaser.GameObjects.BitmapText;
	public buildText!: Phaser.GameObjects.BitmapText;
	public mobileButtonDive!: Phaser.GameObjects.Rectangle;
	public mobileButtonLevelSelect!: Phaser.GameObjects.Rectangle;
	public mobileButtonPunch!: Phaser.GameObjects.Rectangle;
	public mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	public mobileButtonJump!: Phaser.GameObjects.Rectangle;
	private punchChargeFull!: Phaser.GameObjects.Image;
	private fullscreenTestButton!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	private comboTextTween: Phaser.Tweens.Tween;
	private enemiesTextTween: Phaser.Tweens.Tween;
	private punchChargeTween: Phaser.Tweens.Tween;

	public tutorialVisible = false;
	public tutorialOffsetTween: Phaser.Tweens.Tween;

	private levelScene: Level;

	protected create() {

		this.editorCreate();

		this.setupCamera();

		this.levelScene = this.scene.get('Level') as Level;

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);

		this.tutorialOffsetContainer.setY((this.cameras.main.worldView.height / 2) + 106);
		this.tutorialVisible = false;

		this.game.events.on('uppercut', () => 
		{
			console.log('uppercut');
			this.setPunchCharge(false);
		});
		this.game.events.on('punch', () => 
		{
			this.setPunchCharge(false);
		});

	// fullscreen test

		this.fullscreenTestButton.setInteractive();
		this.fullscreenTestButton.on('pointerdown', () =>
		{
			if (!this.scale.isFullscreen)
			{
				this.scale.startFullscreen()
			}
			else
			{
				this.scale.stopFullscreen();
			}
			// TODO: figure out how to force resize
		});
	}

	public showComboUI(combo: number)
	{
		this.comboText.setVisible(true);
		this.comboLabelText.setVisible(true);
		this.comboText.setText(combo + '');

		if (this.comboTextTween)
		{
			this.comboTextTween.stop()
		}
		this.comboText.setScale(1.5);
		this.comboTextTween = this.tweens.add
		({
			targets: this.comboText,
			duration: 500,
			ease: Phaser.Math.Easing.Circular.Out,
			scale: 1,
		});
	}

	public hideComboUI()
	{
		this.comboText.setVisible(false);
		this.comboLabelText.setVisible(false);

		/* 	Resolve the UI to indicate that the combo has finished while giving the player the 
			chance to read it.
		*/
	}

	public showLevelCompleteText()
	{
		this.winText.setVisible(true);
		this.tweens.add
		({
			targets: this.winText,
			duration: 1000,
			yoyo: true,
			// hold: 1000,
			// repeatDelay: 1000,
			repeat: -1,
			ease: Phaser.Math.Easing.Sine.In,
			scaleY: 1.3,
			scaleX: 1,
			angle: 30
		});
		this.time.addEvent({
			delay: 5000, callback: () => 
			{
				this.winText.setVisible(false);
			}
		});
	}

	public setDebugText(slot: 0 | 1 | 2, text: string)
	{
		switch (slot)
		{
			case 0:
				this.debugText.setText(text);
				break;

			case 1:
				this.debugText2.setText(text);
				break;

			case 2:
				this.debugText3.setText(text);
				break;
		}
	}

	public setEnemiesText(defeated: number, total: number): void
	{
		let BRK;

		this.enemiesText.setText(`${defeated} / ${total}`);

		if (defeated === total)
		{
			this.enemiesText.dropShadowColor = 714549;
		}
	}

	public setPunchCharge(value: boolean)
	{
		this.punchChargeTween = this.tweens.add
		({
			duration: 500,
			ease: Phaser.Math.Easing.Quintic.Out,
			targets: this.punchChargeFull,
			alpha: (value? 1 : 0),
			// scale: (value? 1 : .7)
		});
	}

	public setTimer(timeRemaining: number)
	{
		const milliseconds = Math.floor(timeRemaining);
		const seconds = milliseconds * 0.001;
		const secondsString = seconds.toString();
		this.timerText.setText(secondsString.replace('.', ':').slice(0, (secondsString.lastIndexOf('.') + 3)));
	}

	/**
	 * 
	 * @param show or hide.
	 * @param tween If `false`, UI will appear instantly
	 * @param level Only necessary if `show` & `initial`.
	 * @returns 
	 */
	public setTutorialUI(show: boolean, tween: boolean, level?: number)
	{
		if (this.tutorialOffsetTween)
		{
			if (this.tutorialOffsetTween.progress < 1)
			{
				return;
			}
		}

	// hide
		if (!show)
		{
			if (!this.tutorialVisible)
			{
				return;
			}

			if (tween)
			{
				this.setTutorialTween(false);		
			}
			else
			{
				this.tutorialOffsetContainer.setY((this.cameras.main.worldView.height / 2) + 106);
			}

			this.tutorialVisible = false;

			return;
		}

	// show

		if (this.tutorialVisible)
		{
			return;
		}

		if (this.tutorialText.text === '')
		{
			this.tutorialText.setText(tutorialManager.getTutorialText(level!)!);
			this.tutorialCloseText.setText
				(`- ${InputManager.getInputName('tutorial-toggle')?.toString().toUpperCase()} TO DISMISS -`);
			this.tutorialContainer.setVisible(true);

			// TODO: set input hint

			this.tutorialBox.setInteractive()
				// TODO: Hitbox needs to match texture's odd shape, not include the transparent areas.
				// Currently it seems like it doesn't include the tab.
			this.tutorialBox.on('pointerdown', () =>
			{	
				this.levelScene.setTutorialUI(!this.tutorialVisible, false);
			});
		}

		if (tween)
		{
			this.setTutorialTween(true);
		}
		else
		{
			this.tutorialOffsetContainer.setY(0);
		}
		

		this.tutorialVisible = true;
	}

	private setTutorialTween(appear: boolean)
	{
		const toY = (appear ? 0 : (this.cameras.main.worldView.height / 2) + 106);

		this.tutorialOffsetTween = this.tweens.add(
		{
			targets: this.tutorialOffsetContainer,
			y: toY,
			duration: (appear ? 1000 : 700),
			ease: Phaser.Math.Easing.Cubic.Out
		});
	}

	public animateEnemiesText(): void
	{
		if (this.enemiesTextTween)
		{
			this.enemiesTextTween.stop();
		}
		this.enemiesText.setScale(1.3);
		this.enemiesTextTween = this.tweens.add
		({
			targets: this.enemiesText,
			duration: 500,
			ease: Phaser.Math.Easing.Circular.Out,
			scale: 1
		});
	}

	private setupCamera()
	{
		this.cameras.main.setName('UICam');
		this.cameras.main.setSize(this.scale.width, this.scale.height);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));

		const _camera = this.cameras.main as any;
		_camera.preRender(1);
	}

	resize()
	{
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));

		const _camera = this.cameras.main as any;
		_camera.preRender(1);

		if (!this.tutorialVisible)
		{
			this.tutorialOffsetTween.stop();
			this.tutorialOffsetContainer.setY((this.cameras.main.worldView.height / 2) + 106);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
