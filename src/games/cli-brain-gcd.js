import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

const game = {
  getInstructions: () => 'Find the greatest common divisor of given numbers.',

  getQuestion: () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    return { question, correctAnswer };
  },
};

const runGcdGame = (gcdGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gcdGame.getInstructions());

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const questionData = gcdGame.getQuestion();
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

export { runGcdGame, game };
