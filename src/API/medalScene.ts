/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import { medalData } from './medalData.json'

// Class Doc
/** On `unlock-medal: MEDAL NAME` game event, this scene unlocks it through NG.io. AV popup sequence happens if the medal hasn't been unlocked before. Each medal's listener is removed when it's triggered.
 * 
 * All required assets are preloaded.
 */

/* END-USER-IMPORTS */

export default class medalScene extends Phaser.Scene {

	constructor() {
		super("medal-scene");

		/* START-USER-CTR-CODE */


		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// popupContainer
		const popupContainer = this.add.container(0, 0);

		// bg
		const bg = this.add.image(0, 0, "medal-popup-bg");
		bg.setOrigin(0, 0);
		popupContainer.add(bg);

		// medalIcon
		const medalIcon = this.add.image(35, 35, "_MISSING");
		medalIcon.scaleX = 0.5;
		medalIcon.scaleY = 0.5;
		popupContainer.add(medalIcon);

		// pointFill
		const pointFill = this.add.image(35, 35, "medal-point-fill");
		pointFill.tintTopLeft = 16728642;
		pointFill.tintTopRight = 16728642;
		pointFill.tintBottomLeft = 14680165;
		pointFill.tintBottomRight = 14680165;
		popupContainer.add(pointFill);

		// pointStroke
		const pointStroke = this.add.image(35, 35, "medal-point-stroke");
		pointStroke.tintTopLeft = 53068;
		pointStroke.tintTopRight = 53068;
		pointStroke.tintBottomLeft = 9690651;
		pointStroke.tintBottomRight = 9690651;
		popupContainer.add(pointStroke);

		// pointText
		const pointText = this.add.bitmapText(35, 36, "featured-item-font", "50");
		pointText.setOrigin(0.5, 0.5);
		pointText.text = "50";
		pointText.fontSize = -35;
		popupContainer.add(pointText);

		// difficultyText
		const difficultyText = this.add.bitmapText(68, 6, "featured-item-font", "difficult");
		difficultyText.tintTopLeft = 16620856;
		difficultyText.tintTopRight = 16620856;
		difficultyText.tintBottomLeft = 16620856;
		difficultyText.tintBottomRight = 16620856;
		difficultyText.text = "difficult";
		difficultyText.fontSize = -20;
		popupContainer.add(difficultyText);

		// secretText
		const secretText = this.add.bitmapText(185, 6, "featured-item-font", "secret");
		secretText.tintTopLeft = 8618883;
		secretText.tintTopRight = 8618883;
		secretText.tintBottomLeft = 8618883;
		secretText.tintBottomRight = 8618883;
		secretText.text = "secret";
		secretText.fontSize = -20;
		popupContainer.add(secretText);

		// medalGetText
		const medalGetText = this.add.bitmapText(69, 29, "newgrounds-font", "MEDAL GET!");
		medalGetText.text = "MEDAL GET!";
		medalGetText.fontSize = -35;
		popupContainer.add(medalGetText);

		// nameText
		const nameText = this.add.bitmapText(68, 35, "featured-item-font", "");
		nameText.setOrigin(0, 0.5);
		nameText.fontSize = -22;
		nameText.maxWidth = 180;
		popupContainer.add(nameText);

		// colourCover
		const colourCover = this.add.image(0, 0, "medal-popup-bg");
		colourCover.setOrigin(0, 0);
		colourCover.alpha = 0;
		colourCover.alphaTopLeft = 0;
		colourCover.alphaTopRight = 0;
		colourCover.alphaBottomLeft = 0;
		colourCover.alphaBottomRight = 0;
		colourCover.tintFill = true;
		colourCover.tintTopLeft = 15280939;
		colourCover.tintTopRight = 15280939;
		colourCover.tintBottomLeft = 15280939;
		colourCover.tintBottomRight = 15280939;
		popupContainer.add(colourCover);

		// whiteCover
		const whiteCover = this.add.image(0, 0, "medal-popup-bg");
		whiteCover.setOrigin(0, 0);
		whiteCover.alpha = 0;
		whiteCover.alphaTopLeft = 0;
		whiteCover.alphaTopRight = 0;
		whiteCover.alphaBottomLeft = 0;
		whiteCover.alphaBottomRight = 0;
		whiteCover.tintFill = true;
		popupContainer.add(whiteCover);

		this.popupContainer = popupContainer;
		this.bg = bg;
		this.medalIcon = medalIcon;
		this.pointFill = pointFill;
		this.pointStroke = pointStroke;
		this.pointText = pointText;
		this.difficultyText = difficultyText;
		this.secretText = secretText;
		this.medalGetText = medalGetText;
		this.nameText = nameText;
		this.colourCover = colourCover;
		this.whiteCover = whiteCover;

		this.events.emit("scene-awake");
	}

