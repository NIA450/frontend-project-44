import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = {
  getInstructions: () => 'Answer "yes" if given number is prime. Otherwise answer "no".',

  getQuestion: () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question: number, correctAnswer };
  },
};

const runPrimeGame = (primeGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(primeGame.getInstructions());

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const questionData = primeGame.getQuestion();
    console.log(`Question: ${questionData.question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

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

export { runPrimeGame, game };
