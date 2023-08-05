
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UIButton extends UserComponent {

	constructor(gameObject: any) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__UIButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): UIButton {
		return (gameObject as any)["__UIButton"];
	}

	private gameObject: any;
	public property1!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
