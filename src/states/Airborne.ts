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
		this.player.playAnimation('airborne', true);
			// this should be the airborne animation, played on the condition that the jump or 
			// flap animation is not playing. Not sure how to check current animation.
	}
	
	update()
	{	
		// this.player.setVelocityX((this.player.flipX ? this.player.moveSpeed : -this.player.moveSpeed));
		
		if (this.player.jumpInput == 'just-down')
		{
			
			if (this.player.flapCharge > 0)
			{
				this.flap();
			}

			this.player.playAnimation('flap');
		}
		// else if (this.player.punchInput == 'just-down' && this.player.punchCharged)
		// {
		// 	this.stateController.setState('punch');
		// }
			// MARKED FOR DELETION
		else if (this.player.punchInput == 'just-down' && this.player.punchCharged)
		{
			// this.player.flipX = false;
			this.stateController.setState('punch');
		}
		else if (this.player.uppercutInput == 'just-down' && this.player.punchCharged)
		{
			this.stateController.setState('uppercut');
		}
		// else if (this.player.eggInput == 'just-down' && this.player.eggReady)
		// {
		// 	this.player.scene.events.emit('egg-drop');
			
		// 	this.player.body.setVelocityY(-150);
		// }
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

		this.player.scene.sound.play('bird-flap');

	}
}
