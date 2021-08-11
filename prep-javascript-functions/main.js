function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var HoursToMinutesTest = convertHoursToMinutes(2);
console.log(HoursToMinutesTest);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingTest = getGreeting('World');
console.log(getGreetingTest);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Test = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Test);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Test = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Test);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersTest = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersTest);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;

}

var getCircleCircumferenceTest = getCircleCircumference(5);
console.log(getCircleCircumferenceTest);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;

}

var getFullNameTest = getFullName('Andrew', 'Almeida');
console.log(getFullNameTest);

function cube(number) {
  return number * number * number;
}

var cubeTest = cube(5);
console.log(cubeTest);
