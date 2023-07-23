
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
import { levelScoreMilestones, arcadeScoreMilestones } from "~/components/LevelScores";
import cloudSaves from "~/API/cloudSaves";

/* END-USER-IMPORTS */

export default class LevelUI extends Phaser.Scene {

	constructor() {
		super("LevelUI");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// TimerBox
		const timerBox = this.add.rectangle(348, 961, 80, 23);
		timerBox.setOrigin(0.5, 0);
		timerBox.visible = false;
		timerBox.isFilled = true;

		// timerText
		const timerText = this.add.bitmapText(323.3856506347656, 857.4503784179688, "nokia", "30:00");
		timerText.visible = false;
		timerText.text = "30:00";
		timerText.fontSize = -16;
		timerText.dropShadowY = 100;
		timerText.dropShadowAlpha = 1;
		timerText.dropShadowColor = 2236962;

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
		const mobileButtonDive = this.add.rectangle(746, 1082, 150, 120);
		mobileButtonDive.setOrigin(1, 1);
		mobileButtonDive.alpha = 0.3;
		mobileButtonDive.isFilled = true;
		mobileButtonDive.fillColor = 8168429;

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

		// mobileButtonLevelSelect
		const mobileButtonLevelSelect = this.add.rectangle(745.9039965335135, 635.8854342086155, 75, 75);
		mobileButtonLevelSelect.setOrigin(1, 0);
		mobileButtonLevelSelect.alpha = 0.5;
		mobileButtonLevelSelect.isFilled = true;
		mobileButtonLevelSelect.fillColor = 13532397;

		// punchChargeEmpty
		const punchChargeEmpty = this.add.image(360, 694, "bird0fist");
		punchChargeEmpty.scaleX = 2;
		punchChargeEmpty.scaleY = 2;
		punchChargeEmpty.angle = 90;
		punchChargeEmpty.setOrigin(0, 0);

		// punchChargeFull
		const punchChargeFull = this.add.image(387, 682, "bird2fist");
		punchChargeFull.scaleX = 2;
		punchChargeFull.scaleY = 2;
		punchChargeFull.angle = 90;
		punchChargeFull.setOrigin(0, 0);

		// fullscreenTestButton
		const fullscreenTestButton = this.add.image(518, 631, "20-test");

		// summaryContainer
		const summaryContainer = this.add.container(0, 0);
		summaryContainer.visible = false;

		// SummaryBox
		const summaryBox = this.add.rectangle(0, 15, 200, 150);
		summaryBox.alpha = 0.5;
		summaryBox.isFilled = true;
		summaryBox.fillColor = 14383236;
		summaryContainer.add(summaryBox);

		// highestComboLabel
		const highestComboLabel = this.add.bitmapText(-70, 10, "nokia", "HIGHEST COMBO:");
		highestComboLabel.visible = false;
		highestComboLabel.text = "HIGHEST COMBO:";
		highestComboLabel.fontSize = -8;
		summaryContainer.add(highestComboLabel);

		// highestCombo
		const highestCombo = this.add.bitmapText(15, 6, "nokia", "6");
		highestCombo.visible = false;
		highestCombo.text = "6";
		highestCombo.fontSize = -16;
		highestCombo.dropShadowY = 2;
		highestCombo.dropShadowAlpha = 1;
		highestCombo.dropShadowColor = 714549;
		summaryContainer.add(highestCombo);

		// soldiermid_0
		const soldiermid_0 = this.add.image(-32, -35, "soldiermid");
		soldiermid_0.flipX = true;
		soldiermid_0.visible = false;
		summaryContainer.add(soldiermid_0);

		// soldiermid_1
		const soldiermid_1 = this.add.image(-15, -35, "soldiermid");
		soldiermid_1.flipX = true;
		soldiermid_1.visible = false;
		summaryContainer.add(soldiermid_1);

		// soldiermid_2
		const soldiermid_2 = this.add.image(3, -35, "soldiermid");
		soldiermid_2.flipX = true;
		soldiermid_2.visible = false;
		summaryContainer.add(soldiermid_2);

		// soldiermid_3
		const soldiermid_3 = this.add.image(20, -35, "soldiermid");
		soldiermid_3.flipX = true;
		soldiermid_3.visible = false;
		summaryContainer.add(soldiermid_3);

		// soldiermid_4
		const soldiermid_4 = this.add.image(38, -35, "soldiermid");
		soldiermid_4.flipX = true;
		soldiermid_4.visible = false;
		summaryContainer.add(soldiermid_4);

		// soldiermid_5
		const soldiermid_5 = this.add.image(-42, -12, "soldiermid");
		soldiermid_5.flipX = true;
		soldiermid_5.visible = false;
		summaryContainer.add(soldiermid_5);

		// soldiermid_6
		const soldiermid_6 = this.add.image(-24, -12, "soldiermid");
		soldiermid_6.flipX = true;
		soldiermid_6.visible = false;
		summaryContainer.add(soldiermid_6);

		// soldiermid_7
		const soldiermid_7 = this.add.image(-7, -12, "soldiermid");
		soldiermid_7.flipX = true;
		soldiermid_7.visible = false;
		summaryContainer.add(soldiermid_7);

		// soldiermid_8
		const soldiermid_8 = this.add.image(11, -12, "soldiermid");
		soldiermid_8.flipX = true;
		soldiermid_8.visible = false;
		summaryContainer.add(soldiermid_8);

		// soldiermid
		const soldiermid = this.add.image(28, -12, "soldiermid");
		soldiermid.flipX = true;
		soldiermid.visible = false;
		summaryContainer.add(soldiermid);

		// soldiermid_9
		const soldiermid_9 = this.add.image(45, -12, "soldiermid");
		soldiermid_9.flipX = true;
		soldiermid_9.visible = false;
		summaryContainer.add(soldiermid_9);

		// postSummaryInstructions
		const postSummaryInstructions = this.add.bitmapText(-67, 49, "nokia", "use <input> to continue.\nuse <input> to retry.\nuse <input> to exit.");
		postSummaryInstructions.visible = false;
		postSummaryInstructions.text = "use <input> to continue.\nuse <input> to retry.\nuse <input> to exit.";
		postSummaryInstructions.fontSize = -8;
		summaryContainer.add(postSummaryInstructions);

		// awardLabel
		const awardLabel = this.add.bitmapText(-69, 31, "nokia", "AWARD:");
		awardLabel.visible = false;
		awardLabel.text = "AWARD:";
		awardLabel.fontSize = -8;
		summaryContainer.add(awardLabel);

		// award
		const award = this.add.bitmapText(-26, 26, "nokia", "BRONZE");
		award.visible = false;
		award.text = "BRONZE";
		award.fontSize = -16;
		award.dropShadowY = 2;
		award.dropShadowAlpha = 1;
		award.dropShadowColor = 714549;
		summaryContainer.add(award);

		// newHighscoreText
		const newHighscoreText = this.add.bitmapText(-94, -55, "nokia", "NEW HIGHSCORE");
		newHighscoreText.visible = false;
		newHighscoreText.text = "NEW HIGHSCORE";
		newHighscoreText.fontSize = -8;
		newHighscoreText.dropShadowY = 1;
		newHighscoreText.dropShadowAlpha = 1;
		newHighscoreText.dropShadowColor = 714549;
		summaryContainer.add(newHighscoreText);

		// scoreText
		const scoreText = this.add.bitmapText(474.2378845214844, 742.5822143554688, "nokia", "999999");
		scoreText.tintTopLeft = 0;
		scoreText.tintTopRight = 0;
		scoreText.tintBottomLeft = 0;
		scoreText.tintBottomRight = 0;
		scoreText.text = "999999";
		scoreText.fontSize = -16;

		// totalScoreText
		const totalScoreText = this.add.bitmapText(485, 767, "nokia", "999999");
		totalScoreText.tintTopLeft = 3223857;
		totalScoreText.tintTopRight = 3223857;
		totalScoreText.tintBottomLeft = 3223857;
		totalScoreText.tintBottomRight = 3223857;
		totalScoreText.text = "999999";
		totalScoreText.fontSize = -8;
		totalScoreText.dropShadowColor = 5329233;

		// arcadeSummaryContainer
		const arcadeSummaryContainer = this.add.container(702.859619140625, 319.77325439453125);
		arcadeSummaryContainer.visible = false;

		// arcadeSummaryBox
		const arcadeSummaryBox = this.add.rectangle(0, 15, 200, 150);
		arcadeSummaryBox.alpha = 0.5;
		arcadeSummaryBox.isFilled = true;
		arcadeSummaryBox.fillColor = 14383236;
		arcadeSummaryContainer.add(arcadeSummaryBox);

		// arcadeScoreLabel
		const arcadeScoreLabel = this.add.bitmapText(-70, -10, "nokia", "TOTAL SCORE:");
		arcadeScoreLabel.visible = false;
		arcadeScoreLabel.text = "TOTAL SCORE:";
		arcadeScoreLabel.fontSize = -8;
		arcadeSummaryContainer.add(arcadeScoreLabel);

		// arcadeSoldier
		const arcadeSoldier = this.add.image(-14, -28, "soldier-marked");
		arcadeSoldier.flipX = true;
		arcadeSoldier.visible = false;
		arcadeSummaryContainer.add(arcadeSoldier);

		// arcadePostSummaryInstructions
		const arcadePostSummaryInstructions = this.add.bitmapText(-67, 49, "nokia", "use <input> to continue.\nuse <input> to retry.\nuse <input> to exit.");
		arcadePostSummaryInstructions.visible = false;
		arcadePostSummaryInstructions.text = "use <input> to continue.\nuse <input> to retry.\nuse <input> to exit.";
		arcadePostSummaryInstructions.fontSize = -8;
		arcadeSummaryContainer.add(arcadePostSummaryInstructions);

		// arcadeAwardLabel
		const arcadeAwardLabel = this.add.bitmapText(-69, 28, "nokia", "AWARD:");
		arcadeAwardLabel.visible = false;
		arcadeAwardLabel.text = "AWARD:";
		arcadeAwardLabel.fontSize = -8;
		arcadeSummaryContainer.add(arcadeAwardLabel);

		// arcadeAward
		const arcadeAward = this.add.bitmapText(-26, 23, "nokia", "BRONZE");
		arcadeAward.visible = false;
		arcadeAward.text = "BRONZE";
		arcadeAward.fontSize = -16;
		arcadeAward.dropShadowY = 2;
		arcadeAward.dropShadowAlpha = 1;
		arcadeAward.dropShadowColor = 714549;
		arcadeSummaryContainer.add(arcadeAward);

		// arcadeNewHighscoreText
		const arcadeNewHighscoreText = this.add.bitmapText(8, -10, "nokia", "NEW HIGHSCORE");
		arcadeNewHighscoreText.visible = false;
		arcadeNewHighscoreText.text = "NEW HIGHSCORE";
		arcadeNewHighscoreText.fontSize = -8;
		arcadeNewHighscoreText.dropShadowY = 1;
		arcadeNewHighscoreText.dropShadowAlpha = 1;
		arcadeNewHighscoreText.dropShadowColor = 714549;
		arcadeSummaryContainer.add(arcadeNewHighscoreText);

		// enemiesKilledText
		const enemiesKilledText = this.add.bitmapText(4, -33, "nokia", "x 99");
		enemiesKilledText.visible = false;
		enemiesKilledText.text = "x 99";
		enemiesKilledText.fontSize = -8;
		arcadeSummaryContainer.add(enemiesKilledText);

		// arcadeSummaryHeader
		const arcadeSummaryHeader = this.add.bitmapText(0, -51, "nokia", "Arcade mode final results");
		arcadeSummaryHeader.setOrigin(0.5, 0.5);
		arcadeSummaryHeader.text = "Arcade mode final results";
		arcadeSummaryHeader.fontSize = -8;
		arcadeSummaryHeader.dropShadowAlpha = 1;
		arcadeSummaryHeader.dropShadowColor = 714549;
		arcadeSummaryContainer.add(arcadeSummaryHeader);

		// arcadeTotalScore
		const arcadeTotalScore = this.add.bitmapText(-70, -1, "nokia", "9999999");
		arcadeTotalScore.visible = false;
		arcadeTotalScore.text = "9999999";
		arcadeTotalScore.fontSize = -16;
		arcadeSummaryContainer.add(arcadeTotalScore);

		// parallax_Backing
		const parallax_Backing = this.add.image(727, 981.5999984741211, "Parallax-Backing");
		parallax_Backing.scaleX = 0.5;
		parallax_Backing.scaleY = 0.15;
		parallax_Backing.setOrigin(1, 0);
		parallax_Backing.visible = false;
		parallax_Backing.alphaTopLeft = 0;
		parallax_Backing.alphaTopRight = 0.4;
		parallax_Backing.alphaBottomLeft = 0;
		parallax_Backing.alphaBottomRight = 0;
		parallax_Backing.tintFill = true;
		parallax_Backing.tintTopLeft = 18942;
		parallax_Backing.tintTopRight = 18942;
		parallax_Backing.tintBottomLeft = 18942;
		parallax_Backing.tintBottomRight = 18942;

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

		// tutorialContainer (components)
		const tutorialContainerAlign = new Align(tutorialContainer);
		tutorialContainerAlign.middle = true;
		tutorialContainerAlign.center = true;

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

		// mobileButtonLevelSelect (components)
		const mobileButtonLevelSelectAlign = new Align(mobileButtonLevelSelect);
		mobileButtonLevelSelectAlign.up = true;
		mobileButtonLevelSelectAlign.right = true;
		new MobileDependent(mobileButtonLevelSelect);
		new MobileButton(mobileButtonLevelSelect);

		// punchChargeEmpty (components)
		const punchChargeEmptyAlign = new Align(punchChargeEmpty);
		punchChargeEmptyAlign.up = true;
		punchChargeEmptyAlign.right = true;
		punchChargeEmptyAlign.horizontalOffset = -10;
		punchChargeEmptyAlign.verticalOffset = 10;

		// punchChargeFull (components)
		const punchChargeFullAlign = new Align(punchChargeFull);
		punchChargeFullAlign.up = true;
		punchChargeFullAlign.right = true;
		punchChargeFullAlign.horizontalOffset = -10;
		punchChargeFullAlign.verticalOffset = 10;

		// fullscreenTestButton (components)
		const fullscreenTestButtonAlign = new Align(fullscreenTestButton);
		fullscreenTestButtonAlign.middle = true;
		fullscreenTestButtonAlign.left = true;
		fullscreenTestButtonAlign.horizontalOffset = -10;

		// summaryContainer (components)
		const summaryContainerAlign = new Align(summaryContainer);
		summaryContainerAlign.middle = true;
		summaryContainerAlign.center = true;

		// scoreText (components)
		const scoreTextAlign = new Align(scoreText);
		scoreTextAlign.up = true;
		scoreTextAlign.left = true;
		scoreTextAlign.horizontalOffset = 10;
		scoreTextAlign.verticalOffset = 10;

		// totalScoreText (components)
		const totalScoreTextAlign = new Align(totalScoreText);
		totalScoreTextAlign.up = true;
		totalScoreTextAlign.left = true;
		totalScoreTextAlign.horizontalOffset = 10;
		totalScoreTextAlign.verticalOffset = 30;

		// arcadeSummaryContainer (components)
		const arcadeSummaryContainerAlign = new Align(arcadeSummaryContainer);
		arcadeSummaryContainerAlign.middle = true;
		arcadeSummaryContainerAlign.center = true;

		// parallax_Backing (components)
		const parallax_BackingAlign = new Align(parallax_Backing);
		parallax_BackingAlign.middle = true;
		parallax_BackingAlign.right = true;

		this.timerText = timerText;
		this.tutorialContainer = tutorialContainer;
		this.tutorialOffsetContainer = tutorialOffsetContainer;
		this.tutorialBox = tutorialBox;
		this.tutorialText = tutorialText;
		this.tutorialCloseText = tutorialCloseText;
		this.inputHint = inputHint;
		this.comboLabelText = comboLabelText;
		this.comboText = comboText;
		this.enemiesText = enemiesText;
		this.enemiesLabelText = enemiesLabelText;
		this.winText = winText;
		this.debugText3 = debugText3;
		this.debugText2 = debugText2;
		this.debugText = debugText;
		this.buildText = buildText;
		this.mobileButtonDive = mobileButtonDive;
		this.mobileButtonPunch = mobileButtonPunch;
		this.mobileButtonUppercut = mobileButtonUppercut;
		this.mobileButtonJump = mobileButtonJump;
		this.mobileButtonLevelSelect = mobileButtonLevelSelect;
		this.punchChargeEmpty = punchChargeEmpty;
		this.punchChargeFull = punchChargeFull;
		this.fullscreenTestButton = fullscreenTestButton;
		this.summaryContainer = summaryContainer;
		this.highestComboLabel = highestComboLabel;
		this.highestCombo = highestCombo;
		this.soldiermid_0 = soldiermid_0;
		this.soldiermid_1 = soldiermid_1;
		this.soldiermid_2 = soldiermid_2;
		this.soldiermid_3 = soldiermid_3;
		this.soldiermid_4 = soldiermid_4;
		this.soldiermid_5 = soldiermid_5;
		this.soldiermid_6 = soldiermid_6;
		this.soldiermid_7 = soldiermid_7;
		this.soldiermid_8 = soldiermid_8;
		this.soldiermid = soldiermid;
		this.soldiermid_9 = soldiermid_9;
		this.postSummaryInstructions = postSummaryInstructions;
		this.awardLabel = awardLabel;
		this.award = award;
		this.newHighscoreText = newHighscoreText;
		this.scoreText = scoreText;
		this.totalScoreText = totalScoreText;
		this.arcadeSummaryContainer = arcadeSummaryContainer;
		this.arcadeScoreLabel = arcadeScoreLabel;
		this.arcadeSoldier = arcadeSoldier;
		this.arcadePostSummaryInstructions = arcadePostSummaryInstructions;
		this.arcadeAwardLabel = arcadeAwardLabel;
		this.arcadeAward = arcadeAward;
		this.arcadeNewHighscoreText = arcadeNewHighscoreText;
		this.enemiesKilledText = enemiesKilledText;
		this.arcadeSummaryHeader = arcadeSummaryHeader;
		this.arcadeTotalScore = arcadeTotalScore;

		this.events.emit("scene-awake");
	}

