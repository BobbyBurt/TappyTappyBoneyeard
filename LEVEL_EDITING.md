### Tappy Tappy Boneyard
# Level Editing guide - WIP

The following is a guide to creating levels for Tappy Tappy Boneyard. First is a practical guide on the techincal steps, then is a list of level design tips.

Note that the level creation process was not intended to be used externally; It isn't foolproof. **Carefully follow bold instructions or else the game may crash.** Several aspects of the level creation process are inconsistent or inconvinent.

**Names of objects and custom properties are case-sensitive.**

For setup, make sure you download / clone this repository. The `Levels` folder in the project's root contains all the game's levels and test maps. Make sure you download and familiarize yourself with the Tiled level editor.

Each TTB level tilemap has three layers: `elements`, `Tile Layer 1` and `Tile Layer 2`. **Do not rename these layers.** 

`Tile Layer 1` has collision and uses the regular tileset. It's reccomended that you avoid using decorative tiles, like barrels and pipes, which don't fill the 18x18 tile.

`Tile Layer 2` is background decoration, to be populated with tiles from the bg-tileset.

`elements` contains the enemies as well as other markers. They will be explored in the next section

## Enemies

From the main tileset, select a tile representing an enemy and place it into the `elements` layer. Which tile you select determines the enemy's weapon and it's angle, if applicable. Use the `Flipping` > `Horizontal` object property to set it's facing direction, and that of the gun if applicable.

### Balloon
### Parasol
### Pogo
### Grenade
### Goal

## Enemy vision polygon

## Player start point

**There must exist an object in the `elements` layer called `startPoint`** for the player to start at. You can set the Use the `Flipping` > `Horizontal` object property to set the player's initial facing direction.

## Bottom boundary

## Map size

Especially when first creating a map, it's helpful to enable `Map Properties` > `Infinite`. **Make sure this is disabled when exporting your map.**

It's recommended that the tilemap's side edges are 4-6 tiles from the farthest accessible area on either side. It's also reccomended that the tilemap is tall enough that the player could not see it's top edge. `Map > Autocrop` can help you set the bounds.

# Level design tips
If you're interested in making levels in the *style* of the official ones, here's a list of design rules which they followed:
- Levels are brief, averaging at 5 enemies / 3-4 'challenges'.
- Levels have frequent walls so the player can correct their direction.
- Levels favour verticality rather than traditional horizontal design.
- Enemy placement allows for combos for clever players.
