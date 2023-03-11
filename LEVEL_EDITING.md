### Tappy Tappy Boneyard
# Level Editing guide - WIP

The following is a guide to creating levels for Tappy Tappy Boneyard. Custom level creation & loading is not an officially supported feature, but it's possible through the same process that the official levels were made by. The game and it's level loading code aren't foolproof, and plenty of edgecases exist. **Carefully follow bold instructions to avoid game errors or crashes.**

For setup, make sure you download / clone this repository.

The `Levels` folder in the project's root contains all the game's levels and test maps. Make sure you download and familiarize yourself with the Tiled level editor.

In the Levels folder, you'll find a .tmx file for each official level. These are Tiled project files which are set up a certain way, and can be used as references.. To create a new level, copy template.tmx and open it.

## Layers

Each TTB level tilemap has three layers **which should not be renamed.** 
- `Tile Layer 1` has collision and uses the regular tileset. It's reccomended that you avoid using decorative tiles, like barrels and pipes, which don't fill the 18x18 tile.
- `Tile Layer 2` is background decoration, to be populated with tiles from the bg-tileset.
- `elements` contains the enemies as well as other markers.

## Enemies

Each enemy is an object of the soldier tile with custom properties to set it's weapon / type. **Do not add or remove custom properties.** To setup enemies, copy & paste an existing instance of the enemy object into place and set it's properties.
- Use the `Flipping` > `Horizontal` object property to set it's facing direction.
- Enabling the `Balloon` property will result in an enemy floating from a balloon.
- Enabling the `Bomb` property will give the enemy bombs to drop. Make sure to enable the `balloon` property and **have a vision polygon with this enemy set as the parent.**
- Enabling the `Goal` property will have the enemy in a plane as the level endpoint. Include one of these, or the standalone plane object, in the level.
- Type a direction into the `GunDirection` property, or leave it blank to set the enemy to not have a gun. Input `up`, `upward`, `forward`, `downward` or `down` in conjunction with the object's horizontal flip to set the fire direction to any octagonal direction. If no vision polygon object exists with this enemy as it's parent, then the gunfire will be constant. **Make sure that the gun points to a tile so that bullets don't reach the bounds of the level.**
- Enabling the `Mine` property will result in an enemy that explodes on contact with the player. These enemies should be set up in a way that they can be defeated indirectly.
- Enabling the `Parasol` property will give the enemy an umbrella that protects them from dive attacks.
- Enabling the `Pogo` property have the enemy bounce vertically. Place these enemies on top of ground with X tiles of space above them, as the bounce is fixed, ignoring collision & physics. 

**The following are mutually exclusive enemy settings, and should be avoided:**
- `Pogo` & `Balloon`

## Enemy vision polygon

Enemies with bombs or guns use polygon objects to represent either vision. When the player in within the polygon, the enemy drops their bomb or fires their gun. To set this up, copy & paste an existing polygon object. Move it to the appropriate position, and edit it's corner points with the `Edit Polygon` tool. **Only polygons with 4 points / corners are supported.** Use the `parentEnemy` property to assign the vision polygon to an enemy.

For gun enemies, it's reccomended that the vision polygon extends ~15 tiles in the aiming direction. For bomb enemies, it's reccomended that the vision polygon is a rectangle that extends ~7 tiles in both horizontal directions of the enemy, and 12 tiles downward.

## Player start point

An object using the player tile represents the player's start point. Use the `Flipping` > `Horizontal` object property to set the initial direction.

## Level boundaries

It's recommended that the tilemap's left and right edge are 4-6 tiles from the farthest accessible area on either side. In levels where a tutorial popup is present, the right boundary should be extended make screen space. It's also reccomended that the tilemap is tall enough that the player could not see it's top edge. The bottom boundary also represents the killplane, which should be placed low enough that the player may have a chance to get back up. `Map` > `Autocrop` can help you set the bounds to the farthest tile in any direction.

Especially when first creating a map, it's helpful to enable `Map ` > `Map Properties` > `Infinite` to have the tilemap resize itself as you place tiles. **Disable this before exporting the level.**

# Official level style

If you're interested in making levels in the gameplay and visual style of the official ones, here's a list of design rules which they usually followed:

## Gameplay

- Levels are brief, averaging at 5 enemies or 3 distinct challenges / areas.
- Levels have an obvious, main path and hidden, difficult paths for combos or time skips.
- Levels have frequent walls so the player can correct their direction, especially to avoid danger.

Levels which don't follow these patterns tend to be frustrating or boring.

## Visual

- Steel blocks indicate surfaces of interest in the main path, especially to hint which surfaces to walljump from.
- Horizontal & vertical beams indicate the bounds of the level, where the player cannot access or where nothing of interest lies beyond.
- Background tiles are used carefully and offset from level geometry for visual clarity, to distinguish them from collision tiles.

Levels which don't follow this visual design language may feel more intimidating, or cause puzzles to be slightly more difficult to solve.

---

If you have any questions, reach me at ___ If you end up making levels, I'd love to play them!
