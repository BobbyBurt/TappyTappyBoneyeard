
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Align extends UserComponent {

	constructor(gameObject: any) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__Align"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): Align {
		return (gameObject as any)["__Align"];
	}

	private gameObject: any;
	public up: boolean = false;
	public middle: boolean = false;
	public down: boolean = false;
	public left: boolean = false;
	public center: boolean = false;
	public right: boolean = false;
	public horizontalOffset: number = 0;
	public verticalOffset: number = 0;

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
		let worldView = this.scene.cameras.getCamera('UICam').worldView;

		if (this.up)
		{
			this.gameObject.setY(worldView.top + this.verticalOffset);
		}
		if (this.middle)
		{
			this.gameObject.setY(worldView.centerY + this.verticalOffset);
		}
		if (this.down)
		{
			this.gameObject.setY(worldView.bottom + this.verticalOffset);
		}
		if (this.left)
		{
			this.gameObject.setX(worldView.left + this.horizontalOffset);
		}
		if (this.center)
		{
			this.gameObject.setX(worldView.centerX + this.horizontalOffset);
		}
		if (this.right)
		{
			this.gameObject.setX(worldView.right + this.horizontalOffset);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
