
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import LevelSelect from "./LevelSelect";
import cloudSaves from "~/API/cloudSaves";
import { newgroundsIOWrapper } from "~/API/newgroundsIOWrapper";
import SoundManager from "~/components/SoundManager";
/* END-USER-IMPORTS */

export default class Titlescreen extends Phaser.Scene {

	constructor() {
		super("Titlescreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// BGLayerNinja
		const bGLayerNinja = this.add.layer();

		// parallax_Backing1111
		const parallax_Backing1111 = this.add.image(253, 50, "Parallax-Backing_1");
		parallax_Backing1111.scaleX = 8.415017240244449;
		parallax_Backing1111.flipY = true;
		bGLayerNinja.add(parallax_Backing1111);

		// parallax_Backing
		const parallax_Backing = this.add.image(324, 301, "Parallax-Backing_1");
		parallax_Backing.scaleX = 8.415017240244449;
		parallax_Backing.angle = -180;
		parallax_Backing.flipY = true;
		bGLayerNinja.add(parallax_Backing);

		// parallax_Cityscape1111
		const parallax_Cityscape1111 = this.add.image(297, 144, "Paralax-Mountains");
		parallax_Cityscape1111.flipX = true;
		parallax_Cityscape1111.tintFill = true;
		parallax_Cityscape1111.tintTopLeft = 15497347;
		parallax_Cityscape1111.tintTopRight = 15497347;
		parallax_Cityscape1111.tintBottomLeft = 15497347;
		parallax_Cityscape1111.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape1111);

		// parallax_Cityscape_1111
		const parallax_Cityscape_1111 = this.add.image(19, 148, "Paralax-Mountains");
		parallax_Cityscape_1111.flipX = true;
		parallax_Cityscape_1111.tintFill = true;
		parallax_Cityscape_1111.tintTopLeft = 15497347;
		parallax_Cityscape_1111.tintTopRight = 15497347;
		parallax_Cityscape_1111.tintBottomLeft = 15497347;
		parallax_Cityscape_1111.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape_1111);

