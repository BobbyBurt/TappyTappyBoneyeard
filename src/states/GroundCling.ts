import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class GroundCling implements State {

	name: playerStateName = 'groundCling';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
	// update sprite flip
		if (this.player.onWallRight)
		{
			this.player.flipX = false;
		}
		else if (this.player.onWallLeft)
		{
			this.player.flipX = true;
		}
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down')
		{
			this.jump();
		}

		if (!this.player.onFloor)
		{
			if (this.player.onWallFacing(false))
			{
				this.stateController.setState('cling');
			}
			else
			{
				this.stateController.setState('airborne');
			}
		}
	}

	jump()
	{
		this.player.setVelocityY(-this.player.jumpForce);
	}
}
