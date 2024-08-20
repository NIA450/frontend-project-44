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

const getQuestion = (getRandomNumber) => {
  const length = 5 + Math.floor(getRandomNumber() * 6);
  const start = Math.floor(getRandomNumber() * 10);
  const step = 1 + Math.floor(getRandomNumber() * 5);
  const hiddenIndex = Math.floor(getRandomNumber() * length);

  return generateProgression(length, start, step, hiddenIndex);
};

const startProgressionGame = () => {
  startGame(getQuestion, getInstructions());
};

export default startProgressionGame;
