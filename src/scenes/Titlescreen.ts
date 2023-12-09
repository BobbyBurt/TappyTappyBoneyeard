
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

		// parallax_Backing111
		const parallax_Backing111 = this.add.image(248, 128, "Parallax-Backing");
		parallax_Backing111.scaleX = 8.415017240244449;

		// parallax_Cityscape
		const parallax_Cityscape = this.add.image(156, 169, "Parallax-Cityscape");
		parallax_Cityscape.tintFill = true;
		parallax_Cityscape.tintTopLeft = 16756150;
		parallax_Cityscape.tintTopRight = 16756150;
		parallax_Cityscape.tintBottomLeft = 16756150;
		parallax_Cityscape.tintBottomRight = 16756150;

		// parallax_Cityscape_20
		const parallax_Cityscape_20 = this.add.image(36, 224, "Parallax-Cityscape");
		parallax_Cityscape_20.tintFill = true;
		parallax_Cityscape_20.tintTopLeft = 16028060;
		parallax_Cityscape_20.tintTopRight = 16028060;
		parallax_Cityscape_20.tintBottomLeft = 16028060;
		parallax_Cityscape_20.tintBottomRight = 16028060;

		// parallax_Cityscape_1
		const parallax_Cityscape_1 = this.add.image(472, 169, "Parallax-Cityscape");
		parallax_Cityscape_1.tintFill = true;
		parallax_Cityscape_1.tintTopLeft = 16756150;
		parallax_Cityscape_1.tintTopRight = 16756150;
		parallax_Cityscape_1.tintBottomLeft = 16756150;
		parallax_Cityscape_1.tintBottomRight = 16756150;

		// parallax_Cityscape_2
		const parallax_Cityscape_2 = this.add.image(355, 224, "Parallax-Cityscape");
		parallax_Cityscape_2.tintFill = true;
		parallax_Cityscape_2.tintTopLeft = 16028060;
		parallax_Cityscape_2.tintTopRight = 16028060;
		parallax_Cityscape_2.tintBottomLeft = 16028060;
		parallax_Cityscape_2.tintBottomRight = 16028060;

		// logo
		const logo = this.add.image(240, 125, "logo");
		logo.scaleX = 2;
		logo.scaleY = 2;

		// startText
		const startText = this.add.bitmapText(240, 234, "nokia", "Click / tap to start");
		startText.setOrigin(0.5, 0.5);
		startText.tintTopLeft = 5388102;
		startText.tintTopRight = 5388102;
		startText.tintBottomLeft = 5388102;
		startText.tintBottomRight = 5388102;
		startText.text = "Click / tap to start";
		startText.fontSize = -10;
		startText.align = 1;
		startText.dropShadowColor = 9737364;

		// progress
		const progress = this.add.bitmapText(240, 30, "nokia", "BobbyBurt - ProsciuttoMan - Dry - Shane Mesa");
		progress.setOrigin(0.5, 0.5);
		progress.tintTopLeft = 5388102;
		progress.tintTopRight = 5388102;
		progress.tintBottomLeft = 5388102;
		progress.tintBottomRight = 5388102;
		progress.text = "BobbyBurt - ProsciuttoMan - Dry - Shane Mesa";
		progress.fontSize = -10;
		progress.align = 1;
		progress.dropShadowColor = 9737364;

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

		// parallax_Backing111 (components)
		new ScrollFactor(parallax_Backing111);

		this.parallax_Backing111 = parallax_Backing111;
		this.startText = startText;
		this.ngioContainer = ngioContainer;
		this.logInButton_2 = logInButton_2;
		this.ngioInfoText = ngioInfoText;
		this.leftButton = leftButton;
		this.leftButtonText = leftButtonText;
		this.rightButton = rightButton;
		this.rightButtonText = rightButtonText;
		this.middleButton = middleButton;
		this.middleButtonText = middleButtonText;

		this.events.emit("scene-awake");
	}

	private parallax_Backing111!: Phaser.GameObjects.Image;
	private startText!: Phaser.GameObjects.BitmapText;
	private ngioContainer!: Phaser.GameObjects.Container;
	private logInButton_2!: Phaser.GameObjects.Rectangle;
	private ngioInfoText!: Phaser.GameObjects.BitmapText;
	private leftButton!: Phaser.GameObjects.Rectangle;
	private leftButtonText!: Phaser.GameObjects.BitmapText;
	private rightButton!: Phaser.GameObjects.Rectangle;
	private rightButtonText!: Phaser.GameObjects.BitmapText;
	private middleButton!: Phaser.GameObjects.Rectangle;
	private middleButtonText!: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	private popupTween!: Phaser.Tweens.Tween;

	private activePopup: undefined | 'file' | 'clear-file' | 'logging-in' | 'info' | 'wait' | 'loading';

	private loadedCloudSave = false;

	create() {

		this.editorCreate();

		// camera
		this.cameras.main.setOrigin(0, 0); 	
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);
		this.cameras.main.setZoom(CameraUtil.getAdaptiveZoom(this));
		this.cameras.main.fadeIn(200, 255, 255, 255);

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

		this.setPopup('Logging in... Please wait.', 'Cancel', undefined, 'Help', true);

		NGIO.openLoginPage();

		this.clearButtonEvents();
		this.leftButton.on('pointerdown', () =>
		{
			NGIO.cancelLogin();

			this.showFilePopup();
		});
		this.rightButton.on('pointerdown', () =>
		{
			this.setPopup('Logging in...\nThe Newgrounds Passport should open in a new tab. On iOS, you may need to disable pop-up blocking in settings.', 'Cancel', undefined, undefined, true);
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
		this.rightButton.on('pointerdown', () =>
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

		if (this.cache.audio.exists('main-game-2'))
		{
			this.sound.play('main-game-2', { volume: .7 });
		}

		this.startText.setAlpha(0);

		// if (newgroundsIOWrapper.status === 'isWaitingStatus')
		// {
		// 	this.setPopup('Please wait...');

		// }

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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
