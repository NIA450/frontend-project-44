import readlineSync from 'readline-sync';

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

const startGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(getInstructions());

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const questionData = getQuestion();
    console.log(`Question: ${questionData.question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== questionData.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionData.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
