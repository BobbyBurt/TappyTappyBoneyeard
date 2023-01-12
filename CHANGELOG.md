# Changelog

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

### Removed
### Fixed

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