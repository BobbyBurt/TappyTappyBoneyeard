import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is against a wall above ground */
export default class Cling implements State {

	name: playerStateName = 'cling';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		this.player.setTexture('bird1mid');
	
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
			this.wallJump();
		}

		if (this.player.onWallFacing(false))
		{
			if (this.player.onFloor)
			{
				this.stateController.setState('groundCling');
			}
		}
		else
		{
			if (!this.player.onFloor)
			{
				this.stateController.setState('airborne');
			}
		}
	}

	wallJump()
	{
		let velocityX = 0;
		if (this.player.flipX)
		{
			velocityX =	this.player.moveSpeed;
		}
		else
		{
			velocityX =	-this.player.moveSpeed;
		}

		this.player.setVelocity(velocityX, -this.player.jumpForce);
	}
}
