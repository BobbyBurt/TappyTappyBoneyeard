
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MobileButton extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__MobileButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): MobileButton {
		return (gameObject as any)["__MobileButton"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public input: string = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
