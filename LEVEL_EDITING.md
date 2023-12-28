### Bird Tapper: Purple Platoon Panic
# Level Editing guide

This guide is for contributors to the planned community map pack or anyone else who's interested. Custom level creation & loading is not an officially public feature, but it's possible through the same process that the official levels were made by. The game and it's level loading code aren't foolproof, and plenty of edgecases exist. **Carefully follow bold instructions to avoid game errors or crashes.** If you have any issues or questions, [reach out!](https://www.newgrounds.com/pm/send/bobbyburt) I'd also love to try any levels that don't make it into the community level pack.

## Getting Started

First, download the level editing kit [here](https://www.newgrounds.com/dump/item/d845da010a05d23f4ae6b3af63c7c539)

Included in this folder is a special build of the game which automatically loads a level for testing and includes the assets unique to the community level pack. To test your levels, you'll need to host this build on a local server. You can do that easily with a program included in the folder called [miniweb.exe](https://miniweb.sourceforge.net/). Once you run it, beside `host:` you'll see an IP address / port. Copy and paste that into a web browser to run the game.

Install the [Tiled map Editor](https://www.mapeditor.org/). Each level is a `.tmx` file. `example.tmx` can be used as a template, so copy / paste it whenever you want to make a new level. Open the file for the level you want to edit.

Tiled may be intimating, but for this you only need to know a few of the tools. While editing a tile layer, you just need the Stamp Brush, Shape Fill tool and Eraser. While editing an object layer, you just need the Select Objects tool to copy / paste & move objects from the example map. All these tools are at the top toolbar.

Once you're ready to test your level, export the file in `htdocs/assets/levels`. Name it `jump.json` to replace the the first level, which is the one automatically loaded when the game loads. Then refresh the web browser page to play the updated level.

Now that you're hopefully set up, I'll dive into the specifics.

## Tilesets

By default, you'll see the tilesets in the bottom-right of the screen. You might want to zoom in to select them easier. Above are tabs where you can swap between the main and background tilesets.

## Layers

By default, you'll see the layers window in the top-right of the screen. Each level tilemap has three layers **which should not be renamed.** 
- `Tile Layer 1` has collision and uses the regular white tileset. Note that any tiles with odd shapes, like the poles and character sprites, aren't meant to be used here.
- `Tile Layer 2` is background decoration, to be populated with tiles from the red bg-tileset.
- `elements` contains the enemies and some other objects & triggers.
  
**Both tile layers are meant to only use tiles from their respective tileset. Using the other tileset may cause issues.** Be careful that you're not on the wrong layer! If Tapper seems to collide with invisible tiles, this is likely why. Hide Layer 2 to check that Layer 1 doesn't have any red bg tiles, and vise-versa.

## Enemies

Each enemy is an object of the soldier tile with custom properties to set it's weapon / type. **Do not add or remove custom properties.** To setup enemies, copy & paste an existing instance of the enemy object into place and set it's properties.
- Use the `Flipping` > `Horizontal` object property to set it's facing direction.
- Enabling the `Balloon` custom property will have the enemy floating from a balloon.
- Enabling the `Bomb` property will give the enemy bombs to drop. Make sure to enable the `balloon` property and **have a vision polygon with this enemy set as the parent,** <link to section>
- Enabling the `Goal` property will have the enemy in a vehicle as the level endpoint. Include one of these, or a standalone car object, in the level. If enabled, it's best for the enemy to be 1 tile above the ground.
- Type a direction into the `GunDirection` property, or leave it blank to set the enemy to not have a gun. Input `up`, `upward`, `forward`, `downward` or `down` in conjunction with the object's horizontal flip to set the fire direction to any octagonal direction. If no vision polygon object exists with this enemy as it's parent, then the gunfire will be constant. **Make sure that the gun points to a tile so that bullets don't reach the bounds of the level.**
- Enabling the `Mine` property will result in an enemy that explodes on contact with the player. You might want to design a solution to let the player indirectly take them out.
- Enabling the `Parasol` property will give the enemy an parasol that protects them from dive attacks.
- Enabling the `Pogo` property have the enemy bounce vertically.
- Enabling the `Shield Back/Front` property will add a shield which protects that side of the enemy from punches. The "front / back" is relative to the horizontal direction they're facing.

**Some property combinations not found in the main gameare not compatible.**

## Enemy Vision Polygon

Enemies with bombs or guns use polygon objects to represent either vision. When the player is within the polygon, the enemy drops their bomb or fires their gun. To set this up, copy & paste an existing polygon object. Move it to the appropriate position, and edit it's corner points with the `Edit Polygon` tool. **Only polygons with 4 points / corners are supported.** Use the `parentEnemy` property to assign the vision polygon to an enemy.

## Camera Offset Triggers

Similarly, these are rectangle objects which offset the camera position once the player is within them. Use the `cameraOffsetX / Y` custom properties to set the offset. X+ moves left, X- moves right, Y+ moves up, Y- moves down.

These can be used to make some sections easier to navigate. You may want to cover the exit of the section with another trigger with the `cameraOffsetX / Y` properties set at 0 to reset the camera to normal.

## Player start point

An object using the player tile represents the player's start point. Use the `Flipping` > `Horizontal` object property to set the initial direction.

## Level boundaries

It's helpful to enable `Map ` > `Map Properties` > `Infinite` to easily extend the size of the map. **Disable this before exporting the level,** as leaving this enabled can cause an issue where the tilemap and objects are offset. You can also use `Map` > `Autocrop` to set the bounds to the farthest tile in any direction. Make sure to have `Tile Layer 1` selected for this to work properly.
