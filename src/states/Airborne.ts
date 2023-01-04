import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class Airborne implements State {

	name: playerStateName = 'airborne';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down')
		{
			this.flap();
		}

	// state transitions
		if (this.player.onFloor)
		{
			if (this.player.onWallFacing(true))
			{
				this.stateController.setState('groundCling')
			}
			else
			{
				this.stateController.setState('running');
			}
		}
		if (this.player.onWallFacing(true) || this.player.onWallFacing(false))
		{
			this.stateController.setState('cling')
		}
	}

	flap()
	{
		this.player.setVelocityY(-this.player.jumpForce);
	}
}