	public timerText!: Phaser.GameObjects.BitmapText;
	public tutorialContainer!: Phaser.GameObjects.Container;
	private tutorialOffsetContainer!: Phaser.GameObjects.Container;
	public tutorialBox!: Phaser.GameObjects.Rectangle;
	public tutorialText!: Phaser.GameObjects.BitmapText;
	public tutorialCloseText!: Phaser.GameObjects.BitmapText;
	private inputHint!: Phaser.GameObjects.Image;
	public comboLabelText!: Phaser.GameObjects.BitmapText;
	public comboText!: Phaser.GameObjects.BitmapText;
	public enemiesText!: Phaser.GameObjects.BitmapText;
	public enemiesLabelText!: Phaser.GameObjects.BitmapText;
	public winText!: Phaser.GameObjects.BitmapText;
	public debugText3!: Phaser.GameObjects.BitmapText;
	public debugText2!: Phaser.GameObjects.BitmapText;
	public debugText!: Phaser.GameObjects.BitmapText;
	public buildText!: Phaser.GameObjects.BitmapText;
	public mobileButtonDive!: Phaser.GameObjects.Rectangle;
	public mobileButtonPunch!: Phaser.GameObjects.Rectangle;
	public mobileButtonUppercut!: Phaser.GameObjects.Rectangle;
	public mobileButtonJump!: Phaser.GameObjects.Rectangle;
	public mobileButtonLevelSelect!: Phaser.GameObjects.Rectangle;
	private punchChargeEmpty!: Phaser.GameObjects.Image;
	private punchChargeFull!: Phaser.GameObjects.Image;
	private fullscreenTestButton!: Phaser.GameObjects.Image;
	public summaryContainer!: Phaser.GameObjects.Container;
	private highestComboLabel!: Phaser.GameObjects.BitmapText;
	private highestCombo!: Phaser.GameObjects.BitmapText;
	private soldiermid_0!: Phaser.GameObjects.Image;
	private soldiermid_1!: Phaser.GameObjects.Image;
	private soldiermid_2!: Phaser.GameObjects.Image;
	private soldiermid_3!: Phaser.GameObjects.Image;
	private soldiermid_4!: Phaser.GameObjects.Image;
	private soldiermid_5!: Phaser.GameObjects.Image;
	private soldiermid_6!: Phaser.GameObjects.Image;
	private soldiermid_7!: Phaser.GameObjects.Image;
	private soldiermid_8!: Phaser.GameObjects.Image;
	private soldiermid!: Phaser.GameObjects.Image;
	private soldiermid_9!: Phaser.GameObjects.Image;
	public postSummaryInstructions!: Phaser.GameObjects.BitmapText;
	private awardLabel!: Phaser.GameObjects.BitmapText;
	private award!: Phaser.GameObjects.BitmapText;
	private newHighscoreText!: Phaser.GameObjects.BitmapText;
	private scoreText!: Phaser.GameObjects.BitmapText;
	private totalScoreText!: Phaser.GameObjects.BitmapText;
	private arcadeSummaryContainer!: Phaser.GameObjects.Container;
	private arcadeScoreLabel!: Phaser.GameObjects.BitmapText;
	private arcadeSoldier!: Phaser.GameObjects.Image;
	public arcadePostSummaryInstructions!: Phaser.GameObjects.BitmapText;
	private arcadeAwardLabel!: Phaser.GameObjects.BitmapText;
	private arcadeAward!: Phaser.GameObjects.BitmapText;
	private arcadeNewHighscoreText!: Phaser.GameObjects.BitmapText;
	private enemiesKilledText!: Phaser.GameObjects.BitmapText;
	private arcadeSummaryHeader!: Phaser.GameObjects.BitmapText;
	private arcadeTotalScore!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

// tween
	private comboTextTween: Phaser.Tweens.Tween;
	private enemiesTextTween: Phaser.Tweens.Tween;
	private punchChargeTween: Phaser.Tweens.Tween;
	private punchChargeTween2: Phaser.Tweens.Tween;
	private scoreTextTween: Phaser.Tweens.Tween;

// tutorial
	public tutorialVisible = false;
	public tutorialOffsetTween: Phaser.Tweens.Tween;

// summary
	private enemyArray: Array<Phaser.GameObjects.Image>;
	public summaryVisible = false;
	/** Set upon level complete */
	private lastAward: 'none' | 'Bronze' | 'Silver' | 'Gold' = 'none';

