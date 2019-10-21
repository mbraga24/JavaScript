// Define class Bird
function Birds(type, color) {
  // Define properties
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