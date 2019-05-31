var cardsArray = [
  {    'name': 'bukowski',    'img': './images/bukowski.png',  },
  {    'name': 'claude_monet',    'img': './images/claude_monet.png',  },
  {    'name': 'davinci',    'img': './images/davinci.png',  },
  {    'name': 'walt_whitman',    'img': './images/walt_whitman.png', },
  {    'name': 'vincent_van_gogh',    'img': './images/vincent_van_gogh.png',  },
  {    'name': 'salvador_dali',    'img': './images/salvador_dali.png',  },
  {    'name': 'rembrandt_van_rijn',    'img': './images/rembrandt_van_rijn.png',  },
  {    'name': 'pablo_picasso',    'img': './images/pablo_picasso.png', },
  {    'name': 'frida_kahlo',    'img': './images/frida_kahlo.png',  },
  {    'name': 'andy_warhol',    'img': './images/andy_warhol.png',  },
];

// Duplicate cardsArray to create a match for each card.
let gameGrid = cardsArray.concat(cardsArray);

// Randomize gameGrid on each load.
gameGrid.sort(function() {
  return 0.5 - Math.random();
})

// Grab the div with an id of game-board and assign to a variable game.
let game = document.getElementById('game-board');
let score = document.getElementById('score');

// Create a section element and assign to a variable name grid.
let grid = document.createElement('section');

  // Give section element a class of grid.
  grid.setAttribute('class', 'grid');
  // grid.className = "grid";

// Append the grid section to the game-board div.
game.appendChild(grid);

// Loop through each item in our cards array.
gameGrid.forEach((element, index) => {
  // Create a div element and assign it to a variable card.
  let card = document.createElement('div');
  // Apply a card class to that div.
  card.classList.add('card');
  // Set the data-name attribute of the div to the cardsArray name.
  card.dataset.name = element.name;
  // Create front of card.
  let front = document.createElement('div');
  front.classList.add('front');
  // Create back of card.
  let back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${element.img})`;

  // Append card to grid.
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let firstGuess = '';
let secondGuess = '';
let previousSelected = null;
let count = 0;
let delay = 1200;

// match function
function match() {
  let selected = document.querySelectorAll('.selected');

  // loop through the array like object containing 'selected' class.
  selected.forEach((element, index) => {
    element.classList.add('match');
  });
}

// Reset guesses after two attempts.
function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousSelected = null;

  let selected = document.querySelectorAll('.selected');

  selected.forEach((element) => {
    element.classList.remove('selected');
  });
}


// Add event listener to grid.
grid.addEventListener('click', (event) => {
    // Declare variable to target our clicked item.
    let clicked = event.target;

    // Do not allow the grid section itself o be selected,
    // only select divs inside the the grid.
    if (clicked.nodeName === "SECTION" || clicked === previousSelected || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
      return;
    }
    // We only want to add 'selected' class if the current count is less than 2.
    if (count < 2) {
      // Increment count by 1.
      count++;
      score.textContent++;

      if (count === 1) {
        // Asssing first guess.
        firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
      } else {
        // Asssing second guess.
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
      }

      // If both guesses are not empty.
      if (firstGuess != '' && secondGuess != '') {
        // And the first guess matches the second guess.
        if (firstGuess === secondGuess) {
          // Run the match function.
          setTimeout(match, delay);
          setTimeout(resetGuesses, delay);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }
      previousSelected = clicked;
    }
})
