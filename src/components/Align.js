 
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Align extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Align"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	/** @returns {Align} */
	static getComponent(gameObject) {
		return gameObject["__Align"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {boolean} */
	up = false;
	/** @type {boolean} */
	middle = false;
	/** @type {boolean} */
	down = false;
	/** @type {boolean} */
	left = false;
	/** @type {boolean} */
	center = false;
	/** @type {boolean} */
	right = false;
	/** @type {number} */
	horizontalOffset = 0;
	/** @type {number} */
	verticalOffset = 0;

	/* START-USER-CODE */

	start()
	{
		this.scene.events.on('resize', this.align, this);

		this.align();
	}

	destroy()
	{
		this.scene.events.off('resize', this.align, this);
	}

	/**
	 * 
	 */
	align()
	{
		this.worldView = this.scene.cameras.getCamera('UIcam').worldView;

		if (this.up)
		{
			this.gameObject.setY(this.worldView.top + this.verticalOffset);
		}
		if (this.middle)
		{
			this.gameObject.setY(this.worldView.centerY + this.verticalOffset);
		}
		if (this.down)
		{
			this.gameObject.setY(this.worldView.bottom + this.verticalOffset);
		}
		if (this.left)
		{
			this.gameObject.setX(this.worldView.left + this.horizontalOffset);
		}
		if (this.center)
		{
			this.gameObject.setX(this.worldView.centerX + this.horizontalOffset);
		}
		if (this.right)
		{
			this.gameObject.setX(this.worldView.right + this.horizontalOffset);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
