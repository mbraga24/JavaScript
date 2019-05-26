var cardsArray = [
  {    'name': 'bukowski',    'img': './images/bukowski.jpg',  },
  {    'name': 'claude_monet',    'img': './images/claude_monet.jpeg',  },
  {    'name': 'davinci',    'img': './images/davinci.jpg',  },
  {    'name': 'walt_whitman',    'img': './images/walt_whitman.jpg', },
  {    'name': 'vincent_van_gogh',    'img': './images/vincent_van_gogh.jpg',  },
  {    'name': 'vladimir_nabokov',    'img': './images/vladimir_nabokov.jpg',  },
  {    'name': 'salvador_dali',    'img': './images/salvador_dali.jpeg',  },
  {    'name': 'rembrandt_van_rijn',    'img': './images/rembrandt_van_rijn.jpg',  },
  {    'name': 'pablo_picasso',    'img': './images/pablo_picasso.jpg', },
  {    'name': 'michelangelo',    'img': './images/michelangelo.jpg',  },
  {    'name': 'frida_kahlo',    'img': './images/frida_kahlo.jpg',  },
  {    'name': 'andy_warhol',    'img': './images/andy_warhol.jpg',  },
];

// Duplicate cardsArray to create a match for each card.
let gameGrid = cardsArray.concat(cardsArray);

// Randomize gameGrid on each load.
gameGrid.sort(function() {
  return 0.5 - Math.random();
})

// Grab the div with an id of game-board and assign to a variable game.
let game = document.getElementById('game-board');

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
  // Apply the background image of the div to the cardsArray image.
  card.style.backgroundImage = `url(${element.img})`;
  // Append the div to the grid section.
  grid.appendChild(card);
});

let firstGuess = '';
let secondGuess = '';
let previousSelected = null;
// Set count to 0
let count = 0;

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

      if (count === 1) {
        // Asssing first guess.
        firstGuess = clicked.dataset.name;
        clicked.classList.add('selected');
      } else {
        // Asssing second guess.
        secondGuess = clicked.dataset.name;
        clicked.classList.add('selected');
      }

      // If both guesses are not empty.
      if (firstGuess != '' && secondGuess != '') {
        // And the first guess matches the second guess.
        if (firstGuess === secondGuess) {
          // Run the match function.
          match();
          resetGuesses();
        } else {
          resetGuesses();
        }
      }
      previousSelected = clicked;
    }
})
// .classList
// .dataset.name
// .backgroundImage = `url(${IMAGE})`
// nodeName OR tagName
