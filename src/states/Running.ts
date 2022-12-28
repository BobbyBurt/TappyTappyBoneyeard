import PlayerState from "states/playerState";
import playerPrefab from "~/prefabs/playerPrefab";

export default class Running implements PlayerState {

	player:playerPrefab;
	
	constructor(_player:playerPrefab)
	{
		this.player = _player;

	}
	
	enter()
	{
		
	}
	
	update()
	{	
		console.log('running');
	}

	handleInput(input:any)
	{

	}
// set state example
	// this.stateControl.setState('walk')
}
