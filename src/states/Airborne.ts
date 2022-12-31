import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class Airborne implements State {

	name: string = 'airborne';
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
			if (this.player.onWall != 'false')
			{
				this.stateController.setState('groundCling')
			}
			else
			{
				this.stateController.setState('airborne');
			}
		}
		if (this.player.onWall != 'false')
		{
			this.stateController.setState('groundCling')
		}
	}

	flap()
	{
		this.player.setVelocityY(-this.player.jumpForce);
	}
}
