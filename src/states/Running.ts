import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class Running implements State {

	name: playerStateName = 'running';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		if (this.player.body.velocity.x === 0)
		{
			this.player.playAnimation('idle');
		}
		else
		{
			this.player.playAnimation('run');
		}
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down' && this.player.flapCharge > 0)
		{
			this.jump();
		}
		else if (this.player.punchInput == 'just-down' && this.player.punchCharged 
			&& this.player.punchCooldownTimer.getProgress() === 1)
		{
			this.stateController.setState('punch');
		}
		else if (this.player.uppercutInput == 'just-down' && this.player.punchCharged 
			&& this.player.punchCooldownTimer.getProgress() === 1)
		{
			this.stateController.setState('uppercut');
		}

	// state transitions
		if (!this.player.onFloor)
		{
			if (this.player.onWallFacing(true))
			{
				this.stateController.setState('cling')
			}
			else
			{
				this.stateController.setState('airborne');
				this.player.stop();
			}
		}
		if (this.player.onWallFacing(true))
		{
			this.stateController.setState('groundCling')
		}

	// start moving
		// if (this.player.body.velocity.x === 0)
		// {
		// 	this.player.setVelocityX(this.player.flipX ? this.player.moveSpeed : -this.player.moveSpeed);
		// }
	}

	jump()
	{
		this.player.setVelocityY(-this.player.jumpForce);

		this.player.playAnimation('jump');
		this.stateController.setState('airborne');
		this.player.scene.sound.play('bird-flap');

		if (!this.player.started)
		{
			this.player.startMoving();
		}
	}
}

// TODO: it may be necessary to create another 'standing' state seperate from this for the case in 
// which the player isn't moving.