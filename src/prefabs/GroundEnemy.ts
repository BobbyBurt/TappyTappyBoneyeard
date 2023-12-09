
/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyPrefab from "./EnemyPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GroundEnemy extends EnemyPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, gunDirection?: GunDirection, parasol?: boolean, mine?: boolean, alwaysFire?: boolean, shieldFront?: boolean, shieldBack?:boolean, texture?: string, frame?: number | string) {
		console.debug(shieldFront);
		super(scene, x ?? 0, y ?? 0, gunDirection, parasol, mine, alwaysFire, shieldFront, shieldBack, 'ground', texture || "soldiermid", frame);

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private floatYTween!: Phaser.Tweens.Tween;

	start()
	{
		this.body.allowGravity = false;

		let ninja = (this.scene.game.registry.get('ninja') ? '_1' : '');

	// animation
		this.anims.create
		({
			key: 'idle',
			frames:
			[
				{ key: 'soldiermid' + ninja },
				{ key: 'soldiermid' + ninja },
				{ key: 'soldiermid' + ninja },
				{ key: 'soldiermid' + ninja },
				{ key: 'soldiersquash' + ninja },
				{ key: 'soldiersquash' + ninja },
				{ key: 'soldierstretch' + ninja },
				{ key: 'soldierstretch' + ninja }
			],
			frameRate: 16,
			repeat: -1
		});
		this.play('idle');

		let _this = this;
		this.on(Phaser.Animations.Events.ANIMATION_UPDATE, function 
			(anim: any, frame: any, sprite: any, framekey: any) 
		{
			_this.callOffset(frame.index);
		});
	}

	update(): void
	{
		
	}

	callOffset(frame: number)
	{
		let offset = 1;

		if (frame === 1 + offset)
		{
			super.offsetProps(0, 0);
		}
		else if (frame === 5 + offset)
		{
			super.offsetProps(0, 1);
		}
		else if (frame === 7 + offset)
		{
			super.offsetProps(0, -1);
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
