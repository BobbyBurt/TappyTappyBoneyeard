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
		this.player.play('running');
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down' && this.player.flapCharge > 0)
		{
			this.jump();
			// this.player.sqaush();
		}
		// else if (this.player.punchInput == 'just-down')
		// {
		// 	this.stateController.setState('punch');
		// }
			// MARKED FOR DELETION
		else if (this.player.punchLeftInput == 'just-down' && this.player.punchCharged)
		{
			this.player.flipX = false;
			this.stateController.setState('punch');
		}
		else if (this.player.punchRightInput == 'just-down' && this.player.punchCharged)
		{
			this.player.flipX = true;
			this.stateController.setState('punch');
		}
		else if (this.player.uppercutInput == 'just-down' && this.player.uppercutCharged)
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
			}
		}
		if (this.player.onWallFacing(true))
		{
			this.stateController.setState('groundCling')
		}
	}

	jump()
	{
		this.player.setVelocityY(-this.player.jumpForce);

		this.player.play('flap');
	}
}

// TODO: it may be necessary to create another 'standing' state seperate from this for the case in 
// which the player isn't moving.