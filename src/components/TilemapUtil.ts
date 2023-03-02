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

    public static getObjectPositionByGID(GID: number, tilemap:Phaser.Tilemaps.Tilemap): Phaser.Math.Vector2 | null
    {
        const point = tilemap.findObject('elements', function (obj) 
		{
            const _obj = obj as any;
            return _obj.gid === GID;
		});

        if (point)
        {
            return new Phaser.Math.Vector2(point.x!, point.y!)
        }
        else
        {
            return null;
        }
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

    public static getObjectFlipByGID(GID: number, tilemap:Phaser.Tilemaps.Tilemap): boolean
    {
        let flip = false;
        const point = tilemap.findObject('elements', function (obj)
		{
            const _obj = obj as any;
            if (_obj.gid === GID)
            {
                flip = _obj.flippedHorizontal;
            }
		});

        return flip;
    }
}