import Phaser from "phaser";
import EnemyPrefab from "~/prefabs/EnemyPrefab";

export default class cameraOffsetTrigger extends Phaser.Geom.Rectangle
{
    constructor(offsetX: number, offsetY: number, x?: number | undefined, y?: number | undefined, width?: number | undefined, height?: number | undefined)
    {
        super(x, y, width, height);

        this.cameraOffset = new Phaser.Math.Vector2(offsetX, offsetY);
    }

    public cameraOffset: Phaser.Math.Vector2;
}