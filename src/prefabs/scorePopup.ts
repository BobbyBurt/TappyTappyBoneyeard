import Phaser from "phaser";

export default class ScorePopup extends Phaser.GameObjects.BitmapText {

	constructor(scene: Phaser.Scene, x: number, y: number)
	{	
		super(scene, x, y, 'nokia', 'score');
		this.setCenterAlign();
		this.setDropShadow(0, 1000, 5675510, 1);

		this.scene = scene;
	}

	public scene: Phaser.Scene;

	// private scoreColourMap = new Map<number, number>
	// ([
	// 	[100, 5675510],
	// 	[200, 5675510]
	// ]);

	public appear(score: number)
	{	
		this.setVisible(true);
		this.setActive(true);

		this.setText(score + '');
		
		this.scene.tweens.add
		({
			targets: this,
			y: this.y - 30,
			duration: 300,
			completeDelay: 300,
			// ease: Phaser.Math.Easing.Linear
			ease: Phaser.Math.Easing.Cubic.Out,
			onComplete: this.tweenCompleteCallback
		});
	}

	private tweenCompleteCallback(tween:Phaser.Tweens.Tween, targets: Array<any>)
	{
		console.log(targets);
		targets[0].setVisible(false);
		targets[0].setActive(false);
	}
}