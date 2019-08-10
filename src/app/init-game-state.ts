import { GameState } from './game-state';

export const GAME_STATE: GameState = {
    // Game Setting
    size: 10,
    numOfPlayers: 4,

    // Game Status
    gameEnded: false,
    canRetract: false,
    turn: 1,
    learningMode: false,
    tiles: [],
    availableMoves: 10*10,

    // For retract function
    preMoveTile: null,
    // Save tile's coordinates which the tile's isValid property is updated (to be valid)
    updatedIsValidTiles: []
}