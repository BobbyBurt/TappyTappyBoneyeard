
/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyPrefab from "./EnemyPrefab";
import SoundManager from "~/components/SoundManager";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PogoEnemy extends EnemyPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?: GunDirection, parasol?: boolean, mine?: boolean, alwaysFire?: boolean, shieldFront?: boolean, shieldBack?:boolean, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, gunDirection, parasol, mine, alwaysFire, shieldFront, shieldBack, 'pogo', texture || "soldiermid", frame);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private floatYTween!: Phaser.Tweens.Tween;

	private pogoProp: Phaser.GameObjects.Image;

	start()
	{
		this.floatYTween = this.scene.tweens.add
		({
			targets: this,
			y: this.y - 70,
			repeat: -1,
			duration: 750,
			yoyo: true,
			ease: Phaser.Math.Easing.Quadratic.Out,
			onstart: () => { this.play('idle') },
			onRepeat: () => 
			{ 
				if (!super.isFalling() && this.scene.cameras.main.worldView.contains(this.x, this.y))
				{
					SoundManager.play('boing', this.scene, .5)
				}
			}
		})

		// animation
		let ninja = (this.scene.game.registry.get('ninja') ? '_1' : '');
	
		this.anims.create
		({
			key: 'idle',
			frames:
			[
				{ key: 'soldierpogosquash' + ninja},
				{ key: 'soldierpogomid' + ninja },
				{ key: 'soldierpogostretch' + ninja },
				{ key: 'soldierpogostretch' + ninja },
				{ key: 'soldierpogomid' + ninja },
			],
			frameRate: 16,
			repeat: 0
		});
		this.play('idle');

	// create balloon
		this.pogoProp = this.scene.add.image(this.x, this.y - 30, 'pogo');
		this.scene.physics.add.existing(this.pogoProp);
		this._scene.mainLayer.add(this.pogoProp);
		this.pogoProp.setDepth(-12);
		this.pogoProp.setVisible(false);
		let _pogoBody = this.pogoProp.body as Phaser.Physics.Arcade.Body;
		_pogoBody.setAllowGravity(false);
	}

	update(): void
	{
		if (this.isFalling())
		{
			this.pogoProp.rotation += this.getSpin() * 2;
		}
		else
		{
			super.offsetPropsFloat(this.floatYTween.getValue() - this.y);
		}
	}

	public hit(directionX: number, directionY: number): void
	{
		this.floatYTween.pause();

		this.pogoProp.setPosition(this.x, this.y);
		this.pogoProp.setVisible(true);
		let _pogoBody = this.pogoProp.body as Phaser.Physics.Arcade.Body;
		_pogoBody.setAllowGravity(true);
		_pogoBody.setVelocity(directionX, directionY - 75);
		
		super.hit(directionX, directionY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
