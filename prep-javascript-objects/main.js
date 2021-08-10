var person = {
  firstName: 'Andrew',
  lastName: 'Almeida',
  hobby: 'running'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');
person.job = 'Costco';
console.log("The person's current job is: " + person.job + '.');
person.previousJob = 'Hollister';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log(person);
