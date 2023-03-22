import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player flies forward hitting enemies in it's path */
export default class Punch implements State {

	name: playerStateName = 'punch';
	player: playerPrefab;
	stateController: StateController;

	timer: Phaser.Time.TimerEvent | undefined;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		this.player.scene.game.events.emit('punch');
		
		this.player.scene.events.emit('player-start');
		this.player.started = true;

		this.player.playAnimation('punch');
		this.player.scene.sound.play('punch-swing');

		this.player.variablePunchSpeed = this.player.punchSpeed;

		// this.player.setPosition(this.player.x + (this.player.flipX ? 5 : -5 ), this.player.y);

		this.player.setFist(true, false);

		this.player.punchCharged = false;

		this.timer = new Phaser.Time.TimerEvent({ delay: 170, loop: false, callback: () =>
		{	
			this.player.body.setVelocity
				((this.player.flipX? this.player.moveSpeed : -this.player.moveSpeed), 0);
			this.player.body.allowGravity = true;

		// state transitions
			if (this.player.onFloor)
			{
				this.player.setFist(false, false);
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.player.stateController.setState('running');
			}
			else
			{
				this.player.setFist(false, false);
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.player.stateController.setState('airborne');
			}
		}});
	
		this.player.scene.time.addEvent(this.timer);

		if (!this.player.onFloor)
		{
			this.player.body.allowGravity = false;
				// if we turn off gravity while player is on floor, then floor detection won't 
				// function properly.
		}
	}
	
	update()
	{	
		if (this.player.onWallFacing(true))
		{
			if (this.player.onFloor)
			{
				this.player.body.setVelocity(0, 0);
				this.player.body.allowGravity = true;
				this.player.setFist(false, false);
				this.stateController.setState('groundCling');
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.timer?.remove();
				return;
			}
			else
			{
				this.player.body.setVelocity(0, 0);
				this.player.body.allowGravity = true;
				this.player.setFist(false, false);
				this.stateController.setState('cling');
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.timer?.remove();
				return;
			}

		}
		else
		{
			this.player.body.setVelocity((this.player.flipX? 
				this.player.variablePunchSpeed : -this.player.variablePunchSpeed), 0);
		}

	}
}
