class View {
    constructor(game, $el) {
        this.game = game;
        this.el = $el;
        this.setupBoard();
        this.bindEvents()
    }
    
    bindEvents() {
        this.currentPlayer = this.game.currentPlayer
        this.pos = $('ul').on('click', 'li', this.clickHandler.bind(this))
        this.game.playMove(this.pos)
    }

    clickHandler(e) {
        let currentTarget = $(e.currentTarget)
        debugger
        return currentTarget.data('rowCol')
    }
    
    makeMove($square) {}
    
    setupBoard() {
        const $ul = $("<ul></ul>") 
        this.el.append($ul);
        for(let row = 0; row < 3; row++){
            for (let col = 0; col < 3; col++) {
                const $li = $("<li></li>");
                $li.data('rowCol', [row, col]),
                $ul.append($li);
            }
        }
            
    }
}

module.exports = View;
