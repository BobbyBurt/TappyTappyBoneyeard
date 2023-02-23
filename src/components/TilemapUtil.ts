import Phaser from "phaser";
import Level from "~/scenes/Level";

export default class TilemapUtil {

    /**
     * Returns Vector2 of the object as positioned in the tilemap.
     * 
     * Offset is applied if 
     * @param tilemap 
     * @returns 
     */
    public static getObjectPosition(objectName: string, tilemap:Phaser.Tilemaps.Tilemap): Phaser.Math.Vector2
    {
        const point = tilemap.findObject('elements', function (obj) 
		{
			return obj.name === objectName;
		});
			// TODO: I shouldn't have to name these anymore, since they have unique GIDs.

        return new Phaser.Math.Vector2(point.x!, point.y!)
    }

    /**
     * Returns true if object is flipped
     * @param tilemap 
     * @returns 
     */
    public static getObjectFlip(objectName: string, tilemap:Phaser.Tilemaps.Tilemap): boolean
    {
        let flip = false;
        tilemap.findObject('elements', function (obj) 
		{
            const _obj = obj as any;
			if(obj.name === objectName)
            {
                flip = _obj.flippedHorizontal;
            }
		});

        return flip;
    }
}