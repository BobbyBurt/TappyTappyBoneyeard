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
		this.player.play('punch');
		this.player.scene.sound.play('punch-swing')

		this.player.setPosition(this.player.x + (this.player.flipX ? 5 : -5 ), this.player.y);

		this.player.punchCharged = false;
		
		this.timer = new Phaser.Time.TimerEvent({ delay: 150, loop: false, callback: () =>
		{	
			this.player.body.setVelocity
				((this.player.flipX? this.player.moveSpeed : -this.player.moveSpeed), 0);
			this.player.body.allowGravity = true;

		// state transitions
			if (this.player.onFloor)
			{
				this.player.stateController.setState('running');
			}
			else
			{
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
				this.stateController.setState('groundCling');
				this.timer?.remove();
				return;
			}
			else
			{
				this.player.body.setVelocity(0, 0);
				this.player.body.allowGravity = true;
				this.stateController.setState('cling');
				this.timer?.remove();
				return;
			}
		}

		this.player.body.setVelocity((this.player.flipX? 300 : -300), 0);
	}
}
