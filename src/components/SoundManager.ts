import Phaser from "phaser";
import Level from "~/scenes/Level";

export default class SoundManager {

    private static playMusicInDevMode = true;

// music tracks
	private static tracksKey = ['tutorial', 'main-game', 'hard-game']
	private static tracksFirstLevel = [0, 9, 16]
	private static tracksVolume = [.7, .7, .7]

// sounds
	private static soundsVolume = new Map<string, number>([
		['victory', 1],
		['combo-hit', 1],
		['reflect', .6],
		['bird-flap', 1],
		['bird-die', 1],
		['enemy-death', 1],
		['explosion', .7],
		['fall', .8],
		['punch-swing', 1]
	]);

	/**
	 * Returns instance of BaseSound with level music that's updated if necessary.
	 * @param musicBS Pass in Level music var.
	 * @param levelIndex 
	 * @param levelScene 
	 * @returns 
	 */
	public static setLevelMusic
		(musicBS: Phaser.Sound.BaseSound, levelIndex: number, levelScene: Level): Phaser.Sound.BaseSound
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

	/**
	 * 
	 * @param key 
	 * @param scene 
	 * @param overrideVolume If not provided, the pre-set volume for this key will be used if it exists.
	 */
	public static play(key: string, scene: Phaser.Scene, overrideVolume?: number)
	{
	// determine volume
		let volume = 0;
		if (overrideVolume != null)
		{
			volume = overrideVolume;
		}
		else
		{
			const soundVolume = this.soundsVolume.get(key)
			if (soundVolume != null)
			{
				volume = soundVolume
			}
			else
			{
				volume = 1;
			}
		}

		scene.sound.play(key, {volume: volume})
	}
}