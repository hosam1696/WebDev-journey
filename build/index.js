var EWonState;
(function (EWonState) {
    EWonState[EWonState["win"] = 0] = "win";
    EWonState[EWonState["lose"] = 1] = "lose";
})(EWonState || (EWonState = {}));
var playerOne = { status: EWonState.lose, name: 'Hosam' };
console.log(playerOne);
//# sourceMappingURL=index.js.map