import readlineSync from 'readline-sync';

const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { question: progression.join(' '), correctAnswer: correctAnswer.toString() };
};

const game = {
  getInstructions: () => 'What number is missing in the progression?',

  getQuestion: () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const hiddenIndex = Math.floor(Math.random() * length);

    return generateProgression(length, start, step, hiddenIndex);
  },
};

const runProgressionGame = (progressionGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(progressionGame.getInstructions());

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const questionData = progressionGame.getQuestion();
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

export { runProgressionGame, game };
