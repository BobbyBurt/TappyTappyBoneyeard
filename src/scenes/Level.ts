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

/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// BGLayerCity
		const bGLayerCity = this.add.layer();

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

		// lists
		const public_list: Array<any> = [];
		const enemyList: Array<any> = [];
		const gunEnemyList: Array<any> = [];
		const bombEnemyList: Array<any> = [];
		const bulletList: Array<any> = [];
		const hiddenByTutorialList: Array<any> = [];

		// parallax_Backing (components)
		new ScrollFactor(parallax_Backing);

		// parallax_Cityscape (components)
		const parallax_CityscapeScrollFactor = new ScrollFactor(parallax_Cityscape);
		parallax_CityscapeScrollFactor.factorX = 0.2;
		parallax_CityscapeScrollFactor.factorY = 0.1;

		// parallax_Cityscape_1 (components)
		const parallax_Cityscape_1ScrollFactor = new ScrollFactor(parallax_Cityscape_1);
		parallax_Cityscape_1ScrollFactor.factorX = 0.2;
		parallax_Cityscape_1ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_2 (components)
		const parallax_Cityscape_2ScrollFactor = new ScrollFactor(parallax_Cityscape_2);
		parallax_Cityscape_2ScrollFactor.factorX = 0.2;
		parallax_Cityscape_2ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_3 (components)
		const parallax_Cityscape_3ScrollFactor = new ScrollFactor(parallax_Cityscape_3);
		parallax_Cityscape_3ScrollFactor.factorX = 0.2;
		parallax_Cityscape_3ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_4 (components)
		const parallax_Cityscape_4ScrollFactor = new ScrollFactor(parallax_Cityscape_4);
		parallax_Cityscape_4ScrollFactor.factorX = 0.2;
		parallax_Cityscape_4ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_5 (components)
		const parallax_Cityscape_5ScrollFactor = new ScrollFactor(parallax_Cityscape_5);
		parallax_Cityscape_5ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_6 (components)
		const parallax_Cityscape_6ScrollFactor = new ScrollFactor(parallax_Cityscape_6);
		parallax_Cityscape_6ScrollFactor.factorX = 0.2;
		parallax_Cityscape_6ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_15 (components)
		const parallax_Cityscape_15ScrollFactor = new ScrollFactor(parallax_Cityscape_15);
		parallax_Cityscape_15ScrollFactor.factorX = 0.25;
		parallax_Cityscape_15ScrollFactor.factorY = 0.15;

		// parallax_Cityscape_16 (components)
		const parallax_Cityscape_16ScrollFactor = new ScrollFactor(parallax_Cityscape_16);
		parallax_Cityscape_16ScrollFactor.factorX = 0.25;
		parallax_Cityscape_16ScrollFactor.factorY = 0.15;

		// parallax_Cityscape_17 (components)
		const parallax_Cityscape_17ScrollFactor = new ScrollFactor(parallax_Cityscape_17);
		parallax_Cityscape_17ScrollFactor.factorX = 0.25;
		parallax_Cityscape_17ScrollFactor.factorY = 0.15;

		// parallax_Cityscape_18 (components)
		const parallax_Cityscape_18ScrollFactor = new ScrollFactor(parallax_Cityscape_18);
		parallax_Cityscape_18ScrollFactor.factorX = 0.25;
		parallax_Cityscape_18ScrollFactor.factorY = 0.15;

		// parallax_Cityscape_19 (components)
		const parallax_Cityscape_19ScrollFactor = new ScrollFactor(parallax_Cityscape_19);
		parallax_Cityscape_19ScrollFactor.factorX = 0.25;
		parallax_Cityscape_19ScrollFactor.factorY = 0.15;

		// parallax_Cityscape_20 (components)
		const parallax_Cityscape_20ScrollFactor = new ScrollFactor(parallax_Cityscape_20);
		parallax_Cityscape_20ScrollFactor.factorX = 0.25;
		parallax_Cityscape_20ScrollFactor.factorY = 0.15;

		// parallax_Backing_2 (components)
		new ScrollFactor(parallax_Backing_2);

		// parallax_Hills_1 (components)
		const parallax_Hills_1ScrollFactor = new ScrollFactor(parallax_Hills_1);
		parallax_Hills_1ScrollFactor.factorX = 0.2;
		parallax_Hills_1ScrollFactor.factorY = 0.1;

		// parallax_Hills_7 (components)
		const parallax_Hills_7ScrollFactor = new ScrollFactor(parallax_Hills_7);
		parallax_Hills_7ScrollFactor.factorX = 0.2;
		parallax_Hills_7ScrollFactor.factorY = 0.1;

		// parallax_Hills_9 (components)
		const parallax_Hills_9ScrollFactor = new ScrollFactor(parallax_Hills_9);
		parallax_Hills_9ScrollFactor.factorX = 0.2;
		parallax_Hills_9ScrollFactor.factorY = 0.1;

		// parallax_Hills_12 (components)
		const parallax_Hills_12ScrollFactor = new ScrollFactor(parallax_Hills_12);
		parallax_Hills_12ScrollFactor.factorX = 0.2;
		parallax_Hills_12ScrollFactor.factorY = 0.1;

		// parallax_Hills_14 (components)
		const parallax_Hills_14ScrollFactor = new ScrollFactor(parallax_Hills_14);
		parallax_Hills_14ScrollFactor.factorX = 0.2;
		parallax_Hills_14ScrollFactor.factorY = 0.1;

		// parallax_Hills_22 (components)
		const parallax_Hills_22ScrollFactor = new ScrollFactor(parallax_Hills_22);
		parallax_Hills_22ScrollFactor.factorX = 0.2;
		parallax_Hills_22ScrollFactor.factorY = 0.1;

		// parallax_Hills_24 (components)
		const parallax_Hills_24ScrollFactor = new ScrollFactor(parallax_Hills_24);
		parallax_Hills_24ScrollFactor.factorX = 0.2;
		parallax_Hills_24ScrollFactor.factorY = 0.1;

		// parallax_Hills_26 (components)
		const parallax_Hills_26ScrollFactor = new ScrollFactor(parallax_Hills_26);
		parallax_Hills_26ScrollFactor.factorX = 0.2;
		parallax_Hills_26ScrollFactor.factorY = 0.1;

		// parallax_Cityscape_big_5 (components)
		const parallax_Cityscape_big_5ScrollFactor = new ScrollFactor(parallax_Cityscape_big_5);
		parallax_Cityscape_big_5ScrollFactor.factorY = 0.1;

		// parallax_Hills_20 (components)
		const parallax_Hills_20ScrollFactor = new ScrollFactor(parallax_Hills_20);
		parallax_Hills_20ScrollFactor.factorX = 0.25;
		parallax_Hills_20ScrollFactor.factorY = 0.15;

		// parallax_Hills_8 (components)
		const parallax_Hills_8ScrollFactor = new ScrollFactor(parallax_Hills_8);
		parallax_Hills_8ScrollFactor.factorX = 0.25;
		parallax_Hills_8ScrollFactor.factorY = 0.15;

		// parallax_Hills_10 (components)
		const parallax_Hills_10ScrollFactor = new ScrollFactor(parallax_Hills_10);
		parallax_Hills_10ScrollFactor.factorX = 0.25;
		parallax_Hills_10ScrollFactor.factorY = 0.15;

		// parallax_Hills_11 (components)
		const parallax_Hills_11ScrollFactor = new ScrollFactor(parallax_Hills_11);
		parallax_Hills_11ScrollFactor.factorX = 0.25;
		parallax_Hills_11ScrollFactor.factorY = 0.15;

		// parallax_Hills_13 (components)
		const parallax_Hills_13ScrollFactor = new ScrollFactor(parallax_Hills_13);
		parallax_Hills_13ScrollFactor.factorX = 0.25;
		parallax_Hills_13ScrollFactor.factorY = 0.15;

		// parallax_Hills_21 (components)
		const parallax_Hills_21ScrollFactor = new ScrollFactor(parallax_Hills_21);
		parallax_Hills_21ScrollFactor.factorX = 0.25;
		parallax_Hills_21ScrollFactor.factorY = 0.15;

		// parallax_Hills_23 (components)
		const parallax_Hills_23ScrollFactor = new ScrollFactor(parallax_Hills_23);
		parallax_Hills_23ScrollFactor.factorX = 0.25;
		parallax_Hills_23ScrollFactor.factorY = 0.15;

		// parallax_Hills_25 (components)
		const parallax_Hills_25ScrollFactor = new ScrollFactor(parallax_Hills_25);
		parallax_Hills_25ScrollFactor.factorX = 0.25;
		parallax_Hills_25ScrollFactor.factorY = 0.15;

		// parallax_Hills_27 (components)
		const parallax_Hills_27ScrollFactor = new ScrollFactor(parallax_Hills_27);
		parallax_Hills_27ScrollFactor.factorX = 0.25;
		parallax_Hills_27ScrollFactor.factorY = 0.15;

		this.bGLayerCity = bGLayerCity;
		this.parallax_Backing = parallax_Backing;
		this.bGLayerHills = bGLayerHills;
		this.parallax_Backing_2 = parallax_Backing_2;
		this.bGLayer = bGLayer;
		this.mainLayer = mainLayer;
		this.player = player;
		this.public_list = public_list;
		this.enemyList = enemyList;
		this.gunEnemyList = gunEnemyList;
		this.bombEnemyList = bombEnemyList;
		this.bulletList = bulletList;
		this.hiddenByTutorialList = hiddenByTutorialList;

		this.events.emit("scene-awake");
	}

	private bGLayerCity!: Phaser.GameObjects.Layer;
	private parallax_Backing!: Phaser.GameObjects.Image;
	private bGLayerHills!: Phaser.GameObjects.Layer;
	private parallax_Backing_2!: Phaser.GameObjects.Image;
	private bGLayer!: Phaser.GameObjects.Layer;
	public mainLayer!: Phaser.GameObjects.Layer;
	public player!: playerPrefab;
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
	private goalEnemyIndex: number;
	public enemiesDefeated = 0;

