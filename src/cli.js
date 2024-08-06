import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync');

function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
export default greetUser;
