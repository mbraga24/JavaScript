var cardsArray = [
  {    'name': 'CSS',    'img': './images/bukowski.jpg',  },
  {    'name': 'HTML',    'img': './images/claude_monet.jpeg',  },
  {    'name': 'jQuery',    'img': './images/davinci.jpg',  },
  {    'name': 'JS',    'img': './images/walt_whitman.jpg', },
  {    'name': 'Node',    'img': './images/vincent_van_gogh.jpg',  },
  {    'name': 'Photo Shop',    'img': './images/vladimir_nabokov.jpg',  },
  {    'name': 'PHP',    'img': './images/salvador_dali.jpeg',  },
  {    'name': 'Python',    'img': './images/rembrandt_van_rijn.jpg',  },
  {    'name': 'Ruby',    'img': './images/pablo_picasso.jpg', },
  {    'name': 'Sass',    'img': './images/michelangelo.jpg',  },
  {    'name': 'Sublime',    'img': './images/frida_kahlo.jpg',  },
  {    'name': 'Wordpress',    'img': './images/andy_warhol.jpg',  },
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

// Add event listener to grid
grid.addEventListener('click', (event) =>{
    // Declare variable to target our clicked item.
    let clicked = event.target;

    // Do not allow the grid section itself o be selected,
    // only select divs inside the the grid.
    if (clicked.nodeName === "SECTION") {
      return;
    }

    // Add selected class.
    clicked.classList.add('selected');

})
// .classList
// .dataset.name
// .backgroundImage = `url(${IMAGE})`
// nodeName OR tagName
