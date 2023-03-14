
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
import MobileDependent from "../components/MobileDependent";
import MobileButton from "../components/MobileButton";
/* START-USER-IMPORTS */

import CameraUtil from "~/components/CameraUtil";

/* END-USER-IMPORTS */

export default class LevelUI extends Phaser.Scene {

	constructor() {
		super("LevelUI");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// tutorialContainer
		const tutorialContainer = this.add.container(383, 207);
		tutorialContainer.visible = false;

		// tutorialBox
		const tutorialBox = this.add.rectangle(0, 0, 150, 230);
		tutorialBox.scaleY = 1.0527259860642193;
		tutorialBox.isFilled = true;
		tutorialBox.fillColor = 5675510;
		tutorialContainer.add(tutorialBox);

		// tutorialText
		const tutorialText = this.add.bitmapText(0, -32, "nokia", "Welcome to life, Bird Tapper! Before you can take on the violet army, lets brush up on the basics.\n\nYou can jump with <input>. You'll move forward automatically, but you can change direction from walls. While against one, try jumping against it and jumping again to perform a wall jump.");
		tutorialText.setOrigin(0.5, 0.5);
		tutorialText.text = "Welcome to life, Bird Tapper! Before you can take on the violet army, lets brush up on the basics.\n\nYou can jump with <input>. You'll move forward automatically, but you can change direction from walls. While against one, try jumping against it and jumping again to perform a wall jump.";
		tutorialText.fontSize = -8;
		tutorialText.maxWidth = 120;
		tutorialText.dropShadowAlpha = 0;
		tutorialContainer.add(tutorialText);

		// tutorialCloseText
		const tutorialCloseText = this.add.bitmapText(0, 102, "nokia", "- TAP TO CONTINUE -");
		tutorialCloseText.setOrigin(0.5, 0.5);
		tutorialCloseText.text = "- TAP TO CONTINUE -";
		tutorialCloseText.fontSize = -8;
		tutorialCloseText.maxWidth = 120;
		tutorialCloseText.dropShadowAlpha = 0;
		tutorialContainer.add(tutorialCloseText);

		// timerText
		const timerText = this.add.bitmapText(323.3856506347656, 857.450366973877, "nokia", "12:04");
		timerText.text = "12:04";
		timerText.fontSize = -16;
		timerText.dropShadowY = 100;
		timerText.dropShadowAlpha = 1;
		timerText.dropShadowColor = 2236962;

		// comboLabelText
		const comboLabelText = this.add.bitmapText(1163.6669311523438, 736.8461456298828, "nokia", "COMBO!");
		comboLabelText.angle = -10;
		comboLabelText.setOrigin(0, 0.5);
		comboLabelText.text = "COMBO!";
		comboLabelText.fontSize = -16;
		comboLabelText.dropShadowX = 100;
		comboLabelText.dropShadowAlpha = 1;
		comboLabelText.dropShadowColor = 714549;

		// comboText
		const comboText = this.add.bitmapText(1184.6669311523438, 755.8461494445801, "nokia", "3");
		comboText.angle = -10;
		comboText.setOrigin(0, 0.5);
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

		// chargeText
		const chargeText = this.add.bitmapText(847, 802.12646484375, "nokia", "Punch");
		chargeText.setOrigin(1, 0.5);
		chargeText.visible = false;
		chargeText.text = "Punch";
		chargeText.fontSize = -16;
		chargeText.align = 2;
		chargeText.dropShadowX = -100;
		chargeText.dropShadowAlpha = 1;
		chargeText.dropShadowColor = 15081504;

		// enemiesText
		const enemiesText = this.add.bitmapText(957, 756.12646484375, "nokia", "5/6");
		enemiesText.setOrigin(1, 0.5);
		enemiesText.text = "5/6";
		enemiesText.fontSize = -16;
		enemiesText.align = 2;
		enemiesText.dropShadowY = 100;
		enemiesText.dropShadowAlpha = 1;
		enemiesText.dropShadowColor = 2236962;

		// enemiesLabelText
		const enemiesLabelText = this.add.bitmapText(961, 732.12646484375, "nokia", "Enemies \ndefeated:");
		enemiesLabelText.setOrigin(1, 0);
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

		// mobileButtonLevelSelect
		const mobileButtonLevelSelect = this.add.rectangle(585.4546051025391, 217, 75, 75);
		mobileButtonLevelSelect.setOrigin(1, 0);
		mobileButtonLevelSelect.alpha = 0.5;
		mobileButtonLevelSelect.isFilled = true;
		mobileButtonLevelSelect.fillColor = 13532397;

		// mobileButtonPunch
		const mobileButtonPunch = this.add.rectangle(177, 662.12646484375, 150, 120);
		mobileButtonPunch.setOrigin(0, 1);
		mobileButtonPunch.alpha = 0.5;
		mobileButtonPunch.isFilled = true;
		mobileButtonPunch.fillColor = 15563900;

		// mobileButtonUppercut
		const mobileButtonUppercut = this.add.rectangle(178, 560.12646484375, 150, 120);
		mobileButtonUppercut.setOrigin(0, 1);
		mobileButtonUppercut.alpha = 0.5;
		mobileButtonUppercut.isFilled = true;
		mobileButtonUppercut.fillColor = 15591036;

		// mobileButtonJump
		const mobileButtonJump = this.add.rectangle(583, 531.12646484375, 150, 120);
		mobileButtonJump.setOrigin(1, 1);
		mobileButtonJump.alpha = 0.5;
		mobileButtonJump.isFilled = true;
		mobileButtonJump.fillColor = 8318332;

		// mobileButtonDive
		const mobileButtonDive = this.add.rectangle(553, 641.12646484375, 150, 120);
		mobileButtonDive.setOrigin(1, 1);
		mobileButtonDive.alpha = 0.5;
		mobileButtonDive.isFilled = true;
		mobileButtonDive.fillColor = 8168429;

		// debugText3
		const debugText3 = this.add.bitmapText(473, 856.12646484375, "nokia", "");
		debugText3.setOrigin(0, 1);
		debugText3.fontSize = -8;
		debugText3.dropShadowY = 100;

		// debugText2
		const debugText2 = this.add.bitmapText(472, 842.12646484375, "nokia", "");
		debugText2.setOrigin(0, 1);
		debugText2.fontSize = -8;
		debugText2.dropShadowY = 100;

		// debugText
		const debugText = this.add.bitmapText(473, 870.12646484375, "nokia", "");
		debugText.setOrigin(0, 1);
		debugText.fontSize = -8;
		debugText.dropShadowY = 100;

		// buildText
		const buildText = this.add.bitmapText(485, 800.12646484375, "nokia", "Tappy Tappy Boneyard\nv2");
		buildText.text = "Tappy Tappy Boneyard\nv2";
		buildText.fontSize = -8;
		buildText.dropShadowY = 100;

		// tutorialContainer (components)
		const tutorialContainerAlign = new Align(tutorialContainer);
		tutorialContainerAlign.middle = true;
		tutorialContainerAlign.right = true;
		tutorialContainerAlign.horizontalOffset = -75;

		// tutorialCloseText (components)
		new MobileDependent(tutorialCloseText);

		// timerText (components)
		const timerTextAlign = new Align(timerText);
		timerTextAlign.up = true;
		timerTextAlign.center = true;
		timerTextAlign.verticalOffset = -95;

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

		// chargeText (components)
		const chargeTextAlign = new Align(chargeText);
		chargeTextAlign.middle = true;
		chargeTextAlign.right = true;
		chargeTextAlign.horizontalOffset = 95;

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

		// mobileButtonDive (components)
		const mobileButtonDiveAlign = new Align(mobileButtonDive);
		mobileButtonDiveAlign.down = true;
		mobileButtonDiveAlign.right = true;
		new MobileDependent(mobileButtonDive);
		const mobileButtonDiveMobileButton = new MobileButton(mobileButtonDive);
		mobileButtonDiveMobileButton.input = "jump";

		// debugText3 (components)
		const debugText3Align = new Align(debugText3);
		debugText3Align.up = true;
		debugText3Align.left = true;
		debugText3Align.horizontalOffset = 5;
		debugText3Align.verticalOffset = -55;

		// debugText2 (components)
		const debugText2Align = new Align(debugText2);
		debugText2Align.up = true;
		debugText2Align.left = true;
		debugText2Align.horizontalOffset = 5;
		debugText2Align.verticalOffset = -65;

		// debugText (components)
		const debugTextAlign = new Align(debugText);
		debugTextAlign.up = true;
		debugTextAlign.left = true;
		debugTextAlign.horizontalOffset = 5;
		debugTextAlign.verticalOffset = -75;

		// buildText (components)
		const buildTextAlign = new Align(buildText);
		buildTextAlign.up = true;
		buildTextAlign.left = true;
		buildTextAlign.horizontalOffset = 5;
		buildTextAlign.verticalOffset = -95;

		this.tutorialContainer = tutorialContainer;
		this.tutorialBox = tutorialBox;
		this.tutorialText = tutorialText;
		this.tutorialCloseText = tutorialCloseText;
		this.timerText = timerText;
		this.comboLabelText = comboLabelText;
		this.comboText = comboText;
		this.scoreText = scoreText;
		this.chargeText = chargeText;
		this.enemiesText = enemiesText;
		this.enemiesLabelText = enemiesLabelText;
		this.winText = winText;
		this.mobileButtonLevelSelect = mobileButtonLevelSelect;
		this.mobileButtonPunch = mobileButtonPunch;
		this.mobileButtonUppercut = mobileButtonUppercut;
		this.mobileButtonJump = mobileButtonJump;
		this.mobileButtonDive = mobileButtonDive;
		this.debugText3 = debugText3;
		this.debugText2 = debugText2;
		this.debugText = debugText;
		this.buildText = buildText;

		this.events.emit("scene-awake");
	}

