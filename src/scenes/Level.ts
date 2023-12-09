/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactor from "../components/ScrollFactor";
import playerPrefab from "../prefabs/playerPrefab";
/* START-USER-IMPORTS */

import BalloonEnemy from "~/prefabs/BalloonEnemy";
import EnemyPrefab from "~/prefabs/EnemyPrefab";
import GroundEnemy from "~/prefabs/GroundEnemy";
import BulletPrefab from "~/prefabs/BulletPrefab";
import BombPrefab from "~/prefabs/BombPrefab";
import explosionPrefab from "~/prefabs/explosionPrefab";
import CameraUtil from "~/components/CameraUtil";
import TilemapUtil from "~/components/TilemapUtil";
import VisionPoly from "~/components/VisionPoly";
import PogoEnemy from "~/prefabs/PogoEnemy";
import ScorePopup from "~/prefabs/scorePopup";
import SoundManager from "~/components/SoundManager";
import LevelUI from "./LevelUI";
import tutorialManager from "~/components/tutorialManager";
import InputManager from "~/components/InputManager";
import LevelSelect from "./LevelSelect";
import MinePrefab from "~/prefabs/MinePrefab";
import cameraOffsetTrigger from "~/components/CameraOffsetTrigger";
import cloudSaves from "~/API/cloudSaves";
import { getEarnedAward } from "~/components/LevelScores";
import TapperDeadProp from "prefabs/tapperDeadProp";

