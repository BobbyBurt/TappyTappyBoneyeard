
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import LevelSelect from "./LevelSelect";
import InputManager from "~/components/InputManager";
/* END-USER-IMPORTS */

export default class CreditsMP extends Phaser.Scene {

	constructor() {
		super("CreditsMP");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// parallax_Backing_1
		const parallax_Backing_1 = this.add.image(240, 387, "Parallax-Backing_1");
		parallax_Backing_1.scaleX = 2;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(240, 19, 540, 500);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 16762240;

		// rectangle
		const rectangle = this.add.rectangle(240, 336, 540, 3500);
		rectangle.setOrigin(0.5, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 16753024;

		// logoKFC
		const logoKFC = this.add.image(234, 378, "logoKFC");
		logoKFC.scaleX = 2;
		logoKFC.scaleY = 2;

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(40, 581, "nokia", "Collab organizer, pixel art / animation, level design:\n");
		bitmaptext_2.tintTopLeft = 5388102;
		bitmaptext_2.tintTopRight = 5388102;
		bitmaptext_2.tintBottomLeft = 5388102;
		bitmaptext_2.tintBottomRight = 5388102;
		bitmaptext_2.text = "Collab organizer, pixel art / animation, level design:\n";
		bitmaptext_2.fontSize = -8;

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(46, 593, "nokia", "\"Chckan Soft\"\n\"Babie Blod\"\n\"Fruity\"\n\"Castlevanioid\"");
		bitmaptext_3.tintTopLeft = 5388102;
		bitmaptext_3.tintTopRight = 5388102;
		bitmaptext_3.tintBottomLeft = 5388102;
		bitmaptext_3.tintBottomRight = 5388102;
		bitmaptext_3.text = "\"Chckan Soft\"\n\"Babie Blod\"\n\"Fruity\"\n\"Castlevanioid\"";
		bitmaptext_3.fontSize = -8;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(240, 462, 170, 20);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 5388102;

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(240, 458, "nokia", "vs the Krampus Fellowship Clan");
		bitmaptext_4.setOrigin(0.5, 0);
		bitmaptext_4.text = "vs the Krampus Fellowship Clan";
		bitmaptext_4.fontSize = -8;

		// levelAuthor
		const levelAuthor = this.add.container(0, 724);

		// preview
		const preview = this.add.image(240, -11, "preview-refresher");
		levelAuthor.add(preview);

		// frame
		const frame = this.add.rectangle(240, -11, 500, 134);
		frame.isStroked = true;
		frame.strokeColor = 5388102;
		frame.lineWidth = 3;
		levelAuthor.add(frame);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(232, 93, "nokia", "\"Refresher\"");
		bitmaptext.tintTopLeft = 5388102;
		bitmaptext.tintTopRight = 5388102;
		bitmaptext.tintBottomLeft = 5388102;
		bitmaptext.tintBottomRight = 5388102;
		bitmaptext.text = "\"Refresher\"";
		bitmaptext.fontSize = -8;
		levelAuthor.add(bitmaptext);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(226, 81, "nokia", "Programming, original game design, level design:\n");
		bitmaptext_5.tintTopLeft = 5388102;
		bitmaptext_5.tintTopRight = 5388102;
		bitmaptext_5.tintBottomLeft = 5388102;
		bitmaptext_5.tintBottomRight = 5388102;
		bitmaptext_5.text = "Programming, original game design, level design:\n";
		bitmaptext_5.fontSize = -8;
		levelAuthor.add(bitmaptext_5);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(17, 78, "nokia", "BobbyBurt");
		bitmaptext_6.tintTopLeft = 5388102;
		bitmaptext_6.tintTopRight = 5388102;
		bitmaptext_6.tintBottomLeft = 5388102;
		bitmaptext_6.tintBottomRight = 5388102;
		bitmaptext_6.text = "BobbyBurt";
		bitmaptext_6.fontSize = -32;
		levelAuthor.add(bitmaptext_6);

		// bitmaptext_32
		const bitmaptext_32 = this.add.bitmapText(30, -185, "nokia", "ProsciuttoMan");
		bitmaptext_32.tintTopLeft = 5388102;
		bitmaptext_32.tintTopRight = 5388102;
		bitmaptext_32.tintBottomLeft = 5388102;
		bitmaptext_32.tintBottomRight = 5388102;
		bitmaptext_32.text = "ProsciuttoMan";
		bitmaptext_32.fontSize = -32;
		levelAuthor.add(bitmaptext_32);

		// frame_8
		const frame_8 = this.add.rectangle(238, 454, 500, 134);
		frame_8.isStroked = true;
		frame_8.strokeColor = 5388102;
		frame_8.lineWidth = 3;
		levelAuthor.add(frame_8);

		// preview_8
		const preview_8 = this.add.image(238, 454, "preview-DemolitionBirdSquad");
		levelAuthor.add(preview_8);

		// levelAuthor_1
		const levelAuthor_1 = this.add.container(0, 873);

		// preview1
		const preview1 = this.add.image(250, 50, "preview-dry-madngtl");
		levelAuthor_1.add(preview1);

		// frame1
		const frame1 = this.add.rectangle(240, 50, 500, 134);
		frame1.isStroked = true;
		frame1.strokeColor = 5388102;
		frame1.lineWidth = 3;
		levelAuthor_1.add(frame1);

		// bitmaptext1
		const bitmaptext1 = this.add.bitmapText(108, 145, "nokia", "\"Tap Tap Fever\"\n\"Orange Chicken\"\n\"Jolly Green Homewrecker\"\n\"Coin Carnage\"");
		bitmaptext1.tintTopLeft = 5388102;
		bitmaptext1.tintTopRight = 5388102;
		bitmaptext1.tintBottomLeft = 5388102;
		bitmaptext1.tintBottomRight = 5388102;
		bitmaptext1.text = "\"Tap Tap Fever\"\n\"Orange Chicken\"\n\"Jolly Green Homewrecker\"\n\"Coin Carnage\"";
		bitmaptext1.fontSize = -8;
		levelAuthor_1.add(bitmaptext1);

		// bitmaptext_51
		const bitmaptext_51 = this.add.bitmapText(102, 133, "nokia", "Sound effects, music:");
		bitmaptext_51.tintTopLeft = 5388102;
		bitmaptext_51.tintTopRight = 5388102;
		bitmaptext_51.tintBottomLeft = 5388102;
		bitmaptext_51.tintBottomRight = 5388102;
		bitmaptext_51.text = "Sound effects, music:";
		bitmaptext_51.fontSize = -8;
		levelAuthor_1.add(bitmaptext_51);

		// bitmaptext_61
		const bitmaptext_61 = this.add.bitmapText(21, 130, "nokia", "Dry");
		bitmaptext_61.tintTopLeft = 5388102;
		bitmaptext_61.tintTopRight = 5388102;
		bitmaptext_61.tintBottomLeft = 5388102;
		bitmaptext_61.tintBottomRight = 5388102;
		bitmaptext_61.text = "Dry";
		bitmaptext_61.fontSize = -32;
		levelAuthor_1.add(bitmaptext_61);

		// bitmaptext_71
		const bitmaptext_71 = this.add.bitmapText(108, 208, "nokia", "\"My awesome Dryest Ng Tribute Level by Dryest NG (its his tribute to himself)\"");
		bitmaptext_71.tintTopLeft = 5388102;
		bitmaptext_71.tintTopRight = 5388102;
		bitmaptext_71.tintBottomLeft = 5388102;
		bitmaptext_71.tintBottomRight = 5388102;
		bitmaptext_71.text = "\"My awesome Dryest Ng Tribute Level by Dryest NG (its his tribute to himself)\"";
		bitmaptext_71.fontSize = -8;
		levelAuthor_1.add(bitmaptext_71);

		// bitmaptext_81
		const bitmaptext_81 = this.add.bitmapText(102, 196, "nokia", "Level design:");
		bitmaptext_81.tintTopLeft = 5388102;
		bitmaptext_81.tintTopRight = 5388102;
		bitmaptext_81.tintBottomLeft = 5388102;
		bitmaptext_81.tintBottomRight = 5388102;
		bitmaptext_81.text = "Level design:";
		bitmaptext_81.fontSize = -8;
		levelAuthor_1.add(bitmaptext_81);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(268, 145, "nokia", "\"Suicidal Scavenger\"\n\"Blod for fone\"\n\"Chimkn Chicanery\"\n\"High Jumper Low Blood Pressure\"");
		bitmaptext_1.tintTopLeft = 5388102;
		bitmaptext_1.tintTopRight = 5388102;
		bitmaptext_1.tintBottomLeft = 5388102;
		bitmaptext_1.tintBottomRight = 5388102;
		bitmaptext_1.text = "\"Suicidal Scavenger\"\n\"Blod for fone\"\n\"Chimkn Chicanery\"\n\"High Jumper Low Blood Pressure\"";
		bitmaptext_1.fontSize = -8;
		levelAuthor_1.add(bitmaptext_1);

		// bitmaptext_30
		const bitmaptext_30 = this.add.bitmapText(221, 407, "nokia", "\"The Valiant\"\n\"The Vampire?\"");
		bitmaptext_30.tintTopLeft = 5388102;
		bitmaptext_30.tintTopRight = 5388102;
		bitmaptext_30.tintBottomLeft = 5388102;
		bitmaptext_30.tintBottomRight = 5388102;
		bitmaptext_30.text = "\"The Valiant\"\n\"The Vampire?\"";
		bitmaptext_30.fontSize = -8;
		levelAuthor_1.add(bitmaptext_30);

		// bitmaptext_31
		const bitmaptext_31 = this.add.bitmapText(215, 395, "nokia", "Music:");
		bitmaptext_31.tintTopLeft = 5388102;
		bitmaptext_31.tintTopRight = 5388102;
		bitmaptext_31.tintBottomLeft = 5388102;
		bitmaptext_31.tintBottomRight = 5388102;
		bitmaptext_31.text = "Music:";
		bitmaptext_31.fontSize = -8;
		levelAuthor_1.add(bitmaptext_31);

		// bitmaptext_33
		const bitmaptext_33 = this.add.bitmapText(21, 392, "nokia", "Teravex");
		bitmaptext_33.tintTopLeft = 5388102;
		bitmaptext_33.tintTopRight = 5388102;
		bitmaptext_33.tintBottomLeft = 5388102;
		bitmaptext_33.tintBottomRight = 5388102;
		bitmaptext_33.text = "Teravex";
		bitmaptext_33.fontSize = -32;
		levelAuthor_1.add(bitmaptext_33);

		// bitmaptext_34
		const bitmaptext_34 = this.add.bitmapText(337, 407, "nokia", "\"The Throwback\"\n\"The Masochist\"");
		bitmaptext_34.tintTopLeft = 5388102;
		bitmaptext_34.tintTopRight = 5388102;
		bitmaptext_34.tintBottomLeft = 5388102;
		bitmaptext_34.tintBottomRight = 5388102;
		bitmaptext_34.text = "\"The Throwback\"\n\"The Masochist\"";
		bitmaptext_34.fontSize = -8;
		levelAuthor_1.add(bitmaptext_34);

		// bitmaptext_35
		const bitmaptext_35 = this.add.bitmapText(366, 623, "nokia", "\"Tapped Out\"\n\"Like it Shouldn't\"\n\"Deus Ex Crusher\"");
		bitmaptext_35.tintTopLeft = 5388102;
		bitmaptext_35.tintTopRight = 5388102;
		bitmaptext_35.tintBottomLeft = 5388102;
		bitmaptext_35.tintBottomRight = 5388102;
		bitmaptext_35.text = "\"Tapped Out\"\n\"Like it Shouldn't\"\n\"Deus Ex Crusher\"";
		bitmaptext_35.fontSize = -8;
		levelAuthor_1.add(bitmaptext_35);

		// bitmaptext_36
		const bitmaptext_36 = this.add.bitmapText(360, 611, "nokia", "Music:");
		bitmaptext_36.tintTopLeft = 5388102;
		bitmaptext_36.tintTopRight = 5388102;
		bitmaptext_36.tintBottomLeft = 5388102;
		bitmaptext_36.tintBottomRight = 5388102;
		bitmaptext_36.text = "Music:";
		bitmaptext_36.fontSize = -8;
		levelAuthor_1.add(bitmaptext_36);

		// bitmaptext_37
		const bitmaptext_37 = this.add.bitmapText(21, 608, "nokia", "LongestSoloEver");
		bitmaptext_37.tintTopLeft = 5388102;
		bitmaptext_37.tintTopRight = 5388102;
		bitmaptext_37.tintBottomLeft = 5388102;
		bitmaptext_37.tintBottomRight = 5388102;
		bitmaptext_37.text = "LongestSoloEver";
		bitmaptext_37.fontSize = -32;
		levelAuthor_1.add(bitmaptext_37);

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(22, 1913, "nokia", "Bobo");
		bitmaptext_9.tintTopLeft = 5388102;
		bitmaptext_9.tintTopRight = 5388102;
		bitmaptext_9.tintBottomLeft = 5388102;
		bitmaptext_9.tintBottomRight = 5388102;
		bitmaptext_9.text = "Bobo";
		bitmaptext_9.fontSize = -32;

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(144, 1916, "nokia", "Level design:");
		bitmaptext_10.tintTopLeft = 5388102;
		bitmaptext_10.tintTopRight = 5388102;
		bitmaptext_10.tintBottomLeft = 5388102;
		bitmaptext_10.tintBottomRight = 5388102;
		bitmaptext_10.text = "Level design:";
		bitmaptext_10.fontSize = -8;

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(150, 1928, "nokia", "\"Tina's Tower\"\n\"The Perplex Plan\"\n\"Like a Dickcissel\"");
		bitmaptext_11.tintTopLeft = 5388102;
		bitmaptext_11.tintTopRight = 5388102;
		bitmaptext_11.tintBottomLeft = 5388102;
		bitmaptext_11.tintBottomRight = 5388102;
		bitmaptext_11.text = "\"Tina's Tower\"\n\"The Perplex Plan\"\n\"Like a Dickcissel\"";
		bitmaptext_11.fontSize = -8;

		// frame_1
		const frame_1 = this.add.rectangle(241, 1823, 500, 134);
		frame_1.isStroked = true;
		frame_1.strokeColor = 5388102;
		frame_1.lineWidth = 3;

		// preview_1
		this.add.image(241, 1823, "preview-The Perplex Plan");

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(257, 1928, "nokia", "\"ifone stor\"\n\"Fruity\"");
		bitmaptext_7.tintTopLeft = 5388102;
		bitmaptext_7.tintTopRight = 5388102;
		bitmaptext_7.tintBottomLeft = 5388102;
		bitmaptext_7.tintBottomRight = 5388102;
		bitmaptext_7.text = "\"ifone stor\"\n\"Fruity\"";
		bitmaptext_7.fontSize = -8;

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(22, 2127, "nokia", "Paytonio");
		bitmaptext_8.tintTopLeft = 5388102;
		bitmaptext_8.tintTopRight = 5388102;
		bitmaptext_8.tintBottomLeft = 5388102;
		bitmaptext_8.tintBottomRight = 5388102;
		bitmaptext_8.text = "Paytonio";
		bitmaptext_8.fontSize = -32;

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(223, 2130, "nokia", "Level design:");
		bitmaptext_12.tintTopLeft = 5388102;
		bitmaptext_12.tintTopRight = 5388102;
		bitmaptext_12.tintBottomLeft = 5388102;
		bitmaptext_12.tintBottomRight = 5388102;
		bitmaptext_12.text = "Level design:";
		bitmaptext_12.fontSize = -8;

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(229, 2142, "nokia", "\"Demolition Bird Squad\"\n\"John Tappington\"\n\"Mad Chicks\"\n\"Tweet Towers\"");
		bitmaptext_13.tintTopLeft = 5388102;
		bitmaptext_13.tintTopRight = 5388102;
		bitmaptext_13.tintBottomLeft = 5388102;
		bitmaptext_13.tintBottomRight = 5388102;
		bitmaptext_13.text = "\"Demolition Bird Squad\"\n\"John Tappington\"\n\"Mad Chicks\"\n\"Tweet Towers\"";
		bitmaptext_13.fontSize = -8;

		// frame_2
		const frame_2 = this.add.rectangle(241, 2041, 500, 134);
		frame_2.isStroked = true;
		frame_2.strokeColor = 5388102;
		frame_2.lineWidth = 3;

		// preview_2
		this.add.image(241, 2041, "preview-MadChicks");

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(359, 2142, "nokia", "\"Fully Rested\"\n\"Playground\"\n\"A Side\"");
		bitmaptext_14.tintTopLeft = 5388102;
		bitmaptext_14.tintTopRight = 5388102;
		bitmaptext_14.tintBottomLeft = 5388102;
		bitmaptext_14.tintBottomRight = 5388102;
		bitmaptext_14.text = "\"Fully Rested\"\n\"Playground\"\n\"A Side\"";
		bitmaptext_14.fontSize = -8;

		// bitmaptext_15
		const bitmaptext_15 = this.add.bitmapText(22, 2348, "nokia", "STANN.co");
		bitmaptext_15.tintTopLeft = 5388102;
		bitmaptext_15.tintTopRight = 5388102;
		bitmaptext_15.tintBottomLeft = 5388102;
		bitmaptext_15.tintBottomRight = 5388102;
		bitmaptext_15.text = "STANN.co";
		bitmaptext_15.fontSize = -32;

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(223, 2351, "nokia", "Level design:");
		bitmaptext_16.tintTopLeft = 5388102;
		bitmaptext_16.tintTopRight = 5388102;
		bitmaptext_16.tintBottomLeft = 5388102;
		bitmaptext_16.tintBottomRight = 5388102;
		bitmaptext_16.text = "Level design:";
		bitmaptext_16.fontSize = -8;

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(229, 2363, "nokia", "\"The Book of Mormon - Abridged\"");
		bitmaptext_17.tintTopLeft = 5388102;
		bitmaptext_17.tintTopRight = 5388102;
		bitmaptext_17.tintBottomLeft = 5388102;
		bitmaptext_17.tintBottomRight = 5388102;
		bitmaptext_17.text = "\"The Book of Mormon - Abridged\"";
		bitmaptext_17.fontSize = -8;

		// frame_3
		const frame_3 = this.add.rectangle(241, 2268, 500, 134);
		frame_3.isStroked = true;
		frame_3.strokeColor = 5388102;
		frame_3.lineWidth = 3;

		// preview_3
		this.add.image(241, 2268, "preview-stann");

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(22, 2552, "nokia", "Starturbo");
		bitmaptext_18.tintTopLeft = 5388102;
		bitmaptext_18.tintTopRight = 5388102;
		bitmaptext_18.tintBottomLeft = 5388102;
		bitmaptext_18.tintBottomRight = 5388102;
		bitmaptext_18.text = "Starturbo";
		bitmaptext_18.fontSize = -32;

		// bitmaptext_19
		const bitmaptext_19 = this.add.bitmapText(223, 2555, "nokia", "Level design:");
		bitmaptext_19.tintTopLeft = 5388102;
		bitmaptext_19.tintTopRight = 5388102;
		bitmaptext_19.tintBottomLeft = 5388102;
		bitmaptext_19.tintBottomRight = 5388102;
		bitmaptext_19.text = "Level design:";
		bitmaptext_19.fontSize = -8;

		// bitmaptext_20
		const bitmaptext_20 = this.add.bitmapText(229, 2567, "nokia", "\"Flipping The Bird\"");
		bitmaptext_20.tintTopLeft = 5388102;
		bitmaptext_20.tintTopRight = 5388102;
		bitmaptext_20.tintBottomLeft = 5388102;
		bitmaptext_20.tintBottomRight = 5388102;
		bitmaptext_20.text = "\"Flipping The Bird\"";
		bitmaptext_20.fontSize = -8;

		// frame_4
		const frame_4 = this.add.rectangle(241, 2472, 500, 134);
		frame_4.isStroked = true;
		frame_4.strokeColor = 5388102;
		frame_4.lineWidth = 3;

		// preview_4
		this.add.image(241, 2472, "preview-flipping-the-bird");

		// bitmaptext_21
		const bitmaptext_21 = this.add.bitmapText(22, 2752, "nokia", "Roverkibb");
		bitmaptext_21.tintTopLeft = 5388102;
		bitmaptext_21.tintTopRight = 5388102;
		bitmaptext_21.tintBottomLeft = 5388102;
		bitmaptext_21.tintBottomRight = 5388102;
		bitmaptext_21.text = "Roverkibb";
		bitmaptext_21.fontSize = -32;

		// bitmaptext_22
		const bitmaptext_22 = this.add.bitmapText(238, 2755, "nokia", "Level design:");
		bitmaptext_22.tintTopLeft = 5388102;
		bitmaptext_22.tintTopRight = 5388102;
		bitmaptext_22.tintBottomLeft = 5388102;
		bitmaptext_22.tintBottomRight = 5388102;
		bitmaptext_22.text = "Level design:";
		bitmaptext_22.fontSize = -8;

		// bitmaptext_23
		const bitmaptext_23 = this.add.bitmapText(244, 2767, "nokia", "\"Berry Pie\"");
		bitmaptext_23.tintTopLeft = 5388102;
		bitmaptext_23.tintTopRight = 5388102;
		bitmaptext_23.tintBottomLeft = 5388102;
		bitmaptext_23.tintBottomRight = 5388102;
		bitmaptext_23.text = "\"Berry Pie\"";
		bitmaptext_23.fontSize = -8;

		// frame_5
		const frame_5 = this.add.rectangle(241, 2672, 500, 134);
		frame_5.isStroked = true;
		frame_5.strokeColor = 5388102;
		frame_5.lineWidth = 3;

		// preview_5
		this.add.image(241, 2672, "preview-Roverkibb_Berry_Pie");

		// bitmaptext_24
		const bitmaptext_24 = this.add.bitmapText(22, 2954, "nokia", "Dungeonation");
		bitmaptext_24.tintTopLeft = 5388102;
		bitmaptext_24.tintTopRight = 5388102;
		bitmaptext_24.tintBottomLeft = 5388102;
		bitmaptext_24.tintBottomRight = 5388102;
		bitmaptext_24.text = "Dungeonation";
		bitmaptext_24.fontSize = -32;

		// bitmaptext_25
		const bitmaptext_25 = this.add.bitmapText(310, 2957, "nokia", "Level design:");
		bitmaptext_25.tintTopLeft = 5388102;
		bitmaptext_25.tintTopRight = 5388102;
		bitmaptext_25.tintBottomLeft = 5388102;
		bitmaptext_25.tintBottomRight = 5388102;
		bitmaptext_25.text = "Level design:";
		bitmaptext_25.fontSize = -8;

		// bitmaptext_26
		const bitmaptext_26 = this.add.bitmapText(316, 2969, "nokia", "\"Spirosenjo\"");
		bitmaptext_26.tintTopLeft = 5388102;
		bitmaptext_26.tintTopRight = 5388102;
		bitmaptext_26.tintBottomLeft = 5388102;
		bitmaptext_26.tintBottomRight = 5388102;
		bitmaptext_26.text = "\"Spirosenjo\"";
		bitmaptext_26.fontSize = -8;

		// frame_6
		const frame_6 = this.add.rectangle(241, 2874, 500, 134);
		frame_6.isStroked = true;
		frame_6.strokeColor = 5388102;
		frame_6.lineWidth = 3;

		// preview_6
		this.add.image(241, 2874, "preview-Spirosenjo");

		// bitmaptext_27
		const bitmaptext_27 = this.add.bitmapText(22, 3157, "nokia", "Koffy");
		bitmaptext_27.tintTopLeft = 5388102;
		bitmaptext_27.tintTopRight = 5388102;
		bitmaptext_27.tintBottomLeft = 5388102;
		bitmaptext_27.tintBottomRight = 5388102;
		bitmaptext_27.text = "Koffy";
		bitmaptext_27.fontSize = -32;

		// bitmaptext_28
		const bitmaptext_28 = this.add.bitmapText(155, 3160, "nokia", "Level design:");
		bitmaptext_28.tintTopLeft = 5388102;
		bitmaptext_28.tintTopRight = 5388102;
		bitmaptext_28.tintBottomLeft = 5388102;
		bitmaptext_28.tintBottomRight = 5388102;
		bitmaptext_28.text = "Level design:";
		bitmaptext_28.fontSize = -8;

		// bitmaptext_29
		const bitmaptext_29 = this.add.bitmapText(161, 3172, "nokia", "\"Heritage for The Past\"");
		bitmaptext_29.tintTopLeft = 5388102;
		bitmaptext_29.tintTopRight = 5388102;
		bitmaptext_29.tintBottomLeft = 5388102;
		bitmaptext_29.tintBottomRight = 5388102;
		bitmaptext_29.text = "\"Heritage for The Past\"";
		bitmaptext_29.fontSize = -8;

		// frame_7
		const frame_7 = this.add.rectangle(241, 3077, 500, 134);
		frame_7.isStroked = true;
		frame_7.strokeColor = 5388102;
		frame_7.lineWidth = 3;

		// preview_7
		this.add.image(241, 3077, "preview-Koffy");

		// frame_9
		const frame_9 = this.add.rectangle(240, 1389, 500, 134);
		frame_9.isStroked = true;
		frame_9.strokeColor = 5388102;
		frame_9.lineWidth = 3;

		// preview_9
		this.add.image(240, 1389, "preview-TweetTowers");

		// parallax_Backing
		const parallax_Backing = this.add.image(-30, 3570, "Parallax-Backing_1");
		parallax_Backing.scaleX = 2.2;
		parallax_Backing.setOrigin(0, 0);
		parallax_Backing.flipY = true;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(-30, 3446, 550, 300);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 16753024;

		// paralax_Mountains
		this.add.image(128, 3781, "Paralax-Mountains");

		// paralax_Mountains_1
		this.add.image(448, 3781, "Paralax-Mountains");

		// gappyText
		const gappyText = this.add.bitmapText(79, 3239, "nokia", "Gappy (Gappy series) by LeviRamirez");
		gappyText.tintTopLeft = 5388102;
		gappyText.tintTopRight = 5388102;
		gappyText.tintBottomLeft = 5388102;
		gappyText.tintBottomRight = 5388102;
		gappyText.text = "Gappy (Gappy series) by LeviRamirez";
		gappyText.fontSize = -16;

		// gappyIcon
		const gappyIcon = this.add.image(42, 3242, "gappy", "airborne/00");
		gappyIcon.scaleX = 2;
		gappyIcon.scaleY = 2;

		// puckText
		const puckText = this.add.bitmapText(79, 3287, "nokia", "Puck (Pucamuc) by Mors");
		puckText.tintTopLeft = 5388102;
		puckText.tintTopRight = 5388102;
		puckText.tintBottomLeft = 5388102;
		puckText.tintBottomRight = 5388102;
		puckText.text = "Puck (Pucamuc) by Mors";
		puckText.fontSize = -16;

		// puckIcon
		const puckIcon = this.add.image(42, 3290, "pucamuc", "run/03");
		puckIcon.scaleX = 2;
		puckIcon.scaleY = 2;

		// kidText
		const kidText = this.add.bitmapText(79, 3338, "nokia", "The Kid (I Wanna Be The Guy) by Kayin");
		kidText.tintTopLeft = 5388102;
		kidText.tintTopRight = 5388102;
		kidText.tintBottomLeft = 5388102;
		kidText.tintBottomRight = 5388102;
		kidText.text = "The Kid (I Wanna Be The Guy) by Kayin";
		kidText.fontSize = -16;

		// kidIcon
		const kidIcon = this.add.image(42, 3341, "kid", "flap/02");
		kidIcon.scaleX = 2;
		kidIcon.scaleY = 2;

		// bitmaptext_38
		const bitmaptext_38 = this.add.bitmapText(240, 3691, "nokia", "Thanks for playing!");
		bitmaptext_38.setOrigin(0.5, 0);
		bitmaptext_38.tintTopLeft = 5388102;
		bitmaptext_38.tintTopRight = 5388102;
		bitmaptext_38.tintBottomLeft = 5388102;
		bitmaptext_38.tintBottomRight = 5388102;
		bitmaptext_38.text = "Thanks for playing!";
		bitmaptext_38.fontSize = -32;
		bitmaptext_38.align = 1;
		bitmaptext_38.dropShadowY = 4;
		bitmaptext_38.dropShadowAlpha = 1;
		bitmaptext_38.dropShadowColor = 16762240;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(0, 3586, 480, 260);
		rectangle_4.setOrigin(0, 0);
		rectangle_4.visible = false;
		rectangle_4.isStroked = true;
		rectangle_4.lineWidth = 3;

		// plane_1
		const plane_1 = this.add.image(62, 3680, "plane_1");
		plane_1.flipX = true;

		// soldiermid_1
		const soldiermid_1 = this.add.image(398, 3684, "soldiermid_1");
		soldiermid_1.setOrigin(0, 0);
		soldiermid_1.flipX = true;

		// soldieronballoon_1
		const soldieronballoon_1 = this.add.image(404, 3689, "soldieronballoon_1");
		soldieronballoon_1.setOrigin(0, 0);
		soldieronballoon_1.flipX = true;

		// bitmaptext_42
		const bitmaptext_42 = this.add.bitmapText(240, 3827, "nokia", "Click / tap to return");
		bitmaptext_42.setOrigin(0.5, 0);
		bitmaptext_42.tintTopLeft = 5388102;
		bitmaptext_42.tintTopRight = 5388102;
		bitmaptext_42.tintBottomLeft = 5388102;
		bitmaptext_42.tintBottomRight = 5388102;
		bitmaptext_42.text = "Click / tap to return";
		bitmaptext_42.fontSize = -8;

		// bitmaptext_39
		const bitmaptext_39 = this.add.bitmapText(334, 1928, "nokia", "\"Castlevanioid\"\n\"I Wanna Save The Kids\"");
		bitmaptext_39.tintTopLeft = 5388102;
		bitmaptext_39.tintTopRight = 5388102;
		bitmaptext_39.tintBottomLeft = 5388102;
		bitmaptext_39.tintBottomRight = 5388102;
		bitmaptext_39.text = "\"Castlevanioid\"\n\"I Wanna Save The Kids\"";
		bitmaptext_39.fontSize = -8;

		// kidText_1
		const kidText_1 = this.add.bitmapText(240, 3520, "nokia", "Powered by");
		kidText_1.setOrigin(0.5, 0);
		kidText_1.tintTopLeft = 5388102;
		kidText_1.tintTopRight = 5388102;
		kidText_1.tintBottomLeft = 5388102;
		kidText_1.tintBottomRight = 5388102;
		kidText_1.text = "Powered by";
		kidText_1.fontSize = -16;

		// phaser_pixel_medium_shaded
		const phaser_pixel_medium_shaded = this.add.image(240, 3546, "phaser-pixel-medium-shaded");
		phaser_pixel_medium_shaded.setOrigin(0.5, 0);

		// kidText_2
		const kidText_2 = this.add.bitmapText(240, 3437, "nokia", "Phaser Editor v3");
		kidText_2.setOrigin(0.5, 0);
		kidText_2.tintTopLeft = 5388102;
		kidText_2.tintTopRight = 5388102;
		kidText_2.tintBottomLeft = 5388102;
		kidText_2.tintBottomRight = 5388102;
		kidText_2.text = "Phaser Editor v3";
		kidText_2.fontSize = -16;

		// kidText_3
		const kidText_3 = this.add.bitmapText(240, 3459, "nokia", "Tiled level editor");
		kidText_3.setOrigin(0.5, 0);
		kidText_3.tintTopLeft = 5388102;
		kidText_3.tintTopRight = 5388102;
		kidText_3.tintBottomLeft = 5388102;
		kidText_3.tintBottomRight = 5388102;
		kidText_3.text = "Tiled level editor";
		kidText_3.fontSize = -16;
		kidText_3.align = 1;

		// kidText_4
		const kidText_4 = this.add.bitmapText(240, 3413, "nokia", "Software:");
		kidText_4.setOrigin(0.5, 0);
		kidText_4.tintTopLeft = 5388102;
		kidText_4.tintTopRight = 5388102;
		kidText_4.tintBottomLeft = 5388102;
		kidText_4.tintBottomRight = 5388102;
		kidText_4.text = "Software:";
		kidText_4.fontSize = -16;

		// bitmaptext_40
		const bitmaptext_40 = this.add.bitmapText(22, 1698, "nokia", "Broly");
		bitmaptext_40.tintTopLeft = 5388102;
		bitmaptext_40.tintTopRight = 5388102;
		bitmaptext_40.tintBottomLeft = 5388102;
		bitmaptext_40.tintBottomRight = 5388102;
		bitmaptext_40.text = "Broly";
		bitmaptext_40.fontSize = -32;

		// bitmaptext_41
		const bitmaptext_41 = this.add.bitmapText(155, 1709, "nokia", "Promotional art");
		bitmaptext_41.tintTopLeft = 5388102;
		bitmaptext_41.tintTopRight = 5388102;
		bitmaptext_41.tintBottomLeft = 5388102;
		bitmaptext_41.tintBottomRight = 5388102;
		bitmaptext_41.text = "Promotional art";
		bitmaptext_41.fontSize = -8;

		// frame_10
		const frame_10 = this.add.rectangle(240, 1611, 500, 134);
		frame_10.isStroked = true;
		frame_10.strokeColor = 5388102;
		frame_10.lineWidth = 3;

		// preview_10
		this.add.image(240, 1611, "preview-JohnTappington");

		// paralax_Mountains_2
		const paralax_Mountains_2 = this.add.image(262, 3848.5, "Paralax-Mountains");
		paralax_Mountains_2.scaleX = 2;
		paralax_Mountains_2.scaleY = 2;
		paralax_Mountains_2.angle = -180;
		paralax_Mountains_2.setOrigin(0.5, 1);

		this.gappyText = gappyText;
		this.gappyIcon = gappyIcon;
		this.puckText = puckText;
		this.puckIcon = puckIcon;
		this.kidText = kidText;
		this.kidIcon = kidIcon;
		this.kidText_1 = kidText_1;
		this.kidText_2 = kidText_2;
		this.kidText_3 = kidText_3;
		this.kidText_4 = kidText_4;

		this.events.emit("scene-awake");
	}

	private gappyText!: Phaser.GameObjects.BitmapText;
	private gappyIcon!: Phaser.GameObjects.Image;
	private puckText!: Phaser.GameObjects.BitmapText;
	private puckIcon!: Phaser.GameObjects.Image;
	private kidText!: Phaser.GameObjects.BitmapText;
	private kidIcon!: Phaser.GameObjects.Image;
	private kidText_1!: Phaser.GameObjects.BitmapText;
	private kidText_2!: Phaser.GameObjects.BitmapText;
	private kidText_3!: Phaser.GameObjects.BitmapText;
	private kidText_4!: Phaser.GameObjects.BitmapText;

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
		this.sound.play('main-theme-mp');
	}

