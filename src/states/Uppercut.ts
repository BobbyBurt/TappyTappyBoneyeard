import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player flies forward hitting enemies in it's path */
export default class Uppercut implements State {

	name: playerStateName = 'uppercut';
	player: playerPrefab;
	stateController: StateController;

	timer: Phaser.Time.TimerEvent | undefined;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		this.player.setTexture('bird1punch');
		this.player.setRotation(this.player.flipX? -1.5 : 1.5);

		this.player.uppercutCharged = false;
		
		this.timer = new Phaser.Time.TimerEvent({ delay: 150, loop: false, callback: () =>
		{	
			this.player.setRotation(0);
			this.player.stateController.setState('airborne');
		}});
	
		this.player.scene.time.addEvent(this.timer);
	}
	
	update()
	{	
		if (this.player.onWallFacing(true))
		{
			this.player.body.setVelocity(0, 0);
			this.player.setRotation(0);
			this.stateController.setState('cling');
			this.timer?.remove();
			return;
		}

		this.player.body.setVelocityY(-300);
	}
}
