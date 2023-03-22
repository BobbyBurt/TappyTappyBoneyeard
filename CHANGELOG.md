# Changelog

# Version 12 Alpha

This version focuses on additions & improvements to gameplay UI among other additions and improvements. Many internal changes and additions have been made as part of a code refactor, resulting in better player sprite loading, better sound handling, consistent & dynamic input handling, etc.

### Changed

- Better music handling.
- All gameplay UI has been decoupled to a seperate overlapping scene.
- Better-defined depth sorting of graphics.
- Punch & uppercut speed is reduced to run move speed after hitting something.
- Moved debug text to the bottom left.
- Increased player sprite size to 20x20.
- Debug wall detect graphic now changes colour based on onWall state.
- Player sprites are all now contained within one spritesheet and atlas.
- Made player physics body size / offset adjustments.
- Overhauled tutorial UI functionality to be better and more consistent across mobile & desktop. Tutorial levesl have been updated to remove right-space which was added to account for previous tutorial UI offset.
- Quick restart / level select shortcuts are now exclusive to dev mode & keyboard input.
- Replaced grenade sprite with a mask, more clearly defining enemies which explode on impact.
- Player & timer are still until player jumps, uppercuts or punches. Tutorial levels have been updated to account for this.

### Added

- Added pause functionality which happens automatically when the window loses focus, or on user input.
- Added hitstop when hitting enemies.
- Added enemy hit particles.
- Added updated punch charge UI.
- Improved level timer UI.
- Added tutorial popup frame.
- Added InputManager class with functions providing names and bindings. The active input mode will be detected, and relevant input names will be used when instructing the player.
- Loading screen now shows each asset key as it's loaded, because it looks cool.
- Added post-level summary screen.

### Removed

- Finally got rid of the Level's UICam.
- Hid enemies defeated UI.
- Removed exhausted sprites which had conveyed punch charge.

### Fixed

- Sounds now use their assigned volume.
- Adjusted player physics body to appear more symmetric and not have areas which are overlapped by level tiles.
- Fixed bombs several issues with bombs.

# Version 11 Alpha - 2023-03-11

This build has my third attempt at a tutorial, but first try at something full and shippable. I've improved the level creation process into something more foolproof.

### Changed

- ResetY object is no longer required / used for level bottom boundary, instead just using the bottom of the tilemap.
- Enemy settings in the tilemap editor have been unified as custom properties.
- VisionPoly no longer needs to be named such in the tilemap, as it's identified by being a polygon object.
- Starting point no longer needs to be named such, as it's identified by GID.
- Updated all level tilemaps to work with updated loading methods.
- Level now ends when the player touches the plane, not when the enemy in the plane is taken out.
- Modified alpha level 1 to focus on jumping.
- Player now moves automatically when the level starts.
- Diving into an enemy now sets the player's state to airborne, allowing them to use any other move.
- No starting point object in the tilemap will no longer result in a crash.
- Adaptive zoom takes height and scale zoom (which depends on device / PPI) into account. Resolution threshold & zoom level has been tweaked.
- Adaptive zoom is applied during gameplay when the screen is resized.

### Added

- Added specific run animation sprites.
- Added sprite variations to convey punch charge.
- Added plane to the Tiled tileset, which adds a standalone goal plane for the first level.
- Added bird victory sprite.
- Added level end animation in which the plane flies offscreen.
- Decorated the first several levels according to a new design language / set of rules.
- Implmented tutorial UI, wrote lesson text.
- Added level timer.
- Added score popups which appear when taking out an enemy.

### Fixed

- Enabled scale autoRound. While playing in the full browser window, scrollbars will no longer appear.
- UI no longer disappears or offsets on fullscreen or mobile orientation change.
- For enemies flipped horizontally and with guns pointing up or down, gun sprite is now rotated in the proper direction.

# Version 10 Alpha

This build focuses on finalizing player control, movement and collision. Additionally, I'm creating a series of new levels. These things are to make a good demonstration of the primary gameplay loop.

