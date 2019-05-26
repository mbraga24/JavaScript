let button = document.getElementById('change-background');
let button1 = document.getElementById('change-background2');
let button2 = document.getElementById('change-background3');
let button3 = document.getElementById('change-background4');

button.addEventListener('click', function() {
  document.body.style.backgroundColor = 'tomato';
});

button1.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('mouseenter', () => {
  document.body.style.backgroundColor = 'green';
});

button3.addEventListener('mouseout', () => {
  document.body.style.backgroundColor = 'orange';
})
