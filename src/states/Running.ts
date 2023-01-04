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
		// console.log('enter');
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down')
		{
			if (this.player.body.velocity.x == 0)
			{
				this.player.body.setVelocityX(this.player.flipX? this.player.moveSpeed : -this.player.moveSpeed);
			}
			else
			{
				this.jump();
				this.player.sqaush();
			}
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
	}
}
