
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PhysicsBody extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PhysicsBody"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	/** @returns {PhysicsBody} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsBody"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	offsetX = 0;
	/** @type {number} */
	offsetY = 0;
	/** @type {number} */
	height = 0;
	/** @type {number} */
	width = 0;
	/** @type {number} */
	gravity = 0;

	/* START-USER-CODE */

	start()
	{
		this.scene.physics.add.existing(this.gameObject);

		/** @type {Phaser.Physics.Arcade.Body} */
		const body = this.gameObject.body;
		body.setGravityY(this.gravity);
		body.setOffset(this.offsetX, this.offsetY);
		body.setSize(this.width, this.height);
		body.setDrag(100);
		// body.setFriction(1)
		//	offset doesn't work rn
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
