import { Game } from './Game';
import './style.css';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const scoreElement = document.getElementById('score')!;
const speedElement = document.getElementById('speed')!;
const highScoreElement = document.getElementById('highScore')!;
const gameOverElement = document.getElementById('gameOver')!;
const finalScoreElement = document.getElementById('finalScore')!;

const game = new Game(canvas, {
  onScoreChange: (score) => {
    scoreElement.textContent = String(score);
  },
  onHighScoreChange: (highScore) => {
    highScoreElement.textContent = String(highScore);
  },
  onSpeedChange: (speed) => {
    speedElement.textContent = speed;
  },
  onGameOver: (score) => {
    finalScoreElement.textContent = String(score);
    gameOverElement.classList.add('show');
  },
});

(window as any).restartGame = () => {
  gameOverElement.classList.remove('show');
  game.restart();
};

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    game.togglePause();
    return;
  }

  const key = e.key.toLowerCase();

  if (key === 'arrowleft' || key === 'a') {
    game.setDirection(-1, 0);
  }
  if (key === 'arrowright' || key === 'd') {
    game.setDirection(1, 0);
  }
  if (key === 'arrowup' || key === 'w') {
    game.setDirection(0, -1);
  }
  if (key === 'arrowdown' || key === 's') {
    game.setDirection(0, 1);
  }
});