/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// BGLayerIndustry
		const bGLayerIndustry = this.add.layer();
		bGLayerIndustry.visible = false;

		// parallax_Backing111
		const parallax_Backing111 = this.add.image(352, 306, "Parallax-Backing");
		parallax_Backing111.scaleX = 8.415017240244449;
		bGLayerIndustry.add(parallax_Backing111);

		// parallax_Cityscape111
		const parallax_Cityscape111 = this.add.image(480, 299, "Parallax-Industry");
		parallax_Cityscape111.tintFill = true;
		parallax_Cityscape111.tintTopLeft = 16756150;
		parallax_Cityscape111.tintTopRight = 16756150;
		parallax_Cityscape111.tintBottomLeft = 16756150;
		parallax_Cityscape111.tintBottomRight = 16756150;
		bGLayerIndustry.add(parallax_Cityscape111);

		// parallax_Cityscape_111
		const parallax_Cityscape_111 = this.add.image(160, 299, "Parallax-Industry");
		parallax_Cityscape_111.tintFill = true;
		parallax_Cityscape_111.tintTopLeft = 16756150;
		parallax_Cityscape_111.tintTopRight = 16756150;
		parallax_Cityscape_111.tintBottomLeft = 16756150;
		parallax_Cityscape_111.tintBottomRight = 16756150;
		bGLayerIndustry.add(parallax_Cityscape_111);

		// parallax_Cityscape_21
		const parallax_Cityscape_21 = this.add.image(800, 299, "Parallax-Industry");
		parallax_Cityscape_21.tintFill = true;
		parallax_Cityscape_21.tintTopLeft = 16756150;
		parallax_Cityscape_21.tintTopRight = 16756150;
		parallax_Cityscape_21.tintBottomLeft = 16756150;
		parallax_Cityscape_21.tintBottomRight = 16756150;
		bGLayerIndustry.add(parallax_Cityscape_21);

		// parallax_Cityscape_31
		const parallax_Cityscape_31 = this.add.image(-160, 299, "Parallax-Industry");
		parallax_Cityscape_31.tintFill = true;
		parallax_Cityscape_31.tintTopLeft = 16756150;
		parallax_Cityscape_31.tintTopRight = 16756150;
		parallax_Cityscape_31.tintBottomLeft = 16756150;
		parallax_Cityscape_31.tintBottomRight = 16756150;
		bGLayerIndustry.add(parallax_Cityscape_31);

		// parallax_Cityscape_41
		const parallax_Cityscape_41 = this.add.image(1119, 299, "Parallax-Industry");
		parallax_Cityscape_41.tintFill = true;
		parallax_Cityscape_41.tintTopLeft = 16756150;
		parallax_Cityscape_41.tintTopRight = 16756150;
		parallax_Cityscape_41.tintBottomLeft = 16756150;
		parallax_Cityscape_41.tintBottomRight = 16756150;
		bGLayerIndustry.add(parallax_Cityscape_41);

		// parallax_Cityscape_51
		const parallax_Cityscape_51 = this.add.image(357, 372, "Parallax-Industry");
		parallax_Cityscape_51.scaleX = 9.144642541425284;
		parallax_Cityscape_51.scaleY = 9.144642541425284;
		parallax_Cityscape_51.setOrigin(0.5, 0);
		parallax_Cityscape_51.flipY = true;
		parallax_Cityscape_51.tintFill = true;
		parallax_Cityscape_51.tintTopLeft = 16028060;
		parallax_Cityscape_51.tintTopRight = 16028060;
		parallax_Cityscape_51.tintBottomLeft = 16028060;
		parallax_Cityscape_51.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_51);

		// parallax_Cityscape_61
		const parallax_Cityscape_61 = this.add.image(1439, 299, "Parallax-Industry");
		parallax_Cityscape_61.tintFill = true;
		parallax_Cityscape_61.tintTopLeft = 16756150;
		parallax_Cityscape_61.tintTopRight = 16756150;
		parallax_Cityscape_61.tintBottomLeft = 16756150;
		parallax_Cityscape_61.tintBottomRight = 16756150;
		bGLayerIndustry.add(parallax_Cityscape_61);

		// parallax_Cityscape_151
		const parallax_Cityscape_151 = this.add.image(1328, 334, "Parallax-Industry");
		parallax_Cityscape_151.tintFill = true;
		parallax_Cityscape_151.tintTopLeft = 16028060;
		parallax_Cityscape_151.tintTopRight = 16028060;
		parallax_Cityscape_151.tintBottomLeft = 16028060;
		parallax_Cityscape_151.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_151);

		// parallax_Cityscape_161
		const parallax_Cityscape_161 = this.add.image(1008, 334, "Parallax-Industry");
		parallax_Cityscape_161.tintFill = true;
		parallax_Cityscape_161.tintTopLeft = 16028060;
		parallax_Cityscape_161.tintTopRight = 16028060;
		parallax_Cityscape_161.tintBottomLeft = 16028060;
		parallax_Cityscape_161.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_161);

		// parallax_Cityscape_171
		const parallax_Cityscape_171 = this.add.image(-271, 334, "Parallax-Industry");
		parallax_Cityscape_171.tintFill = true;
		parallax_Cityscape_171.tintTopLeft = 16028060;
		parallax_Cityscape_171.tintTopRight = 16028060;
		parallax_Cityscape_171.tintBottomLeft = 16028060;
		parallax_Cityscape_171.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_171);

		// parallax_Cityscape_181
		const parallax_Cityscape_181 = this.add.image(689, 334, "Parallax-Industry");
		parallax_Cityscape_181.tintFill = true;
		parallax_Cityscape_181.tintTopLeft = 16028060;
		parallax_Cityscape_181.tintTopRight = 16028060;
		parallax_Cityscape_181.tintBottomLeft = 16028060;
		parallax_Cityscape_181.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_181);

		// parallax_Cityscape_1911
		const parallax_Cityscape_1911 = this.add.image(49, 334, "Parallax-Industry");
		parallax_Cityscape_1911.tintFill = true;
		parallax_Cityscape_1911.tintTopLeft = 16028060;
		parallax_Cityscape_1911.tintTopRight = 16028060;
		parallax_Cityscape_1911.tintBottomLeft = 16028060;
		parallax_Cityscape_1911.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_1911);

		// parallax_Cityscape_201
		const parallax_Cityscape_201 = this.add.image(369, 334, "Parallax-Industry");
		parallax_Cityscape_201.tintFill = true;
		parallax_Cityscape_201.tintTopLeft = 16028060;
		parallax_Cityscape_201.tintTopRight = 16028060;
		parallax_Cityscape_201.tintBottomLeft = 16028060;
		parallax_Cityscape_201.tintBottomRight = 16028060;
		bGLayerIndustry.add(parallax_Cityscape_201);

		// BGLayerCity
		const bGLayerCity = this.add.layer();
		bGLayerCity.visible = false;

		// parallax_Backing
		const parallax_Backing = this.add.image(352, 306, "Parallax-Backing");
		parallax_Backing.scaleX = 8.415017240244449;
		bGLayerCity.add(parallax_Backing);

		// parallax_Cityscape
		const parallax_Cityscape = this.add.image(480, 318, "Parallax-Cityscape");
		parallax_Cityscape.tintFill = true;
		parallax_Cityscape.tintTopLeft = 16756150;
		parallax_Cityscape.tintTopRight = 16756150;
		parallax_Cityscape.tintBottomLeft = 16756150;
		parallax_Cityscape.tintBottomRight = 16756150;
		bGLayerCity.add(parallax_Cityscape);

		// parallax_Cityscape_1
		const parallax_Cityscape_1 = this.add.image(160, 318, "Parallax-Cityscape");
		parallax_Cityscape_1.tintFill = true;
		parallax_Cityscape_1.tintTopLeft = 16756150;
		parallax_Cityscape_1.tintTopRight = 16756150;
		parallax_Cityscape_1.tintBottomLeft = 16756150;
		parallax_Cityscape_1.tintBottomRight = 16756150;
		bGLayerCity.add(parallax_Cityscape_1);

		// parallax_Cityscape_2
		const parallax_Cityscape_2 = this.add.image(800, 318, "Parallax-Cityscape");
		parallax_Cityscape_2.tintFill = true;
		parallax_Cityscape_2.tintTopLeft = 16756150;
		parallax_Cityscape_2.tintTopRight = 16756150;
		parallax_Cityscape_2.tintBottomLeft = 16756150;
		parallax_Cityscape_2.tintBottomRight = 16756150;
		bGLayerCity.add(parallax_Cityscape_2);

		// parallax_Cityscape_3
		const parallax_Cityscape_3 = this.add.image(-160, 318, "Parallax-Cityscape");
		parallax_Cityscape_3.tintFill = true;
		parallax_Cityscape_3.tintTopLeft = 16756150;
		parallax_Cityscape_3.tintTopRight = 16756150;
		parallax_Cityscape_3.tintBottomLeft = 16756150;
		parallax_Cityscape_3.tintBottomRight = 16756150;
		bGLayerCity.add(parallax_Cityscape_3);

		// parallax_Cityscape_4
		const parallax_Cityscape_4 = this.add.image(1119, 318, "Parallax-Cityscape");
		parallax_Cityscape_4.tintFill = true;
		parallax_Cityscape_4.tintTopLeft = 16756150;
		parallax_Cityscape_4.tintTopRight = 16756150;
		parallax_Cityscape_4.tintBottomLeft = 16756150;
		parallax_Cityscape_4.tintBottomRight = 16756150;
		bGLayerCity.add(parallax_Cityscape_4);

		// parallax_Cityscape_5
		const parallax_Cityscape_5 = this.add.image(357, 385, "Parallax-Cityscape");
		parallax_Cityscape_5.scaleX = 9.144642541425284;
		parallax_Cityscape_5.scaleY = 9.144642541425284;
		parallax_Cityscape_5.setOrigin(0.5, 0);
		parallax_Cityscape_5.flipY = true;
		parallax_Cityscape_5.tintFill = true;
		parallax_Cityscape_5.tintTopLeft = 16028060;
		parallax_Cityscape_5.tintTopRight = 16028060;
		parallax_Cityscape_5.tintBottomLeft = 16028060;
		parallax_Cityscape_5.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_5);

		// parallax_Cityscape_6
		const parallax_Cityscape_6 = this.add.image(1439, 318, "Parallax-Cityscape");
		parallax_Cityscape_6.tintFill = true;
		parallax_Cityscape_6.tintTopLeft = 16756150;
		parallax_Cityscape_6.tintTopRight = 16756150;
		parallax_Cityscape_6.tintBottomLeft = 16756150;
		parallax_Cityscape_6.tintBottomRight = 16756150;
		bGLayerCity.add(parallax_Cityscape_6);

		// parallax_Cityscape_15
		const parallax_Cityscape_15 = this.add.image(1328, 347, "Parallax-Cityscape");
		parallax_Cityscape_15.tintFill = true;
		parallax_Cityscape_15.tintTopLeft = 16028060;
		parallax_Cityscape_15.tintTopRight = 16028060;
		parallax_Cityscape_15.tintBottomLeft = 16028060;
		parallax_Cityscape_15.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_15);

		// parallax_Cityscape_16
		const parallax_Cityscape_16 = this.add.image(1008, 347, "Parallax-Cityscape");
		parallax_Cityscape_16.tintFill = true;
		parallax_Cityscape_16.tintTopLeft = 16028060;
		parallax_Cityscape_16.tintTopRight = 16028060;
		parallax_Cityscape_16.tintBottomLeft = 16028060;
		parallax_Cityscape_16.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_16);

		// parallax_Cityscape_17
		const parallax_Cityscape_17 = this.add.image(-271, 347, "Parallax-Cityscape");
		parallax_Cityscape_17.tintFill = true;
		parallax_Cityscape_17.tintTopLeft = 16028060;
		parallax_Cityscape_17.tintTopRight = 16028060;
		parallax_Cityscape_17.tintBottomLeft = 16028060;
		parallax_Cityscape_17.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_17);

		// parallax_Cityscape_18
		const parallax_Cityscape_18 = this.add.image(689, 347, "Parallax-Cityscape");
		parallax_Cityscape_18.tintFill = true;
		parallax_Cityscape_18.tintTopLeft = 16028060;
		parallax_Cityscape_18.tintTopRight = 16028060;
		parallax_Cityscape_18.tintBottomLeft = 16028060;
		parallax_Cityscape_18.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_18);

		// parallax_Cityscape_19
		const parallax_Cityscape_19 = this.add.image(49, 347, "Parallax-Cityscape");
		parallax_Cityscape_19.tintFill = true;
		parallax_Cityscape_19.tintTopLeft = 16028060;
		parallax_Cityscape_19.tintTopRight = 16028060;
		parallax_Cityscape_19.tintBottomLeft = 16028060;
		parallax_Cityscape_19.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_19);

		// parallax_Cityscape_20
		const parallax_Cityscape_20 = this.add.image(369, 347, "Parallax-Cityscape");
		parallax_Cityscape_20.tintFill = true;
		parallax_Cityscape_20.tintTopLeft = 16028060;
		parallax_Cityscape_20.tintTopRight = 16028060;
		parallax_Cityscape_20.tintBottomLeft = 16028060;
		parallax_Cityscape_20.tintBottomRight = 16028060;
		bGLayerCity.add(parallax_Cityscape_20);

		// BGLayerHills
		const bGLayerHills = this.add.layer();
		bGLayerHills.visible = false;

		// parallax_Backing_2
		const parallax_Backing_2 = this.add.image(352, 306, "Parallax-Backing");
		parallax_Backing_2.scaleX = 8.415017240244449;
		bGLayerHills.add(parallax_Backing_2);

		// parallax_Hills_1
		const parallax_Hills_1 = this.add.image(160, 318, "Parallax-Forest");
		parallax_Hills_1.tintFill = true;
		parallax_Hills_1.tintTopLeft = 16756150;
		parallax_Hills_1.tintTopRight = 16756150;
		parallax_Hills_1.tintBottomLeft = 16756150;
		parallax_Hills_1.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_1);

		// parallax_Hills_7
		const parallax_Hills_7 = this.add.image(433, 318, "Parallax-Forest");
		parallax_Hills_7.tintFill = true;
		parallax_Hills_7.tintTopLeft = 16756150;
		parallax_Hills_7.tintTopRight = 16756150;
		parallax_Hills_7.tintBottomLeft = 16756150;
		parallax_Hills_7.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_7);

		// parallax_Hills_9
		const parallax_Hills_9 = this.add.image(709, 318, "Parallax-Forest");
		parallax_Hills_9.tintFill = true;
		parallax_Hills_9.tintTopLeft = 16756150;
		parallax_Hills_9.tintTopRight = 16756150;
		parallax_Hills_9.tintBottomLeft = 16756150;
		parallax_Hills_9.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_9);

		// parallax_Hills_12
		const parallax_Hills_12 = this.add.image(985, 318, "Parallax-Forest");
		parallax_Hills_12.tintFill = true;
		parallax_Hills_12.tintTopLeft = 16756150;
		parallax_Hills_12.tintTopRight = 16756150;
		parallax_Hills_12.tintBottomLeft = 16756150;
		parallax_Hills_12.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_12);

		// parallax_Hills_14
		const parallax_Hills_14 = this.add.image(1261, 318, "Parallax-Forest");
		parallax_Hills_14.tintFill = true;
		parallax_Hills_14.tintTopLeft = 16756150;
		parallax_Hills_14.tintTopRight = 16756150;
		parallax_Hills_14.tintBottomLeft = 16756150;
		parallax_Hills_14.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_14);

		// parallax_Hills_22
		const parallax_Hills_22 = this.add.image(1536, 318, "Parallax-Forest");
		parallax_Hills_22.tintFill = true;
		parallax_Hills_22.tintTopLeft = 16756150;
		parallax_Hills_22.tintTopRight = 16756150;
		parallax_Hills_22.tintBottomLeft = 16756150;
		parallax_Hills_22.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_22);

		// parallax_Hills_24
		const parallax_Hills_24 = this.add.image(-115, 318, "Parallax-Forest");
		parallax_Hills_24.tintFill = true;
		parallax_Hills_24.tintTopLeft = 16756150;
		parallax_Hills_24.tintTopRight = 16756150;
		parallax_Hills_24.tintBottomLeft = 16756150;
		parallax_Hills_24.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_24);

		// parallax_Hills_26
		const parallax_Hills_26 = this.add.image(-323, 318, "Parallax-Forest");
		parallax_Hills_26.tintFill = true;
		parallax_Hills_26.tintTopLeft = 16756150;
		parallax_Hills_26.tintTopRight = 16756150;
		parallax_Hills_26.tintBottomLeft = 16756150;
		parallax_Hills_26.tintBottomRight = 16756150;
		bGLayerHills.add(parallax_Hills_26);

		// parallax_Cityscape_big_5
		const parallax_Cityscape_big_5 = this.add.image(357, 352, "Parallax-Cityscape");
		parallax_Cityscape_big_5.scaleX = 9.144642541425284;
		parallax_Cityscape_big_5.scaleY = 9.144642541425284;
		parallax_Cityscape_big_5.setOrigin(0.5, 0);
		parallax_Cityscape_big_5.flipY = true;
		parallax_Cityscape_big_5.tintFill = true;
		parallax_Cityscape_big_5.tintTopLeft = 16028060;
		parallax_Cityscape_big_5.tintTopRight = 16028060;
		parallax_Cityscape_big_5.tintBottomLeft = 16028060;
		parallax_Cityscape_big_5.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Cityscape_big_5);

		// parallax_Hills_20
		const parallax_Hills_20 = this.add.image(369, 347, "Parallax-Forest");
		parallax_Hills_20.tintFill = true;
		parallax_Hills_20.tintTopLeft = 16028060;
		parallax_Hills_20.tintTopRight = 16028060;
		parallax_Hills_20.tintBottomLeft = 16028060;
		parallax_Hills_20.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_20);

		// parallax_Hills_8
		const parallax_Hills_8 = this.add.image(642, 347, "Parallax-Forest");
		parallax_Hills_8.tintFill = true;
		parallax_Hills_8.tintTopLeft = 16028060;
		parallax_Hills_8.tintTopRight = 16028060;
		parallax_Hills_8.tintBottomLeft = 16028060;
		parallax_Hills_8.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_8);

		// parallax_Hills_10
		const parallax_Hills_10 = this.add.image(918, 347, "Parallax-Forest");
		parallax_Hills_10.tintFill = true;
		parallax_Hills_10.tintTopLeft = 16028060;
		parallax_Hills_10.tintTopRight = 16028060;
		parallax_Hills_10.tintBottomLeft = 16028060;
		parallax_Hills_10.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_10);

		// parallax_Hills_11
		const parallax_Hills_11 = this.add.image(1194, 347, "Parallax-Forest");
		parallax_Hills_11.tintFill = true;
		parallax_Hills_11.tintTopLeft = 16028060;
		parallax_Hills_11.tintTopRight = 16028060;
		parallax_Hills_11.tintBottomLeft = 16028060;
		parallax_Hills_11.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_11);

		// parallax_Hills_13
		const parallax_Hills_13 = this.add.image(1470, 347, "Parallax-Forest");
		parallax_Hills_13.tintFill = true;
		parallax_Hills_13.tintTopLeft = 16028060;
		parallax_Hills_13.tintTopRight = 16028060;
		parallax_Hills_13.tintBottomLeft = 16028060;
		parallax_Hills_13.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_13);

		// parallax_Hills_21
		const parallax_Hills_21 = this.add.image(1745, 347, "Parallax-Forest");
		parallax_Hills_21.tintFill = true;
		parallax_Hills_21.tintTopLeft = 16028060;
		parallax_Hills_21.tintTopRight = 16028060;
		parallax_Hills_21.tintBottomLeft = 16028060;
		parallax_Hills_21.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_21);

		// parallax_Hills_23
		const parallax_Hills_23 = this.add.image(94, 347, "Parallax-Forest");
		parallax_Hills_23.tintFill = true;
		parallax_Hills_23.tintTopLeft = 16028060;
		parallax_Hills_23.tintTopRight = 16028060;
		parallax_Hills_23.tintBottomLeft = 16028060;
		parallax_Hills_23.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_23);

		// parallax_Hills_25
		const parallax_Hills_25 = this.add.image(-114, 347, "Parallax-Forest");
		parallax_Hills_25.tintFill = true;
		parallax_Hills_25.tintTopLeft = 16028060;
		parallax_Hills_25.tintTopRight = 16028060;
		parallax_Hills_25.tintBottomLeft = 16028060;
		parallax_Hills_25.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_25);

		// parallax_Hills_27
		const parallax_Hills_27 = this.add.image(-389, 347, "Parallax-Forest");
		parallax_Hills_27.tintFill = true;
		parallax_Hills_27.tintTopLeft = 16028060;
		parallax_Hills_27.tintTopRight = 16028060;
		parallax_Hills_27.tintBottomLeft = 16028060;
		parallax_Hills_27.tintBottomRight = 16028060;
		bGLayerHills.add(parallax_Hills_27);

		// bGLayer
		const bGLayer = this.add.layer();

		// mainLayer
		const mainLayer = this.add.layer();

		// player
		const player = new playerPrefab(this, 383, 203);
		mainLayer.add(player);

		// BGLayerNinja
		const bGLayerNinja = this.add.layer();

		// parallax_Backing1111
		const parallax_Backing1111 = this.add.image(352, 306, "Parallax-Backing_1");
		parallax_Backing1111.scaleX = 8.415017240244449;
		bGLayerNinja.add(parallax_Backing1111);

		// parallax_Cityscape1111
		const parallax_Cityscape1111 = this.add.image(480, 305, "Paralax-Mountains");
		parallax_Cityscape1111.flipX = true;
		parallax_Cityscape1111.tintTopLeft = 16777215;
		parallax_Cityscape1111.tintTopRight = 16777215;
		parallax_Cityscape1111.tintBottomLeft = 16777215;
		parallax_Cityscape1111.tintBottomRight = 16777215;
		bGLayerNinja.add(parallax_Cityscape1111);

		// parallax_Cityscape_1111
		const parallax_Cityscape_1111 = this.add.image(160, 305, "Paralax-Mountains");
		parallax_Cityscape_1111.flipX = true;
		parallax_Cityscape_1111.tintTopLeft = 16777215;
		parallax_Cityscape_1111.tintTopRight = 16777215;
		parallax_Cityscape_1111.tintBottomLeft = 16777215;
		parallax_Cityscape_1111.tintBottomRight = 16777215;
		bGLayerNinja.add(parallax_Cityscape_1111);

		// parallax_Cityscape_211
		const parallax_Cityscape_211 = this.add.image(800, 305, "Paralax-Mountains");
		parallax_Cityscape_211.flipX = true;
		parallax_Cityscape_211.tintTopLeft = 16777215;
		parallax_Cityscape_211.tintTopRight = 16777215;
		parallax_Cityscape_211.tintBottomLeft = 16777215;
		parallax_Cityscape_211.tintBottomRight = 16777215;
		bGLayerNinja.add(parallax_Cityscape_211);

		// parallax_Cityscape_311
		const parallax_Cityscape_311 = this.add.image(-160, 305, "Paralax-Mountains");
		parallax_Cityscape_311.flipX = true;
		parallax_Cityscape_311.tintTopLeft = 16777215;
		parallax_Cityscape_311.tintTopRight = 16777215;
		parallax_Cityscape_311.tintBottomLeft = 16777215;
		parallax_Cityscape_311.tintBottomRight = 16777215;
		bGLayerNinja.add(parallax_Cityscape_311);

		// parallax_Cityscape_411
		const parallax_Cityscape_411 = this.add.image(1119, 305, "Paralax-Mountains");
		parallax_Cityscape_411.flipX = true;
		parallax_Cityscape_411.tintTopLeft = 16777215;
		parallax_Cityscape_411.tintTopRight = 16777215;
		parallax_Cityscape_411.tintBottomLeft = 16777215;
		parallax_Cityscape_411.tintBottomRight = 16777215;
		bGLayerNinja.add(parallax_Cityscape_411);

		// parallax_Cityscape_611
		const parallax_Cityscape_611 = this.add.image(1439, 306, "Paralax-Mountains");
		parallax_Cityscape_611.flipX = true;
		parallax_Cityscape_611.tintTopLeft = 16777215;
		parallax_Cityscape_611.tintTopRight = 16777215;
		parallax_Cityscape_611.tintBottomLeft = 16777215;
		parallax_Cityscape_611.tintBottomRight = 16777215;
		bGLayerNinja.add(parallax_Cityscape_611);

		// parallax_Cityscape_511
		const parallax_Cityscape_511 = this.add.image(357, 378, "Paralax-Mountains");
		parallax_Cityscape_511.scaleX = 9.144642541425284;
		parallax_Cityscape_511.scaleY = 9.144642541425284;
		parallax_Cityscape_511.setOrigin(0.5, 0);
		parallax_Cityscape_511.flipY = true;
		parallax_Cityscape_511.tintTopLeft = 16759225;
		parallax_Cityscape_511.tintTopRight = 16759225;
		parallax_Cityscape_511.tintBottomLeft = 16759225;
		parallax_Cityscape_511.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_511);

		// parallax_Cityscape_1511
		const parallax_Cityscape_1511 = this.add.image(1328, 327, "Paralax-Mountains");
		parallax_Cityscape_1511.tintTopLeft = 16759225;
		parallax_Cityscape_1511.tintTopRight = 16759225;
		parallax_Cityscape_1511.tintBottomLeft = 16759225;
		parallax_Cityscape_1511.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_1511);

		// parallax_Cityscape_1611
		const parallax_Cityscape_1611 = this.add.image(1008, 327, "Paralax-Mountains");
		parallax_Cityscape_1611.tintTopLeft = 16759225;
		parallax_Cityscape_1611.tintTopRight = 16759225;
		parallax_Cityscape_1611.tintBottomLeft = 16759225;
		parallax_Cityscape_1611.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_1611);

		// parallax_Cityscape_1711
		const parallax_Cityscape_1711 = this.add.image(-271, 327, "Paralax-Mountains");
		parallax_Cityscape_1711.tintTopLeft = 16759225;
		parallax_Cityscape_1711.tintTopRight = 16759225;
		parallax_Cityscape_1711.tintBottomLeft = 16759225;
		parallax_Cityscape_1711.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_1711);

		// parallax_Cityscape_1811
		const parallax_Cityscape_1811 = this.add.image(689, 327, "Paralax-Mountains");
		parallax_Cityscape_1811.tintTopLeft = 16759225;
		parallax_Cityscape_1811.tintTopRight = 16759225;
		parallax_Cityscape_1811.tintBottomLeft = 16759225;
		parallax_Cityscape_1811.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_1811);

		// parallax_Cityscape_19111
		const parallax_Cityscape_19111 = this.add.image(49, 327, "Paralax-Mountains");
		parallax_Cityscape_19111.tintTopLeft = 16759225;
		parallax_Cityscape_19111.tintTopRight = 16759225;
		parallax_Cityscape_19111.tintBottomLeft = 16759225;
		parallax_Cityscape_19111.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_19111);

		// parallax_Cityscape_2011
		const parallax_Cityscape_2011 = this.add.image(369, 327, "Paralax-Mountains");
		parallax_Cityscape_2011.tintTopLeft = 16759225;
		parallax_Cityscape_2011.tintTopRight = 16759225;
		parallax_Cityscape_2011.tintBottomLeft = 16759225;
		parallax_Cityscape_2011.tintBottomRight = 16759225;
		bGLayerNinja.add(parallax_Cityscape_2011);

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const gunEnemyList: Array<any> = [];
		const bombEnemyList: Array<any> = [];
		const bulletList: Array<any> = [];
		const hiddenByTutorialList: Array<any> = [];

		// parallax_Backing111 (components)
		new ScrollFactor(parallax_Backing111);

		// parallax_Cityscape111 (components)
		const parallax_Cityscape111ScrollFactor = new ScrollFactor(parallax_Cityscape111);
		parallax_Cityscape111ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_111 (components)
		const parallax_Cityscape_111ScrollFactor = new ScrollFactor(parallax_Cityscape_111);
		parallax_Cityscape_111ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_21 (components)
		const parallax_Cityscape_21ScrollFactor = new ScrollFactor(parallax_Cityscape_21);
		parallax_Cityscape_21ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_31 (components)
		const parallax_Cityscape_31ScrollFactor = new ScrollFactor(parallax_Cityscape_31);
		parallax_Cityscape_31ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_41 (components)
		const parallax_Cityscape_41ScrollFactor = new ScrollFactor(parallax_Cityscape_41);
		parallax_Cityscape_41ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_51 (components)
		new ScrollFactor(parallax_Cityscape_51);

		// parallax_Cityscape_61 (components)
		const parallax_Cityscape_61ScrollFactor = new ScrollFactor(parallax_Cityscape_61);
		parallax_Cityscape_61ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_151 (components)
		const parallax_Cityscape_151ScrollFactor = new ScrollFactor(parallax_Cityscape_151);
		parallax_Cityscape_151ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_161 (components)
		const parallax_Cityscape_161ScrollFactor = new ScrollFactor(parallax_Cityscape_161);
		parallax_Cityscape_161ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_171 (components)
		const parallax_Cityscape_171ScrollFactor = new ScrollFactor(parallax_Cityscape_171);
		parallax_Cityscape_171ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_181 (components)
		const parallax_Cityscape_181ScrollFactor = new ScrollFactor(parallax_Cityscape_181);
		parallax_Cityscape_181ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_1911 (components)
		const parallax_Cityscape_1911ScrollFactor = new ScrollFactor(parallax_Cityscape_1911);
		parallax_Cityscape_1911ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_201 (components)
		const parallax_Cityscape_201ScrollFactor = new ScrollFactor(parallax_Cityscape_201);
		parallax_Cityscape_201ScrollFactor.factorX = 0.25;

		// parallax_Backing (components)
		new ScrollFactor(parallax_Backing);

		// parallax_Cityscape (components)
		const parallax_CityscapeScrollFactor = new ScrollFactor(parallax_Cityscape);
		parallax_CityscapeScrollFactor.factorX = 0.2;

		// parallax_Cityscape_1 (components)
		const parallax_Cityscape_1ScrollFactor = new ScrollFactor(parallax_Cityscape_1);
		parallax_Cityscape_1ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_2 (components)
		const parallax_Cityscape_2ScrollFactor = new ScrollFactor(parallax_Cityscape_2);
		parallax_Cityscape_2ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_3 (components)
		const parallax_Cityscape_3ScrollFactor = new ScrollFactor(parallax_Cityscape_3);
		parallax_Cityscape_3ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_4 (components)
		const parallax_Cityscape_4ScrollFactor = new ScrollFactor(parallax_Cityscape_4);
		parallax_Cityscape_4ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_5 (components)
		new ScrollFactor(parallax_Cityscape_5);

		// parallax_Cityscape_6 (components)
		const parallax_Cityscape_6ScrollFactor = new ScrollFactor(parallax_Cityscape_6);
		parallax_Cityscape_6ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_15 (components)
		const parallax_Cityscape_15ScrollFactor = new ScrollFactor(parallax_Cityscape_15);
		parallax_Cityscape_15ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_16 (components)
		const parallax_Cityscape_16ScrollFactor = new ScrollFactor(parallax_Cityscape_16);
		parallax_Cityscape_16ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_17 (components)
		const parallax_Cityscape_17ScrollFactor = new ScrollFactor(parallax_Cityscape_17);
		parallax_Cityscape_17ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_18 (components)
		const parallax_Cityscape_18ScrollFactor = new ScrollFactor(parallax_Cityscape_18);
		parallax_Cityscape_18ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_19 (components)
		const parallax_Cityscape_19ScrollFactor = new ScrollFactor(parallax_Cityscape_19);
		parallax_Cityscape_19ScrollFactor.factorX = 0.25;

		// parallax_Cityscape_20 (components)
		const parallax_Cityscape_20ScrollFactor = new ScrollFactor(parallax_Cityscape_20);
		parallax_Cityscape_20ScrollFactor.factorX = 0.25;

		// parallax_Backing_2 (components)
		new ScrollFactor(parallax_Backing_2);

		// parallax_Hills_1 (components)
		const parallax_Hills_1ScrollFactor = new ScrollFactor(parallax_Hills_1);
		parallax_Hills_1ScrollFactor.factorX = 0.2;

		// parallax_Hills_7 (components)
		const parallax_Hills_7ScrollFactor = new ScrollFactor(parallax_Hills_7);
		parallax_Hills_7ScrollFactor.factorX = 0.2;

		// parallax_Hills_9 (components)
		const parallax_Hills_9ScrollFactor = new ScrollFactor(parallax_Hills_9);
		parallax_Hills_9ScrollFactor.factorX = 0.2;

		// parallax_Hills_12 (components)
		const parallax_Hills_12ScrollFactor = new ScrollFactor(parallax_Hills_12);
		parallax_Hills_12ScrollFactor.factorX = 0.2;

		// parallax_Hills_14 (components)
		const parallax_Hills_14ScrollFactor = new ScrollFactor(parallax_Hills_14);
		parallax_Hills_14ScrollFactor.factorX = 0.2;

		// parallax_Hills_22 (components)
		const parallax_Hills_22ScrollFactor = new ScrollFactor(parallax_Hills_22);
		parallax_Hills_22ScrollFactor.factorX = 0.2;

		// parallax_Hills_24 (components)
		const parallax_Hills_24ScrollFactor = new ScrollFactor(parallax_Hills_24);
		parallax_Hills_24ScrollFactor.factorX = 0.2;

		// parallax_Hills_26 (components)
		const parallax_Hills_26ScrollFactor = new ScrollFactor(parallax_Hills_26);
		parallax_Hills_26ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_big_5 (components)
		new ScrollFactor(parallax_Cityscape_big_5);

		// parallax_Hills_20 (components)
		const parallax_Hills_20ScrollFactor = new ScrollFactor(parallax_Hills_20);
		parallax_Hills_20ScrollFactor.factorX = 0.25;

		// parallax_Hills_8 (components)
		const parallax_Hills_8ScrollFactor = new ScrollFactor(parallax_Hills_8);
		parallax_Hills_8ScrollFactor.factorX = 0.25;

		// parallax_Hills_10 (components)
		const parallax_Hills_10ScrollFactor = new ScrollFactor(parallax_Hills_10);
		parallax_Hills_10ScrollFactor.factorX = 0.25;

		// parallax_Hills_11 (components)
		const parallax_Hills_11ScrollFactor = new ScrollFactor(parallax_Hills_11);
		parallax_Hills_11ScrollFactor.factorX = 0.25;

		// parallax_Hills_13 (components)
		const parallax_Hills_13ScrollFactor = new ScrollFactor(parallax_Hills_13);
		parallax_Hills_13ScrollFactor.factorX = 0.25;

		// parallax_Hills_21 (components)
		const parallax_Hills_21ScrollFactor = new ScrollFactor(parallax_Hills_21);
		parallax_Hills_21ScrollFactor.factorX = 0.25;

		// parallax_Hills_23 (components)
		const parallax_Hills_23ScrollFactor = new ScrollFactor(parallax_Hills_23);
		parallax_Hills_23ScrollFactor.factorX = 0.25;

		// parallax_Hills_25 (components)
		const parallax_Hills_25ScrollFactor = new ScrollFactor(parallax_Hills_25);
		parallax_Hills_25ScrollFactor.factorX = 0.25;

		// parallax_Hills_27 (components)
		const parallax_Hills_27ScrollFactor = new ScrollFactor(parallax_Hills_27);
		parallax_Hills_27ScrollFactor.factorX = 0.25;

		// parallax_Backing1111 (components)
		new ScrollFactor(parallax_Backing1111);

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

		// parallax_Cityscape_611 (components)
		const parallax_Cityscape_611ScrollFactor = new ScrollFactor(parallax_Cityscape_611);
		parallax_Cityscape_611ScrollFactor.factorX = 0.2;

		// parallax_Cityscape_511 (components)
		new ScrollFactor(parallax_Cityscape_511);

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

		this.bGLayerIndustry = bGLayerIndustry;
		this.parallax_Backing111 = parallax_Backing111;
		this.bGLayerCity = bGLayerCity;
		this.parallax_Backing = parallax_Backing;
		this.bGLayerHills = bGLayerHills;
		this.parallax_Backing_2 = parallax_Backing_2;
		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.player = player;
		this.bGLayerNinja = bGLayerNinja;
		this.parallax_Backing1111 = parallax_Backing1111;
		this.public_list = public_list;
		this.enemyList = enemyList;
		this.gunEnemyList = gunEnemyList;
		this.bombEnemyList = bombEnemyList;
		this.bulletList = bulletList;
		this.hiddenByTutorialList = hiddenByTutorialList;

		this.events.emit("scene-awake");
	}

	private bGLayerIndustry!: Phaser.GameObjects.Layer;
	private parallax_Backing111!: Phaser.GameObjects.Image;
	private bGLayerCity!: Phaser.GameObjects.Layer;
	private parallax_Backing!: Phaser.GameObjects.Image;
	private bGLayerHills!: Phaser.GameObjects.Layer;
	private parallax_Backing_2!: Phaser.GameObjects.Image;
	private bGLayer!: Phaser.GameObjects.Layer;
	public mainLayer!: Phaser.GameObjects.Layer;
	public player!: playerPrefab;
	private bGLayerNinja!: Phaser.GameObjects.Layer;
	private parallax_Backing1111!: Phaser.GameObjects.Image;
	public public_list!: Array<any>;
	public enemyList!: Array<any>;
	private gunEnemyList!: Array<any>;
	private bombEnemyList!: Array<any>;
	private bulletList!: Array<any>;
	private hiddenByTutorialList!: Array<any>;

	/* START-USER-CODE */

