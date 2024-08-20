import startGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getInstructions = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestion = (getRandomNumber) => {
  const number = getRandomNumber() + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

const startPrimeGame = () => {
  startGame(getQuestion, getInstructions());
};

export default startPrimeGame;
