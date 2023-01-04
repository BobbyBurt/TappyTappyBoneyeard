
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollFactor extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__ScrollFactor"] = this;

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): ScrollFactor {
		return (gameObject as any)["__ScrollFactor"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public factorX: number = 0;
	public factorY: number = 0;

	/* START-USER-CODE */

	start()
	{
		this.gameObject.setScrollFactor(this.factorX, this.factorY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
