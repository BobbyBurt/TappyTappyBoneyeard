import Phaser from "phaser";
import EnemyPrefab from "~/prefabs/EnemyPrefab";

export default class VisionPoly extends Phaser.Geom.Polygon
{
    constructor(parentEnemy: EnemyPrefab, points?: string | number[] | Phaser.Types.Math.Vector2Like[] | undefined)
    {
        super(points);

        this.parentEnemy = parentEnemy;
    }

    public parentEnemy: EnemyPrefab;
}