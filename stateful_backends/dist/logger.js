import { gameManager } from "./store.js";
export function logGames() {
    gameManager.getGames().forEach(game => {
        console.log(`Game ID: ${game.id}, White: ${game.whitePlayerName}, Black: ${game.blackPlayerName}, Moves: ${game.moves.length}`);
    });
}
//# sourceMappingURL=logger.js.map