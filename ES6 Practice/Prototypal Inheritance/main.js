// Define class Bird
function Bird(type, color) {
  // Define properties.
  this.type = type;
  this.color = color;
  this.eggs = 0;

  // Define method fly()
  this.fly = function() {
    console.log(`${this.color} ${this.type} is flying.`);
  }

  // Define method walk()
  this.walk = function() {
    console.log(`${this.color} ${this.type} is walking.`);
  }

  // Define method lay_egg()
  this.lay_egg = function() {
    this.eggs++;
    console.log(`${this.color} ${this.type} laid an egg!`);
  }
}

function Parrot(type, color) {
  // Must call parent constructor and pass this to it.
  Bird.call(this, type, color);

  // Define method talk()
  this.talk = function() {
    console.log(`${this.color} ${this.type} is talking.`);
  }
}

function Raven(type, color) {
  // Must call parent constructor and pass this to it.
  Bird.call(this, type, color);

  // Define method solve_puzzle()
  this.solve_puzzle = function() {
    console.log(`${this.color} ${this.type} is solving a puzzle.`);
  }
}

function Songbird(type, color) {
  // Must call parent constructor and pass this to it.
  Bird.call(this, type, color);

  // Define method sing()
  this.sing = function() {
    console.log(`${this.color} ${this.type} is singing.`);
  }
}