		// parallax_Cityscape_211
		const parallax_Cityscape_211 = this.add.image(481, 129, "Paralax-Mountains");
		parallax_Cityscape_211.flipX = true;
		parallax_Cityscape_211.tintFill = true;
		parallax_Cityscape_211.tintTopLeft = 15497347;
		parallax_Cityscape_211.tintTopRight = 15497347;
		parallax_Cityscape_211.tintBottomLeft = 15497347;
		parallax_Cityscape_211.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape_211);

		// parallax_Cityscape_311
		const parallax_Cityscape_311 = this.add.image(-343, 144, "Paralax-Mountains");
		parallax_Cityscape_311.flipX = true;
		parallax_Cityscape_311.tintFill = true;
		parallax_Cityscape_311.tintTopLeft = 15497347;
		parallax_Cityscape_311.tintTopRight = 15497347;
		parallax_Cityscape_311.tintBottomLeft = 15497347;
		parallax_Cityscape_311.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape_311);

		// parallax_Cityscape_411
		const parallax_Cityscape_411 = this.add.image(936, 144, "Paralax-Mountains");
		parallax_Cityscape_411.flipX = true;
		parallax_Cityscape_411.tintFill = true;
		parallax_Cityscape_411.tintTopLeft = 15497347;
		parallax_Cityscape_411.tintTopRight = 15497347;
		parallax_Cityscape_411.tintBottomLeft = 15497347;
		parallax_Cityscape_411.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape_411);

		// parallax_Cityscape_4
		const parallax_Cityscape_4 = this.add.image(235, 330, "Paralax-Mountains");
		parallax_Cityscape_4.scaleX = 2;
		parallax_Cityscape_4.scaleY = 2;
		parallax_Cityscape_4.angle = -180;
		parallax_Cityscape_4.flipX = true;
		parallax_Cityscape_4.tintFill = true;
		parallax_Cityscape_4.tintTopLeft = 15497347;
		parallax_Cityscape_4.tintTopRight = 15497347;
		parallax_Cityscape_4.tintBottomLeft = 15497347;
		parallax_Cityscape_4.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape_4);

		// parallax_Cityscape_611
		const parallax_Cityscape_611 = this.add.image(1256, 158, "Paralax-Mountains");
		parallax_Cityscape_611.flipX = true;
		parallax_Cityscape_611.tintFill = true;
		parallax_Cityscape_611.tintTopLeft = 15497347;
		parallax_Cityscape_611.tintTopRight = 15497347;
		parallax_Cityscape_611.tintBottomLeft = 15497347;
		parallax_Cityscape_611.tintBottomRight = 15497347;
		bGLayerNinja.add(parallax_Cityscape_611);

		// parallax_Cityscape_1511
		const parallax_Cityscape_1511 = this.add.image(1145, 191, "Paralax-Mountains");
		parallax_Cityscape_1511.tintFill = true;
		parallax_Cityscape_1511.tintTopLeft = 15294573;
		parallax_Cityscape_1511.tintTopRight = 15294573;
		parallax_Cityscape_1511.tintBottomLeft = 15294573;
		parallax_Cityscape_1511.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_1511);

		// parallax_Cityscape_1611
		const parallax_Cityscape_1611 = this.add.image(1058, 182, "Paralax-Mountains");
		parallax_Cityscape_1611.tintFill = true;
		parallax_Cityscape_1611.tintTopLeft = 15294573;
		parallax_Cityscape_1611.tintTopRight = 15294573;
		parallax_Cityscape_1611.tintBottomLeft = 15294573;
		parallax_Cityscape_1611.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_1611);

		// parallax_Cityscape_1711
		const parallax_Cityscape_1711 = this.add.image(-221, 182, "Paralax-Mountains");
		parallax_Cityscape_1711.tintFill = true;
		parallax_Cityscape_1711.tintTopLeft = 15294573;
		parallax_Cityscape_1711.tintTopRight = 15294573;
		parallax_Cityscape_1711.tintBottomLeft = 15294573;
		parallax_Cityscape_1711.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_1711);

		// parallax_Cityscape_1811
		const parallax_Cityscape_1811 = this.add.image(739, 182, "Paralax-Mountains");
		parallax_Cityscape_1811.tintFill = true;
		parallax_Cityscape_1811.tintTopLeft = 15294573;
		parallax_Cityscape_1811.tintTopRight = 15294573;
		parallax_Cityscape_1811.tintBottomLeft = 15294573;
		parallax_Cityscape_1811.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_1811);

		// parallax_Cityscape_19111
		const parallax_Cityscape_19111 = this.add.image(99, 182, "Paralax-Mountains");
		parallax_Cityscape_19111.tintFill = true;
		parallax_Cityscape_19111.tintTopLeft = 15294573;
		parallax_Cityscape_19111.tintTopRight = 15294573;
		parallax_Cityscape_19111.tintBottomLeft = 15294573;
		parallax_Cityscape_19111.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_19111);

		// parallax_Cityscape_2011
		const parallax_Cityscape_2011 = this.add.image(419, 181, "Paralax-Mountains");
		parallax_Cityscape_2011.tintFill = true;
		parallax_Cityscape_2011.tintTopLeft = 15294573;
		parallax_Cityscape_2011.tintTopRight = 15294573;
		parallax_Cityscape_2011.tintBottomLeft = 15294573;
		parallax_Cityscape_2011.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_2011);

		// parallax_Cityscape_3
		const parallax_Cityscape_3 = this.add.image(253, 378, "Paralax-Mountains");
		parallax_Cityscape_3.scaleX = 2;
		parallax_Cityscape_3.scaleY = 2;
		parallax_Cityscape_3.angle = -180;
		parallax_Cityscape_3.tintFill = true;
		parallax_Cityscape_3.tintTopLeft = 15294573;
		parallax_Cityscape_3.tintTopRight = 15294573;
		parallax_Cityscape_3.tintBottomLeft = 15294573;
		parallax_Cityscape_3.tintBottomRight = 15294573;
		bGLayerNinja.add(parallax_Cityscape_3);

		// pppBGContainer
		const pppBGContainer = this.add.container(0, 0);
		pppBGContainer.visible = false;

		// parallax_Backing111
		const parallax_Backing111 = this.add.image(248, 128, "Parallax-Backing");
		parallax_Backing111.scaleX = 8.415017240244449;
		pppBGContainer.add(parallax_Backing111);

		// parallax_Cityscape
		const parallax_Cityscape = this.add.image(156, 169, "Parallax-Cityscape");
		parallax_Cityscape.tintFill = true;
		parallax_Cityscape.tintTopLeft = 16756150;
		parallax_Cityscape.tintTopRight = 16756150;
		parallax_Cityscape.tintBottomLeft = 16756150;
		parallax_Cityscape.tintBottomRight = 16756150;
		pppBGContainer.add(parallax_Cityscape);

		// parallax_Cityscape_20
		const parallax_Cityscape_20 = this.add.image(36, 224, "Parallax-Cityscape");
		parallax_Cityscape_20.tintFill = true;
		parallax_Cityscape_20.tintTopLeft = 16028060;
		parallax_Cityscape_20.tintTopRight = 16028060;
		parallax_Cityscape_20.tintBottomLeft = 16028060;
		parallax_Cityscape_20.tintBottomRight = 16028060;
		pppBGContainer.add(parallax_Cityscape_20);

		// parallax_Cityscape_1
		const parallax_Cityscape_1 = this.add.image(472, 169, "Parallax-Cityscape");
		parallax_Cityscape_1.tintFill = true;
		parallax_Cityscape_1.tintTopLeft = 16756150;
		parallax_Cityscape_1.tintTopRight = 16756150;
		parallax_Cityscape_1.tintBottomLeft = 16756150;
		parallax_Cityscape_1.tintBottomRight = 16756150;
		pppBGContainer.add(parallax_Cityscape_1);

		// parallax_Cityscape_2
		const parallax_Cityscape_2 = this.add.image(355, 224, "Parallax-Cityscape");
		parallax_Cityscape_2.tintFill = true;
		parallax_Cityscape_2.tintTopLeft = 16028060;
		parallax_Cityscape_2.tintTopRight = 16028060;
		parallax_Cityscape_2.tintBottomLeft = 16028060;
		parallax_Cityscape_2.tintBottomRight = 16028060;
		pppBGContainer.add(parallax_Cityscape_2);

		// ngioContainer
		const ngioContainer = this.add.container(240, 135);
		ngioContainer.visible = false;

		// logInButton_2
		const logInButton_2 = this.add.rectangle(-3, -7, 250, 80);
		logInButton_2.isFilled = true;
		logInButton_2.fillColor = 16756150;
		logInButton_2.isStroked = true;
		logInButton_2.strokeColor = 13067119;
		logInButton_2.lineWidth = 3;
		ngioContainer.add(logInButton_2);

		// ngioInfoText
		const ngioInfoText = this.add.bitmapText(0, -10, "nokia", "Log into Newgrounds to earn medals and use cloud saves across devices!");
		ngioInfoText.setOrigin(0.5, 0.5);
		ngioInfoText.tintTopLeft = 5388102;
		ngioInfoText.tintTopRight = 5388102;
		ngioInfoText.tintBottomLeft = 5388102;
		ngioInfoText.tintBottomRight = 5388102;
		ngioInfoText.text = "Log into Newgrounds to earn medals and use cloud saves across devices!";
		ngioInfoText.fontSize = -10;
		ngioInfoText.align = 1;
		ngioInfoText.maxWidth = 190;
		ngioInfoText.dropShadowColor = 9737364;
		ngioContainer.add(ngioInfoText);

		// leftButton
		const leftButton = this.add.rectangle(-59, 46, 90, 40);
		leftButton.isFilled = true;
		leftButton.fillColor = 16765919;
		leftButton.fillAlpha = 0.7;
		leftButton.isStroked = true;
		leftButton.strokeColor = 5388102;
		leftButton.lineWidth = 3;
		ngioContainer.add(leftButton);

		// leftButtonText
		const leftButtonText = this.add.bitmapText(-57, 47, "nokia", "Log in");
		leftButtonText.setOrigin(0.5, 0.5);
		leftButtonText.tintTopLeft = 5388102;
		leftButtonText.tintTopRight = 5388102;
		leftButtonText.tintBottomLeft = 5388102;
		leftButtonText.tintBottomRight = 5388102;
		leftButtonText.text = "Log in";
		leftButtonText.fontSize = -10;
		leftButtonText.align = 1;
		leftButtonText.maxWidth = 170;
		leftButtonText.dropShadowColor = 9737364;
		ngioContainer.add(leftButtonText);

		// rightButton
		const rightButton = this.add.rectangle(56, 46, 90, 40);
		rightButton.isFilled = true;
		rightButton.fillColor = 16765919;
		rightButton.fillAlpha = 0.7;
		rightButton.isStroked = true;
		rightButton.strokeColor = 5388102;
		rightButton.lineWidth = 3;
		ngioContainer.add(rightButton);

		// rightButtonText
		const rightButtonText = this.add.bitmapText(58, 47, "nokia", "No thanks");
		rightButtonText.setOrigin(0.5, 0.5);
		rightButtonText.tintTopLeft = 5388102;
		rightButtonText.tintTopRight = 5388102;
		rightButtonText.tintBottomLeft = 5388102;
		rightButtonText.tintBottomRight = 5388102;
		rightButtonText.text = "No thanks";
		rightButtonText.fontSize = -10;
		rightButtonText.align = 1;
		rightButtonText.maxWidth = 170;
		rightButtonText.dropShadowColor = 9737364;
		ngioContainer.add(rightButtonText);

		// middleButton
		const middleButton = this.add.rectangle(0, 46, 90, 40);
		middleButton.isFilled = true;
		middleButton.fillColor = 16765919;
		middleButton.fillAlpha = 0.7;
		middleButton.isStroked = true;
		middleButton.strokeColor = 5388102;
		middleButton.lineWidth = 3;
		ngioContainer.add(middleButton);

		// middleButtonText
		const middleButtonText = this.add.bitmapText(0, 47, "nokia", "Cancel");
		middleButtonText.setOrigin(0.5, 0.5);
		middleButtonText.tintTopLeft = 5388102;
		middleButtonText.tintTopRight = 5388102;
		middleButtonText.tintBottomLeft = 5388102;
		middleButtonText.tintBottomRight = 5388102;
		middleButtonText.text = "Cancel";
		middleButtonText.fontSize = -10;
		middleButtonText.align = 1;
		middleButtonText.maxWidth = 170;
		middleButtonText.dropShadowColor = 9737364;
		ngioContainer.add(middleButtonText);

		// gameSelectContainer
		const gameSelectContainer = this.add.container(0, 0);
		gameSelectContainer.visible = false;

		// selectPPP
		const selectPPP = this.add.rectangle(26, 72, 188, 138);
		selectPPP.setOrigin(0, 0);
		selectPPP.isFilled = true;
		selectPPP.fillColor = 5388102;
		gameSelectContainer.add(selectPPP);

		// preview_1
		const preview_1 = this.add.rectangle(0, 321, 240, 128);
		preview_1.setOrigin(0, 0);
		preview_1.isFilled = true;
		gameSelectContainer.add(preview_1);

		// selectKFC
		const selectKFC = this.add.rectangle(266, 72, 188, 138);
		selectKFC.setOrigin(0, 0);
		selectKFC.isFilled = true;
		selectKFC.fillColor = 5388102;
		gameSelectContainer.add(selectKFC);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(211, 18, "nokia", "Select Game");
		bitmaptext_3.tintTopLeft = 5388102;
		bitmaptext_3.tintTopRight = 5388102;
		bitmaptext_3.tintBottomLeft = 5388102;
		bitmaptext_3.tintBottomRight = 5388102;
		bitmaptext_3.text = "Select Game";
		bitmaptext_3.fontSize = -8;
		gameSelectContainer.add(bitmaptext_3);

		// desc1
		const desc1 = this.add.bitmapText(270, 214, "nokia", "Sadistic community-made levels. A ninja clan has stolen the Iconic and Priceless Bird Tapper Mobile!");
		desc1.tintTopLeft = 5388102;
		desc1.tintTopRight = 5388102;
		desc1.tintBottomLeft = 5388102;
		desc1.tintBottomRight = 5388102;
		desc1.text = "Sadistic community-made levels. A ninja clan has stolen the Iconic and Priceless Bird Tapper Mobile!";
		desc1.fontSize = -8;
		desc1.maxWidth = 180;
		gameSelectContainer.add(desc1);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(30, 214, "nokia", "The original autorunner campaign. Beat the tar out of the violet army and master the controls!");
		bitmaptext_5.tintTopLeft = 5388102;
		bitmaptext_5.tintTopRight = 5388102;
		bitmaptext_5.tintBottomLeft = 5388102;
		bitmaptext_5.tintBottomRight = 5388102;
		bitmaptext_5.text = "The original autorunner campaign. Beat the tar out of the violet army and master the controls!";
		bitmaptext_5.fontSize = -8;
		bitmaptext_5.maxWidth = 180;
		gameSelectContainer.add(bitmaptext_5);

		// preview_combo
		const preview_combo = this.add.image(721, 470, "preview-combo");
		gameSelectContainer.add(preview_combo);

		// preview_3
		const preview_3 = this.add.rectangle(240, 311, 240, 128);
		preview_3.setOrigin(0, 0);
		preview_3.isFilled = true;
		gameSelectContainer.add(preview_3);

		// previewKFC_1
		const previewKFC_1 = this.add.image(270, 76, "previewKFC");
		previewKFC_1.setOrigin(0, 0);
		gameSelectContainer.add(previewKFC_1);

		// previewPPP_1
		const previewPPP_1 = this.add.image(30, 76, "previewPPP");
		previewPPP_1.setOrigin(0, 0);
		gameSelectContainer.add(previewPPP_1);

		// titleKFC
		const titleKFC = this.add.bitmapText(284, 32, "nokia", "Krampus \nFellowship Clan");
		titleKFC.tintTopLeft = 5388102;
		titleKFC.tintTopRight = 5388102;
		titleKFC.tintBottomLeft = 5388102;
		titleKFC.tintBottomRight = 5388102;
		titleKFC.text = "Krampus \nFellowship Clan";
		titleKFC.fontSize = -16;
		titleKFC.align = 1;
		gameSelectContainer.add(titleKFC);

		// titlePPP
		const titlePPP = this.add.bitmapText(54, 32, "nokia", "Purple \nPlatoon Panic");
		titlePPP.tintTopLeft = 5388102;
		titlePPP.tintTopRight = 5388102;
		titlePPP.tintBottomLeft = 5388102;
		titlePPP.tintBottomRight = 5388102;
		titlePPP.text = "Purple \nPlatoon Panic";
		titlePPP.fontSize = -16;
		titlePPP.align = 1;
		gameSelectContainer.add(titlePPP);

		// anotherTabText
		const anotherTabText = this.add.container(266, 247);
		anotherTabText.visible = false;
		gameSelectContainer.add(anotherTabText);

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 171, 16);
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 5388102;
		rectangle.isStroked = true;
		rectangle.strokeColor = 11558825;
		anotherTabText.add(rectangle);

		// anotherTabTextReal_1
		const anotherTabTextReal_1 = this.add.bitmapText(9, 3, "nokia", "!  Game will open in another tab");
		anotherTabTextReal_1.tintTopLeft = 11558825;
		anotherTabTextReal_1.tintTopRight = 11558825;
		anotherTabTextReal_1.tintBottomLeft = 11558825;
		anotherTabTextReal_1.tintBottomRight = 11558825;
		anotherTabTextReal_1.text = "!  Game will open in another tab";
		anotherTabTextReal_1.fontSize = -8;
		anotherTabText.add(anotherTabTextReal_1);

		// titleContainer
		const titleContainer = this.add.container(0, 0);

		// logo
		const logo = this.add.image(240, 116, "logo");
		logo.scaleX = 2;
		logo.scaleY = 2;
		titleContainer.add(logo);

		// startText
		const startText = this.add.bitmapText(240, 238, "nokia", "Click / tap to start");
		startText.setOrigin(0.5, 0.5);
		startText.tintTopLeft = 5388102;
		startText.tintTopRight = 5388102;
		startText.tintBottomLeft = 5388102;
		startText.tintBottomRight = 5388102;
		startText.text = "Click / tap to start";
		startText.fontSize = -10;
		startText.align = 1;
		startText.dropShadowColor = 9737364;
		titleContainer.add(startText);

		// creditsText
		const creditsText = this.add.bitmapText(240, 30, "nokia", "BobbyBurt - ProsciuttoMan - Dry - Shane Mesa");
		creditsText.setOrigin(0.5, 0.5);
		creditsText.tintTopLeft = 5388102;
		creditsText.tintTopRight = 5388102;
		creditsText.tintBottomLeft = 5388102;
		creditsText.tintBottomRight = 5388102;
		creditsText.text = "BobbyBurt - ProsciuttoMan - Dry - Shane Mesa";
		creditsText.fontSize = -10;
		creditsText.align = 1;
		creditsText.dropShadowColor = 9737364;
		titleContainer.add(creditsText);

		// KFCSub2
		const kFCSub2 = this.add.rectangle(243, 201, 170, 20);
		kFCSub2.isFilled = true;
		kFCSub2.fillColor = 5388102;
		titleContainer.add(kFCSub2);

		// KFCSub
		const kFCSub = this.add.bitmapText(243, 197, "nokia", "vs the Krampus Fellowship Clan");
		kFCSub.setOrigin(0.5, 0);
		kFCSub.text = "vs the Krampus Fellowship Clan";
		kFCSub.fontSize = -8;
		titleContainer.add(kFCSub);

		// parallax_Backing1111 (components)
		new ScrollFactor(parallax_Backing1111);

		// parallax_Backing (components)
		new ScrollFactor(parallax_Backing);

		// parallax_Cityscape1111 (components)
		const parallax_Cityscape1111ScrollFactor = new ScrollFactor(parallax_Cityscape1111);
		parallax_Cityscape1111ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_1111 (components)
		const parallax_Cityscape_1111ScrollFactor = new ScrollFactor(parallax_Cityscape_1111);
		parallax_Cityscape_1111ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_211 (components)
		const parallax_Cityscape_211ScrollFactor = new ScrollFactor(parallax_Cityscape_211);
		parallax_Cityscape_211ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_311 (components)
		const parallax_Cityscape_311ScrollFactor = new ScrollFactor(parallax_Cityscape_311);
		parallax_Cityscape_311ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_411 (components)
		const parallax_Cityscape_411ScrollFactor = new ScrollFactor(parallax_Cityscape_411);
		parallax_Cityscape_411ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_4 (components)
		const parallax_Cityscape_4ScrollFactor = new ScrollFactor(parallax_Cityscape_4);
		parallax_Cityscape_4ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_611 (components)
		const parallax_Cityscape_611ScrollFactor = new ScrollFactor(parallax_Cityscape_611);
		parallax_Cityscape_611ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_1511 (components)
		const parallax_Cityscape_1511ScrollFactor = new ScrollFactor(parallax_Cityscape_1511);
		parallax_Cityscape_1511ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_1611 (components)
		const parallax_Cityscape_1611ScrollFactor = new ScrollFactor(parallax_Cityscape_1611);
		parallax_Cityscape_1611ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_1711 (components)
		const parallax_Cityscape_1711ScrollFactor = new ScrollFactor(parallax_Cityscape_1711);
		parallax_Cityscape_1711ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_1811 (components)
		const parallax_Cityscape_1811ScrollFactor = new ScrollFactor(parallax_Cityscape_1811);
		parallax_Cityscape_1811ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_19111 (components)
		const parallax_Cityscape_19111ScrollFactor = new ScrollFactor(parallax_Cityscape_19111);
		parallax_Cityscape_19111ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_2011 (components)
		const parallax_Cityscape_2011ScrollFactor = new ScrollFactor(parallax_Cityscape_2011);
		parallax_Cityscape_2011ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_3 (components)
		const parallax_Cityscape_3ScrollFactor = new ScrollFactor(parallax_Cityscape_3);
		parallax_Cityscape_3ScrollFactor.factorX = 0.25;

		// parallax_Backing111 (components)
		new ScrollFactor(parallax_Backing111);

		this.bGLayerNinja = bGLayerNinja;
		this.parallax_Backing1111 = parallax_Backing1111;
		this.parallax_Backing = parallax_Backing;
		this.pppBGContainer = pppBGContainer;
		this.parallax_Backing111 = parallax_Backing111;
		this.ngioContainer = ngioContainer;
		this.logInButton_2 = logInButton_2;
		this.ngioInfoText = ngioInfoText;
		this.leftButton = leftButton;
		this.leftButtonText = leftButtonText;
		this.rightButton = rightButton;
		this.rightButtonText = rightButtonText;
		this.middleButton = middleButton;
		this.middleButtonText = middleButtonText;
		this.gameSelectContainer = gameSelectContainer;
		this.selectPPP = selectPPP;
		this.selectKFC = selectKFC;
		this.desc1 = desc1;
		this.previewKFC_1 = previewKFC_1;
		this.previewPPP_1 = previewPPP_1;
		this.titleKFC = titleKFC;
		this.titlePPP = titlePPP;
		this.anotherTabText = anotherTabText;
		this.anotherTabTextReal_1 = anotherTabTextReal_1;
		this.titleContainer = titleContainer;
		this.logo = logo;
		this.startText = startText;
		this.creditsText = creditsText;
		this.kFCSub2 = kFCSub2;
		this.kFCSub = kFCSub;

		this.events.emit("scene-awake");
	}

	private bGLayerNinja!: Phaser.GameObjects.Layer;
	private parallax_Backing1111!: Phaser.GameObjects.Image;
	private parallax_Backing!: Phaser.GameObjects.Image;
	private pppBGContainer!: Phaser.GameObjects.Container;
	private parallax_Backing111!: Phaser.GameObjects.Image;
	private ngioContainer!: Phaser.GameObjects.Container;
	private logInButton_2!: Phaser.GameObjects.Rectangle;
	private ngioInfoText!: Phaser.GameObjects.BitmapText;
	private leftButton!: Phaser.GameObjects.Rectangle;
	private leftButtonText!: Phaser.GameObjects.BitmapText;
	private rightButton!: Phaser.GameObjects.Rectangle;
	private rightButtonText!: Phaser.GameObjects.BitmapText;
	private middleButton!: Phaser.GameObjects.Rectangle;
	private middleButtonText!: Phaser.GameObjects.BitmapText;
	private gameSelectContainer!: Phaser.GameObjects.Container;
	private selectPPP!: Phaser.GameObjects.Rectangle;
	private selectKFC!: Phaser.GameObjects.Rectangle;
	private desc1!: Phaser.GameObjects.BitmapText;
	private previewKFC_1!: Phaser.GameObjects.Image;
	private previewPPP_1!: Phaser.GameObjects.Image;
	private titleKFC!: Phaser.GameObjects.BitmapText;
	private titlePPP!: Phaser.GameObjects.BitmapText;
	private anotherTabText!: Phaser.GameObjects.Container;
	private anotherTabTextReal_1!: Phaser.GameObjects.BitmapText;
	private titleContainer!: Phaser.GameObjects.Container;
	private logo!: Phaser.GameObjects.Image;
	private startText!: Phaser.GameObjects.BitmapText;
	private creditsText!: Phaser.GameObjects.BitmapText;
	private kFCSub2!: Phaser.GameObjects.Rectangle;
	private kFCSub!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	private popupTween!: Phaser.Tweens.Tween;
	private selectTitleTween!: Phaser.Tweens.Tween;

	private selectedGame: undefined | 'PPP' | 'KFC';
	/** Set true on first pointer up. Pointer event for game select is ignored until then. */
	private titlescreenUp = false;

	private activePopup: undefined | 'file' | 'clear-file' | 'logging-in' | 'info' | 'wait' | 'loading';

	private loadedCloudSave = false;

	create() {

		console.log('hello???????');

		this.editorCreate();

		this.setupGameSelectMenu();

		// camera
		this.cameras.main.setOrigin(0, 0); 	
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));
		this.cameras.main.fadeIn(200, 255, 255, 255);

		this.setupBG();

		this.kFCSub.setVisible(__MAP_PACK__);
		this.kFCSub2.setVisible(__MAP_PACK__);

    this.creditsText.setVisible(!__MAP_PACK__);

		// start input
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);

		// NGIO menu buttons
		this.leftButton.setInteractive();
		this.leftButton.on('pointerover', () =>
		{
			this.leftButton.fillAlpha = .9
		});
		this.leftButton.on('pointerout', () =>
		{
			this.leftButton.fillAlpha = .7
		});

		this.rightButton.setInteractive();
		this.rightButton.on('pointerover', () =>
		{
			this.rightButton.fillAlpha = .9
		});
		this.rightButton.on('pointerout', () =>
		{
			this.rightButton.fillAlpha = .7
		});

		this.middleButton.setInteractive();
		this.middleButton.on('pointerover', () =>
		{
			this.middleButton.fillAlpha = .9
		});
		this.middleButton.on('pointerout', () =>
		{
			this.middleButton.fillAlpha = .7
		});

		this.input.on('pointerup', () =>
		{
			this.titlescreenUp = true;
		});

		this.game.events.on(`STATUS_READY`, () =>
		{
			console.debug('i hearya. ' + this.activePopup);
			if (this.activePopup === 'logging-in' || this.activePopup === 'wait')
			{
				console.debug('i hearya. ' + this.activePopup);

				cloudSaves.cloud = true;				

				this.showFilePopup();
			}
		});

		this.game.events.on(`STATUS_LOGIN_REQUIRED`, () =>
		{
			console.debug('login req. ' + this.activePopup);
			if (this.activePopup === 'wait')
			{
				this.showInfoPopup();
			}
		});

		this.game.events.on('NGIO-cloud-load-complete', () =>
		{
			if (this.activePopup === 'loading')
			{
				this.loadedCloudSave = true;

				this.showFilePopup();
			}
		});

		this.startTextBlink();

		if (__MAP_PACK__)
		{
			this.logo.setTexture('logoKFC');
		}
	}

	startTextBlink()
	{
		// start text blink
		this.time.delayedCall(700, () =>
		{
			this.startText.setVisible(!this.startText.visible);

			this.startTextBlink();
		});
	}

	showSaveFilePopup()
	{
		if (!cloudSaves.loadData(this))
		{
			this.start(true);
			return;
		}

		this.ngioInfoText.setText(`${cloudSaves.cloud ? 'Cloud save' : 'Save'} file loaded.`);

		this.leftButtonText.setText('New game');
		this.rightButtonText.setText('Continue');
	}

	/**
	 * Sets visuals of popup and plays appear tween.
	 * @param mainText 
	 * @param leftButtonText If undefinded, button will be hidden.
	 * @param middleButtonText If undefinded, button will be hidden.
	 * @param rightButtonText If undefinded, button will be hidden.
	 */
	setPopup(mainText: string, leftButtonText?: string, middleButtonText?: string, rightButtonText?: string, mute?: boolean)
	{
		this.ngioContainer.setVisible(true);

		this.ngioInfoText.setText(mainText);

		// set buttons
		let textParamArray = [ leftButtonText, middleButtonText, rightButtonText];
		let buttonArray = [ this.leftButton, this.middleButton, this.rightButton ];
		let buttonTextArray = [ this.leftButtonText, this.middleButtonText, this.rightButtonText];
		textParamArray.forEach(function (text, index)
		{
			if (text)
			{
				buttonArray[index].setVisible(true);
				buttonTextArray[index].setText(text);
			}
			else
			{
				buttonArray[index].setVisible(false);
				buttonTextArray[index].setText('');
			}
		});
		// Instead of going over this for each button, I'm trying something new by putting them into an array and using a loop.

		// appear tween
		this.ngioContainer.setY(170);
		// this.ngioContainer.setAlpha(0);
		if (this.popupTween)
		{
			this.popupTween.stop();
		}
		this.popupTween = this.tweens.add
		({
			targets: this.ngioContainer,
			duration: 500,
			ease: Phaser.Math.Easing.Cubic.Out,
			y: 135,
			// alpha: 1
		});

		if (!mute)
		{
			SoundManager.play('bird-egg-lay', this);
		}
	}

	clearButtonEvents()
	{
		this.leftButton.off('pointerdown');
		this.middleButton.off('pointerdown');
		this.rightButton.off('pointerdown');
		this.leftButton.off('pointerup');
		this.middleButton.off('pointerup');
		this.rightButton.off('pointerup');
	}

	showLoadingFilePopup()
	{
		this.activePopup = 'loading';

		this.setPopup('Loading cloud save file...', undefined, 'Cancel', undefined);

		this.clearButtonEvents();
		this.middleButton.on('pointerdown', () =>
		{
			NGIO.logOut();

			cloudSaves.cloud = false;

			this.showFilePopup();
		});

	}

	showFilePopup()
	{
		this.activePopup = 'file';

		if (cloudSaves.loadData(this))
		{
			// save data exists

			if (cloudSaves.cloud && !this.loadedCloudSave)
			{
				this.showLoadingFilePopup();
				return;
			}

			let mainText = `${cloudSaves.cloud ? 'Cloud save' : 'Local save'} file loaded.`;
			if (cloudSaves.cloud)
			{
				mainText = `Logged in as ${NGIO.user.name}.\n\n` + mainText; 
			}
			else
			{
				mainText = `Not logged in.\n\n` + mainText; 
			}
			this.setPopup(mainText, 'New Game', undefined, 'Continue');

			this.clearButtonEvents();
			this.leftButton.on('pointerdown', () =>
			{
				this.showFileClearPopup();
			});
			this.rightButton.on('pointerdown', () =>
			{
				this.start(false);
			});
		}
		else
		{
			// no save data

			this.start(true);
		}
	}

	showFileClearPopup()
	{
		this.activePopup = 'clear-file';

		this.setPopup('Are you sure you want to erase your save file and start a new game?', 'No', undefined, 'Yes');

		this.clearButtonEvents();
		this.leftButton.on('pointerdown', () =>
		{
			this.showFilePopup();
		});
		this.rightButton.on('pointerdown', () =>
		{
			cloudSaves.clearData(this);
			this.start(true);
		});
	}

	showLoggingInPopup()
	{
		this.activePopup = 'logging-in';

		this.setPopup('Logging in...\n\nThe Newgrounds Passport will open in another tab.', undefined, 'Cancel', undefined, true);

		NGIO.openLoginPage();

		this.clearButtonEvents();
		this.middleButton.on('pointerdown', () =>
		{
			NGIO.cancelLogin();

			this.showFilePopup();
		});
	}

	showInfoPopup()
	{		
		console.debug('this is the info popup starting');

		this.activePopup = 'info';

		this.setPopup('Log into Newgrounds to earn medals and use cloud saves across devices!', 'No Thanks', undefined, 'Log In');

		this.clearButtonEvents();
		this.leftButton.on('pointerdown', () =>
		{
			NGIO.skipLogin();

			cloudSaves.cloud = false;

			this.showFilePopup();
		});
		this.rightButton.on('pointerup', () =>
		{
			this.showLoggingInPopup();
		});
	}

	showWaitPopup()
	{
		this.activePopup === 'wait';

		this.setPopup('Newgrounds.io initializing, please wait...', undefined, 'Cancel');

		this.clearButtonEvents();
		this.middleButton.on('pointerdown', () =>
		{
			NGIO.logOut();

			this.showFilePopup();
		})
	}

	/** 
	 * Set registry's mobile value based on input.
	 * 
	 * Start the game if loaded.
	 */
	onPointer = (event:any) => 
	{
	// set registry's mobile value
		if (event.type == 'touchstart')
		{
			this.registry.set('mobile', true);
			InputManager.activeInputMode = 'touch';
			this.input.addPointer(3);

			NGIO.logEvent('Mobile Start', (event) => 
			{
				console.debug(`logEvent: ${event}`);
			});
			window.removeEventListener('touchstart', this.onPointer);
		}
		else if (event.type == 'click')
		{
			this.registry.set('mobile', false);

			NGIO.logEvent('Desktop Start', (event) => 
			{
				console.debug(`logEvent: ${event}`);
			});
			window.removeEventListener('click', this.onPointer);

		}

		if (__MAP_PACK__) {
			if (this.cache.audio.exists('main-theme-mp'))
			{
				this.sound.play('main-theme-mp', { volume: 1 });
			}
			else
			{
				console.log('titlescreen music not found!');
			}	
		} else {
			if (this.cache.audio.exists('main-game-2'))
			{
				this.sound.play('main-game-2', { volume: .7 });
			}
			else
			{
				console.log('titlescreen music not found!');
			}
		}

		// this.startText.setAlpha(0);
		this.titleContainer.setVisible(false);
		this.gameSelectContainer.setVisible(true);

		this.gameSelectContainer.setY(35);
		let selectTween = this.tweens.add
		({
			targets: this.gameSelectContainer,
			duration: 500,
			ease: Phaser.Math.Easing.Cubic.Out,
			y: 0,
			// alpha: 1
		});

		// if (newgroundsIOWrapper.status === 'isWaitingStatus')
		// {
		// 	this.setPopup('Please wait...');

		// }

	}

	setupGameSelectMenu()
	{
		if (__MAP_PACK__)
		{
			this.anotherTabText.setX(30);
		}

		this.previewPPP_1.setInteractive();
		this.previewKFC_1.setInteractive();
		this.previewPPP_1.on('pointerup', () =>
		{


			if (!this.titlescreenUp)
				return;

			this.titlePPP.setTint(0xB05FA9);
			this.titleKFC.setTint(0x523746);
			this.selectPPP.setFillStyle(0xB05FA9);
			this.selectKFC.setFillStyle(0x523746);
			this.anotherTabText.setVisible(__MAP_PACK__);

			if (this.selectedGame === 'PPP')
			{
				if (__MAP_PACK__)
				{
					window.open('https://www.newgrounds.com/portal/view/906110', '_blank');
				}
				else
				{
					this.startNGIOMenu();

					this.gameSelectContainer.setVisible(false);
				}
			}

			this.selectedGame = 'PPP';

			this.tweenSelectTitle(this.titlePPP);

			SoundManager.play('bird-egg-lay', this);


		});
		this.previewKFC_1.on('pointerup', () =>
		{
			if (!this.titlescreenUp)
				return;

			this.titleKFC.setTint(0xB05FA9);
			this.titlePPP.setTint(0x523746);
			this.selectKFC.setFillStyle(0xB05FA9);
			this.selectPPP.setFillStyle(0x523746);
			this.anotherTabText.setVisible(!__MAP_PACK__);

			if (this.selectedGame === 'KFC')
			{
				if (!__MAP_PACK__)
				{
					window.open('https://www.newgrounds.com/portal/view/5153570', '_blank');
				}
				else
				{
					this.startNGIOMenu();

					this.gameSelectContainer.setVisible(false);
				}
			}

			this.selectedGame = 'KFC';

			this.tweenSelectTitle(this.titleKFC);

			SoundManager.play('bird-egg-lay', this);

		});
	}

	tweenSelectTitle(target: Phaser.GameObjects.BitmapText)
	{
		if (this.selectTitleTween)
		{
			this.selectTitleTween.stop();
		}
		this.titleKFC.setY(32);
		this.titlePPP.setY(32);
		this.selectTitleTween = this.tweens.add({
			targets: target,
			duration: 200,
			ease: Phaser.Math.Easing.Cubic.Out,
			yoyo: true,
			y: 20
		});
	}

	/** previously called after titlescreen */
	startNGIOMenu()
	{
		console.debug(newgroundsIOWrapper.status)
		if (newgroundsIOWrapper.status === 'isWaitingStatus' || newgroundsIOWrapper.status == undefined)
		{
			this.showWaitPopup();
		}

		if (newgroundsIOWrapper.status === 'STATUS_LOGIN_REQUIRED')
		{
			this.showInfoPopup();
		}

		if (newgroundsIOWrapper.status === 'STATUS_READY')
		{
			cloudSaves.cloud = true;

			this.showFilePopup();
		}
	}

	/**s
	 * loads next scene
	 */
	start(newFile: boolean)
	{
		window.removeEventListener('touchstart', this.onPointer);
		window.removeEventListener('click', this.onPointer);

		// remove music here if applicable

		this.scene.stop(this);
		// this.scene.launch("Titlescreen");

		this.sound.stopAll();

		if (newFile)
		{
			this.registry.set('new-uppercut-input', true);
		}
		if (newFile && !__MAP_PACK__)
		{
			this.registry.set('last-scene', this.scene.key);

			this.registry.set('current-level', 'jump');
			this.registry.set('current-level-index', 0)
			this.scene.stop(this);
			this.scene.launch('LevelUI');
			this.scene.launch('Level');
			return;
		}

		LevelSelect.levelSelectEntry = 'titlescreen';
		this.scene.launch("LevelSelect");
	}

  /**
   * Sets visible BG for PPP or KFC
   */
	setupBG() {
    this.bGLayerNinja.setVisible(__MAP_PACK__);
    this.pppBGContainer.setVisible(!__MAP_PACK__);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
