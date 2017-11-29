var cells = document.querySelectorAll('.cell');
var winResult = document.querySelector('.endgame');
console.log(cells);
var EWonState;
(function (EWonState) {
    EWonState[EWonState["win"] = 0] = "win";
    EWonState[EWonState["lose"] = 1] = "lose";
})(EWonState || (EWonState = {}));
var EplayerIndicator;
(function (EplayerIndicator) {
    EplayerIndicator["human"] = "O";
    EplayerIndicator["cpu"] = "X";
})(EplayerIndicator || (EplayerIndicator = {}));
var TicGame = /** @class */ (function () {
    function TicGame() {
        this.huPlayer = EplayerIndicator.human;
        this.aiPlayer = EplayerIndicator.cpu;
        this.currentPlayer = this.huPlayer;
        this.winCompos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];
    }
    TicGame.prototype.init = function () {
        var _this = this;
        this.origBoard = Array.from(Array(9).keys());
        console.log('original board', this.origBoard);
        cells.forEach(this.reset);
        cells.forEach(function (cell, idx, cells) {
            cell.addEventListener('click', function (evt) {
                var target = evt.target;
                _this.turnClick(target, _this.currentPlayer, idx);
                console.log("cell index " + idx);
            }, false);
        });
    };
    TicGame.prototype.reset = function (cell, idx, cells) {
        cell.innerHTML = '';
        cell.style.removeProperty('background-color');
    };
    TicGame.prototype.turnClick = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.turn.apply(this, args);
    };
    TicGame.prototype.turn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var target = args[0], curretPlayer = args[1], index = args[2];
        this.origBoard[index] = curretPlayer;
        target.innerHTML = curretPlayer;
        var gameWon = this.checkWon(curretPlayer);
        cells.forEach(function (cell) {
            //cell.removeEventListener('click');
            cell.style.removeProperty('background-color');
        });
        if (gameWon)
            this.gameOver(gameWon);
    };
    TicGame.prototype.checkWon = function (player) {
        var plays = this.origBoard.reduce(function (acc, a, b) {
            return (a === player) ? acc.concat(b) : acc;
        }, []);
        var gameWon = null;
        console.log('player plays', plays, this.winCompos.entries());
        for (var _i = 0, _a = Array.from(this.winCompos.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], index = _b[0], win = _b[1];
            if (win.every(function (elem) { return plays.indexOf(elem) > -1; })) {
                gameWon = { index: index, player: player };
                break;
            }
        }
        console.log('game won object', gameWon);
        return gameWon;
    };
    TicGame.prototype.gameOver = function (gameinfo) {
        var _this = this;
        var index = gameinfo.index, player = gameinfo.player;
        for (var _i = 0, _a = this.winCompos[index]; _i < _a.length; _i++) {
            var idx = _a[_i];
            document.getElementById(idx).style.backgroundColor = player === this.currentPlayer ? "#45ff9a" : '#ff4a7a';
        }
        winResult.style.display = 'block';
        winResult.innerText = EplayerIndicator['O'] + ' is the winner';
        setTimeout(function () {
            _this.init();
            winResult.style.display = 'none';
        }, 1000);
    };
    return TicGame;
}());
window.onload = function () {
    var Tic = new TicGame();
    Tic.init();
    document.getElementById('start-btn')
        .addEventListener('click', function (evt) {
        Tic.init();
    }, false);
};
//# sourceMappingURL=index.js.map