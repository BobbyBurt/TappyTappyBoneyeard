class Running {

	/** @type {Phaser.GameObjects.Sprite} */
	player;

	/** @type {Phaser.Scene} */
	scene;

	/** reference to StateController class, used to call transition() */
	stateControl;
	
	constructor(player, scene)
	{
		this.player = player;
		this.scene = scene;

	}
	
	enter()
	{
		
	}
	
	update()
	{	
		console.log('running');
	}
// set state example
	// this.stateControl.setState('walk')
}
