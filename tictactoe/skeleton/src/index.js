const View = require("./ttt-view")// require appropriate file
const Game = require("./solution/game")// require appropriate file

    $(() => {
        // Your code here
        const $figure = $('figure.ttt')
        const game = new Game();
        new View(game, $figure)
    });
