import playerPrefab from "~/prefabs/playerPrefab";

export default interface PlayerState
{
	player:playerPrefab;

	// scene: Phaser.Scene;

    enter(): void;

    update(): void;

    handleInput(input:any): void;
}