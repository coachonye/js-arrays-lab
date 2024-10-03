

const foods = ['pizza', 'cheeseburger'];
console.log(foods);

foods.unshift('taco');

const FavFood = foods[1]
console.log('FavFoods');

foods.splice(2,0, 'tofu');

foods.splice(1,1,'sushi', 'cupcake');

const yummy = foods.slice(1,3);
console .log(yummy);

const soyIdx = foods.indexOf('tofu');
console.log(soyIdx);

const allFoods = foods.join('->');
console.log(allFoods);

const hasSoup = foods.includes('soup');
console.log('hasSoup:');

const arr = ['taco', 'sushi', 'copcake', 'tofu', 'cheeseburger'];
for (const element of arr) {
   console.log(element);
}

const nums = [100,5,23,15,21,72,9,45,66,7,81,90];
const odds = [];
for (let i = 0; i < nums.length; i++) {
   if (nums[i] % 2 !== 0)
      odds.push(nums[i]);
}
console.log(odds);

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
   const num = nums[i];
   if (num % 3 === 0 && num % 5 === 0) {
      fizzbuzz.push(num);
   }
   if (num % 3 === 0) {
      fizz.push(num);
   }
   if (num % 5 === 0) {
      buzz.push(num);
   }
}
console.log('fizz');
console.log('buzz');
console.log('fizzbuzz');

const numArrays = [
   [100, 5, 23,],
   [15, 21, 72, 9],
   [45, 66],
   [7, 81, 90],
];
const numList = numArrays[numArrays.length - 1];
console.log(numList);

const num = numArrays[2][1];
console.log(num);

let total = 0;
numArrays.forEach(subArray => {
subArray.forEach(number => {
   total += number;
});
});

console.log('total');