	// camera scroll tween
	this.cameraTween = this.tweens.addCounter
	({
		from: 0,
		to: 3586,
		duration: 92000,
		ease: Phaser.Math.Easing.Linear,

		onComplete: () =>
		{
			// this.returnText.setVisible(true);
		}
	});

	// input
	this.input.on('pointerdown', () =>
	{
		this.endScene();



	});

	if (!this.registry.get('unlocked-character: gappy')) {
		this.gappyText.setText('??? created by ???');
		this.gappyIcon.setTint(0x000000, 0x000000, 0x000000, 0x000000);
	}
	if (!this.registry.get('unlocked-character: puck')) {
		this.puckText.setText('??? created by ???');
		this.puckIcon.setTint(0x000000, 0x000000, 0x000000, 0x000000);
	}
	if (!this.registry.get('unlocked-character: kid')) {
		this.kidText.setText('??? created by ???');
		this.kidIcon.setTint(0x000000, 0x000000, 0x000000, 0x000000);
	}

	this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
		button:Phaser.Input.Gamepad.Button, index:number) =>
	{
		if (button.index == InputManager.getInput('menu-confirm', 'gamepad') || button.index == InputManager.getInput('menu-back', 'gamepad'))
		{
			this.endScene();
		}
	});
}

update()
{
	this.cameras.main.setScroll(0, this.cameraTween.getValue());
}

endScene()
{
	this.sound.stopByKey('main-theme-mp');

	this.scene.stop(this);

	LevelSelect.levelSelectEntry = 'titlescreen';
	this.scene.launch('LevelSelect');

}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
