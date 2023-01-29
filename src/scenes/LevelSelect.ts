
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Align from "../components/Align";
/* START-USER-IMPORTS */

import AdaptiveZoom from "~/AdaptiveZoom";

/* END-USER-IMPORTS */

export default class LevelSelect extends Phaser.Scene {

	constructor() {
		super("LevelSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mainLayer
		const mainLayer = this.add.layer();

		// UILayer
		const uILayer = this.add.layer();

		// back-L1
		const back_L1 = this.add.rectangle(0, 0, 100, 40);
		back_L1.isFilled = true;
		back_L1.fillColor = 2697513;
		uILayer.add(back_L1);

		// label-L1
		const label_L1 = this.add.bitmapText(0, 0, "nokia", "Level 1\n");
		label_L1.setOrigin(0.5, 0.5);
		label_L1.text = "Level 1\n";
		label_L1.fontSize = -8;
		label_L1.align = 1;
		uILayer.add(label_L1);

		// back-L2
		const back_L2 = this.add.rectangle(-3, 48, 100, 40);
		back_L2.isFilled = true;
		back_L2.fillColor = 2697513;
		uILayer.add(back_L2);

		// label-L2
		const label_L2 = this.add.bitmapText(6, 48, "nokia", "Level 2\n");
		label_L2.setOrigin(0.5, 0.5);
		label_L2.text = "Level 2\n";
		label_L2.fontSize = -8;
		label_L2.align = 1;
		uILayer.add(label_L2);

		// back-L3
		const back_L3 = this.add.rectangle(-2, 91, 100, 40);
		back_L3.isFilled = true;
		back_L3.fillColor = 2697513;
		uILayer.add(back_L3);

		// label-L3
		const label_L3 = this.add.bitmapText(7, 91, "nokia", "Level 3");
		label_L3.setOrigin(0.5, 0.5);
		label_L3.text = "Level 3";
		label_L3.fontSize = -8;
		label_L3.align = 1;
		uILayer.add(label_L3);

		// back-L4
		const back_L4 = this.add.rectangle(-2, 138, 100, 40);
		back_L4.isFilled = true;
		back_L4.fillColor = 2697513;
		uILayer.add(back_L4);

		// label-L4
		const label_L4 = this.add.bitmapText(7, 138, "nokia", "Level 4");
		label_L4.setOrigin(0.5, 0.5);
		label_L4.text = "Level 4";
		label_L4.fontSize = -8;
		label_L4.align = 1;
		uILayer.add(label_L4);

		// back-L5
		const back_L5 = this.add.rectangle(-2, 182, 100, 40);
		back_L5.isFilled = true;
		back_L5.fillColor = 2697513;
		uILayer.add(back_L5);

		// label-L5
		const label_L5 = this.add.bitmapText(7, 182, "nokia", "Level 5");
		label_L5.setOrigin(0.5, 0.5);
		label_L5.text = "Level 5";
		label_L5.fontSize = -8;
		label_L5.align = 1;
		uILayer.add(label_L5);

		// birdSelector
		const birdSelector = this.add.image(65, -6, "bird1dive");
		uILayer.add(birdSelector);

		// lists
		const levelBackList = [back_L1, back_L2, back_L3, back_L4, back_L5];

		// back_L1 (components)
		const back_L1Align = new Align(back_L1);
		back_L1Align.middle = true;
		back_L1Align.center = true;
		back_L1Align.verticalOffset = -100;

		// label_L1 (components)
		const label_L1Align = new Align(label_L1);
		label_L1Align.middle = true;
		label_L1Align.center = true;
		label_L1Align.verticalOffset = -100;

		// back_L2 (components)
		const back_L2Align = new Align(back_L2);
		back_L2Align.middle = true;
		back_L2Align.center = true;
		back_L2Align.verticalOffset = -50;

		// label_L2 (components)
		const label_L2Align = new Align(label_L2);
		label_L2Align.middle = true;
		label_L2Align.center = true;
		label_L2Align.verticalOffset = -50;

		// back_L3 (components)
		const back_L3Align = new Align(back_L3);
		back_L3Align.middle = true;
		back_L3Align.center = true;

		// label_L3 (components)
		const label_L3Align = new Align(label_L3);
		label_L3Align.middle = true;
		label_L3Align.center = true;

		// back_L4 (components)
		const back_L4Align = new Align(back_L4);
		back_L4Align.middle = true;
		back_L4Align.center = true;
		back_L4Align.verticalOffset = 50;

		// label_L4 (components)
		const label_L4Align = new Align(label_L4);
		label_L4Align.middle = true;
		label_L4Align.center = true;
		label_L4Align.verticalOffset = 50;

		// back_L5 (components)
		const back_L5Align = new Align(back_L5);
		back_L5Align.middle = true;
		back_L5Align.center = true;
		back_L5Align.verticalOffset = 100;

		// label_L5 (components)
		const label_L5Align = new Align(label_L5);
		label_L5Align.middle = true;
		label_L5Align.center = true;
		label_L5Align.verticalOffset = 100;

		this.mainLayer = mainLayer;
		this.uILayer = uILayer;
		this.birdSelector = birdSelector;
		this.levelBackList = levelBackList;

		this.events.emit("scene-awake");
	}

	private mainLayer!: Phaser.GameObjects.Layer;
	private uILayer!: Phaser.GameObjects.Layer;
	private birdSelector!: Phaser.GameObjects.Image;
	private levelBackList!: Phaser.GameObjects.Rectangle[];

	/* START-USER-CODE */

	private UICam!: Phaser.Cameras.Scene2D.BaseCamera | any;

	private levelsKey = ['test-map-6', 'map-1', 'map-1', 'map-1', 'map-1'];

	create() {

		this.editorCreate();

		this.createCameras();

		this.levelBackList.forEach((element, index) =>
		{
			let _back = element as Phaser.GameObjects.Rectangle;

			_back.setInteractive();
			_back.on('pointerdown', () => 
			{
				this.registry.set('current-level', this.levelsKey[index])
				this.loadLevel();
			});
		});

	}

	loadLevel()
	{
		this.scene.stop(this);
		this.scene.launch('Level');
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	createCameras()
	{
		let adaptiveZoom = new AdaptiveZoom();
		// TODO: set adaptive zoom or whatever solution to different PPIs

	// main
		this.cameras.main.setName('main');
		this.cameras.main.setZoom(3);
		this.cameras.main.ignore(this.uILayer .getChildren());

	// UI		
		this.UICam = this.cameras.add
			(0, 0, this.cameras.main.width, this.cameras.main.height) as any;
		this.UICam.setName('UIcam')
		this.UICam.setZoom(3);
		this.UICam.ignore(this.mainLayer.getChildren());
			// anything in the displayList not under one of the main layers is caught by the UI 
			// cam and appears at an offset
		this.UICam.preRender(1);
		// UICam.alpha = 0;
			// TODO: add new bomb and explosions to the mainLayer so they aren't also being seen 
			// by the UICam
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
