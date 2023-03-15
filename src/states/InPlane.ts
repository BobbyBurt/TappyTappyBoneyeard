import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player is grounded, moving in either direction */
export default class InPlane implements State {

	name: playerStateName = 'inPlane';
	player: playerPrefab;
	stateController: StateController;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		this.player.play('victory');
		this.player.flipX = true;
		this.player.setDepth(13);

		this.player.body.setEnable(false);
	}
	
	update()
	{	
		
	}
}