// game state
	/** used to make sure level restart is only called once */
	private restarting = false;
	private reachedGoal = false;
	private currentLevelIndex: number;

// audio
	private music: Phaser.Sound.BaseSound;
	private environmentAudio: Phaser.Sound.BaseSound;

// tilemap
	private tileMap: Phaser.Tilemaps.Tilemap;
	public tileLayer: Phaser.Tilemaps.TilemapLayer;
	private bgTileLayer: Phaser.Tilemaps.TilemapLayer;

// object groups / arrays
	private bombGroup: Phaser.GameObjects.Group;
	private explosionGroup: Phaser.GameObjects.Group;
	private bulletGroup: Phaser.GameObjects.Group;
	private mineList: Array<MinePrefab>;
	/** Polygons used for enemies' player detection. */
	private visionPolys: Array<VisionPoly>;
	private cameraOffsetTriggers: Array<cameraOffsetTrigger>

// particles
	private enemyBloodEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private enemyBloodEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private enemyBloodEmitterManager2: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private enemyBloodEmitter2: Phaser.GameObjects.Particles.ParticleEmitter;
	private explosionEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private explosionEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private smokeEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private smokeEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private dollarEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private dollarEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private comboEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private comboEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
	private confettiEmitterManager: Phaser.GameObjects.Particles.ParticleEmitterManager;
	private confettiEmitter: Phaser.GameObjects.Particles.ParticleEmitter;

// debug
	private debugVisionPolyGraphics: Phaser.GameObjects.Graphics;
	private debugPlaneRectGraphics: Phaser.GameObjects.Graphics;

// plane
	public plane: Phaser.GameObjects.Image;
	private planeRect: Phaser.Geom.Rectangle;
	/** As it's found in enemyList. */

// enemy ref
	/** 
	 * All objects in the elements layer in the tilemap.
	 * 
	 * Indexes correlate to the object's ID, so most of this array's indexes are empty.
	 */
	private mapElementList: Array<any>;
	private goalEnemyIndex: number | undefined;
	public enemiesDefeated = 0;

