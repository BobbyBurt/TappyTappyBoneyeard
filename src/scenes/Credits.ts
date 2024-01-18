
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import LevelSelect from "./LevelSelect";
/* END-USER-IMPORTS */

export default class Credits extends Phaser.Scene {

	constructor() {
		super("Credits");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bgColour
		const bgColour = this.add.rectangle(0, 0, 480, 2500);
		bgColour.setOrigin(0, 0);
		bgColour.isFilled = true;
		bgColour.fillColor = 16765919;

		// parallax_Forest
		this.add.image(96, 2245, "Parallax-Forest");

		// parallax_Forest_1
		this.add.image(372, 2245, "Parallax-Forest");

		// parallax_Backing
		const parallax_Backing = this.add.image(0, 475, "Parallax-Backing");
		parallax_Backing.scaleX = 2;
		parallax_Backing.setOrigin(0, 0);

		// bgColour_1
		const bgColour_1 = this.add.rectangle(0, 0, 480, 475);
		bgColour_1.setOrigin(0, 0);
		bgColour_1.isFilled = true;
		bgColour_1.fillColor = 16771824;

		// preview_combo
		const preview_combo = this.add.image(-3, 564, "preview-combo");
		preview_combo.setOrigin(0, 0);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(177, 543, "nokia", "BobbyBurt");
		bitmaptext_1.tintTopLeft = 5388102;
		bitmaptext_1.tintTopRight = 5388102;
		bitmaptext_1.tintBottomLeft = 5388102;
		bitmaptext_1.tintBottomRight = 5388102;
		bitmaptext_1.text = "BobbyBurt";
		bitmaptext_1.fontSize = -32;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(177, 583, "nokia", "Programming, game design, \nand level design");
		bitmaptext.tintTopLeft = 5388102;
		bitmaptext.tintTopRight = 5388102;
		bitmaptext.tintBottomLeft = 5388102;
		bitmaptext.tintBottomRight = 5388102;
		bitmaptext.text = "Programming, game design, \nand level design";
		bitmaptext.fontSize = -8;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 561, 162, 4);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 5388102;

		// rectangle
		const rectangle = this.add.rectangle(0, 675, 480, 4);
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 5388102;

		// logo
		const logo = this.add.image(240, 369, "logo");
		logo.scaleX = 2;
		logo.scaleY = 2;

