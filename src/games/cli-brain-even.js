import startGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0;

const getInstructions = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

const startEvenGame = () => {
  startGame(getQuestion, getInstructions());
};

export default startEvenGame;
