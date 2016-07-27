var paper = Snap('#beer');


// glass
const GLASS = {
  fill: '#fff',
  stroke: '#fcf9f9',
  strokeWidth: 40
};

paper
  .rect(50, 150, 300, 400, 10, 10)
  .attr(GLASS);

// handle
const HANDLE = Object.assign({}, GLASS, {
  fill: 'rgba(255, 255, 255, 0.0)'
});

paper
  .rect(340, 250, 125, 200, 50, 50)
  .attr(HANDLE);

// beer
const LIQUID = paper.gradient('l(0, 0, 1, 1)#EFC84A-#EFC84A');

const BEER = {
  fill: LIQUID,
  stroke: '#efc84a',
  strokeWidth: 25
};

paper
  .rect(75, 175, 250, 350, 10, 10)
  .attr(BEER);

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
const MUCK = {
  fill: '#fff',
  stroke: '#fff',
  strokeWidth: 25
};

paper
  .rect(200, 150, 1, 30, 10, 10)
  .attr(MUCK)
  .animate({
    height: 300
  }, 30000);

paper
  .rect(250, 150, 1, 30, 10, 10)
  .attr(MUCK)
  .animate({
    height: 250
  }, 60000);

// bubbles
const BUBBLE = {
  fill: 'rgba(255, 255, 255, 0.5)'
};

setInterval(() => {

  let bubble = paper
    .circle(80 + (~~(Math.random() * 220)), 525, 1)
    .animate({
      r: ~~(Math.random(10) * 10)
    }, 2000)
    .animate({
      cy: 150
    }, 5000, null, () => bubble.remove())
    .attr(BUBBLE);

}, 1500);
