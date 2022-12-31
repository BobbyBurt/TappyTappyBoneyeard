import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";

/** player is grounded, moving in either direction */
export default class Running implements State {

	name: string = 'running';
	player: playerPrefab;

	jumpForce: number = 300;
	
	constructor(_player:playerPrefab)
	{
		this.player = _player;
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
	}

	exit()
	{
		// console.log('exit');
	}

	jump()
	{
		this.player.setVelocityY(-this.jumpForce);
	}
}
