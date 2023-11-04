/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PreloadText extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.BitmapText) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PreloadText"] = this;

		/* START-USER-CTR-CODE */

		this.scene.load.on(Phaser.Loader.Events.PROGRESS, (p:number) => {

			if (p === 1)
			{
				this.gameObject.text = "100%";
			}
			else 
			{
				this.gameObject.text = Math.floor(p * 100) + "%";
			}
		});

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.BitmapText): PreloadText {
		return (gameObject as any)["__PreloadText"];
	}

	private gameObject: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
