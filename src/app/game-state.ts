import { Tile } from "./tile";
export class GameState {
    // Game Setting
    size: number
    numOfPlayers: number

    // Game Status
    gameEnded: boolean
    canRetract: boolean
    turn: number
    learningMode: boolean
    tiles: Tile[][]
    availableMoves: number

    // For retract function
    preMoveTile: Tile
    // Save tile's coordinates which the tile's isValid property is updated (to be valid)
    updatedIsValidTiles: Tile[]
}