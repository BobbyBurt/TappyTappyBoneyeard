import playerPrefab from "~/prefabs/playerPrefab";
import State from "states/State";
import StateController from "./StateController";

/** player flies forward hitting enemies in it's path */
export default class Punch implements State {

	name: playerStateName = 'punch';
	player: playerPrefab;
	stateController: StateController;

	timer: Phaser.Time.TimerEvent | undefined;
	uppercutAllowTimer!: Phaser.Time.TimerEvent;
	pauseTimer!: Phaser.Time.TimerEvent;

	/** Set true if up is held on entry. Will enter uppercut state after windup. */
	queueUppercut = false;

	get allowUppercut()
	{
		let value = false;
		if (this.player.scene.registry.get('mobile'))
			return true;
		else if (this.player.scene.registry.get('new-uppercut-input'))
			return false;
		else
			return true;
	}
	
	constructor(_player:playerPrefab, _stateController:StateController)
	{
		this.player = _player;
		this.stateController = _stateController;
	}
	
	enter()
	{
		// frozen punch bug fix
		if (this.timer)
		{
			console.debug(`timer ${this.timer.getProgress()}`);
			this.timer.remove();
		}
		if (this.pauseTimer)
		{
			console.debug(`pause timer ${this.pauseTimer.getProgress()}`);
			this.pauseTimer.remove();
		}
		
		this.player.scene.game.events.emit('punch');

		this.queueUppercut = false;

		// last move
		this.player.lastFistMove = 'punch'
		
		this.player.scene.events.emit('player-start');
		this.player.started = true;

		this.player.playAnimation('uppercut');

		this.player.punchCharged = false;

		this.player.setVelocity(0, 0);

		this.pauseTimer = new Phaser.Time.TimerEvent({ delay: 150, callback: () =>
		{
			if (this.queueUppercut)
			{
				this.uppercut();

				return;
			}

			this.player.playAnimation('punch');
			this.player.scene.sound.play('punch-swing');
	
			this.player.variablePunchSpeed = this.player.punchSpeed;
	
			// this.player.setPosition(this.player.x + (this.player.flipX ? 5 : -5 ), this.player.y);
	
			this.player.setFist(true, false);
		}});

		this.uppercutAllowTimer = new Phaser.Time.TimerEvent({ delay: 230, callback: () =>
		{
			console.debug('uppercut no longer allowed');
			// this.player.scene.sound.play('punch-swing');
		}});

		// prev 170
		this.timer = new Phaser.Time.TimerEvent({ delay: 320, loop: false, callback: () =>
		{	
			this.player.body.setVelocity
				((this.player.flipX? this.player.moveSpeed : -this.player.moveSpeed), 0);
			this.player.body.allowGravity = true;

			// grace timer
			this.player.fistGraceTimer = new Phaser.Time.TimerEvent({ delay: 50 });
			this.player.scene.time.addEvent(this.player.fistGraceTimer);

		// state transitions
			if (this.player.onFloor)
			{
				this.player.setFist(false, false);
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.player.punchDeflected = false;
				this.player.stateController.setState('running');
			}
			else
			{
				this.player.setFist(false, false);
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.player.punchDeflected = false;
				this.player.stateController.setState('airborne');
			}
		}});
	
		this.player.scene.time.addEvent(this.timer);
		this.player.scene.time.addEvent(this.uppercutAllowTimer);
		this.player.scene.time.addEvent(this.pauseTimer);

		if (!this.player.onFloor)
		{
			this.player.body.allowGravity = false;
				// if we turn off gravity while player is on floor, then floor detection won't 
				// function properly.
		}
	}
	
	update()
	{
		// queue uppercut for after windup
		if (this.pauseTimer.getProgress() < 1 && 
			(this.player.jumpInput === 'down' || this.player.jumpInput === 'just-down') && this.allowUppercut)
		{
			console.debug('queuing uppercut');

			this.queueUppercut = true;
		}

		if (this.pauseTimer.getProgress() < 1 && 
			(this.player.uppercutInput === 'down' || this.player.uppercutInput === 'just-up'))
		{
			console.debug('queuing uppercut');

			this.queueUppercut = true;
		}
		
		if (this.player.jumpInput == 'just-down' 
			&& this.uppercutAllowTimer.getProgress() !== 1 
			&& this.pauseTimer.getProgress() > 0)
		{
			if (this.allowUppercut)
				this.uppercut();
		}

		if (this.player.onWallFacing(true))
		{
			if (this.player.onFloor)
			{
				this.player.body.setVelocity(0, 0);
				this.player.body.allowGravity = true;
				this.player.setFist(false, false);
				this.player.punchDeflected = false;
				this.stateController.setState('groundCling');
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.timer?.remove();
				return;
			}
			else
			{
				this.player.body.setVelocity(0, 0);
				this.player.body.allowGravity = true;
				this.player.setFist(false, false);
				this.player.punchDeflected = false;
				this.stateController.setState('cling');
				this.player.punchCooldownTimer = this.player.scene.time.addEvent({delay: 200});
				this.timer?.remove();
				return;
			}

		}
		else if (this.pauseTimer.getProgress() === 1)
		{
			this.player.body.setVelocity((this.player.flipX? 
				this.player.variablePunchSpeed : -this.player.variablePunchSpeed), 0);
		}

	}

	uppercut()
	{
		this.timer?.remove();
		this.pauseTimer?.remove();
		this.player.body.allowGravity = true;
		this.player.punchDeflected = false;
		this.stateController.setState('uppercut');
	}
}
