import { gameManager } from "./store.js";
import { logGames } from "./logger.js";

logGames();

setInterval(() => {
    logGames();
}, 5000);


setInterval(() => {
    gameManager.addGame();
}, 7000);


