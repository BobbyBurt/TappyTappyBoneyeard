import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";

export default class Running implements State {

	name: String = 'running';
	
	player:playerPrefab;
	
	constructor(_player:playerPrefab)
	{
		this.player = _player;
	}
	
	enter()
	{
		console.log('enter');
	}
	
	update()
	{	
		console.log('update');
	}

	exit()
	{
		console.log('exit');
	}

	handleInput(input:String)
	{
		console.log('input: ' + input);
		if (input == 'flap')
			console.log('thems a flap');
	}
}
