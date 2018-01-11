var userScore = 0;
var compScore = 0;
var roundNumber = 1;
var result;

$('#game-over').hide();
$('#reset').hide();
$('#rpsls-gif').hide();
$('#victory-gif').hide();

function hideWelcome() {
    $('#welcome').hide();
}

function randomThrow() {
    var randNum = Math.floor(Math.random() * 5);
    return ['rock', 'paper', 'scissors', 'lizard', 'spock'][randNum];
}

function playerWins() {
    result = 'PLAYER WINS!!!';
    userScore++;
    $('#user-score').html(userScore);
}

function computerWins() {
    result = 'COMPUTER WINS';
    compScore++;
    $('#computer-score').html(compScore);
}

function playRound(userThrow) {
    var compThrow = randomThrow();
    var description;
    if (userThrow == 'rock' && compThrow == 'scissors') {
        playerWins();
        description = 'Rock crushes scissors';
    } else if (userThrow == 'paper' && compThrow == 'rock') {
        playerWins();
        description = 'Paper covers rock';
    } else if (userThrow == 'scissors' && compThrow == 'paper') { 
        playerWins();
        description = 'Scissors cut paper';
    } else if (userThrow == 'lizard' && compThrow == 'paper') {
        playerWins();
        description = 'Lizard eats paper';
    } else if (userThrow == 'lizard' && compThrow == 'spock') { 
        playerWins();
        description = 'Lizard poisons spock';
    } else if (userThrow == 'spock' && compThrow == 'scissors') {
        playerWins();
        description = 'Spock smashes scissors';   
    } else if (userThrow == 'spock' && compThrow == 'rock') {
        playerWins();
        description = 'Spock vaporizes rock';
    } else if (userThrow == 'scissors' && compThrow == 'lizard') { 
        playerWins();
        description = 'Scissors decapitate lizard';
    } else if (userThrow == 'paper' && compThrow == 'spock') { 
        playerWins();
        description = 'Paper disproves spock';
    } else if (userThrow == 'rock' && compThrow == 'lizard') { 
        playerWins();
        description = 'Rock crushes lizard';
    } else if (userThrow == 'scissors' && compThrow == 'rock') {
        computerWins();
        description = 'Rock crushes scissors'
    } else if (userThrow == 'rock' && compThrow == 'paper') {
        computerWins();
        description = 'Paper covers rock'
    } else if (userThrow == 'paper' && compThrow == 'scissors') {
        computerWins();
        description = 'Scissors cut paper'
    } else if (userThrow == 'paper' && compThrow == 'lizard') {
        computerWins();
        description = 'Lizard eats paper'
    } else if (userThrow == 'spock' && compThrow == 'lizard') {
        computerWins();
        description = 'Lizard poisons spock'
    } else if (userThrow == 'lizard' && compThrow == 'rock') {
        computerWins();
        description = 'Rock crushes lizard'
    } else if (userThrow == 'lizard' && compThrow == 'scissors') {
        computerWins();
        description = 'Scissors decapitates lizard'
    } else if (userThrow == 'scissors' && compThrow == 'spock') {
        computerWins();
        description = 'Spock smashes scissors'
    } else if (userThrow == 'rock' && compThrow == 'spock') {
        computerWins();
        description = 'Spock vaporizes rock'
    } else if (userThrow == 'spock' && compThrow == 'paper') {
        computerWins();
        description = 'Paper disproves spock'
    } else {
        result = 'TIE!';
        description = 'Nothing happens'
    } 
    //update table with history of results
    $('#game-log').prepend(`<tr><td>${roundNumber}</td>
                                <td>${userThrow}</td>
                                <td>${compThrow}</td>
                                <td><b>${description}</b></td> 
                                <td>${result}</td></tr>`);
                 
    if (userScore >= 5) {
        $('#victory-gif').show();
        $('#game-over').show();
        $('#button').hide();
        $('#reset').show();
    } else if (compScore >= 5) {
        $('#rpsls-gif').show();
        $('#game-over').show();
        $('#button').hide();
        $('#reset').show();
    }
    roundNumber++;
};

function restart() {
    userScore = 0;
    compScore = 0;
    $('#user-score').html(userScore);
    $('#computer-score').html(compScore);
    $('#game-log').html('');
    $('#rpsls-gif').hide();
    $('#victory-gif').hide();
    $('#game-over').hide();
    $('#reset').hide();
    $('#button').show();
};

/*
if (compThrow == playerThrow) {
        console.log('TIE!!!');
        result = 'TIE!';
    } else if ((playerThrow == 'rock' && compThrow == 'scissors') ||
              (playerThrow == 'paper' && compThrow == 'rock') ||
              (playerThrow == 'scissors' && compThrow == 'paper') ||
              (playerThrow == 'lizard' && compThrow == 'paper') ||
              (playerThrow == 'lizard' && compThrow == 'spock') ||
              (playerThrow == 'spock' && compThrow == 'scissors') ||
              (playerThrow == 'spock' && compThrow == 'rock')) {
        // PLAYER WON
        console.log('Player wins!!');
        result = 'PLAYER WON!!!';
        userScore++;
        $('#user-score').html(userScore);
    } else {
        // COMPUTER WON
        console.log('Computer won.');
        result = 'COMPUTER WON';
        compScore++;
        $('#computer-score').html(compScore);
    }
    */