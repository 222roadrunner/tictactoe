//Hide alerts at game start
$('#turn-alert').hide();
$('#winner-alert').hide();

let turn = 0;
let activePlayer = '';
let playerX = 'X';
let playerO = 'O';
let winner = false;

let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');
let box9 = $('#box9');

const winCondition = [
    [box1, box2, box3],
    [box1, box5, box9],
    [box4, box5, box6],
    [box7, box8, box9],
    [box7, box5, box3],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9]
];

const checkWinner = (activePlayer, a ,b ,c) => {
    if (a.text() === activePlayer && b.text() === activePlayer && c.text() === activePlayer){
        winner = true;
        a.addClass('bg-info');
        b.addClass('bg-info');
        c.addClass('bg-info');
        if (activePlayer === 'X'){
            activePlayer = 'X';
        } else {
            activePlayer = 'O';
        }
        $('#winner-alert').show();
        $('#winner-alert').text(`${activePlayer} wins`);
        shutDown();
    }
};

const checkCondition = () => {
    console.log('checking winner');
    checkWinner(activePlayer, ...winCondition[0]);
    checkWinner(activePlayer, ...winCondition[1]);
    checkWinner(activePlayer, ...winCondition[2]);
    checkWinner(activePlayer, ...winCondition[3]);
    checkWinner(activePlayer, ...winCondition[4]);
    checkWinner(activePlayer, ...winCondition[5]);
    checkWinner(activePlayer, ...winCondition[6]);
    checkWinner(activePlayer, ...winCondition[7]);
    if (winner === false && turn === 9){
        console.log('no winner')
        shutDown();
        $('#winner-alert').show();
        $('#winner-alert').text('Draw');
    };
};

const shutDown = () => {
    $('.box').off('click');
};

const newGame = () => {
    $('#turn-alert').show();
    console.log(turn++);
    activePlayer = playerX;
    $('.box').on('click', function(){
        $(this).text(activePlayer);
        if (turn > 4){
            checkCondition();
        }
        if (activePlayer === playerX) {
            activePlayer = playerO;
            document.getElementById('turn-alert').innerHTML = "It is O's turn";
            console.log(turn++);
        } else {
            activePlayer = playerX;
            document.getElementById('turn-alert').innerHTML = "It is X's turn";
            console.log(turn++);
        }
    })
};

const clearGame = () => {
    location.reload();
};

document.getElementById('new-game').addEventListener('click', () => {
    newGame();
});

document.getElementById('clear-game').addEventListener('click', () => {
    clearGame();
});