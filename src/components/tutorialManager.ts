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
				`Let's see some hustle, Bird Tapper! You can jump by hitting the ${InputManager.getInputName('jump')}. You'll start to move forward automatically.\n\nYou can change direction from walls; While against one, try jumping against it and jumping again to perform a wall jump.`,
			
			// level 2
				`Have you tried using your wings yet? Hit the ${InputManager.getInputName('jump')} while midair to flap and gain some more height.\n\nYour tiny wings only have the strength to do this twice, and you'll get more and more pale as you become weaker.`,

			// level 3
				`You need to defeat some enemies to earn points and unlock new levels.\n\nHit the ${InputManager.getInputName('punch')} to punch forward with a burst of speed and take out enemies in front of you. Punches are also an easy way to launch yourself from a wall.`,
				
			// level 4
				`To reach higher or farther, you may need to space out your mid-air flaps. You won't get far if you use them up too fast or slow.\n\n${scene.registry.get('mobile') ? `` : `Also, you can use the ${InputManager.getInputName('quick-restart')} anytime to restart the level.`}`,

			// level 5
				`These enemies are protected from the sides, so you'll need another approach...\n\nTry using the ${InputManager.getInputName('dive')} to dive. If you hit an enemy, you'll take them out!`,

			// level 6
				`If you take out more than one enemy without landing, you get a combo multiplier!\n\nLook for ways to get big combos to earn really high scores.`,
			
			// level 7
				`To perform an uppercut, hit the ${InputManager.getInputName('uppercut')}.\n\nThis move can take care of enemies above and help you reach higher.`,

			// level 8
				`Punches and uppercuts take a lot out of you... Your charge is indicated by the icon in the top right corner.\n\nLanding on ground is one way to recharge, but you'll also automatically recharge if you take out an enemy with your attack!`,
				
			// level 9
				// `There are a number of ways to approach each problem, and you'll often need to use more than one move.\n\nExperimenting is how you find ways to earn high scores!`
				null
		]

		return texts[levelIndex];
	}

	public static getTutorialTextMP(levelIndex: number, scene: Phaser.Scene): string | null
	{
		let texts =
		[
			// level 1
				`\nWelcome back! You took out the Purple Platoon like they were nothing, but the Krampus Fellowship Clan is hardcore!\n\nRemember your training: You can jump and flap midair with the ${InputManager.getInputName('jump')}. Hit the ${InputManager.getInputName('punch')} to punch forward, and the ${InputManager.getInputName('uppercut')} to uppercut above. Don't forget to use the ${InputManager.getInputName('dive')} to take care of enemies below!`
			]

			return texts[levelIndex];
		}
}