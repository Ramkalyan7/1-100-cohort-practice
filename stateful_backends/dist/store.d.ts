interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}
declare class GameManager {
    private games;
    constructor();
    getGames(): Game[];
    addGame(): void;
}
export declare const gameManager: GameManager;
export {};
//# sourceMappingURL=store.d.ts.map