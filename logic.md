take names and create players
initCurrentPlayer()

<!-- game loop -->

until gameHasEnded() {
renderBoard()
takeTurn(curr_pl) {
if inputIsValid() {
writeToBoard()
renderBoard()
}
}
checkEndGame() {
win() || draw()
}
changePlayer()
}
