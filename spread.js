const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 28];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges = [...ages, ...ages2, ...ages3];

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
