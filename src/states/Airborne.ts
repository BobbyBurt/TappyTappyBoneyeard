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
		if (this.player.flapCharge == 0)
		{
			this.player.play('no-more-flaps');
		}
		else
		this.player.setTexture('bird1mid');
			// this should be the airborne animation, played on the condition that the jump or 
			// flap animation is not playing. Not sure how to check current animation.
	}
	
	update()
	{	
		if (this.player.jumpInput == 'just-down' && this.player.flapCharge > 0)
		{
			this.flap();
			// this.player.sqaush();
		}
		// else if (this.player.punchInput == 'just-down' && this.player.punchCharged)
		// {
		// 	this.stateController.setState('punch');
		// }
			// MARKED FOR DELETION
		else if (this.player.punchLeftInput == 'just-down' && this.player.punchCharged)
		{
			this.player.flipX = false;
			this.stateController.setState('punch');
		}
		else if (this.player.punchRightInput == 'just-down' && this.player.punchCharged)
		{
			this.player.flipX = true;
			this.stateController.setState('punch');
		}
		else if (this.player.uppercutInput == 'just-down' && this.player.uppercutCharged)
		{
			this.stateController.setState('uppercut');
		}
		else if (this.player.eggInput == 'just-down' && this.player.eggReady)
		{
			this.player.scene.events.emit('egg-drop');
			
			this.player.body.setVelocityY(-150);
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

		if (this.player.flapCharge == 0)
		{
			this.player.play('no-more-flaps-flap');
		}
		else
		{
			this.player.play('flap');
		}
		this.player.scene.sound.play('bird-flap');

	}
}
