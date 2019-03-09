let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is the house price?');
  greeting.position(20, 5);

  price = createElement('h2', '0');
  price.position(20,80);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const price_val = input.value();
  price.html('ROI = ' + price_val);
  input.value('');

}