### Changed

- Player punch sprite has been separated into it's own image and hitbox, resulting in punch / uppercuts being easier / less risky.
- Changed keyboard, gamepad and touch input bindings.
- Player punch & uppercut sprite has been changed and no longer rotates while in uppercut state.
- Reduced balloon enemy float range for consistency sake.
- Changed nemies defeated UI tween to be more eye-catching.
- Enemy & bomb knockback from attacks is now consistent instead of based on player velocity.
- Horizontal flip can now be set on startPoint object in tilemap to change that of player.
- Punching bombs now charges your punch the same as enemies.
- Increased bullet speed.
- Level select now opens selected to the level you returned from.
- Level select now displays the level number along with the level key.
- Increased explosion impact distance to account for the fist hitbox allowing the player to take out mine enemies safely.

### Added

- Created new levels.
- Added plane end point, which is set to the position of an enemy. Player sits in the plane upon taking out the enemy.
- Added combo system. Ui will display a combo when the player takes out two or more enemies while airborne.
- Added a 'mute music' button.
- Added tutorial music to earlier levels.
- Added environmental ambient sound.
- Added combo hit sound that changes pitch & volume based on combo.

### Removed

- End egg object.

### Fixed

- Level select now shows correct name of initially selected level.
- Hitting a ceiling while facing right no longer flips player and sets either state to cling for a frame.
- Player physics body no longer offsets based on animation sprite size, fixing several collision issues.



# Version 9

This build focuses on finalizing gameplay by adding elements and improving interactions.

### Changed

- Bomb enemies' vision polygon has been adjusted.
- After being punched, bomb explode on impact with tilemap.
- Bomb's parent enemy is no longer immune to bomb.
- Bomb prop appears / disappears to indicate when enemy is ready to drop.
- Punching an enemy that's holding a bomb will cause the bomb to go flying.
- Falling enemies can knock each other out.

### Added

- Added background layer to tilemaps. Each existing level has been decorated to demonstrate.
- Created test maps.
- Pogo enemy type.
- Grenade enemy weapon - Contact with player triggers explosion even if player is in an attack state.
- Enemies can be set to constantly fire.

### Fixed

- Bombs don't appear from falling enemies. (refix)
- Enemies don't sometimes float downward.
- Enemy knockback is more consistent.

## Version 8 - 2023-02-17

This build moves the game towards autorun gameplay, and changing enemy weapon patterns to fit better with that gameplay.

### Changed

- Level select menu has been changed to allow for any number of levels which can be added without adding UI elements.
- Added goal egg to end of existing levels, edited level to accomodate and increase linearity.
- Enemies' player detection is more advanced, using a polygon set up in the tilemap rather than a using a line set up in code.
- Bombs now drop when player is detected rather than on a timer.
- Player will hop over walls rather than having to punch to regain horizontal movement.

### Added

- New level goal: reaching an egg sprite at the end of the level.
- Added Player sprites correlating to flap charge.
- Added cling sprite.
- Added UI showing number of enemies defeated.
- Added UI showing punch charge.

### Removed

- Multi-directional punching. (Both punches buttons just punch forward)

### Fixed

- Debug graphics are now ignored by the UIcam.

## Version 7 - 2023-02-01

After evaluating the project, this build makes a lot of changes in order to allow gameplay experimentation. Most significantly gunfire, bomb behaviour and level select.

### Changed

- Uppercuts now also use punch charge rather than a seperate variable.
- Enemies are set to be balloon enemies from the type field of the object in the Tiled editor, allowing them to have guns.
- Bomb enemies are set in the Tiled editor as another enemy type rather than automatically being assigned to all balloon enemies.
- In smaller windows, the camera is zoomed out.

### Added