	private levelScene: Level;

	protected create() {

		this.editorCreate();

		this.setupCamera();

		this.levelScene = this.scene.get('Level') as Level;

		this.summaryVisible = false;

		this.buildText.setText('Tappy Tappy Boneyard v' + this.game.config.gameVersion);

		this.timerText.setText('30:00');

		this.scoreText.setText('0');

		this.totalScoreText.setText(`total: ${this.game.registry.get('total-score')}`);
		this.totalScoreText.setVisible(this.registry.get('game-mode') === 'arcade');

		this.lastAward = 'none';

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

	// summary enemies
		this.enemyArray = [this.soldiermid_0, this.soldiermid_1, this.soldiermid_2, 
			this.soldiermid_3, this.soldiermid_4, this.soldiermid_5, this.soldiermid_6, 
			this.soldiermid_7, this.soldiermid_8, this.soldiermid, this.soldiermid_9];

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

	/**
	 * 
	 * @param score total level score
	 */
	public setScore(score: number)
	{
		this.scoreText.setText(`${score}`);

		// this.scoreText.setY(20);
		// this.scoreTextTween = this.tweens.add
		// ({
		// 	targets: this.scoreText,
		// 	duration: 300,
		// 	y: 10,
		// 	ease: Phaser.Math.Easing.Circular.Out
		// });
	}

	public setAward(score: number)
	{
		let awardString: 'none' | 'Bronze' | 'Silver' | 'Gold' = 'none';
		let awardColour = 0;

		console.debug(this.game.registry.get('current-level'))
		let milestones = levelScoreMilestones.get
		(this.game.registry.get('current-level')) as Array<number>;
		if (milestones === undefined)
		{
			console.warn('No level score milestone data found for this level key.')
			milestones = [9999, 9999, 9999]
		}

		console.debug(milestones)

		if (score >= milestones[0]&& score < milestones[1])
		{
			awardString = 'Bronze';
			awardColour = 10971430;
		}
		else if (score >= milestones[1]&& score < milestones[2])
		{
			awardString = 'Silver';
			awardColour = 13816530;
		}
		else if (score >= milestones[2])
		{
			awardString = 'Gold';
			awardColour = 16769358;
		}

		this.award.setText(awardString);
		this.award.setDropShadow(-2, 2, awardColour, (awardColour ? 1 : 0));
		this.lastAward = awardString;
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
			targets: [this.punchChargeFull, this.punchChargeEmpty],
			duration: 300,
			ease: Phaser.Math.Easing.Quintic.Out,
			scale: (value? 2 : 1)
		});
		this.punchChargeTween = this.tweens.add
		({
			targets: this.punchChargeFull,
			duration: 300,
			ease: Phaser.Math.Easing.Quintic.Out,
			alpha: (value? 1 : 0),
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

	public showASummaryUI()
	{
		this.arcadeSummaryContainer.setVisible(true);
		this.arcadeNewHighscoreText.setVisible(false);

		this.sound.play('reflect', {volume: .4});

		this.time.delayedCall(1500, this.ASummaryShowScoreLabel, [], this);
	}

	private ASummaryShowScoreLabel()
	{
		this.arcadeScoreLabel.setVisible(true);
		this.sound.play('reflect', {volume: .4});

		this.time.delayedCall(1500, this.ASummaryShowScore, [], this);
	}

	private ASummaryShowScore()
	{
		this.arcadeTotalScore.setText(this.registry.get('total-score'));
		this.arcadeTotalScore.setVisible(true);
		this.sound.play('combo-hit', {volume: 1});

		if (this.registry.get('top-score'))
		{
			if (this.registry.get('total-score') > this.registry.get('top-score'))
			{
				this.registry.set('top-score', this.registry.get('total-score'));
				this.arcadeNewHighscoreText.setVisible(true);
				cloudSaves.saveData(this);
			}
		}
		else
		{
			this.registry.set('top-score', this.registry.get('total-score'));
			cloudSaves.saveData(this);
		}

		this.time.delayedCall(1500, this.ASummaryShowAwardLabel, [], this);
	}

	private ASummaryShowAwardLabel()
	{
		this.arcadeAwardLabel.setVisible(true);
		this.sound.play('reflect', {volume: .4});

		this.time.delayedCall(1500, this.ASummaryShowAward, [], this);
	}

	private ASummaryShowAward()
	{
		let milestone = 0;

		arcadeScoreMilestones.forEach((value, index) =>
		{
			let totalScore = this.registry.get('total-score');
			if (totalScore > value)
			{
				milestone++;
			}
		});

		const milestones = ['F- grade', 'E grade', 'D grade', 'C grade', 'B grade', 'A grade', 'S+ grade'];

		this.arcadeAward.setText(milestones[milestone]);
		this.arcadeAward.setVisible(true);
		this.sound.play('victory', {volume: 1});

		this.time.delayedCall(4000, this.ASummaryShowInstructions, [], this);
	}

	private ASummaryShowInstructions()
	{
		// this.arcadePostSummaryInstructions.setVisible(true);
		// this.sound.play('reflect', {volume: .4});

		this.levelScene.LoadLevelSelect();

	}

	public setNewHighscore(value: boolean)
	{
		this.newHighscoreText.setVisible(value);
	}

	public showSummaryUI()
	{
		this.summaryContainer.setVisible(true);
		this.summaryVisible = true;

		this.newHighscoreText.setVisible(false);

		if (this.levelScene.enemyList.length > 0)
		{
			this.time.delayedCall(500, this.summaryShowEnemy, [0], this);
		}
		else
		{
			this.time.delayedCall(2000, this.showPostSummaryInstructions, undefined, this);
		}
	}

	private summaryShowEnemy(index: number)
	{
		this.enemyArray[index].setVisible(true);
			/* 	TODO: game crashes if there are more than # enemies. Add a condition to just ignore 
				such a case. 
			*/
		this.sound.play('reflect', {volume: .4});

		// console.debug(index, this.levelScene.enemyList.length);
		if (index < this.levelScene.enemyList.length - 1)
		{
			this.time.delayedCall(300, this.summaryShowEnemy, [index + 1], this);
		}
		else
		{
			this.time.delayedCall(700, this.summaryMarkEnemy, [0], this);
		}
	}

	private summaryMarkEnemy(index: number)
	{
		this.enemyArray[index].setTexture('soldier-marked');
		this.sound.play('enemy-death', {volume: 1});

		// console.debug(index, this.levelScene.enemiesDefeated);
		if (index < this.levelScene.enemiesDefeated - 1)
		{
			this.time.delayedCall(200, this.summaryMarkEnemy, [index + 1], this);			
		}
		else
		{
			this.time.delayedCall(1000, this.summaryShowHighestComboLabel, undefined, this);
		}
	}

	private summaryShowHighestComboLabel()
	{
		this.highestComboLabel.setVisible(true);
		this.sound.play('reflect', {volume: .4});

		this.time.delayedCall(1000, this.summaryShowHighestCombo, undefined, this);
	}

	private summaryShowHighestCombo()
	{
		this.highestCombo.setText(`${this.levelScene.highestCombo}`);
		this.highestCombo.setVisible(true);
		if (this.levelScene.highestCombo > 1)
		{
			this.sound.play('combo-hit', {volume: 1});
		}
		else
		{
			this.highestCombo.dropShadowAlpha = 0;
			this.sound.play('reflect', {volume: .4});
		}

		this.time.delayedCall(1000, this.summaryShowAwardLabel, undefined, this);
	}

	private summaryShowAwardLabel()
	{
		this.awardLabel.setVisible(true);
		this.sound.play('reflect', {volume: .4});

		this.time.delayedCall(1000, this.summaryShowAward, undefined, this);
	}

	private summaryShowAward()
	{
		// award text set done elsewhere

		this.award.setVisible(true);

		this.sound.play((this.lastAward !== 'none' ? 'combo-hit' : 'reflect'), 
		{volume: 1});

		this.time.delayedCall(1000, this.showPostSummaryInstructions, undefined, this);
	}

	private showPostSummaryInstructions()
	{
		this.postSummaryInstructions.setText(
			`${InputManager.getInputName('menu-confirm')} to continue.\n
			${InputManager.getInputName('menu-back')} to exit.`
			);
		this.postSummaryInstructions.setVisible(true);
		this.sound.play('reflect', {volume: .4});
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
