class View {
    constructor(game, $el) {
        this.game = game;
        this.el = $el;
        this.setupBoard();
        this.bindEvents()
    }
    
    bindEvents() {
        $('ul').on('click', 'li', this.clickHandler.bind(this))
    }

    clickHandler(e) {
        let currentTarget = $(e.currentTarget)
        this.makeMove(currentTarget)
    }
    
    makeMove($square) {

        this.currentPlayer = this.game.currentPlayer // [x, o]
        this.pos = $square.data("rowCol")

        this.game.playMove(this.pos)
        $square.addClass(`${this.currentPlayer}`);

        if (this.game.isOver()) {
            if (this.game.winner()) {
                $(`li.${this.currentPlayer}`).attr("class", "winner").addClass(`${this.currentPlayer}`)
                alert(`${this.game.winner()} has won!`);
            } else {
                alert('NO ONE WINS!');
            }
        }

    }
    
    setupBoard() {
        const $ul = $("<ul></ul>") 
        this.el.append($ul);
        for(let row = 0; row < 3; row++){
            for (let col = 0; col < 3; col++) {
                const $li = $("<li></li>");
                $li.data('rowCol', [row, col]);
                $ul.append($li);
            }
        }
            
    }
}

module.exports = View;
