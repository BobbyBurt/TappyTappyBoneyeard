
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelIconPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// highlight
		const highlight = scene.add.image(0, 3, "level-icon-selected");
		this.add(highlight);

		// numberText
		const numberText = scene.add.bitmapText(1, -2, "nokia", "25");
		numberText.setOrigin(0.5, 0.5);
		numberText.tintFill = true;
		numberText.tintTopLeft = 5388102;
		numberText.tintTopRight = 5388102;
		numberText.tintBottomLeft = 5388102;
		numberText.tintBottomRight = 5388102;
		numberText.text = "25";
		numberText.fontSize = -12;
		numberText.align = 1;
		this.add(numberText);

		this.highlight = highlight;
		this.numberText = numberText;

		/* START-USER-CTR-CODE */

		this.icon = scene.add.sprite(0, 0, 'level-icon');
		this.add(this.icon);
		this.icon.setDepth(-1);
		this.icon.setPosition(0, 0);

		this.icon.anims.create({key: 'locked', frames: this.icon.anims.generateFrameNumbers('level-icons', { frames: [ 0 ]})});
		this.icon.anims.create({key: 'unplayed', frames: this.icon.anims.generateFrameNumbers('level-icons', { frames: [ 1 ]})});
		this.icon.anims.create({key: 'played', frames: this.icon.anims.generateFrameNumbers('level-icons', { frames: [ 2 ]})});
		this.icon.anims.create({key: 'bronze', frames: this.icon.anims.generateFrameNumbers('level-icons', { frames: [ 3 ]})});
		this.icon.anims.play('unplayed');

		this.silverIcon = this.scene.add.sprite(0, -4, '');
		this.silverIcon.anims.create({key: 'silver', frames: this.icon.anims.generateFrameNumbers('level-icons', { frames: [ 4 ]})});
		this.silverIcon.play('silver');
		this.silverIcon.setDepth(1);
		this.silverIcon.setVisible(false);
		this.add(this.silverIcon);

		this.goldIcon = this.scene.add.sprite(0, -8, '');
		this.goldIcon.anims.create({key: 'gold', frames: this.icon.anims.generateFrameNumbers('level-icons', { frames: [ 5 ]})});
		this.goldIcon.play('gold');
		this.goldIcon.setDepth(2);
		this.goldIcon.setVisible(false);
		this.add(this.goldIcon);

		this.bringToTop(this.numberText);

		this.highlight.setVisible(false);
		this.highlight.setDepth(-2);

		this.iconOriginalY = this.icon.y;

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	private highlight: Phaser.GameObjects.Image;
	private numberText: Phaser.GameObjects.BitmapText;
	public levelIndex: number = 0;

	/* START-USER-CODE */

	private icon: Phaser.GameObjects.Sprite;
	private silverIcon: Phaser.GameObjects.Sprite;
	private goldIcon: Phaser.GameObjects.Sprite;

	private baseIconTween!: Phaser.Tweens.Tween;
	private numberTween!: Phaser.Tweens.Tween;
	private silverIconTween!: Phaser.Tweens.Tween;
	private goldIconTween!: Phaser.Tweens.Tween;
	
	private iconOriginalY!: number;
	private numberOffsetY = -1;

	start()
	{
		this.numberText.setText(`${this.levelIndex + 1}`);
	}

	public setIcon(state: levelState)
	{
		this.goldIcon.setVisible(state === 'gold');
		this.silverIcon.setVisible(state === 'silver' || state === 'gold');

		if (state === 'locked' || state === 'unplayed' || state === 'played' || state === 'bronze')
		{
			this.icon.anims.play(state);
		}
		else
		{
			this.icon.anims.play('bronze');
		}

		if (state === 'silver')
		{
			this.numberOffsetY = -6;
		}
		else if (state === 'gold')
		{
			this.numberOffsetY = -10;
		}
		this.numberText.setPosition(1, this.numberOffsetY);
	}

	public setHighlight(value: boolean)
	{
		this.highlight.setVisible(value);
	}

	public runAchieveTween()
	{
		const baseIconPeak = 25
		this.baseIconTween = this.scene.tweens.add({
			targets: this.icon,
			duration: 200,
			yoyo: true,
			ease: Phaser.Math.Easing.Cubic.Out,
			y: this.iconOriginalY - baseIconPeak
		});
		
		this.silverIconTween = this.scene.tweens.add({
			targets: this.silverIcon,
			duration: 250,
			yoyo: true,
			ease: Phaser.Math.Easing.Cubic.Out,
			y: this.iconOriginalY - 30
		});

		this.goldIconTween = this.scene.tweens.add({
			targets: this.goldIcon,
			duration: 300,
			yoyo: true,
			ease: Phaser.Math.Easing.Cubic.Out,
			y: this.iconOriginalY - 35
		});

		let numberTweenDuration = 200;
		if (this.goldIcon.visible)
		{
			numberTweenDuration = 250;
		}
		else if (this.silverIcon.visible)
		{
			numberTweenDuration = 300;
		}
		this.numberTween = this.scene.tweens.add({
			targets: this.numberText,
			duration: numberTweenDuration,
			yoyo: true,
			ease: Phaser.Math.Easing.Circular.Out,
			y: (this.iconOriginalY - baseIconPeak) + this.numberOffsetY
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

type levelState = 'locked' | 'unplayed' | 'played' | 'bronze' | 'silver' | 'gold'