	private popupContainer!: Phaser.GameObjects.Container;
	private bg!: Phaser.GameObjects.Image;
	private medalIcon!: Phaser.GameObjects.Image;
	private pointFill!: Phaser.GameObjects.Image;
	private pointStroke!: Phaser.GameObjects.Image;
	private pointText!: Phaser.GameObjects.BitmapText;
	private difficultyText!: Phaser.GameObjects.BitmapText;
	private secretText!: Phaser.GameObjects.BitmapText;
	private medalGetText!: Phaser.GameObjects.BitmapText;
	private nameText!: Phaser.GameObjects.BitmapText;
	private colourCover!: Phaser.GameObjects.Image;
	private whiteCover!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	private queue: Array<medal>;

	/** key is medal points. (5, 10, 25, 50, 100)
	 * 
	 * value is the colour tint. [0] is the lighter & upper colour of gradient.
	 */
	private pointsColoursMap:Map<number, Array<number>> = new Map
	([
		[5, [5222398, 355835]],
		[10, [9690651, 53068]],
		[25, [16700672, 16489729]],
		[50, [16620856, 16597312]],
		[100, [16728642, 14680165]]
	]);
	private pointsDifficultyMap:Map<number, string> = new Map
	([
		[5, 'Easy'],
		[10, 'Moderate'],
		[25, 'Challenging'],
		[50, 'Difficult'],
		[100, 'Brutal']
	])

	preload()
	{
		this.load.audio('medal-popup-appear', 
		"assets/NGIO/medal-popup/medal-popup-appear.mp3");
		this.load.audio('medal-popup-disappear', 
		"assets/NGIO/medal-popup/medal-popup-disappear.mp3");

		this.load.image("medal-point-fill", 
		"assets/NGIO/medal-popup/medal-point-fill.png");
		this.load.image("medal-point-stroke", 
		"assets/NGIO/medal-popup/medal-point-stroke.png");
		this.load.image("medal-popup-bg", 
		"assets/NGIO/medal-popup/medal-popup-bg.png");

		this.load.bitmapFont("newgrounds-font", 
		"assets/NGIO/fonts/newgrounds-font.png", 
		"assets/NGIO/fonts/newgrounds-font.xml");
		this.load.bitmapFont("featured-item-font", 
		"assets/NGIO/fonts/featured-item-font.png", 
		"assets/NGIO/fonts/featured-item-font.xml");
	}

	create() {

		this.editorCreate();

		this.cameras.main.setViewport(700, 460, 250, 70);
		this.cameras.main.setRoundPixels(false);

		this.queue = new Array(0);

		console.debug(medalData)
		medalData.forEach((medal: any) =>
		{
			this.game.events.on('unlock-medal: ' + medal.name, () =>
			{
				this.eventCallback(medal);
			});

			this.textures.addBase64('medal: ' + medal.id, medal.icon)

			// TODO: What happens if medal unlock is called before this is loaded?
			// Do I need to account for that?
		});

		this.scene.sleep();
		this.scene.setVisible(false);
	}

	eventCallback(medal: medal)
	{
		if (!NGIO.isReady)
		{
			console.debug("medal unlock ignored because NGIO isn't ready");
			return;
		}

		console.debug(`call to unlock medal: ${medal.name}`);

		if (!__DEV__)
		{
			this.game.events.off('unlock-medal: ' + medal.name);
		}

		if (NGIO.getMedal(medal.id) == undefined)
		{
			console.error('NGIO did not get a medal with this id.');
			return;
		}

		if (NGIO.getMedal(medal.id).unlocked)
		{
			console.debug(`${medal.name} medal has already been unlocked according to API`);

			if (!__DEV__)
			{
				return;
			}
		}

		NGIO.unlockMedal(medal.id, (medal: any) => 
		{
			console.debug(medal);
		});

		this.queue.push(medal);
		if (this.queue.length === 1)
		{
			this.setupPopup();
		}
	}

