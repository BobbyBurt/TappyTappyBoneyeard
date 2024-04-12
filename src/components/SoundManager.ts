import Phaser from "phaser";
import Level from "~/scenes/Level";

export default class SoundManager {

    private static playMusicInDevMode = true;

// music tracks
	private static tracksKey = ['tutorial', 'main-game', 'hard-game']
	private static tracksFirstLevel = [0, 9, 16]
	// private static tracksFirstLevelMP = [0, 9, 16]
	private static tracksVolume = [.7, .7, .7]

	public static keyPlayedCurrentFrame = new Map<string, boolean>([
		['enemy-shoot-far', false],
		['enemy-shoot', false],
		['explosion', false],
		['enemy-death', false],
		['boing', false],
	]);

// sounds
	private static soundsVolume = new Map<string, number>([
		['victory', 1],
		['combo-hit', 1],
		['reflect', .6],
		['bird-flap', 1],
		['bird-die', 1],
		['enemy-death', 1],
		['explosion', .8],
		['fall', .8],
		['boing', .6],
		['shield-deflect', .8],
		['bomb-drop', .4],
		['bomb-fuse', .4],
		['enemy-shoot', .3],
		['enemy-shoot-far', .15],
		['combo-end', 1],
		['eagle', 1],
		['bird-egg-lay', 1],
		['punch-swing', 1],

		['puck_punch', 1],
		['puck_win', 1],
		['puck_death', 1],
		['puck_jump', 1],

	]);

	public static getCharacterSFX(originalKey: string, character: 'tapper' | 'puck' | 'gappy' | 'kid'): string
	{
		if (character === 'puck')
		{
			switch (originalKey)
			{
				case 'bird-flap':
					return 'puck_jump';
				case 'punch-swing':
					return 'puck_punch';
				case 'combo-end':
					return 'puck_win';
				case 'bird-die':
					return 'puck_death';
			}
		}
		else if (character === 'kid')
		{
			switch (originalKey)
			{
				case 'bird-flap':
					return 'thekid_jump';
				case 'punch-swing':
					return 'thekid_punch';
				case 'combo-end':
					return 'The_Kid_Win';
				case 'bird-die':
					return 'thekid_death';
			}
		}
		else if (character === 'gappy') {
			switch (originalKey) {
				case 'bird-flap':
					return 'gappy-jump';
				case 'punch-swing':
					return 'gappy-swing';
				case 'combo-end':
					return 'gappy-win';
				case 'bird-die':
					return 'gappy-dead';
			}
		}
		
		return originalKey;
	}

	static getTrack(world: 0 | 1 | 2 | 3, levelScene: Level): string
	{
		let character = levelScene.registry.get('selected-character');

		if (world === 0)
		{
			if (levelScene.cache.audio.has(character + '-music-ninja'))
			{
				return character + '-music-ninja';
			} else {
				if (levelScene.cache.audio.has('tapper-music-ninja')) {
					return 'tapper-music-ninja';
				}
			}
		} else if (character !== 'tapper'){
			if (levelScene.cache.audio.has(character + '-music-' + world))
				{
					return character + '-music-' + world;
				}
		}
		
		if (levelScene.cache.audio.has(SoundManager.tracksKey[world - 1])) {
			return SoundManager.tracksKey[world - 1];
			// return 'ninja-music-' + world;
		}

		// fallback
		return (__MAP_PACK__ ? 'tapper-music-ninja' : 'main-game-2');
	}

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

		if (__LEVEL_TEST__)
		{
			return musicBS;
		}

	// Which track
	let trackToPlayKey = this.getTrack(1, levelScene)
	if (!__MAP_PACK__)	{
		if (levelIndex >= this.tracksFirstLevel[1] && levelIndex < this.tracksFirstLevel[2])
		{
			trackToPlayKey = this.getTrack(2, levelScene)
		}
		else if (levelIndex >= this.tracksFirstLevel[2])
		{
			trackToPlayKey = this.getTrack(3, levelScene);
		}
	} else {
		switch (levelIndex) {
			case 14:
				trackToPlayKey = this.getTrack(1, levelScene);
				break;
			case 15:
				trackToPlayKey = this.getTrack(2, levelScene);
				break;
			case 16:
				trackToPlayKey = this.getTrack(3, levelScene);
				break;
			case 17:
				trackToPlayKey = this.getTrack(1, levelScene);
				break;
			case 18:
				trackToPlayKey = this.getTrack(2, levelScene);
				break;
			case 19:
				trackToPlayKey = this.getTrack(3, levelScene);
				break;
			case 20:
				trackToPlayKey = this.getTrack(1, levelScene);
				break;
			case 21:
				trackToPlayKey = this.getTrack(2, levelScene);
				break;
			case 22:
				trackToPlayKey = this.getTrack(3, levelScene);
				break;
			default: 
				trackToPlayKey = this.getTrack(0, levelScene);
				// TODO: add fallback
				break;
		}
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

	public static setLevelSelectMusic
		(musicBS: Phaser.Sound.BaseSound, scene: Phaser.Scene): Phaser.Sound.BaseSound
	{	
		if (__LEVEL_TEST__)
		{
			return musicBS;
		}

		// Resume or Destroy
		if (musicBS !== undefined)
		{
			if (musicBS.isPlaying)
			{
				return musicBS;
			}

			musicBS.resume();
			return musicBS;
		}
		else
		{
			// Add, Play, Return
			musicBS = scene.sound.add((__MAP_PACK__ ? 'level-select-mp' : 'level-select'), { volume: .7 });
			if (!(__DEV__ && !this.playMusicInDevMode) && !scene.registry.get('muted'))
			{
				musicBS.play({loop: true});
			}
			return musicBS;
		}

	}

	/**
	 * 
	 * @param key 
	 * @param scene 
	 * @param overrideVolume If not provided, the pre-set volume for this key will be used if it exists.
	 */
	public static play(key: string, scene: Phaser.Scene, overrideVolume?: number, overrideDetune? : number,)
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

		if (key === 'explosion' || key === 'enemy-shoot' || key === 'enemy-shoot-far' || key === 'enemy-death' || key === 'boing') {

			if (SoundManager.keyPlayedCurrentFrame.get(key)) {
				console.debug('play() return; Overlapping sfx');
				return;
			}

			SoundManager.keyPlayedCurrentFrame.set(key, true);
		}

		scene.sound.play(key, {volume: volume, detune: (overrideDetune ? overrideDetune : 0)})
	}
}