import playerPrefab from "~/prefabs/playerPrefab";
import Running from "states/Running";
import State from "states/State";
import Airborne from "./Airborne";
import Cling from "./Cling";
import GroundCling from "./GroundCling";
import Punch from "./Punch";
import Dive from "./Dive";
import Uppercut from "./Uppercut";
import Level from "~/scenes/Level";
import InPlane from "./InPlane";

export default class StateController
{	
	states:any;
	public currentState:State;
	// TODO: define type
	private scene: Level;
	private player: playerPrefab;
	private debugShowTransitionKey: Phaser.Input.Keyboard.Key;

	constructor(_player:playerPrefab, _scene: Level)
	{
		this.scene = _scene;
		this.player = _player;

		this.debugShowTransitionKey = this.scene.input.keyboard.addKey('C');

		this.states =
		{
			running: new Running(_player, this),
			airborne: new Airborne(_player, this),
			cling: new Cling(_player, this),
			groundCling: new GroundCling(_player, this),
			punch: new Punch(_player, this),
			dive: new Dive(_player, this),
			uppercut: new Uppercut(_player, this),
			inPlane: new InPlane(_player, this)
		}

		this.currentState = new Running(_player, this);
			// this is just so typescript doesn't get upset that the var can't be undefined

        // set reference to this so states can call transition()
        // for (const state of Object.keys(states).map(key => states[key]))
		// {
        //     state.stateControl = this;
        // }
	}

	setState(name:playerStateName)
	{
		if (this.player.lockInput)
		{
			return; 
		}
		
		// if (this.debugShowTransitionKey.isDown)
		// {
			// console.log(`state transition: ${this.currentState.name} => ${name}`);
		// }
		
		if (this.currentState === this.states[name])
		{	
			return;
		}
		
		this.currentState = this.states[name];
		this.currentState.enter();
	}

	update()
	{
        this.currentState.update();
	}
}