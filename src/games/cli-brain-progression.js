import readlineSync from 'readline-sync';

// Функция для генерации арифметической прогрессии
const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..'; // Скрываем элемент
  return { question: progression.join(' '), correctAnswer: correctAnswer.toString() };
};

// Основная логика игры
const game = {
  getInstructions: () => 'What number is missing in the progression?',

  getQuestion: () => {
    const length = Math.floor(Math.random() * 6) + 5; // Длина от 5 до 10
    const start = Math.floor(Math.random() * 10); // Начало прогрессии
    const step = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии от 1 до 5
    const hiddenIndex = Math.floor(Math.random() * length); // Случайный индекс для скрытого числа

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

export { runProgressionGame, game }; // Экспортируем как runProgressionGame, так и game
