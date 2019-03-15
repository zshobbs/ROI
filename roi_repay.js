let button, house_price, rent, interest_rate, output, mort_time;

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

  t_interest_rate = createElement('p', 'Interest Rate');
  t_interest_rate.position(20, 85);
  interest_rate = createInput('3');
  interest_rate.position(20, 120);

  t_mort_time = createElement('p', 'Mortgage Length (Years)');
  t_mort_time.position(20,125);
  mort_time = createInput('35');
  mort_time.position(20, 160);

  button = createButton('submit');
  button.position(mort_time.x + mort_time.width, 160);
  button.mousePressed(cal_roi);

  // HlML so need to be one loooooong line
  output = createElement('p', '<b>ROI 0% <br/> Deposit £0 <br/> Mortgage Cost £0 <br/> Purchassing Fees <br/> Management Fees £0 <br/> Rainy Day Fund £0 <br/> Total Money In £0 <br/> Cost per Mouth £0 <br/> Cash Flow Mouth £0');
  output.position(20,170);

  textAlign(CENTER);
  textSize(50);
}

function cal_roi() {
  const price = parseFloat(house_price.value().replace(/,/g, ''));
  const interest = parseFloat(interest_rate.value());
  const rent_mouth = parseFloat(rent.value());
  const year = parseFloat(mort_time.value());
  let year_rent = rent * 12;

  // calculate Money in
  let deposit = price * 0.1;
  let buy_fees = price * 0.04;

  // running costs
  let rainy_day = rent_mouth * 0.1;
  let management = rainy_day;

  // monthly intrest rate
  let r = (interest/100)/12;
  // principle on Mortgage
  let p = price - deposit;
  // number of payments
  let n = year*12;
  let power = Math.pow((1+r),n);
  let numerator = r*power;
  let dom = power -1;
  let mortgage_payment_mouth = p*(numerator/dom);

  // calculate ROI
  let money_in = deposit + buy_fees;
  let income = rent_mouth * 12;
  let ex = (rainy_day + management) * 12 + (mortgage_payment_mouth*12);
  let roi = (income - ex)/money_in;



  output.html('<b>ROI '+parseFloat(roi*100).toFixed(2)+
  '% <br/> Deposit £'+parseFloat(deposit).toFixed(2)+
  '<br/> Mortgage Cost £'+parseFloat(mortgage_payment_mouth).toFixed(2)+
  '<br/> Purchassing Fees £'+parseFloat(buy_fees).toFixed(2)+
  '<br/> Management Fees £'+parseFloat(management).toFixed(2)+
  '<br/> Rainy Day Fund £'+parseFloat(rainy_day).toFixed(2)+
  '<br/> Total Money In £'+parseFloat(money_in).toFixed(2)+
  '<br/> Cost per Mouth £'+parseFloat(ex/12).toFixed(2)+
  '<br/> Cash Flow Mouth £'+parseFloat((income-ex)/12).toFixed(2));

}
