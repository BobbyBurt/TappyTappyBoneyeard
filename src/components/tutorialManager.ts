import InputManager from "./InputManager";

export default class tutorialManager {

    public static doTutorialInDevMode = true;

	/** index correlates to level index. Levels without tutorials are null or beyond the array's 
	 * 	length. 
	 * 
	 * 	Make sure InputManager.inputMode is updated first, as this 
	 * */
	public static getTutorialText(levelIndex: number): string | null
	{
		let texts =
		[
			// level 1
				`Welcome to life, Bird Tapper! You can jump with the ${InputManager.getInputName('jump')}. You'll start to move forward automatically.\n\nYou can change direction from walls; While against one, try jumping against it and jumping again to perform a wall jump.`,
			
			// level 2
				`Have you tried using your wings yet? Use the ${InputManager.getInputName('jump')} while midair to flap and gain some more height.\n\nYour tiny wings only have the strength to do this twice, and you'll get more and more pale as you become weaker.`,

			// level 3
				`Soldiers are dangerous, so it's time to attack! Hit the ${InputManager.getInputName('punch')} to punch forward with a burst of speed.\n\nDo this in front of an enemy to take them out with your fist. Punches are also an easy way to launch yourself from a wall.`,
				
			// level 4
				null,

			// level 5
				`Time to dive. Use the ${InputManager.getInputName('dive')} to boost yourself downwards. If you hit an enemy, you'll take them out!\n\nDiving also aids your mobility, helping you control / time your landings.`,

			// level 6
				null,
			
			// level 7
				`When punching forward isn't enough, hit 'em with an uppercut!\n\nUse the ${InputManager.getInputName('uppercut')} to launch upward and take out the enemies above you.`,

			// level 8
				`Punches and uppercuts take a lot out of you...\n\nLanding on ground is one way to recharge, but you'll also automatically regain charge if you take out an enemy with your attack!`,
				
			// level 9
				`Each enemy you take out will add to your combo as long as you're not grounded.\n\nTry to figure out ways to build that combo!`,

			// level 10
				`Good hustle out there! Time to test your skills.\n\nThis concludes the tutorial. Break a leg out there!`
		]

		return texts[levelIndex];
	}
}