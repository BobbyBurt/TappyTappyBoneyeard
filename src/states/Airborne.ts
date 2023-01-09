import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is airborne */
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
		this.player.setTexture('bird1mid');
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down' && this.player.flapCharge > 0)
		{
			this.flap();
			this.player.sqaush();
		}
		else if (this.player.punchInput == 'just-down' && this.player.punchCharged)
		{
			this.stateController.setState('punch');
		}
		else if (this.player.eggInput == 'just-down')
			// TODO: add conditionals, can player drop egg?
		{
			this.player.scene.events.emit('egg-drop');
		}
		else if (this.player.diveInput == 'just-down')
		{
			this.stateController.setState('dive');
		}
			// TODO: consider priority of these inputs

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

		this.player.flapCharge--;
	}
}
