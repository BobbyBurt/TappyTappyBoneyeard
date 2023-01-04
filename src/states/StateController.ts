import playerPrefab from "~/prefabs/playerPrefab";
import Running from "states/Running";
import State from "states/State";
import Airborne from "./Airborne";
import Cling from "./Cling";
import GroundCling from "./GroundCling";
import Punch from "./Punch";

export default class StateController
{	
	states:any;
	public currentState:State;
	// TODO: define type

	constructor(_player:playerPrefab)
	{
		this.states =
		{
			running: new Running(_player, this),
			airborne: new Airborne(_player, this),
			cling: new Cling(_player, this),
			groundCling: new GroundCling(_player, this),
			punch: new Punch(_player, this)
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
		console.log(`state transition: ${this.currentState.name} => ${name}`);
		
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