- Added restart funciton, used when the player is hit rather than just moving them to the start.
- Added Balloon enemies with guns.
- Added a 3-bullet spray and cooldown pattern.
- Added line of sight detection to trigger gunfire.
- Added a fuse for bombs which is set upon collision rather than immediately exploding.
- Added a level selection menu with pointer, gamepad and keyboard input.
- Added quick restart input for gamepad, mobile and keyboard.
- Added return to level select input for gamepad, mobile and keyboard.
- Added simple adaptive zoom.
- Added fade in effect upon level start / restart.
- Added visual & audio feedback for when all enemies are defeated.
- Added audio cue for scene start / restart.
- Guns can now aim down.
- Added parasols that enemies can have to protect from player's dive ability.
- Bombs can be launched by the punch or uppercut ability.
- Explosions have a sfx and screen shake effect.
- Created 5 Levels.

### Removed

- Old test level is inaccessible.

### Fixed

- Punches charge is no longer restored during punch / uppercut state, which allowed for multiple uses while airborne.
- Bullets and bombs no longer spawn from falling enemies.
- Guns and balloons are now ignored by the UICam.
- Camera no longer rushes to the player upon level start / restart.
- Set camera bounds to tilemap edges.

## Version 6 - 2023-01-24

### Changed

- Two punch inputs for either direction.
- Changed keyboard, gamepad and mobile control scheme to something simpler and understandable.
- Enemy placement is now loaded in from tilemap data rather than placed afterwards in the Phaser Editor.
- `__DEV__` variable is now used to automatically alter code between dev mode and public build.
- Four blue debug pixels representing wall deteciton points are now visible in dev mode.
- Enemies now have death behaviour rather than disappearing.
- Enemy types are now seperate classes extending from `EnemyPrefab`.
- Enemies are now loaded in based on object GID rather than name, allowing enemy types to be added to the Tiled tileset and placed more easily.
- top-left debug text now only appears in dev mode.

### Added

- Implemented animation for enemies.
- Implemented rough animation for the player. This includes feedback for when the player cannot flap again.
- Implemented music. (Disabled in dev mode.)
- Implemented SFX:
  - Flap
  - Enemy death
  - Punch
- Balloon enemies move vertically.
- Guns attached to enemies as set in the Tilemap, including visual behaviour when enemy is taken out.
- New test map
- Bullets fired from enemy guns.

### Removed

- Disabled egg drop ability.
- Replaced old test map.
- Wall detection is more correct / generous, checking at the top and bottom of the player.

## Version 5.1 - 2023-01-12

### Changed

- Some upward velocity added to egg drop ability.
- UI is visible again.

### Fixed

- Bomb & explosions added during gameplay are added to the correct layer and ignored by the UI camera.

## Version 5 - 2023-01-12

### Changed

- Keyboard & gamepad input bindings changed to be consistent.
- Egg drop cannot be performed before the last egg has landed.
- Diving onto an enemy bounces the player.
- Eggs are now BombPrefabs in an object pool with enemy bombs.
- Debug text only has it's shadow visible.
- UI is invisible until a UICam glitch is fixed.

### Added

- Explosion visual & impact on sprites.
- Uppercut ability w/ mobile button
- Floating enemies drop bombs.

## Version 4 - 2023-01-09

### Changed

- Auto game start in preloader. (to be disabled on build)

### Added

- Flap limit.
- Dive ability.
- Egg drop ability.
- Mobile input.

## Version 3 - 2023-01-05

### Changed

- Adjusted BG positioning.

### Added

- Punch ability.
- solider prefab: grounded and airborne.
- placed soldiers around the map.

### Removed

- jump input while standing to start moving.

## Version 2 - 2023-01-04

### Changed

- Created git repository.
- Migrated all code to Typescript.
- Setup project files for esbuild based on [template](https://github.com/UWStout/phaser3-esbuild-es6-template).
- Improved scaling code.
- Replaced player movement code in `Level.js` with a state machine.
- Working floor & wall detection.

### Added

- Player clings to walls.
- jump input while standing makes the player start moving.
- Added BG visuals.
- Created bigger test map.
- Out-of-bounds reset.