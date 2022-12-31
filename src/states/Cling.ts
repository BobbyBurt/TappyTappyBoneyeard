import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class Cling implements State {

	name: string = 'cling';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		if (this.player.onWall == 'right')
		{
			this.player.flipX = false;
		}
		else if (this.player.onWall == 'left')
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

		if (this.player.onFloor)
		{
			this.stateController.setState('groundCling');
		}
	}

	wallJump()
	{
		let velocityX = 0;
		if (this.player.onWall == 'right')
		{
			velocityX =	-this.player.moveSpeed;
		}
		if (this.player.onWall == 'left')
		{
			velocityX =	this.player.moveSpeed;
		}
		console.log(this.player.onWall, velocityX);
			// LEFT: this doesn't work because onWall isn't correct

		this.player.setVelocity(velocityX, -this.player.jumpForce);
	}
}
