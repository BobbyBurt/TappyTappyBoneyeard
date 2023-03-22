
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */

import EnemyPrefab from "./EnemyPrefab";
import Level from "~/scenes/Level";

/* END-USER-IMPORTS */

export default interface BombPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class BombPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bomb", frame);

		scene.physics.add.existing(this, false);
		this.body.maxVelocity.y = 400;
		this.body.bounce.x = 0.4;
		this.body.bounce.y = 0.3;
		this.body.mass = 0.7;
		this.body.setSize(14, 18, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	public fuseTimer!: Phaser.Time.TimerEvent;
	public fuseVisualTimer!: Phaser.Time.TimerEvent;
	/** A short timer activated on appear. When incomplete, bomb will ignore collisions. */
	public ignoreTimer: Phaser.Time.TimerEvent;

	/** reference to enemy that dropped this bomb */
	public enemy!: EnemyPrefab;

	/** If true, tilemap collisions trigger explosion. */
	public punched: boolean;

	/** asdf */
	appear(enemy: EnemyPrefab): void
	{
		this.enemy = enemy;
		this.punched = false;

		this.fuseTimer = this.scene.time.addEvent({delay: 1})
		this.fuseVisualTimer = this.scene.time.addEvent({delay: 1})
		this.ignoreTimer = this.scene.time.addEvent({delay: 400});

		this.setTexture('bomb');
		this.clearTint();

		this.setActive(true);
		this.setVisible(true);
		this.body.setEnable(true);
		this.body.setAllowGravity(true);
		// this.body.reset(this.x, this.y);
	}

	/** asdf */
	disappear()
	{
		this.setActive(false);
		this.setVisible(false);
		this.body.setEnable(false);
		this.body.setAllowGravity(false);
		this.body.setVelocity(0, 0);
	}

	public reset()
	{
		this.disappear();
		this.setPosition(9999, -9999);
		this.ignoreTimer.destroy();
		this.setCooldown();
	}

	/**
	 * Cooldown time between explosion and new bomb being ready.
	 */
	private setCooldown()
	{
		this.enemy.bombCooldownTimer.destroy();

		this.enemy.bombCooldownTimer = this.scene.time.addEvent({
			delay: 700, callback: () =>
			{
				if (!this.enemy.isFalling())
				{
					this.enemy.bombProp.setVisible(true);
				}
			}
		});
	}

	public setBombFuse()
	{
		this.fuseVisualTimer.destroy();
		this.fuseVisualTimer = this.scene.time.addEvent
		({
			delay: 100, loop: true, callback: () =>
			{
				if (this.isTinted)
				{
					this.clearTint();
				}
				else
				{
					this.setTintFill(0xffffff);
				}
			}
		});

	// explosion delay
		this.fuseTimer.destroy();
		this.fuseTimer = this.scene.time.addEvent({
			delay: 1000, callback: () =>
			{
				if (this.active)
				{
					const _level = this.scene as Level;
					_level.bombExplode(this);
				}
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
