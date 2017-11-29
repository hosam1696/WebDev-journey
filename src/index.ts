const cells:HTMLElement[] = document.querySelectorAll('.cell');
const winResult:HTMLDivElement = document.querySelector('.endgame');


console.log(cells);


enum EWonState {
    win,
    lose
}

interface IPlayer {
    status:EWonState,
    name:string
}

enum EplayerIndicator {
    human = 'O',
    cpu   = 'X'
}

interface IGameWon {index:number, player:string}


class TicGame {
    origBoard : number[] ;
    huPlayer = EplayerIndicator.human;
    aiPlayer = EplayerIndicator.cpu;
    currentPlayer = this.huPlayer;
    winCompos:number[] = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ];


    init() {

        this.origBoard  = Array.from(Array(9).keys());

        console.log('original board',this.origBoard);
        cells.forEach(this.reset);


        cells.forEach((cell, idx, cells)=> {
            cell.addEventListener('click', (evt)=>{
                let target:HTMLElement = evt.target;

                this.turnClick(target, this.currentPlayer, idx);

                console.log(`cell index ${idx}`);

            }, false)
        })
    }

    private reset(cell, idx, cells):void {
        cell.innerHTML = '';
        cell.style.removeProperty('background-color');


    }

     private turnClick(...args)  {
             this.turn(...args)
    }

    private turn(...args) { // args = target , current player, cell index
        let [target, curretPlayer, index] = args;
        this.origBoard[index] = curretPlayer;
        target.innerHTML = curretPlayer;

        let gameWon = this.checkWon(curretPlayer);
        cells.forEach(cell=>{
            //cell.removeEventListener('click');
            cell.style.removeProperty('background-color');
        })

        if (gameWon) this.gameOver(gameWon)
    }


    private checkWon(player:EplayerIndicator):(null | IGameWon) {
        let plays = this.origBoard.reduce((acc, a,b)=>{
            return (a === player)?acc.concat(b):acc;
        }, []);
        let gameWon = null;

        console.log('player plays', plays, this.winCompos.entries());
        for (let [index, win] of Array.from(this.winCompos.entries())) {
            if(win.every(elem=>plays.indexOf(elem)>-1)) {
                gameWon = {index, player};
                break;
            }
        }
        console.log('game won object', gameWon);
        return gameWon;
    }

    private gameOver(gameinfo:IGameWon):void {
    let {index, player} = gameinfo;
        for (let idx of this.winCompos[index]) {

            document.getElementById(idx).style.backgroundColor = player === this.currentPlayer?"#45ff9a":'#ff4a7a';

        }

            winResult.style.display = 'block';
            winResult.innerText = EplayerIndicator['O'] + ' is the winner';

        setTimeout(()=>{
            this.init()
            winResult.style.display = 'none';
        } , 1000);



    }

}



window.onload = () =>{
    let Tic = new TicGame();

    Tic.init()

    document.getElementById('start-btn')
        .addEventListener('click', (evt)=> {
            Tic.init()
        }, false);


};



