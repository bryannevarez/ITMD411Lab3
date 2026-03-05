// B Nevarez
// ITMD 441-02 Undergraduate Student

// Exercise #1
function minMaxAverage(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    console.log("Total Numbers: 0, Min Value: N/A, Max Value: N/A, Average: N/A");
    return;
  }

  let min = nums[0];
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    sum += n;
    if (n < min) min = n;
    if (n > max) max = n;
  }

  const avg = sum / nums.length;
  console.log(`Total Numbers: ${nums.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg}`);
}

// Exercise #1 - Test Cases 
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]); 
minMaxAverage([-10, 0, 10, 20, 5]);

// Exercise #2
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  const s = String(str).toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) count++;
  }

  return count;
}

// Exercise #2 - Test Cases 
const w1 = "Winter";
console.log(`${w1}: ${countVowels(w1)} vowels`);
const w2 = "Javascript";
console.log(`${w2}: ${countVowels(w2)} vowels`);
const w3 = "rhythm";
console.log(`${w3}: ${countVowels(w3)} vowels`);

// Exercise #3
function sortNumbers(nums) {
  return nums.slice().sort((a, b) => a - b);
}

// Exercise #3 - Test Cases 
const a1 = [9, 4, 6, 2];
console.log(`Original Array: [${a1}] => Sorted Array: [${sortNumbers(a1)}]`);

const a2 = [100, 3, 25, 25, 0, -7];
console.log(`Original Array: [${a2}] => Sorted Array: [${sortNumbers(a2)}]`);

const a3 = [1.2, 1.01, 1.1, 0.99];
console.log(`Original Array: [${a3}] => Sorted Array: [${sortNumbers(a3)}]`);

// Exercise #4
function celsiusToFahrenheit(c) {
  const f = (c * 9 / 5) + 32;
  return `${Number(c).toFixed(1)} Celsius = ${f.toFixed(1)} Fahrenheit`;
}

// Exercise #4 - Test Cases 
console.log(celsiusToFahrenheit(30));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(-40));

// Exercise #5

function introducePeople(peopleArray) {

  const sortedPeople = peopleArray.slice().sort((a, b) => a.age - b.age);

  const introductions = sortedPeople.map(person => {
    return `${person.name} is ${person.age} and from ${person.city}`;
  });

  return introductions;
}

// Exercise #5 - Test Case 1
const peopleTest1 = [
  {name: 'Alice', age: 25, city: 'Chicago'},
  {name: 'Bob', age: 19, city: 'New York'},
  {name: 'Charlie', age: 32, city: 'Los Angeles'},
  {name: 'Diana', age: 22, city: 'Miami'},
  {name: 'Ethan', age: 28, city: 'Seattle'}
];

console.log("Test Case 1 Input:", peopleTest1);
console.log("Test Case 1 Output:", introducePeople(peopleTest1));


// Exercise #5 - Test Case 2
const peopleTest2 = [
  {name: 'Sophia', age: 30, city: 'Boston'},
  {name: 'Liam', age: 21, city: 'Denver'},
  {name: 'Olivia', age: 27, city: 'Dallas'},
  {name: 'Noah', age: 24, city: 'San Diego'},
  {name: 'Ava', age: 18, city: 'Phoenix'}
];

console.log("Test Case 2 Input:", peopleTest2);
console.log("Test Case 2 Output:", introducePeople(peopleTest2));