import playerPrefab from "~/prefabs/playerPrefab";
import Running from "states/Running";
import State from "states/State";

var currentState:State;
var states:any;
	// TODO: define type

export default class StateController
{	
	constructor(_player:playerPrefab)
	{
		states =
		{
			running: new Running(_player)
		}

        // set reference to this so states can call transition()
        // for (const state of Object.keys(states).map(key => states[key]))
		// {
        //     state.stateControl = this;
        // }
	}

	setState(name:any)
	// TODO: define type
	{
		if (currentState === states[name])
		{	
			return;
		}
		
		currentState = states[name];
		currentState.enter();
	}

	update()
	{
        currentState.update();
	}

	handleInput(input:String)
	{
        currentState.handleInput(input);
	}
}