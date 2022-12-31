import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class GroundCling implements State {

	name: string = 'groundCling';
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
			this.jump();
		}

		if (!this.player.onFloor)
		{
			this.stateController.setState('cling');
		}
	}

	jump()
	{
		this.player.setVelocityY(-this.player.jumpForce);
	}
}
