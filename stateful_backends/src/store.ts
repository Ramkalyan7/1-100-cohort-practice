interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}


class GameManager {
    private games: Game[] = [];

    private static instance: GameManager;

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    private constructor() {
        this.games = [];
    }

    getGames(): Game[] {
        return this.games;
    }

    addGame(): void {
        const newGame: Game = {
            id: (this.games.length + 1).toString(),
            whitePlayerName: "alice",
            blackPlayerName: "bob",
            moves: []
        };
        this.games.push(newGame);
    }

}


export const gameManager = GameManager.getInstance();