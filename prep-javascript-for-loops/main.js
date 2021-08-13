// create your loops here.

let firstLoop = '';

for (let i = 0; i < 10; i++) {
  firstLoop = firstLoop + i;
  console.log(i);
}

let secondLoop = '';

for (let i = 0; i < 20; i += 2) {
  secondLoop = secondLoop + i;
  console.log(i);
}

let thirdLoop = 'Time till explosion: ';

for (let i = 100; i > 0; i--) {
  thirdLoop = thirdLoop + i;
  console.log(i);

}
