import startGame from '../index.js';

const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return {
    question: progression.join(' '),
    correctAnswer: correctAnswer.toString(),
  };
};

const getInstructions = () => 'What number is missing in the progression?';

const getQuestion = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 5) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);

  return generateProgression(length, start, step, hiddenIndex);
};

const startProgressionGame = () => {
  startGame(getQuestion, getInstructions());
};

export default startProgressionGame;
