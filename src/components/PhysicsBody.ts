
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PhysicsBody extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PhysicsBody"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): PhysicsBody {
		return (gameObject as any)["__PhysicsBody"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public offsetX: number = 0;
	public offsetY: number = 0;
	public height: number = 0;
	public width: number = 0;
	public gravity: number = 0;

	/* START-USER-CODE */

	start()
	{
		this.scene.physics.add.existing(this.gameObject);

		let body = this.gameObject.body;
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
