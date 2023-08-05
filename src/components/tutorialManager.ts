import InputManager from "./InputManager";

export default class tutorialManager {

    public static doTutorialInDevMode = true;
		// TODO: this seems to disable tutorial outside of dev mode too..

	/** index correlates to level index. Levels without tutorials are null or beyond the array's 
	 * 	length. 
	 * 
	 * 	Make sure InputManager.inputMode is updated first, as this 
	 * */
	public static getTutorialText(levelIndex: number, scene: Phaser.Scene): string | null
	{
		let texts =
		[
			// level 1
				`Welcome to life, Bird Tapper! You can jump by hitting the ${InputManager.getInputName('jump')}. You'll start to move forward automatically.\n\nYou can change direction from walls; While against one, try jumping against it and jumping again to perform a wall jump.`,
			
			// level 2
				`Have you tried using your wings yet? Hit the ${InputManager.getInputName('jump')} while midair to flap and gain some more height.\n\nYour tiny wings only have the strength to do this twice, and you'll get more and more pale as you become weaker.`,

			// level 3
				`Soldiers are dangerous, so it's time to attack! Hit the ${InputManager.getInputName('punch')} to punch forward with a burst of speed.\n\nDo this in front of an enemy to take them out with your fist. Punches are also an easy way to launch yourself from a wall.`,
				
			// level 4
				`To reach higher or farther, you may need to space out your mid-air flaps. You won't get far if you use them up too fast or slow.\n\n${scene.registry.get('mobile') ? `` : `Also, you can use the ${InputManager.getInputName('quick-restart')} anytime to restart the level.`}`,

			// level 5
				`These enemies are protected from the sides, so it's time to dive! Use the ${InputManager.getInputName('dive')} to boost yourself downwards. If you hit an enemy, you'll take them out!\n\nDiving also aids your mobility, helping you control / time your landings.`,

			// level 6
				`If you take out more than one enemy without landing, you get a combo which multiplies the score for each enemy!\n\nBe creative and look for ways to get big combos, as that's how you get real high scores.`,
			
			// level 7
				`When punching forward doesn't work, hit 'em with an uppercut!\n\nQuickly double-tap ${InputManager.getInputName('punch')} to launch upward and take out the enemies above you. This move can also help you reach high places.`,

			// level 8
				`Punches and uppercuts take a lot out of you... Your charge is indicated by the icon in the top right corner.\n\nLanding on ground is one way to recharge, but you'll also automatically regain charge if you take out an enemy with your attack!`,
				
			// level 9
				`There are a number of ways to approach each problem, and you'll often need to use more than one move.\n\nThis concludes the tutorial. Break a leg out there!`
		]

		return texts[levelIndex];
	}
}