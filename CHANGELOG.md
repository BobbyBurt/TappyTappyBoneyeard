# Changelog

## Version 6 -

### Changed

- Two punch inputs for either direction.
- Changed keyboard and gamepad control scheme to something simpler and understandable.
- Enemy placement is now loaded in from tilemap data rather than placed afterwards in the Phaser Editor.
- `__DEV__` variable is now used to automatically alter code between dev mode and public build.
- Four blue debug pixels representing wall deteciton points are now visible in dev mode.
- Enemies now have death behaviour rather than disappearing.
- Enemy types are now seperate classes extending from `EnemyPrefab`.
- Enemies are now loaded in based on object GID rather than name, allowing enemy types to be added to the Tiled tileset and placed more easily.

### Added

- Implemented animation for enemies.
- Implemented rough animation for the player. This includes feedback for when the player cannot flap again.
- Implemented music. (Disabled in dev mode.)
- Implemented SFX:
  - Flap
  - Enemy death
  - Punch
- Balloon enemies move vertically.
- Guns attached to enemies as set in the Tilemap.

### Removed

- Disabled egg drop ability.
- Replaced old test map.

### Fixed

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