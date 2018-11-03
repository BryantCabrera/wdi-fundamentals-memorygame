var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts", 
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit:"diamonds", 
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

//starts score counter at 0 -Bryant
var counter = 0;
//starts rank at bronze and displays corresponding medal image -Bryant
var rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/LXgQLMq.png" class="medal" title="Bronze Medal" alt="Bronze Medal">';

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
//adds 1 to score Counter if a match was found -Bryant		
    	counter += 1;
    	document.getElementById('counter').innerHTML = counter;
//changes medal image based on score -Bryant
    	if (counter >=2) {
    		rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/6zCt0xe.png" class="medal" title="Silver Medal" alt="Silver Medal">';
    	};
    	if (counter >= 5) {
    		rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/143rs3f.png" class="medal" title="Gold Medal" alt="Gold Medal">';
    	};
	}
	else {
		alert("Sorry, try again.");
	}
};

var flipCard = function () {
//if statement only applies flipCard function if the card clicked wasn't already flipped -Bryant
	if (this.getAttribute('class') === "unflipped") {
		var cardId = this.getAttribute('data-id');

		console.log("User flipped " + cards[cardId].rank);

		cardsInPlay.push(cards[cardId].rank);

		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);

		this.setAttribute('src', cards[cardId].cardImage);
		this.setAttribute('class', 'flipped');

		if (cardsInPlay.length === 2) {
			checkForMatch();
		}
	}
	else {
		return alert("Please click on an unflipped card.");
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'unflipped');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

//resets the cards -Bryant
var reset = function () {
    for (var i = (cardsInPlay.length - 1); i > -1; i--) {
		document.querySelectorAll('.flipped')[i].setAttribute('src', 'images/back.png');
		document.querySelectorAll('.flipped')[i].setAttribute('class', 'unflipped');
		cardsInPlay.splice(i, 1);
  	};
  	console.log("User reset the game!");
};

//applies reset functionality to "reset" button -Bryant
document.getElementById('reset').addEventListener('click', reset);

//resets the score, rank, and cards -Bryant
var resetScore = function() {
//score reset -Bryant
	counter = 0;
	document.getElementById('counter').innerHTML = counter;
//rank reset -Bryant
	rank = document.getElementById('rank').innerHTML='<img src="https://i.imgur.com/LXgQLMq.png" class="medal" title="Bronze Medal" alt="Bronze Medal">';
//cards reset -Bryant
	reset();
};

//applies resetScore functionality to "reset score" button -Bryant
document.getElementById('resetScore').addEventListener('click', resetScore);