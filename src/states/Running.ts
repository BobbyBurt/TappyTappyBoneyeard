import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class Running implements State {

	name: string = 'running';
	player: playerPrefab;
	stateController: StateController;


	jumpForce: number = 300;
	
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
			this.jump();
		}

		if (!this.player.onFloor)
		{
			this.stateController.setState('airborne');
		}
	}

	jump()
	{
		this.player.setVelocityY(-this.jumpForce);
	}
}
