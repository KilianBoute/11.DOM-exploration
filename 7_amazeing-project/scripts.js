const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
    ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]
  
  const LEVEL_2 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]
  
  const LEVEL_3 = [
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","S","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*",".","*"],
    ["*",".",".","*","*","*",".","*"],
    ["*",".",".","*","*","*",".","*"],
    ["*","*",".","*","*","*","*","*"],
    ["*","T",".","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"]
  ]

const body = document.querySelector('body');
const main = document.querySelector('main');
const maze = document.createElement('div');
  maze.className = 'maze';

let currentPosition = {row: 0, col: 0};
let currentTile;
let endPosition = {row: 0, col: 0};
let newPosition;

const mazeRouteList = [];

const loopArray = (mazeArray) => {


    mazeArray.forEach((array, row) => {

        const mazeRow = document.createElement('div');
        mazeRow.className = 'maze-row';
        array.forEach((character, col) => {

            const mazeTile = document.createElement('div');
            mazeTile.className = 'maze-tile';
            mazeTile.textContent = character;
            mazeTile.coordinates = {row, col};
            switch (character){
                case '*': 
                    mazeTile.className += " maze-wall"; 
                    break;
                case '.':
                    mazeTile.className += " maze-path";
                    mazeRouteList.push(mazeTile);
                    break;
                case 'S':
                    mazeTile.className += " maze-start";
                    currentPosition = mazeTile.coordinates;
                    currentTile = mazeTile;
                    mazeRouteList.push(mazeTile);
                    break;
                case 'T': 
                    mazeTile.className += " maze-end"; 
                    endPosition = mazeTile.coordinates;
                    mazeRouteList.push(mazeTile);
                    break;
                default: return;
            }
            mazeRow.appendChild(mazeTile);
        });
  
        maze.appendChild(mazeRow);
    });

}

loopArray(LEVEL_1);
main.appendChild(maze);

const checkRoute = (position) => {
    mazeRouteList.forEach(element => {
        if(element.coordinates.row === position.row && element.coordinates.col === position.col){
            currentPosition = position;
            currentTile = element;
        }
    });
}

const checkEnd = (position) => {
    if(endPosition.row === position.row && endPosition.col === position.col){
        alert('You reached the end.');
    }
}

const updateCharacter = () => {
    currentTile.style.backgroundColor = "red";
}

body.addEventListener('keyup', (event) => {

    switch(event.code){
        case "ArrowUp": 
            console.log('arrow up'); 
            newPosition = {row: currentPosition.row -1, col: currentPosition.col};
            checkRoute(newPosition);
            checkEnd(currentPosition);
            updateCharacter();
            break;
        case "ArrowRight": 
            console.log('arrow right'); 
            newPosition = {row: currentPosition.row, col: currentPosition.col + 1};
            checkRoute(newPosition);
            checkEnd(currentPosition);
            updateCharacter();
            break;
        case "ArrowDown": 
            console.log('arrow down'); 
            newPosition = {row: currentPosition.row + 1, col: currentPosition.col};
            checkRoute(newPosition);
            checkEnd(currentPosition);
            updateCharacter();
            break;
        case "ArrowLeft": 
            console.log('arrow left'); 
            newPosition = {row: currentPosition.row, col: currentPosition.col - 1};
            checkRoute(newPosition);
            checkEnd(currentPosition);
            updateCharacter();
            break;
        default: return;
    }
})