// arcade
	private combo = 0;
	public highestCombo = 0;
	private comboTextTween: Phaser.Tweens.Tween;
	private scorePopupGroup: Phaser.GameObjects.Group;
	private levelScore: number;
	private levelTimer: Phaser.Time.TimerEvent;
	private score = 0;
	private airborneCombo = false;

// pause
	private hitStopPause = false;
	/** Player / blur initiated pause */
	private manualPause = false;
	private tutorialPuase = false;

	private cameraFollow: Phaser.Math.Vector2;

	private uiScene: LevelUI;

	create()
	{
		this.editorCreate();

	// reset properties
		this.reachedGoal = false;
		this.restarting = false;
		this.combo = 0;
		this.highestCombo = 0;
		this.airborneCombo = false;
		this.score = 0;
		this.cameraFollow = new Phaser.Math.Vector2(this.player.x, this.player.y);
		this.currentLevelIndex = this.registry.get('current-level-index');

	// UI
		this.uiScene = this.scene.get('LevelUI') as LevelUI;
		this.updateEnemiesUI(true);
		this.time.addEvent({ delay: 300, callback: () => 
		{
			this.setTutorialUI(true, true);
		}});
		if (this.registry.get('mobile'))
		{
			this.bindMobileButtons();
		}

		this.player.setDepth(-20)

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
			19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], true);

		this.player.createFist();
		this.mainLayer.add(this.player.fist);

	// BG
		if (this.registry.get('current-level-index') < 10)
		{
			this.bGLayerCity.setVisible(false);
			this.bGLayerHills.setVisible(true);
		}
		else
		{
			this.bGLayerCity.setVisible(true);
			this.bGLayerHills.setVisible(false);
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

	// DEV - quick restart & exit
		if (__DEV__)
		{
			this.input.keyboard.on('keydown-S', () =>
			{
				this.resetLevel();
			});

			// level select input
			this.input.keyboard.on('keydown-A', () =>
			{
				this.LoadLevelSelect();
			});
		}

	// summary continue
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-confirm', 'keyboard') , () =>
		{
			if (this.uiScene.summaryVisible && this.registry.get('game-mode') === 'arcade')
			{
				this.LoadNextLevel();
			}
		});
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				if (this.uiScene.summaryVisible)
				{
					this.LoadNextLevel();
				}
			}
		});

	// pause / summary exit
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('menu-back', 'keyboard') , () =>
		{
			if (this.manualPause || (this.uiScene.summaryVisible && this.registry.get('game-mode') === 'level'))
			{
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
		this.game.events.on(Phaser.Core.Events.BLUR, this.pause, this);
		if (__DEV__)
		{
			this.game.events.on(Phaser.Core.Events.FOCUS, this.unpause, this);
		}
		this.uiScene.input.gamepad.on('down', 
			(pad:Phaser.Input.Gamepad.Gamepad, button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index === InputManager.getInput('pause', 'gamepad'))
			{
				this.toggleManualPause();
			}
		});
		this.uiScene.input.keyboard.on('keydown-' + InputManager.getInput('pause', 'keyboard'), () =>
		{
			this.toggleManualPause();
		});

	// mute
		this.input.keyboard.on('keydown-M', () =>
		{
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
					if (!this.reachedGoal && !__DEV__)
					{
						this.resetLevel();
					}
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

	// resize init
		this.events.on('pre-resize', this.resize, this);
		this.resize();
	}

	update(time: number, delta: number): void
	{
		let FRAME_BRK;

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

		// player-plane check
		if (this.planeRect)
		{
			this.planeCheck();
		}

	// out-of-bounds checks
		if (this.player.y > this.cameras.main.getBounds().bottom)
		{
			// this.player.reset();

			this.resetLevel();
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

		this.destroyScene();
		this.uiScene.scene.stop();
		this.scene.get('Pause').scene.stop();
		this.manualPause = false;
		this.scene.start('LevelSelect');
	}

	/** stops this scene, shutting down update listeners, and starts level select scene */
	LoadNextLevel()
	{
		let nextLevelIndex = this.currentLevelIndex + 1;		
		if (nextLevelIndex === LevelSelect.levelsKey.length)
		{
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

			this.combo = 0;
			this.updateCombo();
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
			this.resetLevel();
		}
	}

	fistEnemyOverlap(_fist: any, _enemy: any)
	{
		if (!this.player.fist.active)
		{
			return;
		}

		if (_enemy.isFalling())
		{
			return;
		}

		const enemy = _enemy as EnemyPrefab;

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

		_bomb.fuseTimer.destroy();
		this.bombExplode(_bomb);
	}

	bombFistOverlap(_bomb: any, _fistBody: any)
	{
		const bomb = _bomb as BombPrefab;

		if (!this.player.fist.active)
		{
			return;
		}

		_bomb.setBombFuse();
		_bomb.setPosition(_bomb.x, _bomb.y - 3);
		const velocity = this.getKnockbackVelocty(false, (this.player.stateController.currentState.name === 'punch' ? 'punch' : 'uppercut'));
		_bomb.body.setVelocity(velocity.x, velocity.y);
		// _bomb.body.setVelocity(this.player.body.velocity.x * 1.3, (this.player.body.velocity.y * 1.5) - 150);
		_bomb.punched = true;
	}

	bombEnemyOverlap(bomb: any, enemy: any)
	{
		console.debug('bomb enemy overlap');

		let _bomb = bomb as BombPrefab;
		let _enemy = enemy as EnemyPrefab;

		if (_bomb.ignoreTimer.getProgress() < 1 && _bomb.enemy.enemyListIndex == _enemy.enemyListIndex)
		{
			console.debug('Bomb-enemy overlap has been ignored');
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
		this.resetLevel();
	}

	bombTilemapCollide(bomb: any, tileLayer: any)
	{
		let _bomb = bomb as BombPrefab;

		if (_bomb.punched)
		{
			this.bombExplode(_bomb);
		}
		else if (_bomb.fuseTimer.getProgress() == 1)
		{
			_bomb.setBombFuse();
		}
	}

	bulletPlayerCollide(_bullet: any, _player: any)
	{
		this.resetLevel();
	}

	bulletTilemapCollide(_bullet: any, _tilemap: any)
	{
		_bullet.disappear();
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
		
		let scoreToAdd = 500;

		if (cause === 'chain' || cause === 'explosion')
		{
			// this.combo++;
			// this.updateCombo();

			scoreToAdd = 750;
		}
		// else
		// {
		// 	this.combo = 0;
		// 	this.updateCombo();
		// }

		console.debug(`enemy takeout cause: ${cause}`);

		if (enemy.isMine)
		{
			this.explode(enemy.x, enemy.y);
			return;
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
		this.uiScene.setScore(this.score);

		// if (this.player.stateController.currentState.name !== 'dive')
		// {
		// 	this.goalEnemyCheck(enemy);
		// }
	}

	updateCombo()
	{
		if (this.combo > this.highestCombo)
		{
			this.highestCombo = this.combo;
		}

		if (this.combo > 1)
		{
			this.uiScene.showComboUI(this.combo);
			SoundManager.play('combo-hit', this, .7);

		}
		else
		{
			this.uiScene.hideComboUI();
		}
	}

	/** activates bomb in bombGroup pool */
	setBomb(x: number, y: number, enemy: EnemyPrefab, velocity?: Phaser.Math.Vector2, 
		punched?: boolean)
	{
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

	/** starts or restarts bomb fuse timer & visual */
	setBombFuse(bomb: BombPrefab)
	{
		// fuse visual blink
		bomb.setBombFuse();

		// explosion delay
		bomb.fuseTimer.destroy();
		bomb.fuseTimer = this.time.addEvent({
			delay: 1000, callback: () =>
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
			if (element.gameObject.name == 'player')
			{
				// _this.player.reset();
				_this.resetLevel();
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
		let _newBullet = this.bulletGroup.get(enemy.x, enemy.y) as BulletPrefab;
		if (_newBullet == undefined)
		{
			console.log('out of bullets')
			return;
		}
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

	goalEnemyCheck(enemy: EnemyPrefab)
	{

		if (enemy.isGoal)
		{
			if (!this.reachedGoal)
			{
				this.reachedGoal = true;

				this.levelEndFeedback();

				this.player.putInPlane(this.plane.x, this.plane.y);
			}
		}
	}

	levelEndFeedback()
	{
		// this.uiScene.showLevelCompleteText();
		this.uiScene.showSummaryUI();

		this.time.addEvent({ delay: 3000, callback: () =>
		{
			console.debug(`score: +${this.score}`);
			let timeScore = Math.floor(this.levelTimer.getRemaining() * .1);
			this.score += timeScore;
			console.debug(`time: +${timeScore}`);
			this.uiScene.setScore(this.score);
			this.registry.set('total-score', this.game.registry.get('total-score') + this.score);
			
			this.uiScene.setAward(this.score);
	
			// TODO: set highscore
			this.game.registry.set(`top-score: ${this.game.registry.get('current-level')}`, this.score);
		}});

		
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

		this.levelTimer.paused = true;
		this.time.addEvent({
			delay: 200, repeat: -1, callback: () =>
			{
				this.uiScene.timerText.setVisible(!this.uiScene.timerText.visible);
			}
		});

		this.registry.set('completed-level-' + this.registry.get('current-level-index'), true);

		SoundManager.play('victory', this);
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
			// const vision: ? = object.properties[7].value;

			// Enemy type
			if (balloon)
			{
				enemy = new BalloonEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
			}
			else if (pogo)
			{
				enemy = new PogoEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
			}
			else if (goal)
			{
				enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
				enemy.isGoal = true;
				this.goalEnemyIndex = this.enemyList.length;

				this.createPlane(object.x!, object.y!);
			}
			else
			{
				enemy = new GroundEnemy
					(this, object.x! + 8, object.y! - 8, gunDirection, parasol, mine, alwaysFire);
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
			mine = new MinePrefab(this, object.x! + 8, object.y! - 8, 'bomb-mask');
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
				if (this.enemyList[this.goalEnemyIndex])
				{
					if (this.enemyList[this.goalEnemyIndex].isFalling())
					{
						this.reachedGoal = true;

						this.levelEndFeedback();

						this.player.putInPlane(this.plane.x, this.plane.y);
					}
				}
				else
				{
					this.reachedGoal = true;

					this.levelEndFeedback();

					this.player.putInPlane(this.plane.x, this.plane.y);
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

				const trigger = new cameraOffsetTrigger(object.properties[0].value, 
					object.properties[1].value, object.x, object.y, object.width, object.height);
				this.cameraOffsetTriggers.push(trigger);
				this.mapElementList[object.id] = trigger;
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
				(object, new Phaser.Geom.Point(this.player.x, this.player.y)))
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
		});
		this.uiScene.mobileButtonJump.on('pointerup', () =>
		{
			this.player.jumpMobileButton = false;
		});
		this.uiScene.mobileButtonJump.on('pointerout', () =>
		{
			this.player.jumpMobileButton = false;
		});

		// punch
		this.uiScene.mobileButtonPunch.setInteractive();
		this.uiScene.mobileButtonPunch.on('pointerdown', () =>
		{
			this.player.punchMobileButton = true;
		});
		this.uiScene.mobileButtonPunch.on('pointerup', () =>
		{
			this.player.punchMobileButton = false;
		});
		this.uiScene.mobileButtonPunch.on('pointerout', () =>
		{
			this.player.punchMobileButton = false;
		});

		// uppercut
		this.uiScene.mobileButtonUppercut.setInteractive();
		this.uiScene.mobileButtonUppercut.on('pointerdown', () =>
		{
			this.player.uppercutMobileButton = true;
		});
		this.uiScene.mobileButtonUppercut.on('pointerup', () =>
		{
			this.player.uppercutMobileButton = false;
		});
		this.uiScene.mobileButtonUppercut.on('pointerout', () =>
		{
			this.player.uppercutMobileButton = false;
		});

		// dive
		this.uiScene.mobileButtonDive.setInteractive();
		this.uiScene.mobileButtonDive.on('pointerdown', () =>
		{
			this.player.diveMobileButton = true;
		});
		this.uiScene.mobileButtonDive.on('pointerup', () =>
		{
			this.player.diveMobileButton = false;
		});
		this.uiScene.mobileButtonDive.on('pointerout', () =>
		{
			this.player.diveMobileButton = false;
		});

		// level select
		this.uiScene.mobileButtonLevelSelect.setInteractive();
		this.uiScene.mobileButtonLevelSelect.on('pointerdown', () =>
		{
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
	 * Calls UI scene to show or hide tutorial.
	 * 
	 * Will check if tutorial it's necessary based on level, it's completion & dev override.
	 * @param show 
	 * @param initial If this is upon scene setup, will be instant rather than tweened animation.
	 */
	setTutorialUI(show: boolean, initial: boolean)
	{
	// redndancy check
		if ((show && this.uiScene.tutorialVisible) || (!show && !this.uiScene.tutorialVisible))
		{
			return;
		}

		if (this.scene.isPaused() && show)
		{
			return;
		}

		if (this.uiScene.summaryVisible)
		{
			return;
		}

		if (this.uiScene.tutorialOffsetTween)
		{
			if (this.uiScene.tutorialOffsetTween.progress < 1)
			{
				return;
			}
		}

		if (show && !tutorialManager.doTutorialInDevMode)
		{
			show = false;
		}

		if (!show)
		{
			this.uiScene.setTutorialUI(false, true);

			this.scene.resume();

			return;
		}

		let tutorialNecessary = (this.currentLevelIndex < 10);
			// hardcoded: change this if tutorial level count changes


		if (tutorialManager.getTutorialText(this.currentLevelIndex))
		{
			if (this.registry.get('level-played-' + this.currentLevelIndex) && initial)
			{
				this.uiScene.setTutorialUI(false, false, this.currentLevelIndex);
			}
			else
			{
				this.uiScene.setTutorialUI(true, true, this.currentLevelIndex);

				this.scene.pause();
			}

		}
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
			// this.uiScene.setDebugText(0, `${this.player.stateController.currentState.name}`);
			this.uiScene.setDebugText(0, `level completed: ${this.registry.get('completed-level-' + this.currentLevelIndex)}`);
			this.uiScene.setDebugText(1, `combo : ${this.combo}`);
			this.uiScene.setDebugText(2, `punch input : ${this.player.punchInput}`);
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
