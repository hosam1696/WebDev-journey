enum EWonState {
    win,
    lose
}

interface IPlayer {
    status:EWonState,
    name:string
}

let playerOne:IPlayer = {status:EWonState.lose, name:'Hosam'}



console.log(playerOne);