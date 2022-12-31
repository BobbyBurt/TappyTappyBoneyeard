import playerPrefab from "~/prefabs/playerPrefab";

export default interface State
{
	name:String;
	player:playerPrefab;
	enter: () => void;
	update: () => void;
	// exit: () => void;
	// handleInput: (input:any) => void;
}