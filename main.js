let button, house_price, rent, intrest_rate, output;

function setup() {
  // create canvas
  createCanvas(710, 400);

  t_house_price = createElement('p', 'House Price');
  t_house_price.position(20, 5);
  house_price = createInput();
  house_price.position(20, 40);

  t_rent = createElement('p', 'Rent');
  t_rent.position(20, 45);
  rent = createInput();
  rent.position(20, 80);

  t_intrest_rate = createElement('p', 'Intrest Rate');
  t_intrest_rate.position(20, 85);
  intrest_rate = createInput('3');
  intrest_rate.position(20, 120);

  button = createButton('submit');
  button.position(intrest_rate.x + intrest_rate.width, 120);
  button.mousePressed(greet);

  output = createElement('p', '<b>ROI 0% <br/> Deposit £0 <br/> Mortgage Cost £0 <br/> Purchassing Fees <br/> Management Fees £0 <br/> Rainy Day Fund £0 <br/> Total Money In £0 <br/> Cost per Mouth £0');
  output.position(20,130);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const price = parseFloat(house_price.value());
  const intrest = parseFloat(intrest_rate.value());
  const rent_mouth = parseFloat(rent.value());
  let year_rent = rent * 12;

  // calculate Money in
  let deposit = price * 0.25;
  let buy_fees = price * 0.04;

  // running costs
  let rainy_day = rent_mouth * 0.1;
  let management = rainy_day;
  let mortgage_payment_year = price * (intrest/100);

  // calculate ROI
  let money_in = deposit + buy_fees;
  let income = rent_mouth * 12;
  let ex = (rainy_day + management) * 12 + mortgage_payment_year;
  let roi = (income - ex)/money_in;
  roi = parseFloat(roi).toFixed(4);



  output.html('<b>ROI '+roi*100+
  '% <br/> Deposit £'+deposit+
  '<br/> Mortgage Cost £'+mortgage_payment_year/12+
  '<br/> Purchassing Fees £'+buy_fees+
  '<br/> Management Fees £'+management+
  '<br/> Rainy Day Fund £'+rainy_day+
  '<br/> Total Money In £'+money_in+
  '<br/> Cost per Mouth £'+ex/12+'');

}