		// preview_combo_1
		const preview_combo_1 = this.add.image(-3, 774, "preview-gun-intro");
		preview_combo_1.setOrigin(0, 0);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 885, 480, 4);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 5388102;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 772, 323, 4);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 5388102;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(50, 865, "nokia", "Pixelart, animation, character design, and game design");
		bitmaptext_2.tintTopLeft = 5388102;
		bitmaptext_2.tintTopRight = 5388102;
		bitmaptext_2.tintBottomLeft = 5388102;
		bitmaptext_2.tintBottomRight = 5388102;
		bitmaptext_2.text = "Pixelart, animation, character design, and game design";
		bitmaptext_2.fontSize = -8;
		bitmaptext_2.align = 2;

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(45, 821, "nokia", "ProsciuttoMan");
		bitmaptext_3.tintTopLeft = 5388102;
		bitmaptext_3.tintTopRight = 5388102;
		bitmaptext_3.tintBottomLeft = 5388102;
		bitmaptext_3.tintBottomRight = 5388102;
		bitmaptext_3.text = "ProsciuttoMan";
		bitmaptext_3.fontSize = -32;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(467, 772, 321, 4);
		rectangle_4.setOrigin(0, 0);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 5388102;

		// rectangle_5
		const rectangle_5 = this.add.rectangle(336, 775, 120, 10);
		rectangle_5.setOrigin(0, 0);
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 16765919;

		// balloon
		const balloon = this.add.image(340, 768, "balloon");
		balloon.setOrigin(0, 0);

		// balloon_1
		const balloon_1 = this.add.image(436, 768, "balloon");
		balloon_1.setOrigin(0, 0);

		// preview_combo_2
		const preview_combo_2 = this.add.image(-4, 1419, "preview-umbrella-intro");
		preview_combo_2.setOrigin(0, 0);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(0, 1529, 480, 4);
		rectangle_6.setOrigin(0, 0);
		rectangle_6.isFilled = true;
		rectangle_6.fillColor = 5388102;

		// rectangle_7
		const rectangle_7 = this.add.rectangle(0, 1415, 140, 4);
		rectangle_7.setOrigin(0, 0);
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 5388102;

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(177, 1434, "nokia", "Promotional art \nand logo design");
		bitmaptext_4.tintTopLeft = 5388102;
		bitmaptext_4.tintTopRight = 5388102;
		bitmaptext_4.tintBottomLeft = 5388102;
		bitmaptext_4.tintBottomRight = 5388102;
		bitmaptext_4.text = "Promotional art \nand logo design";
		bitmaptext_4.fontSize = -8;

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(177, 1397, "nokia", "Broly");
		bitmaptext_5.tintTopLeft = 5388102;
		bitmaptext_5.tintTopRight = 5388102;
		bitmaptext_5.tintBottomLeft = 5388102;
		bitmaptext_5.tintBottomRight = 5388102;
		bitmaptext_5.text = "Broly";
		bitmaptext_5.fontSize = -32;

		// preview_combo_3
		this.add.image(245, 1045, "preview-uppercut");

		// rectangle_8
		const rectangle_8 = this.add.rectangle(0, 1100, 480, 4);
		rectangle_8.setOrigin(0, 0);
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 5388102;

		// rectangle_9
		const rectangle_9 = this.add.rectangle(0, 986, 480, 4);
		rectangle_9.setOrigin(0, 0);
		rectangle_9.isFilled = true;
		rectangle_9.fillColor = 5388102;

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(26, 1041, "nokia", "Sound Effects and Music:\n\"Natural Infiltration\" \n\"Like It Should\" \n\"Tapper\"\n\"Bird Title\"");
		bitmaptext_6.tintTopLeft = 5388102;
		bitmaptext_6.tintTopRight = 5388102;
		bitmaptext_6.tintBottomLeft = 5388102;
		bitmaptext_6.tintBottomRight = 5388102;
		bitmaptext_6.text = "Sound Effects and Music:\n\"Natural Infiltration\" \n\"Like It Should\" \n\"Tapper\"\n\"Bird Title\"";
		bitmaptext_6.fontSize = -8;
		bitmaptext_6.align = 1;

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(49, 999, "nokia", "Dry");
		bitmaptext_7.tintTopLeft = 5388102;
		bitmaptext_7.tintTopRight = 5388102;
		bitmaptext_7.tintBottomLeft = 5388102;
		bitmaptext_7.tintBottomRight = 5388102;
		bitmaptext_7.text = "Dry";
		bitmaptext_7.fontSize = -32;

		// preview_combo_4
		const preview_combo_4 = this.add.image(-2, 1203, "preview-dive-practice");
		preview_combo_4.setOrigin(0, 0);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(0, 1312, 480, 4);
		rectangle_10.setOrigin(0, 0);
		rectangle_10.isFilled = true;
		rectangle_10.fillColor = 5388102;

		// rectangle_11
		const rectangle_11 = this.add.rectangle(0, 1201, 480, 4);
		rectangle_11.setOrigin(0, 0);
		rectangle_11.isFilled = true;
		rectangle_11.fillColor = 5388102;

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(257, 1277, "nokia", "Music: \n\"Crusher Machina\"");
		bitmaptext_8.tintTopLeft = 5388102;
		bitmaptext_8.tintTopRight = 5388102;
		bitmaptext_8.tintBottomLeft = 5388102;
		bitmaptext_8.tintBottomRight = 5388102;
		bitmaptext_8.text = "Music: \n\"Crusher Machina\"";
		bitmaptext_8.fontSize = -8;

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(20, 1263, "nokia", "Shane Mesa");
		bitmaptext_9.tintTopLeft = 5388102;
		bitmaptext_9.tintTopRight = 5388102;
		bitmaptext_9.tintBottomLeft = 5388102;
		bitmaptext_9.tintBottomRight = 5388102;
		bitmaptext_9.text = "Shane Mesa";
		bitmaptext_9.fontSize = -32;

		// rectangle_12
		const rectangle_12 = this.add.rectangle(324, 1022, 30, 35);
		rectangle_12.setOrigin(0, 0);
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 16028060;

		// parallax_Industry
		const parallax_Industry = this.add.image(337, 1694, "Parallax-Industry");
		parallax_Industry.tintFill = true;
		parallax_Industry.tintTopLeft = 16756150;
		parallax_Industry.tintTopRight = 16756150;
		parallax_Industry.tintBottomLeft = 16756150;
		parallax_Industry.tintBottomRight = 16756150;

		// parallax_Industry_1
		const parallax_Industry_1 = this.add.image(17, 1694, "Parallax-Industry");
		parallax_Industry_1.tintFill = true;
		parallax_Industry_1.tintTopLeft = 16756150;
		parallax_Industry_1.tintTopRight = 16756150;
		parallax_Industry_1.tintBottomLeft = 16756150;
		parallax_Industry_1.tintBottomRight = 16756150;

		// preview_combo_5
		this.add.image(245, 1730, "preview-mine-enemy");

		// rectangle_13
		const rectangle_13 = this.add.rectangle(0, 1785, 480, 4);
		rectangle_13.setOrigin(0, 0);
		rectangle_13.isFilled = true;
		rectangle_13.fillColor = 5388102;

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(205, 1726, "nokia", "Concept art");
		bitmaptext_10.tintTopLeft = 5388102;
		bitmaptext_10.tintTopRight = 5388102;
		bitmaptext_10.tintBottomLeft = 5388102;
		bitmaptext_10.tintBottomRight = 5388102;
		bitmaptext_10.text = "Concept art";
		bitmaptext_10.fontSize = -8;

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(53, 1690, "nokia", "Chupabara");
		bitmaptext_11.tintTopLeft = 5388102;
		bitmaptext_11.tintTopRight = 5388102;
		bitmaptext_11.tintBottomLeft = 5388102;
		bitmaptext_11.tintBottomRight = 5388102;
		bitmaptext_11.text = "Chupabara";
		bitmaptext_11.fontSize = -32;

		// balloon_2
		const balloon_2 = this.add.image(455, 1667, "balloon");
		balloon_2.setOrigin(0, 0);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(398, 1447, 20, 20);
		rectangle_14.setOrigin(0, 0);
		rectangle_14.isFilled = true;
		rectangle_14.fillColor = 16765919;

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(240, 1877, "nokia", "Playtesting and feedback:");
		bitmaptext_12.setOrigin(0.5, 0);
		bitmaptext_12.tintTopLeft = 5388102;
		bitmaptext_12.tintTopRight = 5388102;
		bitmaptext_12.tintBottomLeft = 5388102;
		bitmaptext_12.tintBottomRight = 5388102;
		bitmaptext_12.text = "Playtesting and feedback:";
		bitmaptext_12.fontSize = -8;

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(177, 1894, "nokia", "DavidBurt\noctopus58\nzzox");
		bitmaptext_13.setOrigin(0.5, 0);
		bitmaptext_13.tintTopLeft = 5388102;
		bitmaptext_13.tintTopRight = 5388102;
		bitmaptext_13.tintBottomLeft = 5388102;
		bitmaptext_13.tintBottomRight = 5388102;
		bitmaptext_13.text = "DavidBurt\noctopus58\nzzox";
		bitmaptext_13.fontSize = -16;
		bitmaptext_13.align = 1;

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(240, 2112, "nokia", "Thanks for playing!");
		bitmaptext_17.setOrigin(0.5, 0);
		bitmaptext_17.text = "Thanks for playing!";
		bitmaptext_17.fontSize = -32;

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(240, 2108, "nokia", "Thanks for playing!");
		bitmaptext_14.setOrigin(0.5, 0);
		bitmaptext_14.tintTopLeft = 5388102;
		bitmaptext_14.tintTopRight = 5388102;
		bitmaptext_14.tintBottomLeft = 5388102;
		bitmaptext_14.tintBottomRight = 5388102;
		bitmaptext_14.text = "Thanks for playing!";
		bitmaptext_14.fontSize = -32;

		// bird1victory
		const bird1victory = this.add.image(109, 1443, "bird1victory");
		bird1victory.setOrigin(0, 0);

		// returnText
		const returnText = this.add.bitmapText(240, 2246, "nokia", "Click / tap to return");
		returnText.setOrigin(0.5, 0);
		returnText.visible = false;
		returnText.tintTopLeft = 5388102;
		returnText.tintTopRight = 5388102;
		returnText.tintBottomLeft = 5388102;
		returnText.tintBottomRight = 5388102;
		returnText.text = "Click / tap to return";
		returnText.fontSize = -8;

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(301, 1894, "nokia", "MigMoog\nMrPakoMan\nGeoKureli");
		bitmaptext_16.setOrigin(0.5, 0);
		bitmaptext_16.tintTopLeft = 5388102;
		bitmaptext_16.tintTopRight = 5388102;
		bitmaptext_16.tintBottomLeft = 5388102;
		bitmaptext_16.tintBottomRight = 5388102;
		bitmaptext_16.text = "MigMoog\nMrPakoMan\nGeoKureli";
		bitmaptext_16.fontSize = -16;
		bitmaptext_16.align = 1;

		// peeing
		this.add.image(252, 630, "peeing");

		// rectangle_16
		const rectangle_16 = this.add.rectangle(262, 610, 11, 30);
		rectangle_16.setOrigin(0, 0);
		rectangle_16.isFilled = true;
		rectangle_16.fillColor = 16765919;

		// bird3cling_exhausted
		this.add.image(282, 631, "bird1cling-exhausted");

		// svfddfdf
		this.add.image(162, 951, "svfddfdf");

		// dead_bird
		this.add.image(305, 1045, "dead-bird");

		// rectangle_15
		const rectangle_15 = this.add.rectangle(247, 1211, 30, 20);
		rectangle_15.setOrigin(0, 0);
		rectangle_15.isFilled = true;
		rectangle_15.fillColor = 16028060;

		// phone
		this.add.image(269, 1221, "phone");

		// rectangle_17
		const rectangle_17 = this.add.rectangle(260, 1211, 15, 20);
		rectangle_17.setOrigin(0, 0);
		rectangle_17.isFilled = true;
		rectangle_17.fillColor = 16028060;

		// textbox_hey
		this.add.image(379, 1234, "textbox_hey");

		// bomb
		this.add.image(285, 1027, "bomb");

		// bomb_1
		this.add.image(305, 1013, "bomb");

		// bomb_2
		this.add.image(326, 1029, "bomb");

		// dollar_1
		const dollar_1 = this.add.image(25, 1810, "dollar-2");
		dollar_1.setOrigin(0, 0);

		// dollar_2
		const dollar_2 = this.add.image(25, 1841, "dollar-2");
		dollar_2.setOrigin(0, 0);

		// dollar_3
		const dollar_3 = this.add.image(25, 1872, "dollar-2");
		dollar_3.setOrigin(0, 0);

		// dollar_4
		const dollar_4 = this.add.image(25, 1903, "dollar-2");
		dollar_4.setOrigin(0, 0);

		// dollar_5
		const dollar_5 = this.add.image(25, 1934, "dollar-2");
		dollar_5.setOrigin(0, 0);

		// dollar_6
		const dollar_6 = this.add.image(25, 1965, "dollar-2");
		dollar_6.setOrigin(0, 0);

		// dollar
		const dollar = this.add.image(385, 1810, "dollar");
		dollar.setOrigin(0, 0);

		// dollar_7
		const dollar_7 = this.add.image(385, 1965, "dollar");
		dollar_7.setOrigin(0, 0);

		// dollar_8
		const dollar_8 = this.add.image(385, 1934, "dollar");
		dollar_8.setOrigin(0, 0);

		// dollar_9
		const dollar_9 = this.add.image(385, 1903, "dollar");
		dollar_9.setOrigin(0, 0);

		// dollar_10
		const dollar_10 = this.add.image(385, 1872, "dollar");
		dollar_10.setOrigin(0, 0);

		// dollar_11
		const dollar_11 = this.add.image(385, 1841, "dollar");
		dollar_11.setOrigin(0, 0);

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(240, 1955, "nokia", "MSGhero");
		bitmaptext_18.setOrigin(0.5, 0);
		bitmaptext_18.tintTopLeft = 5388102;
		bitmaptext_18.tintTopRight = 5388102;
		bitmaptext_18.tintBottomLeft = 5388102;
		bitmaptext_18.tintBottomRight = 5388102;
		bitmaptext_18.text = "MSGhero";
		bitmaptext_18.fontSize = -16;
		bitmaptext_18.align = 1;

		// soldierfalling
		this.add.image(271, 1769, "soldierfalling");

		// bomb_mask
		this.add.image(315, 1757, "bomb-mask");

		// bomb_mask_1
		this.add.image(312, 1745, "bomb-mask");

		// bomb_mask_2
		this.add.image(305, 1734, "bomb-mask");

		// textbox_wtf
		this.add.image(283, 1745, "textbox_wtf");

		// dive_icon
		const dive_icon = this.add.image(12, 1332, "dive-icon");
		dive_icon.setOrigin(0, 0);

		// bomb_mask_3
		this.add.image(316, 1756, "bomb-mask");

		// dive_icon_1
		const dive_icon_1 = this.add.image(31, 1332, "dive-icon");
		dive_icon_1.setOrigin(0, 0);

		// dive_icon_2
		const dive_icon_2 = this.add.image(50, 1332, "dive-icon");
		dive_icon_2.setOrigin(0, 0);

		// dive_icon_3
		const dive_icon_3 = this.add.image(69, 1332, "dive-icon");
		dive_icon_3.setOrigin(0, 0);

		// fist_icon
		const fist_icon = this.add.image(16, 1386, "fist-icon");
		fist_icon.setOrigin(0, 0);

		// up_icon
		const up_icon = this.add.image(452, 1384, "up-icon");
		up_icon.setOrigin(0, 0);

		// up_icon_1
		const up_icon_1 = this.add.image(452, 1363, "up-icon");
		up_icon_1.setOrigin(0, 0);

		// up_icon_2
		const up_icon_2 = this.add.image(452, 1342, "up-icon");
		up_icon_2.setOrigin(0, 0);

		// clown
		const clown = this.add.image(357, 2093, "clown");
		clown.setOrigin(0, 0);

		// balloon_3
		const balloon_3 = this.add.image(353, 2064, "balloon");
		balloon_3.setOrigin(0, 0);

		// balloon_4
		const balloon_4 = this.add.image(363, 2069, "balloon");
		balloon_4.setOrigin(0, 0);

		// balloon_5
		const balloon_5 = this.add.image(357, 2073, "balloon");
		balloon_5.setOrigin(0, 0);

		// sadfsda
		const sadfsda = this.add.image(20, 1148, "sadfsda");
		sadfsda.setOrigin(0, 0);

		// sadfsda_1
		const sadfsda_1 = this.add.image(40, 1148, "sadfsda");
		sadfsda_1.setOrigin(0, 0);

		// sadfsda_2
		const sadfsda_2 = this.add.image(60, 1148, "fdfdsvsdf");
		sadfsda_2.setOrigin(0, 0);

		// sadfsda_3
		const sadfsda_3 = this.add.image(80, 1148, "fdfdsvsdf");
		sadfsda_3.setOrigin(0, 0);

		// sadfsda_4
		const sadfsda_4 = this.add.image(100, 1148, "fdfdsvsdf");
		sadfsda_4.setOrigin(0, 0);

		this.returnText = returnText;

		this.events.emit("scene-awake");
	}

	private returnText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	private cameraTween: Phaser.Tweens.Tween;

	create() {

		this.editorCreate();

		// camera
		this.cameras.main.setOrigin(0, 0); 	
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));
		this.cameras.main.fadeIn(200, 255, 255, 255);

		// music
		if (!__LEVEL_TEST__)
		{
			this.sound.play('tapper');
		}

		// camera scroll tween
		this.cameraTween = this.tweens.addCounter
		({
			from: 0,
			to: 2000,
			duration: 50000,
			ease: Phaser.Math.Easing.Linear,

			onComplete: () =>
			{
				this.returnText.setVisible(true);
			}
		});

		// input
		this.input.on('pointerdown', () =>
		{
			this.endScene();
		});
	}

	update()
	{
		this.cameras.main.setScroll(0, this.cameraTween.getValue());
	}

	endScene()
	{
		this.sound.stopByKey('tapper');

		this.scene.stop(this);

		LevelSelect.levelSelectEntry = 'titlescreen';
		this.scene.launch('LevelSelect');

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
