
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
import LevelSelect from "./LevelSelect";
/* END-USER-IMPORTS */

export default class CharacterSelectScene extends Phaser.Scene {

	constructor() {
		super("character-select-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// characterSelectContainer
		const characterSelectContainer = this.add.container(0, 0);

		// bgColour_1
		const bgColour_1 = this.add.rectangle(0, 0, 480, 270);
		bgColour_1.setOrigin(0, 0);
		bgColour_1.isFilled = true;
		bgColour_1.fillColor = 6966365;
		characterSelectContainer.add(bgColour_1);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(65, 9, "nokia", "Character Select");
		bitmaptext.tintTopLeft = 10054789;
		bitmaptext.tintTopRight = 10054789;
		bitmaptext.tintBottomLeft = 10054789;
		bitmaptext.tintBottomRight = 10054789;
		bitmaptext.text = "Character Select";
		bitmaptext.fontSize = -30;
		characterSelectContainer.add(bitmaptext);

		// bgColour_2
		const bgColour_2 = this.add.rectangle(65, 46.7, 180, 200);
		bgColour_2.setOrigin(0, 0);
		bgColour_2.isFilled = true;
		bgColour_2.fillColor = 10054789;
		characterSelectContainer.add(bgColour_2);

		// characterIllustration
		const characterIllustration = this.add.image(136.271605335176, 153.19600704684854, "illustration-tapper");
		characterIllustration.scaleX = 0.11421804694748702;
		characterIllustration.scaleY = 0.11421804694748702;
		characterSelectContainer.add(characterIllustration);

		// characterNameText
		const characterNameText = this.add.bitmapText(275, 58, "nokia", "Bird Tapper");
		characterNameText.text = "Bird Tapper";
		characterNameText.fontSize = -20;
		characterSelectContainer.add(characterNameText);

		// characterDescriptionText
		const characterDescriptionText = this.add.bitmapText(275, 115, "nokia", "Doesn’t move on the ground, but has 5 or 6 jumps which he uses to move around.\n\n- More jumps!\n- Eats babies…\n");
		characterDescriptionText.text = "Doesn’t move on the ground, but has 5 or 6 jumps which he uses to move around.\n\n- More jumps!\n- Eats babies…\n";
		characterDescriptionText.fontSize = -8;
		characterDescriptionText.maxWidth = 180;
		characterSelectContainer.add(characterDescriptionText);

		// bgColour
		const bgColour = this.add.rectangle(275, 216, 190, 200);
		bgColour.setOrigin(0, 0);
		bgColour.isFilled = true;
		bgColour.fillColor = 10054789;
		characterSelectContainer.add(bgColour);

		// selectedRect
		const selectedRect = this.add.rectangle(289, 231, 30, 30);
		selectedRect.setOrigin(0, 0);
		selectedRect.isStroked = true;
		selectedRect.lineWidth = 3;
		characterSelectContainer.add(selectedRect);

		// tapperIcon
		const tapperIcon = this.add.image(283, 226, "bird1mid");
		tapperIcon.scaleX = 2;
		tapperIcon.scaleY = 2;
		tapperIcon.setOrigin(0, 0);
		characterSelectContainer.add(tapperIcon);

		// gappyIcon
		const gappyIcon = this.add.image(326, 221, "gappy", "airborne/00");
		gappyIcon.scaleX = 2;
		gappyIcon.scaleY = 2;
		gappyIcon.setOrigin(0, 0);
		characterSelectContainer.add(gappyIcon);

		// puckIcon
		const puckIcon = this.add.image(372, 221, "pucamuc", "airborne/00");
		puckIcon.scaleX = 2;
		puckIcon.scaleY = 2;
		puckIcon.setOrigin(0, 0);
		characterSelectContainer.add(puckIcon);

		// kidIcon
		const kidIcon = this.add.image(417, 222, "kid", "flap/03");
		kidIcon.scaleX = 2;
		kidIcon.scaleY = 2;
		kidIcon.setOrigin(0, 0);
		characterSelectContainer.add(kidIcon);

		// characterTaglineText
		const characterTaglineText = this.add.bitmapText(291, 84, "nokia", "the bird");
		characterTaglineText.tintTopLeft = 10054789;
		characterTaglineText.tintTopRight = 10054789;
		characterTaglineText.tintBottomLeft = 10054789;
		characterTaglineText.tintBottomRight = 10054789;
		characterTaglineText.text = "the bird";
		characterTaglineText.fontSize = -12;
		characterTaglineText.maxWidth = 180;
		characterSelectContainer.add(characterTaglineText);

		// bgColour_3
		const bgColour_3 = this.add.rectangle(0, 0, 25, 270);
		bgColour_3.setOrigin(0, 0);
		bgColour_3.isFilled = true;
		bgColour_3.fillColor = 10054789;
		characterSelectContainer.add(bgColour_3);

		// characterIllustration_1
		const characterIllustration_1 = this.add.image(136.2716064453125, 153.19601440429688, "illustration-tapper");
		characterIllustration_1.scaleX = 0.11421804694748702;
		characterIllustration_1.scaleY = 0.11421804694748702;
		characterIllustration_1.visible = false;
		characterIllustration_1.alpha = 0.7;
		characterIllustration_1.alphaTopLeft = 0.7;
		characterIllustration_1.alphaTopRight = 0.7;
		characterIllustration_1.alphaBottomLeft = 0.7;
		characterIllustration_1.alphaBottomRight = 0.7;
		characterSelectContainer.add(characterIllustration_1);

		this.characterSelectContainer = characterSelectContainer;
		this.characterIllustration = characterIllustration;
		this.characterNameText = characterNameText;
		this.characterDescriptionText = characterDescriptionText;
		this.selectedRect = selectedRect;
		this.tapperIcon = tapperIcon;
		this.gappyIcon = gappyIcon;
		this.puckIcon = puckIcon;
		this.kidIcon = kidIcon;
		this.characterTaglineText = characterTaglineText;
		this.characterIllustration_1 = characterIllustration_1;

		this.events.emit("scene-awake");
	}

	private characterSelectContainer!: Phaser.GameObjects.Container;
	private characterIllustration!: Phaser.GameObjects.Image;
	private characterNameText!: Phaser.GameObjects.BitmapText;
	private characterDescriptionText!: Phaser.GameObjects.BitmapText;
	private selectedRect!: Phaser.GameObjects.Rectangle;
	private tapperIcon!: Phaser.GameObjects.Image;
	private gappyIcon!: Phaser.GameObjects.Image;
	private puckIcon!: Phaser.GameObjects.Image;
	private kidIcon!: Phaser.GameObjects.Image;
	private characterTaglineText!: Phaser.GameObjects.BitmapText;
	private characterIllustration_1!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	private selectedCharacter: 'tapper' | 'puck' | 'gappy' | 'kid';
	private characterName = new Map<'tapper' | 'puck' | 'gappy' | 'kid', string>( 
	[
		[ 'tapper', 'Bird Tapper' ],
		[ 'gappy', 'Gappy' ],
		[ 'puck', 'Puck' ],
		[ 'kid', 'The Kid' ]
	]);
	private characterTagline = new Map<'tapper' | 'puck' | 'gappy' | 'kid', string>( 
	[
		[ 'tapper', 'the bird' ],
		[ 'gappy', 'the green' ],
		[ 'puck', 'the pink' ],
		[ 'kid', 'the movie: the game' ]
	]);
	private characterDescription = new Map<'tapper' | 'puck' | 'gappy' | 'kid', string>( 
	[
		[ 'tapper', "The original Bird Tapper you know and love! All non-special stages are designed for him." ],
		[ 'gappy', "Faster movement and punches! But he has a lower jump to contend with.\n\nFrom the Gappy series by LeviRamirez." ],
		[ 'puck', "The problem is that he cannot walk, only jump. His jumps are short, but he has an extra one. Fuelled by blood, his punches go farther.\n\nFrom Pucamuc by Mors." ],
		[ 'kid', "His punches don't propel him forward or upward, but impact a slightly larger area. Do YOU have what it takes to be The Guy?\n\nFrom I Wanna Be the Guy by Kayin" ]
	]);
	private characterUnlockHint = new Map<'tapper' | 'puck' | 'gappy' | 'kid', string>( 
		[
			[ 'tapper', '' ],
			[ 'gappy', 'Finish 3 levels to unlock this character.' ],
			[ 'puck', 'Finish 6 levels to unlock this character.' ],
			[ 'kid', 'Finish 9 levels to unlock this character.' ]
		]);
	private characterIconRectX = new Map<'tapper' | 'puck' | 'gappy' | 'kid', number>( 
		[
			[ 'tapper', 289 ],
			[ 'gappy', 331 ],
			[ 'puck', 378 ],
			[ 'kid', 422 ]
		]);

	private illustrationTween: Phaser.Tweens.Tween;

	private returning = false;

	create() {

		this.returning = false;

		this.editorCreate();

		this.setupCamera();

		this.registry.set('unlocked-character: puck', true);
		this.registry.set('unlocked-character: gappy', true);
		this.registry.set('unlocked-character: kid', true);

		this.setLockedIcons();

		// TODO: set to currently selected character
		this.selectedCharacter = 'tapper';

		// input
		this.input.keyboard.on
			(`keydown-${InputManager.getInput('menu-right', 'keyboard')}`, () =>
		{
			this.setSelected(true);
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
			button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-right', 'gamepad'))
			{
				this.setSelected(true);
			}
		});

		this.input.keyboard.on
			(`keydown-${InputManager.getInput('menu-left', 'keyboard')}`, () =>
		{
			this.setSelected(false);
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
			button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-left', 'gamepad'))
			{
				this.setSelected(false);
			}
		});

		this.input.keyboard.on
			(`keydown-${InputManager.getInput('menu-confirm', 'keyboard')}`, () =>
		{
			this.setCharacter();
		});
		this.input.gamepad.on(`down`, (pad:Phaser.Input.Gamepad.Gamepad, 
			button:Phaser.Input.Gamepad.Button, index:number) =>
		{
			if (button.index == InputManager.getInput('menu-confirm', 'gamepad'))
			{
				this.setCharacter();
			}
		});

		this.tapperIcon.setInteractive();
		this.tapperIcon.on('pointerup', () =>
		{
			if (this.selectedCharacter === 'tapper')
			{
				this.setCharacter();
			}
			else
			{
				this.setSelected(true, 'tapper')
			}
		});
		this.gappyIcon.setInteractive();
		this.gappyIcon.on('pointerup', () =>
		{
			if (this.selectedCharacter === 'gappy')
			{
				this.setCharacter();
			}
			else
			{
				this.setSelected(true, 'gappy');
			}
		});
		this.puckIcon.setInteractive();
		this.puckIcon.on('pointerup', () =>
		{
			if (this.selectedCharacter === 'puck')
			{
				this.setCharacter();
			}
			else
			{
				this.setSelected(true, 'puck');
			}
		});
		this.kidIcon.setInteractive();
		this.kidIcon.on('pointerup', () =>
		{
			if (this.selectedCharacter === 'kid')
			{
				this.setCharacter();
			}
			else
			{
				this.setSelected(true, 'kid');
			}
		});
	}

	setSelected(increase: boolean, character?: 'tapper' | 'puck' | 'gappy' | 'kid')
	{
		if (character == undefined)
		{
			switch (this.selectedCharacter)
			{
				case 'tapper':
					this.selectedCharacter = (increase ? 'gappy' : 'kid');
					break;
				case 'gappy':
					this.selectedCharacter = (increase ? 'puck' : 'tapper');
					break;
				case 'puck':
					this.selectedCharacter = (increase ? 'kid' : 'gappy');
					break;
				case 'kid':
					this.selectedCharacter = (increase ? 'tapper' : 'puck');
					break;
			}
		}
		else
		{
			this.selectedCharacter = character;
		}

			this.characterIllustration.setTexture('illustration-' + this.selectedCharacter);
			this.characterIllustration_1.setTexture('illustration-' + this.selectedCharacter);
			this.selectedRect.setX(this.characterIconRectX.get(this.selectedCharacter));

			if (this.registry.get('unlocked-character: ' + this.selectedCharacter) || this.selectedCharacter === 'tapper')
			// TODO: check for unlocked instead
			{
				this.characterNameText.setText(this.characterName.get(this.selectedCharacter)!);
				this.characterTaglineText.setText(this.characterTagline.get(this.selectedCharacter)!);
				this.characterDescriptionText.setText(this.characterDescription.get(this.selectedCharacter)!);

				this.characterIllustration.clearTint();
			}
			else
			{
				this.characterNameText.setText('');
				this.characterTaglineText.setText('- Character Locked -');
				this.characterDescriptionText.setText(this.characterUnlockHint.get(this.selectedCharacter)!);

				this.characterIllustration.setTint(0x000000, 0x000000, 0x000000, 0x000000);
			}

			// tween
			this.characterIllustration.setX(increase ? 40 : -10);
			if (this.illustrationTween)
			{
				this.illustrationTween.stop();
			}
			this.illustrationTween = this.tweens.add
			({
				targets: this.characterIllustration,
				duration: 150,
				ease: Phaser.Math.Easing.Circular.Out,
				x: 15
			});

			this.sound.play('menu-tick');
	}

	setCharacter()
	{
		if (this.returning) {
			return;
		}

		this.registry.set(`selected-character`, this.selectedCharacter);
		this.registry.set(`manually-selected-character`, this.selectedCharacter);

		let levelselect = this.scene.get('LevelSelect') as LevelSelect;
		levelselect.updateSelectedCharacter();

		this.sound.play('menu-confirm');

		if (this.selectedCharacter === 'tapper') {
			this.tapperIcon.setTexture('tapper-atlas', 'victory/00');
		}
		else if (this.selectedCharacter === 'gappy') {
			this.gappyIcon.setTexture('gappy', 'victory/00');
		}
		else if (this.selectedCharacter === 'puck') {
			this.puckIcon.setTexture('puck', 'victory/00');
		}
		else if (this.selectedCharacter === 'kid') {
			this.kidIcon.setTexture('kid', 'victory/00');
		}


		this.characterIllustration_1.setVisible(true);
		let FadeTween = this.tweens.add({
			targets: this.characterIllustration_1,
			duration: 500,
			ease: Phaser.Math.Easing.Quintic.Out,
			scaleX: 0.15,
			scaleY: 0.15,
			alpha: 0
		});

		this.returning = true;
		this.time.delayedCall(1000, () => {

			this.scene.stop();
			this.scene.resume('menu-scene');
		});
	}

	setLockedIcons()
	{
		let specialCharacters = ['gappy', 'puck', 'kid']
		specialCharacters.forEach((value) =>
		{
			if (!this.registry.get('unlocked-character: ' + value))
			{
				switch(value)
				{
					case 'gappy':
						this.gappyIcon.setTint(0x000000, 0x000000, 0x000000, 0x000000);
						break;
					case 'puck':
						this.puckIcon.setTint(0x000000, 0x000000, 0x000000, 0x000000);
						break;
					case 'kid':
						this.kidIcon.setTint(0x000000, 0x000000, 0x000000, 0x000000);
						break;
				}
			}
		});

	}

	setupCamera()
	{
		CameraUtil.configureMainCamera(this);
		this.cameras.main.setOrigin(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
