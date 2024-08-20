import readlineSync from 'readline-sync';

const MAX_CORRECT_ANSWERS = 3;

const getRandomNumber = () => Math.floor(Math.random() * 100);

const startGame = (getQuestion, instructions) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instructions);

  let correctAnswers = 0;

  while (correctAnswers < MAX_CORRECT_ANSWERS) {
    const questionData = getQuestion(getRandomNumber);
    console.log(`Question: ${questionData.question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== questionData.correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${questionData.correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