	/** Setup for popup, then calls startSequence() */
	public setupPopup()
	{
		this.scene.wake();
		this.scene.setVisible(true);
		this.scene.bringToTop();

		// colour
		this.medalIcon.setTexture('medal: ' + this.queue[0].id);
		this.pointStroke.setTint
		(
			this.pointsColoursMap.get(this.queue[0].value)![1],
			this.pointsColoursMap.get(this.queue[0].value)![1],
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0]
		);
		this.pointFill.setTint
		(
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![1],
			this.pointsColoursMap.get(this.queue[0].value)![1]
		);
		this.difficultyText.setTint
		(
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0]
		);
		this.colourCover.setTint
		(
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0],
			this.pointsColoursMap.get(this.queue[0].value)![0]
		)
		this.colourCover.tintFill = true;

		// text
		this.nameText.setText(this.queue[0].name);
		this.difficultyText.setText
		(
			`${this.pointsDifficultyMap.get(this.queue[0].value)}`
		);
		this.pointText.setText(`${this.queue[0].value}`);
		this.secretText.setVisible(this.queue[0].secret);

		console.log(`MEDAL GET: "${this.queue[0].name}" - ${this.queue[0].description}`);

		this.startSequence();
	}

	/** Add tweens & callbacks */
	private startSequence()
	{
		this.sound.play('medal-popup-appear');

		// white fade
		this.whiteCover.setAlpha(1);
		this.tweens.add
		({
			targets: this.whiteCover,
			duration: 200,
			ease: Phaser.Math.Easing.Cubic.In,
			alpha: 0
		});

		// colour fade
		this.colourCover.setAlpha(1);
		this.tweens.add
		({
			targets: this.colourCover,
			delay: 100,
			duration: 300,
			ease: Phaser.Math.Easing.Cubic.In,
			alpha: 0,
		});

		// blink
		this.time.addEvent({ delay: 60, repeat: 9, callback: ()=> 
		{
			this.medalGetText.setVisible(!this.medalGetText.visible);
		}});

		// first page elements alpha
		this.pointStroke.setAlpha(1);
		this.pointFill.setAlpha(1);
		this.medalGetText.setAlpha(1);
		this.difficultyText.setAlpha(1);
		this.secretText.setAlpha(1);
		this.pointText.setAlpha(1);
		this.tweens.add
		({
			targets: 
			[
				this.pointStroke,
				this.pointFill,
				this.medalGetText,
				this.difficultyText,
				this.secretText,
				this.pointText
			],
			delay: 1800,
			duration: 300,
			ease: Phaser.Math.Easing.Cubic.In,
			alpha: 0
		});

		// name alpha
		this.nameText.setAlpha(0);
		this.tweens.add
		({
			targets: 
			[
				this.nameText
			],
			delay: 2100,
			duration: 300,
			ease: Phaser.Math.Easing.Cubic.In,
			alpha: 1
		});

		// container alpha
		this.popupContainer.setAlpha(1);
		this.tweens.add
		({
			targets: this.popupContainer,
			delay: 4000,
			onStart: () => 
			{
				this.sound.play('medal-popup-disappear');
			},
			duration: 200,
			ease: Phaser.Math.Easing.Cubic.In,
			alpha: 0,
			completeDelay: 300,
			onComplete: this.sequenceEndCallback,
			onCompleteScope: this
		});
	}

	/** Restart sequence or stop scene depending on queue. */
	sequenceEndCallback()
	{
		this.queue.shift();
		if (this.queue.length > 0)
		{
			this.setupPopup();
		}
		else
		{
			this.scene.sleep();
			this.scene.setVisible(false);
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

/** 
 * 
 * 
 * NOTE - setting `medalData.json`:
 * 
 * Copy all of the .json that NG exports and paste it in `"medalData"`:
 */
export type medal =
{ 
    id: number, 
    name: string, 
    description: string, 
    value: number,
    secret: boolean,
    icon: string
}
