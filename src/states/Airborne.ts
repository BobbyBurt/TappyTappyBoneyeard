import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class Airborne implements State {

	name: string = 'airborne';
	player: playerPrefab;
	stateController: StateController;

	jumpForce: number = 200;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		console.log('airborne');
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down')
		{
			this.flap();
		}

		if (this.player.onFloor)
		{
			this.stateController.setState('running');
		}
	}

	flap()
	{
		this.player.setVelocityY(-this.jumpForce);
	}
}
