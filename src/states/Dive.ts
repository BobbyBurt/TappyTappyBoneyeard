import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is airborne */
export default class Dive implements State {

	name: playerStateName = 'dive';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		this.player.playAnimation('dive', false);

		this.player.body.setVelocityY(250);
	}
	
	update()
	{	
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
		else if (this.player.onWallFacing(true))
		{
			this.stateController.setState('cling');
		}
	}
}
