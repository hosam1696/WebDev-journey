const cells: Array<HTMLElement|Element> = Array.from(document.querySelectorAll('.cell'));
const winResult :any= document.querySelector('.endgame');


console.log(cells);


enum EWonState {
    win, lose
}

/*interface IPlayer {
    status: EWonState,
    name: string
}*/

enum EplayerIndicator {
    human = 'O', cpu = 'X'
}

interface IGameWon {
    index: number,
    player: string
}


class TicGame {
    origBoard: Array<number|string>;
    huPlayer = EplayerIndicator.human;
    aiPlayer = EplayerIndicator.cpu;
    currentPlayer = this.huPlayer;
    winCompos: Array<Array<number>> = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];


    init() {

        this.origBoard = Array.from(Array(9).keys());
        console.log('original board', this.origBoard);
        cells.forEach(this.reset);
        cells.forEach((cell, idx) => {
            cell.addEventListener('click', this.turnClick(idx), false)
        })
    }

    private turnClick(idx: any): any {
        return (evt) => {
            let target: HTMLElement = evt.target;

            if (typeof this.origBoard[idx] === 'number') {
                this.turn(target, this.currentPlayer, idx);
                //this.origBoard = String('H').repeat(9).split(); // Dev Only


                    setTimeout(()=>{
                        this.turn(document.getElementById(String(this.bestSpot())), EplayerIndicator.cpu, Number(this.bestSpot()));
                    })

            }



        };
    }

    private turn(target: HTMLElement, currentPlayer: EplayerIndicator, index: number) { // args = target , current player, cell index
        //let [target, currentPlayer, index] = args;
        this.origBoard[index] = currentPlayer;
        target.innerHTML = currentPlayer;
        console.log(this.origBoard);
        let gameWon = this.checkWon(currentPlayer);
        cells.forEach(cell => {
            (cell as HTMLElement).style.removeProperty('background-color');
        });
        if (gameWon) {  // check if any player win
            this.gameOver(gameWon)
        } else  {     // check if there is a Tie
            if (this.checkTie) {
                this.showMsg('Tie!<br> Play another match');
                setTimeout(() => {
                    winResult.style.display = 'none';
                }, 3000);
            }
        }

    }


    bestSpot(){
            let emptySquares = (()=>{
                let empty = [], i = 0;
                for (let index in this.origBoard) {
                    if(Number(this.origBoard[index]))
                        empty[i++] = index;
                }
                return empty;
            })();
        return this.origBoard.find(s => typeof s === 'number');
    }

    private reset(cell): void {
        cell.innerHTML = '';
        cell.style.removeProperty('background-color');
    }

    private checkWon(player: EplayerIndicator): (null | IGameWon) {
        let plays = this.origBoard.reduce((acc, a, b) => {
            return (a === player) ? acc.concat(b) : acc;
        }, []);
        let gameWon = null;

        console.log('player plays', plays, this.winCompos.entries());
        for (let [index, win] of Array.from(this.winCompos.entries())) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = {index, player};
                break;
            }
        }
        console.log('game won object', gameWon);
        return gameWon;
    }

    private gameOver(gameInfo: IGameWon): void {
        let {index, player} = gameInfo;
        for (let idx of this.winCompos[index]) {
            console.log('win compos indexes ', idx,document.getElementById(String(idx)).style.color = 'red');
            document.getElementById(String(idx)).style.backgroundColor = (player == 'O') ? "#45ff9a" : '#ff4a7a';
        }
       // for (let i in cells) cells[i].removeEventListener('click', this.turnClick(i), false);

        this.showMsg(gameInfo.player + ' is the winner');

        setTimeout(() => {
            this.init();
            winResult.style.display = 'none';
        }, 3000);


    }

    protected showMsg(msg: string): void {

        winResult.style.display = 'block';
        winResult.innerHTML = msg;
    }

    private get checkTie(): boolean {
        return this.origBoard.every(elem => typeof elem === 'string');
    }
}

window.onload = () => {
    let Tic = new TicGame();
    Tic.init();
    document.getElementById('start-btn')
        .addEventListener('click', Tic.init, false);
};



