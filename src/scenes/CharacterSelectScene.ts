
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import CameraUtil from "~/components/CameraUtil";
import InputManager from "~/components/InputManager";
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
		const characterIllustration = this.add.image(50, 66, "illustration-kid");
		characterIllustration.scaleX = 0.1;
		characterIllustration.scaleY = 0.1;
		characterIllustration.setOrigin(0, 0);
		characterSelectContainer.add(characterIllustration);

		// characterNameText
		const characterNameText = this.add.bitmapText(275, 58, "nokia", "Bird Tapper");
		characterNameText.text = "Bird Tapper";
		characterNameText.fontSize = -20;
		characterSelectContainer.add(characterNameText);

		// characterDescriptionText
		const characterDescriptionText = this.add.bitmapText(275, 115, "nokia", "Doesn’t move on the ground, but has 5 or 6 jumps which he uses to move around.\n\n- More jumps!\n- Eats babies…\n");
		characterDescriptionText.text = "Doesn’t move on the ground, but has 5 or 6 jumps which he uses to move around.\n\n- More jumps!\n- Eats babies…\n";
		characterDescriptionText.fontSize = -10;
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
		[ 'kid', 'the guy (hopefully)' ]
	]);
	private characterDescription = new Map<'tapper' | 'puck' | 'gappy' | 'kid', string>( 
	[
		[ 'tapper', "The original Bird Tapper you know and love!\n- The OG!\n- but stale..." ],
		[ 'gappy', "Faster movement and punches, but a lower jump.\n- Faster!\n- Retro…" ],
		[ 'puck', "Doesn’t move on the ground, but has 5 or 6 jumps which he uses to move around.\n- More jumps!\nEats babies…" ],
		[ 'kid', "His punches do not propel him forward or upward)\n- Better jumps!\n- Copyright nightmare…" ]
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

	create() {

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
			this.sound.play('menu-tick');
		});
		this.input.keyboard.on
			(`keydown-${InputManager.getInput('menu-left', 'keyboard')}`, () =>
		{
			this.setSelected(false);
			this.sound.play('menu-tick');
		});
		this.input.keyboard.on
			(`keydown-${InputManager.getInput('menu-confirm', 'keyboard')}`, () =>
		{
			this.setCharacter();
			this.sound.play('menu-confirm');
		});
	}

	setSelected(increase: boolean)
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

			this.characterIllustration.setTexture('illustration-' + this.selectedCharacter);
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
			this.characterIllustration.setX(increase ? 75 : 25);
			if (this.illustrationTween)
			{
				this.illustrationTween.stop();
			}
			this.illustrationTween = this.tweens.add
			({
				targets: this.characterIllustration,
				duration: 150,
				ease: Phaser.Math.Easing.Circular.Out,
				x: 50
			});
	}

	setCharacter()
	{
		this.registry.set(`selected-character`, this.selectedCharacter);

		this.scene.stop();
		this.scene.resume('menu-scene');
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
