import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player flies forward hitting enemies in it's path */
export default class Uppercut implements State {

	name: playerStateName = 'uppercut';
	player: playerPrefab;
	stateController: StateController;

	timer: Phaser.Time.TimerEvent | undefined;

	priorXVelocity: number = 0;
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		this.player.scene.game.events.emit('uppercut');

		this.player.scene.events.emit('player-start');
		this.player.started = true;
		
		this.player.variableUppercutSpeed = this.player.uppercutSpeed;
		
		this.player.playAnimation('uppercut');
		// this.player.setRotation(this.player.flipX? -1.5 : 1.5);

		this.player.setFist(true, true);

		this.player.setPosition(this.player.x, this.player.y - 5);

		this.player.scene.sound.play('punch-swing');

		this.player.punchCharged = false;

		this.priorXVelocity = this.player.body.velocity.x;
		
		this.timer = new Phaser.Time.TimerEvent({ delay: 180, loop: false, callback: () =>
		{	
			this.player.setVelocity(this.priorXVelocity, -200);
			
			// this.player.setRotation(0);
			this.player.stateController.setState('airborne');
			this.player.setFist(false, true);
		}});
	
		this.player.scene.time.addEvent(this.timer);
	}
	
	update()
	{	
		// if (this.player.onWallFacing(true))
		// {
		// 	this.player.body.setVelocity(0, 0);
		// 	this.player.setRotation(0);
		// 	this.stateController.setState('cling');
		// 	this.timer?.remove();
		// 	return;
		// }
			// as velocity x is now set to 0, this transition is no longer possible

		this.player.body.setVelocity(0, -this.player.variableUppercutSpeed);
	}
}
