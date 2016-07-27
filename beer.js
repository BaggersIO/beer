var paper = Snap('#beer');


// glass
const GLASS = {
  fill: '#fff',
  stroke: '#fcf9f9',
  strokeWidth: 40
};

paper.rect(50, 150, 300, 400, 10, 10).attr(GLASS);

// beer
const LIQUID = paper.gradient('l(0, 0, 1, 1)#EFC84A-#EFC84A');

const BEER = {
  fill: LIQUID,
  stroke: '#efc84a',
  strokeWidth: 25
};

paper.rect(75, 175, 250, 350, 10, 10).attr(BEER);

// head
const HEAD = { fill: '#fff' };

[
  [50, 150, 30],
  [75, 125, 40],
  [100, 125, 30],
  [125, 100, 40],
  [150, 75, 30],
  [175, 50, 20],
  [200, 75, 30],
  [225, 125, 50],
  [275, 125, 30],
  [300, 125, 25],
  [325, 150, 45],
  [275, 175, 30],
  [225, 175, 40],
  [175, 150, 60],
  [100, 175, 30]
].forEach(coords => paper.circle(...coords).attr(HEAD));

// muck
