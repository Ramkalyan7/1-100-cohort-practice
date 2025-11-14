class GameManager {
    games = [];
    constructor() {
        // Initialize with some dummy data
        this.games = [];
    }
    getGames() {
        return this.games;
    }
    addGame() {
        const newGame = {
            id: (this.games.length + 1).toString(),
            whitePlayerName: "alice",
            blackPlayerName: "bob",
            moves: []
        };
        this.games.push(newGame);
    }
}
export const gameManager = new GameManager();
//# sourceMappingURL=store.js.map