// arcade
	public combo = 0;
	public highestCombo = 0;
	private comboTextTween: Phaser.Tweens.Tween;
	private scorePopupGroup: Phaser.GameObjects.Group;
	private levelScore: number;
	private levelTimer: Phaser.Time.TimerEvent;
	public score = 0;
	private airborneCombo = false;

// pause
	private hitStopPause = false;
	/** Player / blur initiated pause */
	private manualPause = false;
	private tutorialPuase = false;

	private cameraFollow: Phaser.Math.Vector2;

	private uiScene: LevelUI;

	private tapperDeadProp!:TapperDeadProp;

	private eggZone: Phaser.Geom.Rectangle;
	private gotEggZone = false;

	private ninja = '';

	create()
	{
		this.editorCreate();

	// reset properties
		this.ninja = (this.registry.get('ninja') ? '_1' : '');
		this.reachedGoal = false;
		this.restarting = false;
		this.combo = 0;
		this.highestCombo = 0;
		this.airborneCombo = false;
		this.score = 0;
		this.cameraFollow = new Phaser.Math.Vector2(this.player.x, this.player.y);
		this.currentLevelIndex = this.registry.get('current-level-index');
		this.goalEnemyIndex = undefined;
		this.eggZone = new Phaser.Geom.Rectangle(0, 0, 0, 0);
		this.gotEggZone = false;

	// UI
		this.uiScene = this.scene.get('LevelUI') as LevelUI;
		this.updateEnemiesUI(true);
		this.time.addEvent({ delay: 300, callback: () => 
		{
			if (!__LEVEL_TEST__)
			{
				this.setTutorialUI(true, true);
			}
		}});
		if (this.registry.get('mobile'))
		{
			this.bindMobileButtons();
		}

		this.player.setDepth(-20);

	// tilemap
		this.tileMap = this.add.tilemap(this.registry.get('current-level'));
		this.tileMap.addTilesetImage("tilleset", "tileset");
		this.tileMap.addTilesetImage("bg-tileset", "bg-tileset");



		this.tileLayer = this.tileMap.createLayer("Tile Layer 1", ["tilleset"], 0, 0);
		// why is it misspelled 'tillset'?
		this.mainLayer.add(this.tileLayer);
		this.tileLayer.setDepth(-15)

		this.bgTileLayer = this.tileMap.createLayer('Tile Layer 2', ['bg-tileset'], 0, 0);
		if (this.bgTileLayer)
		{
			this.bgTileLayer.depth = -10;
			this.bGLayer.add(this.bgTileLayer);
			this.bgTileLayer.setDepth(10);
		}


		this.tileLayer.setCollision([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], true);

		this.player.createFist();
		this.mainLayer.add(this.player.fist);

	// BG
		const levelIndex = this.registry.get('current-level-index');
		if (this.ninja === '_1')
		{
			this.bGLayerCity.setVisible(false);
			this.bGLayerHills.setVisible(false);
			this.bGLayerIndustry.setVisible(false);
			this.bGLayerNinja.setVisible(true);
		}
		else if (levelIndex < 9)
		{
			this.bGLayerCity.setVisible(false);
			this.bGLayerHills.setVisible(true);
			this.bGLayerIndustry.setVisible(false);
			this.bGLayerNinja.setVisible(false);
		}
		else if (levelIndex >= 9 && levelIndex < 16)
		{
			this.bGLayerCity.setVisible(true);
			this.bGLayerHills.setVisible(false);
			this.bGLayerIndustry.setVisible(false);
			this.bGLayerNinja.setVisible(false);
		}
		else
		{
			this.bGLayerCity.setVisible(false);
			this.bGLayerHills.setVisible(false);
			this.bGLayerIndustry.setVisible(true);
			this.bGLayerNinja.setVisible(false);
		}

	//mines
		this.mineList = new Array<MinePrefab>();
		this.createMines();

	// physics callbacks
		// playerTilemapCollider
		this.physics.add.collider(this.player, this.tileLayer, this.playerTilemapCollide, undefined, this);

		// soldierSoldierCollide
		this.physics.add.collider(this.enemyList, this.enemyList, this.enemyEnemyCollide, undefined, this);

		// playerEnemyOverlap
		this.physics.add.overlap
			(this.player, this.enemyList, this.playerEnemyOverlap, undefined, this);

		// playerEnemyOverlap
		this.physics.add.overlap
			(this.player.fist, this.enemyList, this.fistEnemyOverlap, undefined, this);

		// bulletTilemapCollide
		this.physics.add.collider
			(this.bulletList, this.tileLayer, this.bulletTilemapCollide, undefined, this);

		// playerBulletOverlap
		this.physics.add.overlap
			(this.bulletList, this.player, this.bulletPlayerCollide, undefined, this);

		// playerMineOverlap
		this.physics.add.overlap
			(this.player, this.mineList, this.playerMineOverlap, undefined, this);

	// camera
		CameraUtil.configureMainCamera(this);
		// this.cameras.main.setScroll(this.player.x, this.player.y);
		this.cameras.main.startFollow(this.cameraFollow, true, .1, .1);
		this.cameras.main.setBounds(0, 0, this.tileLayer.width, this.tileLayer.height);
		// this.cameras.main.setZoom(1);

	// enemies
		this.mapElementList = new Array(150);
		/* TODO: make this array length dynamic to the highest element id in the map, as if there 
		is an id greater than this array length then the game will crash.
		*/
		this.visionPolys = new Array(0);
		// /* TODO: make this array length dynamic to the amount of vision rects that are in the 
		// map, otherwise this acts as an arbitrary max which crashes the game if exceeded.
		// */
		this.cameraOffsetTriggers = new Array(0);
		this.createMapEnemies();
		this.createMapVisionPolys();
		this.createCameraOffsetTriggers();

		this.createEggZone();

	// tilemap special elements
		let startPoint = TilemapUtil.getObjectPositionByGID(38, this.tileMap);
		if (startPoint === null)
		{
			startPoint = new Phaser.Math.Vector2(0, 0);
		}
		startPoint!.x += 8;
		startPoint!.y -= 8;
		this.player.setPosition(startPoint!.x, startPoint!.y);
		this.data.set('startPoint', startPoint);
		this.player.setFlipX(TilemapUtil.getObjectFlipByGID(38, this.tileMap));

		const endPlane: Phaser.Math.Vector2 | null = TilemapUtil.getObjectPositionByGID(39, this.tileMap);
		if (endPlane)
		{
			this.createPlane(endPlane!.x, endPlane.y);
		}

	// object groups
		this.bombGroup = this.add.group({ maxSize: 10, classType: BombPrefab });
		this.physics.add.overlap(this.bombGroup, this.player, this.bombPlayerOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.player.fist, this.bombFistOverlap, undefined, this);
		this.physics.add.overlap(this.bombGroup, this.enemyList, this.bombEnemyOverlap, undefined, this);
		this.physics.add.collider(this.bombGroup, this.tileLayer, this.bombTilemapCollide, undefined, this);

		this.bulletGroup = this.add.group({ maxSize: 100, classType: BulletPrefab })

		this.explosionGroup = this.add.group({ maxSize: 30, classType: explosionPrefab })
		// TODO: define max

		this.scorePopupGroup = this.add.group({ maxSize: 10, classType: ScorePopup })

		this.music = SoundManager.setLevelMusic(this.music, this.registry.get('current-level-index'), this);
		this.addSounds();
		SoundManager.play('reflect', this);
		// this.environmentAudio.play(undefined, {volume: 0.03, loop: true});

	// set active inputMode
		this.input.keyboard.on('keydown', ()=>
		{
			InputManager.activeInputMode = 'keyboard';
		});
		this.input.gamepad.on('down', () =>
		{
			InputManager.activeInputMode = 'gamepad';
		});

	// quick restart

		this.input.keyboard.on('keydown-' + InputManager.getInput('quick-restart', 'keyboard'), () =>
		{
			if (__DEV__ || (!this.uiScene.summaryVisible && !this.uiScene.tutorialVisible))
			{
				this.resetLevel();
			}
		});
		this.input.gamepad.on('down', (pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('quick-restart', 'gamepad'))
			{
				if (!this.uiScene.summaryVisible && !this.uiScene.tutorialVisible)
				{
					this.resetLevel();
				}
			}
		});

	// gameover retry

		this.input.keyboard.on('keydown-' + InputManager.getInput('menu-confirm', 'keyboard'), () =>
		{
			if (this.uiScene.gameOverContainer.visible)
			{
				this.resetLevel();
			}
		});
		this.input.gamepad.on('down', (pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				if (this.uiScene.gameOverContainer.visible)
				{
					this.resetLevel();
				}
			}
		});

	// gameover exit

		this.input.keyboard.on('keydown-' + InputManager.getInput('gameover-back', 'keyboard'), () =>
		{
			if (this.uiScene.gameOverContainer.visible)
			{
				LevelSelect.levelSelectEntry = 'return';
				this.LoadLevelSelect();
			}
		});
		this.input.gamepad.on('down', (pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('gameover-back', 'gamepad'))
			{
				if (this.uiScene.gameOverContainer.visible)
				{
					LevelSelect.levelSelectEntry = 'return';
					this.LoadLevelSelect();
				}
			}
		});

		// level select input
		this.input.keyboard.on('keydown-A', () =>
		{
			if (__DEV__)
			{
				LevelSelect.levelSelectEntry = 'return';
				this.LoadLevelSelect();
			}
		});

	// summary continue - DEPRECATED
		// this.uiScene.input.keyboard.on('keydown-' 
		// + InputManager.getInput('menu-confirm', 'keyboard') , () =>
		// {
		// 	if (this.uiScene.postSummaryInstructions.visible)
		// 	{
		// 		if (this.registry.get('current-level') !== 'finale')
		// 		{
		// 			this.LoadNextLevel();
		// 		}
		// 		else
		// 		{
		// 			LevelSelect.levelSelectEntry = 'return';
		// 			this.LoadLevelSelect();
		// 		}
		// 	}
		// });
		// this.uiScene.input.gamepad.on('down', 
		// 	(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		// {
		// 	if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
		// 	{
		// 		if (this.uiScene.summaryVisible)
		// 		{
		// 			this.LoadNextLevel();
		// 		}
		// 	}
		// });

	// pause / summary exit
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-back', 'keyboard') , () =>
		{
			if (this.manualPause || (this.uiScene.summaryVisible))
			{
				LevelSelect.levelSelectEntry = 'return';
				this.LoadLevelSelect();
			}
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-back', 'gamepad'))
			{
				if (this.manualPause || this.uiScene.summaryVisible)
				{
					LevelSelect.levelSelectEntry = 'return';
					this.LoadLevelSelect();
				}
			}
		});

	// pause restart
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-confirm', 'keyboard') , () =>
		{
			if (this.manualPause)
			{
				this.resetLevel();
			}
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				if (this.manualPause)
				{
					this.resetLevel();
				}
			}
		});

	// tutorial show / hide
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('tutorial-toggle', 'keyboard') , () =>
		{
			this.setTutorialUI(!this.uiScene.tutorialVisible, false);
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('tutorial-toggle', 'gamepad'))
			{
				this.setTutorialUI(!this.uiScene.tutorialVisible, false);
			}
		});

	// pause
		// this.game.events.on(Phaser.Core.Events.BLUR, this.pause, this);
		// if (__DEV__)
		// {
		// 	this.game.events.on(Phaser.Core.Events.FOCUS, this.unpause, this);
		// }
		// this.uiScene.input.gamepad.on('down', 
		// 	(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		// {
		// 	if (button.index === InputManager.getInput('pause', 'gamepad'))
		// 	{
		// 		this.toggleManualPause();
		// 	}
		// });
		// this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('pause', 'keyboard'), () =>
		// {
		// 	this.toggleManualPause();
		// });

	// mute
		this.input.keyboard.on('keydown-M', () =>
		{
			// currently this causes an error
			return;

			if (this.registry.get('muted'))
			{
				this.music.play();
				this.environmentAudio.play();
				this.registry.set('muted', false);
			}
			else
			{
				this.music.stop();
				this.environmentAudio.stop();
				this.registry.set('muted', true);
			}
		});
			// TEMP: this will eventually be replaced with a menu option.

	// DEBUG: console clear key
		if (__DEV__)
		{
			this.input.keyboard.on('keydown-C', () =>
			{
				console.clear();
			});
		}

	// level timer
		this.events.once('player-start', () =>	
		{
			this.levelTimer = this.time.addEvent({
				delay: 30000, callback: () =>
				{
					// if (!this.reachedGoal && !__DEV__)
					// {
					// 	this.resetLevel();
					// }
				}
			});
		});

	// particles
		this.enemyBloodEmitterManager = this.add.particles('soldier-blood-1')
		this.mainLayer.add(this.enemyBloodEmitterManager);
		this.enemyBloodEmitterManager.setDepth(-13);
		this.enemyBloodEmitter = this.enemyBloodEmitterManager.createEmitter({ on: false });

		this.enemyBloodEmitterManager2 = this.add.particles('soldier-blood-2')
		this.mainLayer.add(this.enemyBloodEmitterManager2);
		this.enemyBloodEmitterManager2.setDepth(-13);
		this.enemyBloodEmitter2 = this.enemyBloodEmitterManager2.createEmitter({ on: false });

		this.explosionEmitterManager = this.add.particles('explosion-particle');
		this.mainLayer.add(this.explosionEmitterManager);
		this.explosionEmitterManager.setDepth(-13);
		this.explosionEmitter = this.explosionEmitterManager.createEmitter({ on: false });

		this.smokeEmitterManager = this.add.particles('smoke');
		this.mainLayer.add(this.smokeEmitterManager);
		this.smokeEmitterManager.setDepth(10);
		this.smokeEmitter = this.smokeEmitterManager.createEmitter({ on: false });

		this.dollarEmitterManager = this.add.particles('dollar-2');
		this.mainLayer.add(this.dollarEmitterManager);
		this.dollarEmitterManager.setDepth(10);
		this.dollarEmitter = this.dollarEmitterManager.createEmitter({ on: false });

		this.confettiEmitterManager = this.add.particles('white-px');
		this.mainLayer.add(this.confettiEmitterManager);
		this.confettiEmitterManager.setDepth(10);
		this.confettiEmitter = this.confettiEmitterManager.createEmitter({ on: false });

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();
	}

	update(time: number, delta: number): void
	{
		// update airborne level ui
		// console.debug(this.uiScene);
		this.uiScene.setAirborneLabelAlpha(this.player.onFloor ? .2 : 1);

		if (__DEV__)
		{
			this.setDebugUI();
		}

		if (this.levelTimer && this.player.started)
		{
			this.uiScene.setTimer(this.levelTimer.getRemaining());
		}

		// reset collision values to be overridden by callbacks
		this.player.onFloor = false;

		if (__DEV__)
		{
			this.updateDebugWallDetect();
		}

		this.checkVisionPolys();
		this.checkCameraOffsetTriggers();

		this.checkEggZone()


		// player-plane check
		if (this.planeRect)
		{
			this.planeCheck();
		}

	// out-of-bounds checks
		if (this.player.y > this.cameras.main.getBounds().bottom && this.player.active)
		{
			// this.player.reset();

			// this.resetLevel();
			this.killPlayer(true);
		}
		this.bombGroup.getChildren().forEach(member =>
		{
			const _member = member as BombPrefab;
			// _member.reset();
		});

	// update camera follow
		this.cameraFollow.set(this.player.body.x, this.player.body.y);
		// if (this.uiScene.tutorialContainer.visible && !this.registry.get('mobile'))
		// {
		// 	this.cameraFollow.x += (this.uiScene.tutorialBox.width / 2);
		// }
	}

	/**
	 * removes all listeners
	 */
	destroyScene()
	{
		this.scene.resume();
			// in case hitstop is also active

		this.game.events.off(Phaser.Core.Events.BLUR, this.pause, this);
		this.game.events.off(Phaser.Core.Events.FOCUS, this.unpause, this)

		this.events.off(Phaser.Scenes.Events.UPDATE);
		this.player.removeUpdateListener();
		this.enemyList.forEach((enemy) =>
		{
			let _enemy = enemy as EnemyPrefab;
			_enemy.removeUpdateListener();
		});
	}

	/** reloads the scene */
	resetLevel()
	{
		console.debug('reset level');

		this.registry.set('last-scene', this.scene.key);

		// this function should only happen once
		if (!this.restarting)
		{
			this.restarting = true;
		}
		else 
		{
			return;
		}

		// set level played
		this.registry.set('level-played-' + this.currentLevelIndex, true)

		this.destroyScene();
		this.uiScene.scene.restart();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
		this.scene.restart();
	}

	/** stops this scene, shutting down update listeners, and starts level select scene */
	LoadLevelSelect()
	{
		// this function should only happen once
		if (!this.restarting)
		{
			this.restarting = true;
		}
		else 
		{
			return;
		}

		// set level played
		this.registry.set('level-played-' + this.currentLevelIndex, true)

		this.registry.set('last-scene', this.scene.key);

		this.destroyScene();
		this.uiScene.scene.stop();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
		this.scene.start('LevelSelect');

		this.music.pause();
	}

	/** stops this scene, shutting down update listeners, and starts level select scene */
	LoadNextLevel()
	{
		let nextLevelIndex = this.currentLevelIndex + 1;		
		if (nextLevelIndex === LevelSelect.levelsKey.length)
		{
			LevelSelect.levelSelectEntry = 'complete';
			this.LoadLevelSelect();
			return;
		}

		// this function should only happen once
		if (!this.restarting)
		{
			this.restarting = true;
		}
		else 
		{
			return;
		}

		// set level played
		this.registry.set('level-played-' + this.currentLevelIndex, true)

		this.destroyScene();
		this.uiScene.scene.restart();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
		this.registry.set('current-level-index', nextLevelIndex);
			// TODO: add wrap!
		this.registry.set('current-level', LevelSelect.levelsKey[nextLevelIndex]);
		this.scene.start('Level');
	}

	/** DEPRECATED - Checks for tiles and updates player onWallLeft/Right  */
	playerWallCheck()
	{
		const x = this.player.body.x;
		const y = this.player.body.y;
		const leftOffset = this.player.leftWallChecksOffset;
		const rightOffset = this.player.rightWallChecksOffset;

		this.player.onWallLeft = 
			(this.tileLayer.getTileAtWorldXY(x + leftOffset[0].x, y + leftOffset[0].y) != undefined 
			|| this.tileLayer.getTileAtWorldXY(x + leftOffset[1].x, y + leftOffset[1].y) != undefined);

		this.player.onWallRight = 
			(this.tileLayer.getTileAtWorldXY(x + rightOffset[0].x, y + rightOffset[0].y) != undefined 
			|| this.tileLayer.getTileAtWorldXY(x + rightOffset[1].x, y + rightOffset[1].y) != undefined);
	}

	/**
	 * physics callback on every frame that the player and tilemap are touching.
	 * 
	 * sets Player.onFloor
	 */
	playerTilemapCollide(_player: Phaser.Types.Physics.Arcade.GameObjectWithBody, _tilemap: any)
	{
		if (_player.body.blocked.down)
		{
			this.player.onFloor = true;

			this.uiScene.setPunchCharge(true);

			this.updateCombo(true);
			// this.airborneCombo = false;
		}
	}

	playerEnemyOverlap(player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
		enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody)
	// TODO: specify type annotation
	{
		let _enemy = enemy as EnemyPrefab;

		if (_enemy.isFalling())
		{
			return;
		}

		if (this.player.stateController.currentState.name == 'dive')
		{
			// velocity of knockback

			this.player.setVelocityY(-this.player.jumpForce);

			if (_enemy.hasParasol)
			{
				_enemy.parasolBounce();

				return;
			}

			this.takeoutEnemy(_enemy, 'dive');

			this.player.stateController.setState('airborne');
		}
		else if (_enemy.isMine)
		{
			this.explode(_enemy.x, _enemy.y);
		}
		else
		{
			if (this.reachedGoal)
			{
				return;
			}

			// this.resetLevel();
			this.killPlayer();

			console.debug('player enemy overlap');
		}
	}

	fistEnemyOverlap(_fist: any, _enemy: any)
	{
		if (!this.player.fist.active)
		{
			if (this.player.fistGraceTimer)
			{
				if (this.player.fistGraceTimer.getProgress() < 1)
				{
					console.debug('grace timer save! - enemy');
				}
				else
				{
					return;
				}
			}
		}

		if (_enemy.isFalling())
		{
			return;
		}

		if (this.player.punchDeflected)
		{
			return;
			// otherwise this collision callback is triggered again before the fist is moved, and the enemy is taken out.
		}

		const enemy = _enemy as EnemyPrefab;

		if (this.player.stateController.currentState.name === 'punch'
			&& enemy.hasShieldFront() && (enemy.flipX === this.player.flipX) 
			&& !this.player.punchDeflected)
		{
			this.player.setFlipX(!this.player.flipX);
			this.player.punchDeflected = true;
			SoundManager.play('shield-deflect', this, .7);
			return;
		}
		if (this.player.stateController.currentState.name === 'punch'
			&& enemy.hasShieldBack() && (enemy.flipX !== this.player.flipX)
			&& !this.player.punchDeflected)
		{
			this.player.punchDeflected = true;
			this.player.setFlipX(!this.player.flipX);
			SoundManager.play('shield-deflect', this, .7);
			return;
		}

		this.takeoutEnemy(_enemy, 
			(this.player.stateController.currentState.name === 'punch'? 'punch' : 'uppercut'));
			// TODO: this isn't foolproof. Not sure how to recreate it, but sometimes it passes uppercut during a punch.

		this.player.punchCharged = true;
		this.uiScene.setPunchCharge(true);

		// this.player.variablePunchSpeed = this.player.moveSpeed;
		// this.player.variableUppercutSpeed = this.player.reducedUppercutSpeed;
			// TODO: remove all hit slowdown code.
	}

	enemyEnemyCollide(_enemy1: any, _enemy2: any)
	{
		let enemy1 = _enemy1 as EnemyPrefab;
		let enemy2 = _enemy2 as EnemyPrefab;

		if (!enemy1.isFalling())
		{
			enemy1.hit(enemy2.body.velocity.x, enemy2.body.velocity.y);
			this.takeoutEnemy(enemy1, 'chain', new Phaser.Math.Vector2
				(enemy2.body.velocity.x, enemy2.body.velocity.y))
		}

		if (!enemy2.isFalling())
		{
			this.takeoutEnemy(enemy2, 'chain', new Phaser.Math.Vector2
				(enemy1.body.velocity.x, enemy1.body.velocity.y));
		}
	}

	bombPlayerOverlap(bomb: any, player: any)
	{
		console.debug('bomb player collide');

		let _bomb = bomb as BombPrefab;
		let _player = bomb as playerPrefab;

		if (_bomb.ignoreTimer.getProgress() < 1)
		{
			return;
		}

		// if (this.player.stateController.currentState.name === 'punch')
		// {
		// 	console.debug(`player bomb overlap return; punch state`);
		// 	return;
		// }

		if (this.player.fistGraceTimer.getProgress() < 1)
		{
			console.debug(`player bomb overlap return; grace timer`);
			return;
		}

		console.debug(`player bomb overlap`);

		// if (this.player.fist.visible)
		// {
		// 	console.debug(`bomb player overlap return; fist visible`);
		// 	return;
		// }

		_bomb.fuseTimer.destroy();
		this.bombExplode(_bomb);
	}

	bombFistOverlap(_bomb: any, _fistBody: any)
	{

		const bomb = _bomb as BombPrefab;

		if (!this.player.fist.active)
		{
			if (this.player.fistGraceTimer.getProgress() < 1)
			{
				console.debug('grace timer save!');
			}
			else
			{
				return;
			}

		}

		console.debug('bomb fist');

		_bomb.setBombFuse();
		_bomb.setPosition(_bomb.x, _bomb.y - 3);
		const velocity = this.getKnockbackVelocty(false, this.player.lastFistMove);
		_bomb.body.setVelocity(velocity.x, velocity.y);
		// _bomb.setPosition(_bomb.x, _bomb.y - 5);
		// _bomb.body.setVelocity(this.player.body.velocity.x * 1.3, (this.player.body.velocity.y * 1.5) - 150);
		_bomb.punched = true;
	}

	bombEnemyOverlap(bomb: any, enemy: any)
	{
		// console.debug('bomb enemy overlap');

		let _bomb = bomb as BombPrefab;
		let _enemy = enemy as EnemyPrefab;

		if (_bomb.ignoreTimer.getProgress() < 1 && _bomb.enemy.enemyListIndex == _enemy.enemyListIndex)
		{
			// console.debug('Bomb-enemy overlap has been ignored');
			return;
		}


		console.log('bomb enemy overlap - explode! punched: ' + _bomb.punched);

		// if (_enemy == _bomb.enemy)
		// {
		// 	return;
		// }

		_bomb.fuseTimer.destroy();
		this.bombExplode(bomb);
	}

	playerMineOverlap(player: any, mine: any)
	{
		// this.resetLevel();
		// this.killPlayer();
		this.explode(mine.x, mine.y);
		console.debug(`player mine overlap`);
		mine.setVisible(false);
	}

	bombTilemapCollide(bomb: any, tileLayer: any)
	{
		let _bomb = bomb as BombPrefab;

		if (!_bomb.active)
		{
			console.debug(`bomb tilemap return; bomb inactive`);

			return;

			// without this check, if the last bomb overlaped a tile and the player punched the enemy, it would explode immediately.
		}

		if (_bomb.punched && _bomb.fuseTimer.getProgress() > 0)
		{
			console.debug(`bomb tilemap explode`);
			this.bombExplode(_bomb);
		}
		else if (_bomb.fuseTimer.getProgress() == 1)
		{
			_bomb.setBombFuse();
		}
	}

	bulletPlayerCollide(_bullet: any, _player: any)
	{
		// this.resetLevel();
		this.killPlayer();
	}

	bulletTilemapCollide(_bullet: any, _tilemap: any)
	{
		_bullet.disappear();
	}

	killPlayer(pit?: boolean)
	{
		this.player.lockInput = true;
		this.player.setActive(false)
		this.player.setVisible(false);
		this.player.body.setEnable(false);

		if (pit)
			SoundManager.play('fall', this);
		else
			SoundManager.play('bird-die', this);

		if (!pit)
		{
			this.tapperDeadProp = new TapperDeadProp(this, this.player.x, this.player.y);
			this.mainLayer.add(this.tapperDeadProp);
			this.tapperDeadProp.setDepth(this.player.depth);
			this.tapperDeadProp.setFlipX(this.player.flipX);
			let tiredState: 'normal' | 'tired' | 'exhausted' = 'normal';
			if (this.player.flapCharge === 1)
				tiredState = 'tired';
			else if (this.player.flapCharge === 0)
				tiredState = 'exhausted';
			this.tapperDeadProp.startSequnce(tiredState);
		}

		NGIO.logEvent(`Level ${this.registry.get('current-level-index') + 1} Death`, (event) => 
		{
			console.debug(`logEvent: ${event}`);
		});

		this.uiScene.gameOverContainer.setVisible(true);
		this.uiScene.scoreText.setVisible(false);
		this.uiScene.mobileButtonDive.setVisible(false);
		this.uiScene.mobileButtonJump.setVisible(false);
		this.uiScene.mobileButtonPunch.setVisible(false);
		this.uiScene.mobileButtonUppercut.setVisible(false);
		this.uiScene.airborneLabelText.setVisible(false);
		this.uiScene.comboLabelText.setVisible(false);
		this.uiScene.comboText.setVisible(false);

		this.uiScene.scoreText.setVisible(false);
		this.uiScene.scoreAdditionText.setVisible(false);
	}

	/**
	 * Set enemy to falling state, set velocity, set particles.
	 * 
	 * Update UI & score.
	 * @param enemy 
	 * @param cause
	 * @param overrideVelocity if not provided, pre-set values from getKnockBackvelocity will be used based on cause
	 * @returns 
	 */
	takeoutEnemy(enemy: EnemyPrefab, cause: EnemyHitCause, overrideVelocity?: Phaser.Math.Vector2)
	{
		let velocity = overrideVelocity;
		if (!velocity)
		{
			velocity = this.getKnockbackVelocty(true, cause);
		}
		enemy.hit(velocity.x, velocity.y);
		SoundManager.play('enemy-death', this);

		this.createEnemyBloodParticles(enemy, cause, velocity);

		if (cause === 'dive' || cause === 'punch' || cause === 'uppercut')
		{
			this.hitStop();
		}

		if (!this.player.onFloor)
		{
			this.combo++;
			this.updateCombo();
		}

		let scoreToAdd = 100;

		// if (cause === 'chain' || cause === 'explosion')
		// {
		// 	// this.combo++;
		// 	// this.updateCombo();

		// 	scoreToAdd = 750;
		// }
		// else
		// {
		// 	this.combo = 0;
		// 	this.updateCombo();
		// }

		console.debug(`enemy takeout cause: ${cause}`);

		if (enemy.isMine)
		{
			this.explode(enemy.x, enemy.y);
			// return;
		}

		if (enemy.bombCooldownTimer != undefined)
		{
			enemy.bombCooldownTimer.destroy();
		}

		// this.enemiesDefeatedCheck();

		this.updateEnemiesUI(false);

		// score
		console.debug(`+ ${scoreToAdd * (this.combo > 1 ? this.combo : 1)}, combo: ${this.combo}`);
		this.score += scoreToAdd * (this.combo > 1 ? this.combo : 1);
		this.uiScene.setScore(this.score, scoreToAdd * (this.combo > 1 ? this.combo : 1));

		// combo medal
		if (this.highestCombo >= 6)
		{
			this.time.addEvent({ delay: 500, callback: ()=>
			{
				this.game.events.emit('unlock-medal: Jailbroken');
			}});
		}

		if (enemy.enemyListIndex === this.goalEnemyIndex && (cause === 'dive' || cause === 'uppercut' || cause === 'punch'))
		{
			this.reachedGoal = true;

			this.levelEndFeedback();

			this.player.putInPlane(this.plane.x, this.plane.y);

			this.confettiEmitter = this.confettiEmitterManager.createEmitter
			({
				lifespan: 3000,
				speed: { min: 25, max: 300 },
				angle: { min: 240, max: 300 },
				// alpha: { start: 1, end: 0 },
				scaleX: 2,
				scaleY: { start: 2, end: 0 },
				tint: [ 0x5699F6, 0xFB659F, 0xFFE13D, 0xFF943D ],
				gravityY: 200,
				on: false
			});
			this.confettiEmitter.explode(50, this.plane.x, this.plane.y);
		}

		// if (this.player.stateController.currentState.name !== 'dive')
		// {
		// 	this.goalEnemyCheck(enemy);
		// }
	}

	updateCombo(end?: boolean)
	{
		if (this.combo > this.highestCombo)
		{
			this.highestCombo = this.combo;
		}

		if (this.combo > 1 && !end)
		{
			this.uiScene.showComboUI(this.combo);
			this.sound.play('combo-hit', {volume: (((this.combo - 2) + 0) * 0.07) + 0.4, detune: (this.combo - 2) * 100})
		}
		// else
		// {
		// 	this.uiScene.hideComboUI();
		// }

		if (end)
		{
			this.comboEnd();
		}

	}

	comboEnd()
	{
		// if (this.combo > 1)
		// {
		// 	SoundManager.play('combo-hit', this);

		// 	this.comboEmitter = this.comboEmitterManager.createEmitter
		// 	({
		// 		lifespan: 10000,
		// 		speed: { min: 50, max: 200 },
		// 		angle: { min: 240, max: 300 },
		// 		// alpha: { start: 1, end: 0 },
		// 		gravityY: 400,
		// 		quantity: 100,
		// 		on: false
		// 	});
		// 	this.comboEmitter.explode(this.combo, this.player.x, this.player.y);
		// }


		this.uiScene.hideComboUI();

		this.combo = 0;
	}

	/** activates bomb in bombGroup pool */
	setBomb(x: number, y: number, enemy: EnemyPrefab, velocity?: Phaser.Math.Vector2, 
		punched?: boolean)
	{
		SoundManager.play('bomb-drop', this);

		let newBomb = this.bombGroup.get(x, y) as BombPrefab;
		newBomb.appear(enemy);
		this.mainLayer.add(newBomb);
		newBomb.setDepth(-9);

		if (velocity)
		{
			newBomb.body.setVelocity(velocity.x, velocity.y);
		}

		if (punched)
		{
			newBomb.punched = punched;
		}

		enemy.bombProp.setVisible(false);

		if (this.bombGroup.countActive() == this.bombGroup.maxSize)
		{
			this.bombGroup.getFirstAlive()?.setActive(false);
			this.bombGroup.shuffle();
			// TODO: figure out what exactly shuffle() does. Worked for me before
		}
	}

	/**
	 * DEPRECATED 
	 * 
	 *  starts or restarts bomb fuse timer & visual */
	setBombFuse(bomb: BombPrefab)
	{
		// fuse visual blink
		bomb.setBombFuse();

		// explosion delay
		bomb.fuseTimer.destroy();
		bomb.fuseTimer = this.time.addEvent({
			delay: 1500, callback: () =>
			{
				if (bomb.active)
				{
					this.bombExplode(bomb);
				}
			}
		});
	}

	/** bomb behaviour, explosion setup */
	public bombExplode(bomb: BombPrefab)
	{
		// explosion particles
		this.explosionEmitter = this.explosionEmitterManager.createEmitter
		({
			lifespan: 5000,
			speed: { min: 50, max: 200 },
			angle: { min: 0, max: 360 },
			// alpha: { start: 1, end: 0 },
			scale: { start: .7, end: 0 },
			gravityY: 500,
			quantity: 100,
			on: false
		});
		this.explosionEmitter.explode(30, bomb.x, bomb.y);

		// smoke particles
		this.smokeEmitter = this.smokeEmitterManager.createEmitter
		({
			lifespan: 2000,
			speed: { min: 3, max: 20 },
			angle: { min: 240, max: 300 },
			alpha: { start: 1, end: 0 },
			// gravityY: 200,
			quantity: 100,
			on: false
		});
		this.smokeEmitter.explode(10, bomb.x, bomb.y);

		bomb.disappear();
		bomb.fuseVisualTimer.paused = true;
		bomb.fuseTimer.paused = true;

		let newExplosion = this.explosionGroup.get(bomb.x, bomb.y);
		newExplosion.appear();
		this.mainLayer.add(newExplosion);
		// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(bomb.x, bomb.y);

		// explosion visual / audio
		if (this.cameras.main.worldView.contains(bomb.x, bomb.y))
		{
			this.cameras.main.shake(200, 0.0005);
		}

		SoundManager.play('explosion', this);

		bomb.reset();
	}

	/**
	 * explosion setup. Same as bombExplode() but without the bomb stuff.
	 * @param x 
	 * @param y 
	 */
	explode(x: number, y: number)
	{	
		// explosion particles
		this.explosionEmitter = this.explosionEmitterManager.createEmitter
		({
			lifespan: 5000,
			speed: { min: 50, max: 200 },
			angle: { min: 0, max: 360 },
			// alpha: { start: 1, end: 0 },
			scale: { start: .7, end: 0 },
			gravityY: 500,
			quantity: 100,
			on: false
		});
		this.explosionEmitter.explode(30, x, y);

		// smoke particles
		this.smokeEmitter = this.smokeEmitterManager.createEmitter
		({
			lifespan: 2000,
			speed: { min: 3, max: 20 },
			angle: { min: 240, max: 300 },
			alpha: { start: 1, end: 0 },
			// gravityY: 200,
			quantity: 100,
			on: false
		});
		this.smokeEmitter.explode(10, x, y);

		let newExplosion = this.explosionGroup.get(x, y);
		newExplosion.appear();
		this.mainLayer.add(newExplosion);
		newExplosion.setDepth(15);
		// TODO: this stuff should only be called if the object is being initialized

		this.explosionCheck(x, y);

		// explosion visual / audio
		if (this.cameras.main.worldView.contains(x, y))
		{
			this.cameras.main.shake(200, 0.0005);
		}

		SoundManager.play('explosion', this);
	}

	/** detects physics bodies within explosion range and impacts them appropriately */
	explosionCheck(x: number, y: number)
	{
		let _this = this as Level;
		this.physics.overlapCirc(x, y, 25, true, false).forEach(function (element: any)
		// TODO: specify type annotation
		{
			if (_this.enemyList.includes(element.gameObject))
			{
				if (!element.gameObject.isFalling())
				{
					// if (!_this.player.onFloor)
					// {
					// 	_this.combo++;
					// 	_this.updateCombo();
					// }

					// element.gameObject.hit(0, -250);
					_this.takeoutEnemy(element.gameObject, "explosion")
				}


			}
			if (element.gameObject.name == 'player' && _this.player.active)
			{
				// _this.player.reset();
				// _this.resetLevel();
				_this.killPlayer();
				console.debug('kill player: explosion');
			}
		});
	}
	// TODO: make

	/**
	 * starts timers for a gun spray.
	 * 
	 * Can be called anytime, as nothing will happen if the cooldown timer hasn't completed.
	 * 
	 * @param enemy to fire from
	 * @param constant 
	 */
	setGunFire(enemy: EnemyPrefab, constant?: boolean)
	{
		const bullets = (constant ? -1 : 10);

		if (constant)
		{
			// console.log('hello??')
		}

		if (enemy.gunSprayTimer.getProgress() == 1 && enemy.gunCoolDownTimer.getProgress() == 1)
		{
			enemy.gunSprayTimer = this.time.addEvent({
				delay: 100, repeat: bullets, callback: () =>
				{
					if (!enemy.isFalling())
					{
						this.fireGun(enemy);
					}
				}
			});

			enemy.gunCoolDownTimer = this.time.addEvent({ delay: 1500 });
		}
	}

	/**
	 * fires bullet from any enemy
	 * @param enemy to fire from
	 */
	fireGun(enemy: EnemyPrefab): void
	{
		let _newBullet = this.bulletGroup.get(enemy.x, enemy.y + 2) as BulletPrefab;
		if (_newBullet == undefined)
		{
			console.log('out of bullets')
			return;
		}

		let worldV = this.cameras.main.worldView
		if (this.cameras.main.worldView.contains(enemy.x, enemy.y))
		{
			SoundManager.play('enemy-shoot', this);
		}
		else if (Phaser.Geom.Rectangle.Inflate(worldV, 200, 100).contains(enemy.x, enemy.y))
		{
			SoundManager.play('enemy-shoot-far', this);
			console.debug('far');
		}

		enemy.setGunSprite(true);
		this.time.delayedCall(50, () =>
		{
			enemy.setGunSprite(false);
		});

		_newBullet.appear();
		this.mainLayer.add(_newBullet);
		_newBullet.setDepth(3);
		this.bulletList.push(_newBullet);
		/* does this add existing bullets to the list, adding them infinitely? */
		// TODO: these should be added once on object initialization, not recycle
		let velocity = { x: 0, y: 0 };
		const _speed = 300;
		const _speedHorizontal = 250;
		switch (enemy.gunDirection)
		{
			case 'up':
				{
					velocity = { x: 0, y: -_speed };
					break;
				}
			case 'down':
				{
					velocity = { x: 0, y: _speed };
					break;
				}
			case 'downward':
				{
					velocity = {
						x: (enemy.flipX ? _speedHorizontal : -_speedHorizontal),
						y: _speedHorizontal
					};
					break;
				}
			case 'upward':
				{
					velocity = {
						x: (enemy.flipX ? _speedHorizontal : -_speedHorizontal),
						y: -_speedHorizontal
					};
					break;
				}
			case 'forward':
				{
					velocity = { x: (enemy.flipX ? _speed : -_speed), y: 0 };
					break;
				}
		}

		_newBullet.body.setVelocity(velocity.x, velocity.y);
	}

	/**
	 * Recturns vector2 for pre-set knockback velocity based on cause of knockback
	 * @param enemy Velocity may be modified for other objects such as bombs.
	 */
	getKnockbackVelocty(enemy: boolean, cause?: EnemyHitCause): Phaser.Math.Vector2
	{
		let velocity = new Phaser.Math.Vector2(0, 0);

		// dive
		if (cause === 'dive')
		{
			velocity.set(100, -150);
		}
		else if (cause === 'punch')
		{
			if (enemy)
			{
				velocity.set(300, -150);
			}
			else
			{
				velocity.set(400, -100);
			}
		}
		else if (cause === 'uppercut')
		{
			if (enemy)
			{
				velocity.set(0, -350);
			}
			else
			{
				velocity.set(0, -450);
			}
		}
		else if (cause === 'explosion')
		{
			if (enemy)
			{
				velocity.set(0, -150);
			}
			else
			{
				velocity.set(0, -250);
			}
		}

		if (!this.player.flipX && velocity.x !== 0)
		{
			velocity.x = -velocity.x;
		}

		return velocity;
	}

	/**
	 * 
	 * @param enemy Origin point
	 * @param cause Determines which pre-set config parameters are used.
	 * @param velocity Used if cause is 'chain` to determine angle
	 * @returns 
	 */
	createEnemyBloodParticles(enemy:EnemyPrefab, cause: EnemyHitCause, velocity: Phaser.Math.Vector2)
	{
		let angle = 0;
		let speedMin = 300;
		let speedMax = 400;
		let spread = 4;

		switch(cause)
		{
			case 'punch':
				angle = (velocity.x <-15 ? 190 : -10	);
				break;

			case 'uppercut':
				angle = 270;
				break;

			case 'dive':
				angle = (velocity.x > 0 ? 60 : 120)
				speedMin = 200;
				speedMax = 300;
				spread = 10;
				break;
					// TODO: change speed

			default:
				angle = velocity.angle() * (180/Math.PI);
				break;
		}
		console.debug(`blood particles - angle: ${angle}`)

		this.enemyBloodEmitter = this.enemyBloodEmitterManager.createEmitter
		({
			lifespan: 3000,
			speed: { min: speedMin, max: speedMax },
			angle: { min: angle - spread, max: angle + spread },
			// alpha: { start: 1, end: 0 },
			scale: { start: 1, end: 0 },
			gravityY: 200,
			quantity: 100,
			on: false
		});
		this.enemyBloodEmitter2 = this.enemyBloodEmitterManager2.createEmitter
		({
			lifespan: 2000,
			speed: { min: 200, max: 700 },
			angle: { min: angle - 2, max: angle + 2 },
			// alpha: { start: 1, end: 0 },
			scale: { start: 1, end: 0 },
			gravityY: 200,
			on: false
		});
		this.enemyBloodEmitter.explode(10, enemy.x, enemy.y);
		this.enemyBloodEmitter2.explode(25, enemy.x, enemy.y);
	}

	/**
	 * CURRENTLY UNUSED
	 * 
	 * checks if all enemies are defeated and shows victory audio / visual
	 * @returns 
	 */
	enemiesDefeatedCheck()
	{
		// check
		let _anyEnemies = false;
		this.enemyList.forEach((enemy) => 
		{
			let _enemy = enemy as EnemyPrefab;
			if (!_enemy.isFalling())
			{
				_anyEnemies = true;
			}
		});
		if (_anyEnemies)
		{
			return;
		}

		// here is where the level end code would go
	}

	// DEPRECATED
	// goalEnemyCheck(enemy: EnemyPrefab)
	// {

	// 	if (enemy.isGoal)
	// 	{
	// 		if (!this.reachedGoal)
	// 		{
	// 			this.reachedGoal = true;

	// 			this.levelEndFeedback();

	// 			this.player.putInPlane(this.plane.x, this.plane.y);
	// 		}
	// 	}
	// }

	levelEndFeedback()
	{	
		// this.uiScene.showLevelCompleteText();
		this.uiScene.showSummaryUI();

		// this.comboEnd();

		// +500pts on level 1 & 2
		// if (this.registry.get('current-level-index') < 2)
		// {
		// 	this.score += 500;
		// 	this.uiScene.setScore(this.score);
		// }

		NGIO.logEvent(`Level ${this.registry.get('current-level-index') + 1} Complete`, (event) => 
		{
			console.debug(`logEvent: ${event}`);
		});


		this.time.addEvent({ delay: 2900, callback: () =>
		{
			this.registry.set('last-score', this.score);

			console.debug(`score: ${this.score}`);
			// let timeScore = Math.floor(this.levelTimer.getRemaining() * .1);
			// this.score += timeScore;
			// console.debug(`time: +${timeScore}`);
			// this.uiScene.setScore(this.score);
			// this.registry.set('total-score', this.game.registry.get('total-score') + this.score);

			this.uiScene.setAward(this.score);

			// set highscore
			// if (this.game.registry.get(`top-score: ${this.game.registry.get('current-level')}`))
			// {
			// 	if (this.score > this.game.registry.get(`top-score: ${this.game.registry.get('current-level')}`))
			// 	{
			// 		this.game.registry.set(`top-score: ${this.game.registry.get('current-level')}`, this.score);
			// 		this.uiScene.setNewHighscore(true);
			// 		cloudSaves.saveData(this);
			// 	}
			// }
			// else
			// {
			// 	this.game.registry.set(`top-score: ${this.game.registry.get('current-level')}`, this.score);
			// 	cloudSaves.saveData(this);
			// }

			// set score in registry

		}});

		// award medals
		// let allBronze = true;
		// let allSilver = true;
		// let allGold = true;
		// LevelSelect.levelsKey.forEach((value, index) =>
		// {
		// 	const score = this.game.registry.get(`top-score: ${value}`);
		// 	const award = getEarnedAward(value, score);
		// 	if (award === 'none')
		// 	{
		// 		allBronze = false;
		// 		allSilver = false;
		// 		allGold = false;
		// 	}
		// 	else if (award === 'bronze')
		// 	{
		// 		allSilver = false;
		// 		allGold = false;
		// 	}
		// 	else if (award === 'silver')
		// 	{
		// 		allGold = false;
		// 	}
		// });
		// if (allBronze)
		// {
		// 	this.time.addEvent({ delay: 1000, callback: ()=>
		// 	{
		// 		this.game.events.emit('unlock-medal: Bronze Trophy');
		// 	}});
		// }
		// if (allSilver)
		// {
		// 	this.time.addEvent({ delay: 1000, callback: ()=>
		// 	{
		// 		this.game.events.emit('unlock-medal: Silver Trophy');
		// 	}});
		// }
		// if (allGold)
		// {
		// 	this.time.addEvent({ delay: 1000, callback: ()=>
		// 	{
		// 		this.game.events.emit('unlock-medal: Golden Trophy');
		// 	}});
		// }

		// I'm doing this in the Level select now without all this redundant code.

		// level medals
		// if (this.registry.get('current-level') === 'tutorial-finale')
		// {
		// 	this.time.addEvent({ delay: 1000, callback: ()=>
		// 	{
		// 		this.game.events.emit('unlock-medal: Fish Splasher');
		// 	}});
		// }
		// else if (this.registry.get('current-level') === 'parasol')
		// {
		// 	this.time.addEvent({ delay: 1000, callback: ()=>
		// 	{
		// 		this.game.events.emit('unlock-medal: Bomb Launcher');
		// 	}});
		// }
		// else if (this.registry.get('current-level') === 'finale')
		// {
		// 	this.time.addEvent({ delay: 1000, callback: ()=>
		// 	{
		// 		this.game.events.emit('unlock-medal: Thanks For Playing!');
		// 	}});
		// }


		// Plane fly away tween
		this.tweens.add
		({
			targets: this.plane,
			duration: 4000,
			hold: 1000,
			// repeatDelay: 1000,
			repeat: 0,
			ease: Phaser.Math.Easing.Cubic.In,
			y: this.plane.y - 300,
			x: this.plane.x + 1000
		});

		// Getting into Plane bob tween
		// this.tweens.add
		// ({
		// 	targets: this.plane,
		// 	duration: 100,
		// 	// repeatDelay: 1000,
		// 	repeat: 0,
		// 	yoyo: true,
		// 	ease: Phaser.Math.Easing.Cubic.Out,
		// 	y: this.plane.y + 10,
		// });
		// TODO: Turn off the regular looping tween before starting this one.
		// TODO: Tweak this tween's timing and easing.

		this.cameras.main.stopFollow();

		// this.levelTimer.paused = true;
		// this.time.addEvent({
		// 	delay: 200, repeat: -1, callback: () =>
		// 	{
		// 		this.uiScene.timerText.setVisible(!this.uiScene.timerText.visible);
		// 	}
		// });

		this.registry.set('completed-level-' + this.registry.get('current-level-index'), true);

		SoundManager.play('combo-end', this);
		this.music.pause();
	}

	/** iterates through everything in the 'elements' object layer of the map and creates enemies 
	 * based on their GID. */
	createMapEnemies()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((object, index) =>
		{
			// Return if this isn't the enemy tile
			if (object.gid)
			{
				if (object.gid !== 37)
				{
					return;
				}
			}
			else
			{
				return;
			}

			// Settings
			let enemy: EnemyPrefab;

			const balloon: boolean = object.properties[0].value;
			const bomb: boolean = object.properties[1].value;
			const goal: boolean = object.properties[2].value;
			const gunDirection: GunDirection = object.properties[3].value;
			const alwaysFire: boolean = (object.properties[3].value);
			const mine = object.properties[4].value;
			const parasol: boolean = object.properties[5].value;
			const pogo: boolean = object.properties[6].value;
			let shieldFront: boolean = false;
			if (object.properties[7].value)
			{
				shieldFront = true;
				console.debug('shield front');
			}
			let shieldBack: boolean = false;
			if (object.properties[8].value)
			{
				console.debug('shield back');
				shieldBack = true;
			}
			// const vision: ? = object.properties[7].value;

			// Enemy type
			if (balloon)
			{
				enemy = new BalloonEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire, shieldFront, shieldBack);
			}
			else if (pogo)
			{
				enemy = new PogoEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire, shieldFront, shieldBack);
			}
			else if (goal)
			{
				enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire, shieldFront, shieldBack);
				enemy.isGoal = true;
				this.goalEnemyIndex = this.enemyList.length;

				this.createPlane(object.x!, object.y!);
			}
			else
			{
				enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire, shieldFront, shieldBack);
			}

			if (gunDirection !== undefined)
			{
				this.gunEnemyList.push(enemy);
			}
			if (bomb)
			{
				this.bombEnemyList.push(enemy);
				enemy.createBombProp();
				enemy.bombCooldownTimer = this.time.addEvent({
					delay: 1000, callback: () =>
					{
						if (!enemy.isFalling())
						{
							enemy.bombProp.setVisible(true);
						}
					}
				});
			}

			enemy.flipX = object.flippedHorizontal!;

			this.enemyList.push(enemy);
			enemy.enemyListIndex = this.enemyList.length - 1;
			this.mapElementList[object.id] = enemy;
			this.mainLayer.add(enemy);
			enemy.setDepth(-10);
		});
	}

	createMines()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((object, index) =>
		{
			// Return if this isn't the mine tile
			if (object.gid)
			{
				if (object.gid !== 41)
				{
					return;
				}
			}
			else
			{
				return;
			}

			let mine: MinePrefab;
			mine = new MinePrefab(this, object.x! + 8, object.y! - 8, 'bomb-mask' + this.ninja);
			this.mineList.push(mine);
			this.mainLayer.add(mine);
			mine.setDepth(5);
		});
	}

	createPlane(x: number, y: number)
	{
		this.plane = this.add.image(x + 7, y + 2, 'plane');
		this.mainLayer.add(this.plane);
		this.plane.setDepth(15);
		this.plane.flipX = true;

		// this.tweens.add
		// ({
		// 	targets: this.plane,
		// 	y: this.plane.y - 10,
		// 	duration: 1000,
		// 	ease: Phaser.Math.Easing.Quadratic.InOut,
		// 	yoyo: true,
		// 	repeat: -1
		// });
		// TODO: have plane enemy position reflect this.

		this.planeRect = new Phaser.Geom.Rectangle(x - 5, y - 30, this.plane.width, this.plane.height + 25);

		if (__DEV__)
		{
			this.debugPlaneRectGraphics = this.add.graphics();
			this.debugPlaneRectGraphics.lineStyle(1, 0x00ff00);
			this.debugPlaneRectGraphics.strokeRect
				(this.planeRect.x, this.planeRect.y, this.planeRect.width, this.planeRect.height);
		}
	}

	/** Checks if the player is overlapping plane and if an enemy is in it. If so, triggers level end */
	planeCheck()
	{
		if (Phaser.Geom.Rectangle.ContainsPoint
			(this.planeRect, new Phaser.Geom.Point(this.player.x, this.player.y)))
		{
			if (!this.reachedGoal)
			{
				if (this.goalEnemyIndex)
					// level with enemy in plane
				{
					console.log('plane: enemy');

					if (this.enemyList[this.goalEnemyIndex].isFalling())
					{
						this.reachedGoal = true;

						this.levelEndFeedback();

						this.player.putInPlane(this.plane.x, this.plane.y);

						this.confettiEmitter = this.confettiEmitterManager.createEmitter
						({
							lifespan: 3000,
							speed: { min: 25, max: 300 },
							angle: { min: 240, max: 300 },
							// alpha: { start: 1, end: 0 },
							scaleX: 2,
							scaleY: { start: 2, end: 0 },
							tint: [ 0x5699F6, 0xFB659F, 0xFFE13D, 0xFF943D ],
							gravityY: 200,
							on: false
						});
						this.confettiEmitter.explode(50, this.plane.x, this.plane.y);
					}
				}
				else
				// level without enemy in plane
				{
					console.log('plane: no enemy');

					this.reachedGoal = true;

					this.levelEndFeedback();

					this.player.putInPlane(this.plane.x, this.plane.y);

					this.confettiEmitter = this.confettiEmitterManager.createEmitter
						({
							lifespan: 3000,
							speed: { min: 25, max: 300 },
							angle: { min: 240, max: 300 },
							// alpha: { start: 1, end: 0 },
							scaleX: 2,
							scaleY: { start: 2, end: 0 },
							tint: [ 0x5699F6, 0xFB659F, 0xFFE13D, 0xFF943D ],
							gravityY: 200,
							on: false
						});
						this.confettiEmitter.explode(50, this.plane.x, this.plane.y);
				}
			}
		}
	}

	createCameraOffsetTriggers()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((_object, index) =>
		{
			if (_object.rectangle)
			{
				let object = _object as any;

				if (object.properties[0].value !== true)
				{
					// object is a camera offset trigger

					const trigger = new cameraOffsetTrigger(object.properties[0].value, 
						object.properties[1].value, object.x, object.y, object.width, object.height);
					this.cameraOffsetTriggers.push(trigger);
					this.mapElementList[object.id] = trigger;
				}
			}
		});
	}

	checkCameraOffsetTriggers()
	{
		this.cameraOffsetTriggers.forEach((object, index) =>
		{
			if (Phaser.Geom.Rectangle.ContainsPoint
				(object, new Phaser.Geom.Point(this.player.x, this.player.y)))
			{
				if (this.cameras.main.followOffset.x !== object.cameraOffset.x 
					|| this.cameras.main.followOffset.y !== object.cameraOffset.y)
				{
					this.cameras.main.setFollowOffset
						(object.cameraOffset.x, object.cameraOffset.y);
				}
			}
		});
	}

	createEggZone()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((_object, index) =>
		{
			if (_object.rectangle)
			{
				let object = _object as any;

				if (object.properties[0].value === true)
				{
					// object is an egg zone

					this.eggZone = new Phaser.Geom.Rectangle
						(object.x, object.y, object.width, object.height);
					this.mapElementList[object.id] = this.eggZone;

					// this.game.events.emit('unlock-medal: Killer egg');
				}
			}
		});
	}

	checkEggZone()
	{	
		if (!this.eggZone.isEmpty() && !this.gotEggZone)
		{
			if (Phaser.Geom.Rectangle.ContainsPoint
				(this.eggZone, new Phaser.Geom.Point(this.player.x, this.player.y)))
			{
				this.gotEggZone = true;

				this.registry.set(`got-egg: ${this.registry.get('current-level')}`, true);

				// HARDCODED: # off egs
				console.log(`Easter egg found! Find all four of them to unlock the secret NG medal.`);

				SoundManager.play('eagle', this);

				// check egg zones
				if (this.registry.get(`got-egg: bomb-holder`)
					&& this.registry.get(`got-egg: umbrella-shield`)
					&& this.registry.get(`got-egg: mine-intro`)
					&& this.registry.get(`got-egg: mine-wall`))
					//HARDCODED: add in levels with other eggs
				{
					this.game.events.emit('unlock-medal: Plato');
				}
			}
		}
	}

	createMapVisionPolys()
	{
		let _mapObjects = this.tileMap.getObjectLayer('elements')
		_mapObjects.objects.forEach((_object, index) =>
		{
			if (_object.polygon)
			{
				let object = _object as any;

				const parentEnemy = this.mapElementList[object.properties[0].value];

				const p0 = new Phaser.Geom.Point
					((object.polygon[0].x + object.x), (object.polygon[0].y + object.y));
				const p1 = new Phaser.Geom.Point
					((object.polygon[1].x + object.x), (object.polygon[1].y + object.y));
				const p2 = new Phaser.Geom.Point
					((object.polygon[2].x + object.x), (object.polygon[2].y + object.y));
				const p3 = new Phaser.Geom.Point
					((object.polygon[3].x + object.x), (object.polygon[3].y + object.y));
				/* Tiled polygons are relative / local points, which Phaser polygons are 
				worldspace points. This converts the points.
				*/
				/* TODO: make this dynamic to support polygons of more than 2 points
				*/
				const visionPoly = new VisionPoly(parentEnemy, [p0, p1, p2, p3]);

				const _parentEnemy = parentEnemy as EnemyPrefab;
				_parentEnemy.alwaysFire = false;

				this.visionPolys.push(visionPoly);
				this.mapElementList[object.id] = visionPoly;

				if (__DEV__)
				{
					this.debugVisionPolyGraphics = this.add.graphics();
					this.debugVisionPolyGraphics.lineStyle(1, 0xff0000);
					this.debugVisionPolyGraphics.strokePoints(visionPoly.points, true)
				}
			}
		});
	}

	checkVisionPolys()
	{
		this.visionPolys.forEach((object, index) =>
		{
			if (Phaser.Geom.Polygon.ContainsPoint
				(object, new Phaser.Geom.Point(this.player.x, this.player.y))
				&& this.player.active)
			{
				if (object.parentEnemy.gunDirection)
				{
					this.setGunFire(object.parentEnemy);
				}
				else if (object.parentEnemy.bombProp)
				{
					if (object.parentEnemy.bombCooldownTimer.getProgress() === 1
						&& !object.parentEnemy.isFalling())
					{
						let brk;

						this.setBomb(object.parentEnemy.x, object.parentEnemy.y, object.parentEnemy);
						object.parentEnemy.bombCooldownTimer.reset({});
					}
				}
			}
		});
	}

	/**
	 * Initializes sound variables with set volumes
	 */
	addSounds()
	{
		this.sound.add('bird-flap');
		this.sound.add('enemy-death');
		this.sound.add('explosion');
		this.sound.add('bird-die');
		this.sound.add('victory');
		this.sound.add('reflect');
		this.sound.add('punch-swing');
		this.sound.add('combo-hit');
	}

	bindMobileButtons()
	{

		// jump
		this.uiScene.mobileButtonJump.setInteractive();
		this.uiScene.mobileButtonJump.on('pointerdown', () =>
		{
			this.player.jumpMobileButton = true;
			this.uiScene.mobileButtonJump.setAlpha(.3);
		});
		this.uiScene.mobileButtonJump.on('pointerup', () =>
		{
			this.player.jumpMobileButton = false;
			this.uiScene.mobileButtonJump.setAlpha(.01);
		});
		this.uiScene.mobileButtonJump.on('pointerout', () =>
		{
			this.player.jumpMobileButton = false;
			this.uiScene.mobileButtonJump.setAlpha(.01);
		});

		this.input.on('gameobjectdown', (pointer: any, gameobject: any) =>
		{
			console.debug(gameobject);
		});

		// punch
		this.uiScene.mobileButtonPunch.setInteractive();
		this.uiScene.mobileButtonPunch.on('pointerdown', () =>
		{
			this.player.punchMobileButton = true;
			// this.uiScene.mobileButtonPunch
			this.uiScene.mobileButtonPunch.setAlpha(.3);
		});

	// For multitouch to work, I need to use the following event and compare the object

		// this.uiScene.input.on('gameobjectdown', (pointer: any, gameobject: any) =>
		// {
		// });

		this.uiScene.mobileButtonPunch.on('pointerup', () =>
		{
			this.player.punchMobileButton = false;
			this.uiScene.mobileButtonPunch.setAlpha(.01);
		});
		this.uiScene.mobileButtonPunch.on('pointerout', () =>
		{
			this.player.punchMobileButton = false;
			this.uiScene.mobileButtonPunch.setAlpha(.01);
		});

		// uppercut
		this.uiScene.mobileButtonUppercut.setInteractive();
		this.uiScene.mobileButtonUppercut.on('pointerdown', () =>
		{
			this.player.uppercutMobileButton = true;
			this.uiScene.mobileButtonUppercut.setAlpha(.01, .3, .01, .3);
		});
		this.uiScene.mobileButtonUppercut.on('pointerup', () =>
		{
			this.player.uppercutMobileButton = false;
			this.uiScene.mobileButtonUppercut.setAlpha(.01, .01, .01, .01);
		});
		this.uiScene.mobileButtonUppercut.on('pointerout', () =>
		{
			this.player.uppercutMobileButton = false;
			this.uiScene.mobileButtonUppercut.setAlpha(.01, .01, .01, .01);
		});

		// dive
		this.uiScene.mobileButtonDive.setInteractive();
		this.uiScene.mobileButtonDive.on('pointerdown', () =>
		{
			this.player.diveMobileButton = true;
			this.uiScene.mobileButtonDive.setAlpha(.3);
		});
		this.uiScene.mobileButtonDive.on('pointerup', () =>
		{
			this.player.diveMobileButton = false;
			this.uiScene.mobileButtonDive.setAlpha(.01);
		});
		this.uiScene.mobileButtonDive.on('pointerout', () =>
		{
			this.player.diveMobileButton = false;
			this.uiScene.mobileButtonDive.setAlpha(.01);
		});

		// level select
		this.uiScene.mobileButtonLevelSelect.setInteractive();
		this.uiScene.mobileButtonLevelSelect.on('pointerdown', () =>
		{
			LevelSelect.levelSelectEntry = 'return';
			this.LoadLevelSelect();
		});
	}

	/** Uncontional manual pause.
	 * 
	 * 	Used as window focus event handler */
	pause()
	{
		if (this.uiScene.tutorialVisible || this.uiScene.summaryVisible)
		{
			return;
		}

		this.scene.pause();
		this.scene.launch('Pause');
		this.manualPause = true;
	}

	/** Uncontional manual unpause.
	 * 
	 * 	Used as window focus event handler */
	unpause()
	{
		if (this.uiScene.tutorialVisible || this.uiScene.summaryVisible)
		{
			return;
		}

		this.scene.resume();
		this.scene.stop('Pause');
		this.manualPause = false;
	}

	/** User controled pause function.
	 * 
	 * 	Pause is conditional to game state.
	 */
	toggleManualPause()
	{
		if (this.manualPause)
		{
			this.unpause();
		}
		else
		{
			this.pause();
		}
	}

	hitStop()
	{
		if (this.restarting || this.scene.isPaused())
		{
			return;
		}

		console.debug('hitStop - start');

		// TODO: have this not conflict with blur pause
		this.scene.pause();
		this.hitStopPause = true;

		// TODO: Can I rely on uiScene time? Is this a bad hack?
		this.uiScene.time.addEvent({delay: 50, callback: () =>
		{
			if (this.manualPause)
			{
				return;
			}

			console.debug('hitStop - end');

			this.scene.resume();
			this.hitStopPause = false;
		}});
	}

	/**
	 * Calls UI scene to initialize tutorial.
	 * 
	 * Checks necessity, redundancy and conflicts and will return if found.
	 * 
	 * @param show if false, tutorial will still be initialized and can be shown manually
	 * @param initial If this is upon scene setup, will be instant rather than tweened animation.
	 */
	setTutorialUI(show: boolean, initial: boolean)
	{
		console.debug(show, initial);

		if (!tutorialManager.getTutorialText(this.currentLevelIndex, this))
		{
			console.debug('returned; no tutorial for this level');
			return;
		}
	// redndancy check
		if ((show && this.uiScene.tutorialVisible) || (!show && !this.uiScene.tutorialVisible))
		{
			console.debug('returned; redundant');
			return;
		}

		if (this.scene.isPaused() && show)
		{
			console.debug('returned; already paused');
			return;
		}

		if (this.uiScene.summaryVisible)
		{
			console.debug('returned; summary visible');
			return;
		}

		if (this.uiScene.tutorialOffsetTween && !initial)
		{
			if (this.uiScene.tutorialOffsetTween.progress < 1)
			{
				console.debug('returned; tutorial tween incomplete');
				return;
			}
		}

		if (show && (!tutorialManager.doTutorialInDevMode && __DEV__))
		{
			show = false;
		}

		if (!show && !initial && !this.uiScene.tutorialCloseText.visible)
		{
			console.debug('returned; dismiss text hasnt appeared yet');
			return;
		}

		if (!show || (this.registry.get('last-scene') === this.scene.key && initial))
		{
			this.uiScene.setTutorialUI(false, true);

			this.scene.resume();

			return;
		}

		console.debug(this.registry.get('last-scene'));
		// if (this.registry.get('last-scene') === this.scene.key)
		// {
		// 	show = false;
		// }

		// let tutorialNecessary = (this.currentLevelIndex < 9);
			// hardcoded: change this if tutorial level count changes

			this.uiScene.setTutorialUI(true, initial, this.currentLevelIndex);

			this.scene.pause();
	}

	/**
	 * 
	 * @param initialize skips animation
	 */
	updateEnemiesUI(initialize: boolean): void
	{
		let defeatedEnemyCount = 0;
		this.enemyList.forEach((enemy) => 
		{
			let _enemy = enemy as EnemyPrefab;
			if (_enemy.isFalling())
			{
				defeatedEnemyCount++;
			}
		});

		this.uiScene.setEnemiesText(defeatedEnemyCount, this.enemyList.length)

		this.enemiesDefeated = defeatedEnemyCount;

		if (!initialize)
		{
			this.uiScene.animateEnemiesText();
		}
	}

	setDebugUI()
	{
		if (this.uiScene.scene.isActive())
		{
			if (__LEVEL_TEST__)
			{
				this.uiScene.setDebugText(2, `Bird Tapper PPP v${this.game.config.gameVersion} - LEVEL TEST BUILD`);

				return;
			}

			// this.uiScene.setDebugText(0, `${this.player.stateController.currentState.name}`);
			this.uiScene.setDebugText(0, `level completed: ${this.registry.get('completed-level-' + this.currentLevelIndex)}`);
			this.uiScene.setDebugText(1, `player vel x : ${this.player.body.velocity.x}`);
			if (this.uiScene.tutorialOffsetTween)
			{
				this.uiScene.setDebugText(2, `tutorial tween progress : ${this.uiScene.tutorialOffsetTween.progress}`);
			}
		}
	}


	/** DEPRECATED */
	updateDebugWallDetect()
	{
		// const x = this.player.body.x;
		// const y = this.player.body.y;
		// const leftOffset = this.player.leftWallChecksOffset;
		// const rightOffset = this.player.rightWallChecksOffset;

		// this.debugWallDetectGraphics.clear();
		// this.debugWallDetectGraphics.fillPoint(x + leftOffset[0].x, y + leftOffset[0].y);
		// this.debugWallDetectGraphics.fillPoint(x + leftOffset[1].x, y + leftOffset[1].y);
		// this.debugWallDetectGraphics.fillPoint(x + rightOffset[0].x, y + rightOffset[0].y);
		// this.debugWallDetectGraphics.fillPoint(x + rightOffset[1].x, y + rightOffset[1].y);
	}

	resize()
	{
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));

		// const _camera = this.cameras.main as any;
		// _camera.preRender(1);
			// this scene's objects shouldn't need align component
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
