class StateController {

	states;

	currentState;

	constructor(player, scene) {

        /** all state classes */
		this.states = {
			running: new Running(player, scene),
		}

        // set reference to this so states can call transition()
        for (const state of Object.values(this.states)) {

            state.stateControl = this;
        }
	}

	setState(name) {

		if (this.currentState === this.states[name]) {
			
			return;
		}
		
		this.currentState = this.states[name];
		this.currentState.enter();
	}

	update() {

        this.currentState.update();
	}
}