	public tutorialContainer!: Phaser.GameObjects.Container;
	private tutorialBox!: Phaser.GameObjects.Rectangle;
	private tutorialText!: Phaser.GameObjects.BitmapText;
	private tutorialCloseText!: Phaser.GameObjects.BitmapText;
	public timerText!: Phaser.GameObjects.BitmapText;
	public comboLabelText!: Phaser.GameObjects.BitmapText;
	public comboText!: Phaser.GameObjects.BitmapText;
	public scoreText!: Phaser.GameObjects.BitmapText;
	public chargeText!: Phaser.GameObjects.BitmapText;
	public enemiesText!: Phaser.GameObjects.BitmapText;
	public enemiesLabelText!: Phaser.GameObjects.BitmapText;
	public winText!: Phaser.GameObjects.BitmapText;
	public mobileButtonLevelSelect!: Phaser.GameObjects.Rectangle;
	public mobileButtonPunch!: Phaser.GameObjects.Rectangle;
	public mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	public mobileButtonJump!: Phaser.GameObjects.Rectangle;
	public mobileButtonDive!: Phaser.GameObjects.Rectangle;
	public debugText3!: Phaser.GameObjects.BitmapText;
	public debugText2!: Phaser.GameObjects.BitmapText;
	public debugText!: Phaser.GameObjects.BitmapText;
	public buildText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	private comboTextTween: Phaser.Tweens.Tween;
	private enemiesTextTween: Phaser.Tweens.Tween;

	protected create() {

		this.editorCreate();

		this.setupCamera();

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);

		this.events.emit('created');
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
		this.enemiesText.setText(`${defeated} / ${total}`);

		if (defeated === total)
		{
			this.enemiesText.dropShadowColor = 714549;
		}
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
		console.debug(this.enemiesTextTween)
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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
