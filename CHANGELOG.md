# Changelog

## Version 3 - 2023-01-05

### changed

- adjusted BG positioning
- preloader automatically starts game (to be disabled on build)

### added

- Jump move.
- solider prefab: grounded and airborne.
- placed soldiers around the map.
- flap limit

### removed

- jump input while standing to start moving.

### fixed

## Version 2 - 2023-01-04

### changed

- Created git repository.
- Migrated all code to Typescript.
- Setup project files for esbuild based on [template](https://github.com/UWStout/phaser3-esbuild-es6-template).
- Improved scaling code.
- Replaced player movement code in `Level.js` with a state machine.
- Working floor & wall detection.

### added

- Player clings to walls.
- jump input while standing makes the player start moving.
- Added BG visuals.
- Created bigger test map.
- Out-of-bounds reset.