import Phaser from "phaser";
import Level from "~/scenes/Level";

export default class SoundManager {

    private static playMusicInDevMode = false;

	private static tracksKey = ['tutorial', 'main-game', 'tutorial']
		// TODO: Replace this with 3rd track key
	private static tracksFirstLevel = [0, 10, 25]
	private static tracksVolume = [.7, .7, .7]

	/**
	 * Returns instance of BaseSound with level music that's updated if necessary.
	 * @param musicBS Pass in Level music var.
	 * @param levelIndex 
	 * @param levelScene 
	 * @returns 
	 */
	public static setLevelMusic
		(musicBS: Phaser.Sound.BaseSound, levelIndex: number, levelScene: Level,): Phaser.Sound.BaseSound
	{
	// Which track
		let trackToPlayKey = this.tracksKey[0];
		if (levelIndex >= this.tracksFirstLevel[1] && levelIndex < this.tracksFirstLevel[2])
		{
			trackToPlayKey = this.tracksKey[1];
		}
		else if (levelIndex >= this.tracksFirstLevel[2])
		{
			trackToPlayKey = this.tracksKey[2];
		}

	// Resume or Destroy
		if (musicBS !== undefined)
		{
			if (trackToPlayKey === musicBS.key)
			{
				musicBS.resume();
				return musicBS;
			}
			musicBS.destroy();
		}

	// Add, Play, Return
		musicBS = levelScene.sound.add(trackToPlayKey, 
			{ volume: this.tracksVolume[this.tracksKey.indexOf(trackToPlayKey)]})
		if (!(__DEV__ && !this.playMusicInDevMode) && !levelScene.registry.get('muted'))
		{
			musicBS.play({loop: true});
		}
		return musicBS;
	}
}