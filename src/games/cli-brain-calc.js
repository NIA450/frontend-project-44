import startGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getInstructions = () => 'What is the result of the expression?';

const getQuestion = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      break;
  }

  return { question: `${num1} ${operator} ${num2}`, correctAnswer };
};

const startExpressionGame = () => {
  startGame(getQuestion, getInstructions());
};

export default startExpressionGame;
