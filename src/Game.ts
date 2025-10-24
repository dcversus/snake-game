import type { Position } from './types';
import { BotSnake } from './Bot';
import { generateFoods, playSound, wrapPosition } from './utils';
import {
  GRID_SIZE,
  TILE_COUNT_X,
  TILE_COUNT_Y,
  BASE_SPEED,
  BOT_COUNT,
  BOT_COLORS,
  COLORS,
} from './constants';

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private snake: Position[] = [{ x: 15, y: 15 }];
  private foods: Position[] = [];
  private bots: BotSnake[] = [];
  private dx = 0;
  private dy = 0;
  private score = 0;
  private highScore: number;
  private gameRunning = false;
  private isPaused = false;
  private gameLoop: number | null = null;
  private currentSpeed = BASE_SPEED;
  
  private eatSound: HTMLAudioElement;
  private crashSound: HTMLAudioElement;
  
  private onScoreChange: (score: number) => void;
  private onHighScoreChange: (highScore: number) => void;
  private onSpeedChange: (speed: string) => void;
  private onGameOver: (score: number) => void;

  constructor(
    canvas: HTMLCanvasElement,
    callbacks: {
      onScoreChange: (score: number) => void;
      onHighScoreChange: (highScore: number) => void;
      onSpeedChange: (speed: string) => void;
      onGameOver: (score: number) => void;
    }
  ) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context');
    }
    this.ctx = context;
    this.highScore = Number(localStorage.getItem('snakeHighScore3D')) || 0;
    
    this.onScoreChange = callbacks.onScoreChange;
    this.onHighScoreChange = callbacks.onHighScoreChange;
    this.onSpeedChange = callbacks.onSpeedChange;
    this.onGameOver = callbacks.onGameOver;

    this.eatSound = new Audio(
      'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBgoOFhoeIiImKi4yNjY6Pj5CQkZGSk5OUlJWVlpaXl5iYmZmamZqZmpmamZqZmpmamZmYmJeXlpaVlZSUk5OSkZGQkI+Pjo2NjIuKiYiHhoWDgoGAfn18e3l4dXRzcG5sa2hlY2FfXVtZV1VTUVBOTEpJR0ZEQ0JBQEBAQEBBQUJDREVGSElKS0xOT1FSU1RWV1haW11eYGFjZGZnaWpsbnBxc3V2eHl7fH5/gIGDhIWGh4iJiouMjY2Oj5CQkZGSkpOUlJWVlpaXl5iYmJmZmZqamZmZmJiXl5aWlZWUlJOTkpGRkJCPj46NjIyLiomIh4aFg4KBgH9+fHt6eXd2dHNxcG5sa2llY2JgXl1bWVdWVFNRT05NS0pIR0VEQ0JBQEBAQEBBQkNEBQYHCAkK'
    );
    this.crashSound = new Audio(
      'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAf35+fX18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRUREQ0JCQkFBQEBAQEBAQEBAQEBBQUJCQkNDREREBQYHBwgJCQoKCwwMDQ4ODxAQEREREhMTFBQVFRUWFhcXGBgYGRkaGhobGxwcHB0dHR4eHh8fICAgICEhISIiIiIjIyMkJCQkJSUlJSYmJiYnJycoKCgoKCkpKSkpKSkpKSkpKSkpKCgoKCcnJycmJiYlJSUkJCQjIyIiIiEhICAf'
    );

    this.init();
    this.onHighScoreChange(this.highScore);
  }

  private init(): void {
    generateFoods(this.foods, this.snake, this.bots);

    for (let i = 0; i < BOT_COUNT; i++) {
      const x = Math.floor(Math.random() * TILE_COUNT_X);
      const y = Math.floor(Math.random() * TILE_COUNT_Y);
      this.bots.push(new BotSnake(x, y, BOT_COLORS[i]));
    }

    this.draw();
  }

  private draw(): void {
    this.clearCanvas();
    this.drawFoods();
    this.drawBots();
    this.drawSnake();
  }

  private clearCanvas(): void {
    this.ctx.fillStyle = COLORS.BACKGROUND;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawSnake(): void {
    this.snake.forEach((segment, index) => {
      const x = segment.x * GRID_SIZE;
      const y = segment.y * GRID_SIZE;
      const size = GRID_SIZE - 2;

      this.ctx.save();

      const alpha = 1 - (index / this.snake.length) * 0.2;
      this.ctx.fillStyle =
        index === 0 ? COLORS.PLAYER : `rgba(0, 122, 255, ${alpha})`;
      this.ctx.shadowColor = 'rgba(0, 122, 255, 0.2)';
      this.ctx.shadowBlur = 4;
      this.ctx.shadowOffsetX = 1;
      this.ctx.shadowOffsetY = 1;

      this.ctx.fillRect(x + 1, y + 1, size, size);

      this.ctx.restore();
    });
  }

  private drawBots(): void {
    this.bots.forEach((bot) => {
      bot.body.forEach((segment, index) => {
        const x = segment.x * GRID_SIZE;
        const y = segment.y * GRID_SIZE;
        const size = GRID_SIZE - 2;

        this.ctx.save();
        const alpha = 1 - (index / bot.body.length) * 0.3;
        this.ctx.fillStyle = bot.color;
        this.ctx.globalAlpha = alpha;
        this.ctx.shadowColor = bot.color;
        this.ctx.shadowBlur = 3;
        this.ctx.fillRect(x + 1, y + 1, size, size);
        this.ctx.restore();
      });
    });
  }

  private drawFoods(): void {
    this.foods.forEach((food) => {
      const x = food.x * GRID_SIZE;
      const y = food.y * GRID_SIZE;

      this.ctx.save();
      this.ctx.fillStyle = COLORS.FOOD;
      this.ctx.shadowColor = 'rgba(52, 199, 89, 0.3)';
      this.ctx.shadowBlur = 6;

      this.ctx.beginPath();
      this.ctx.arc(x + GRID_SIZE / 2, y + GRID_SIZE / 2, GRID_SIZE / 3, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  private moveSnake(): void {
    if (this.dx === 0 && this.dy === 0) return;

    const head = wrapPosition({
      x: this.snake[0].x + this.dx,
      y: this.snake[0].y + this.dy,
    });

    this.snake.unshift(head);
    this.snake.pop();
  }

  private growSnake(): void {
    const tail = this.snake[this.snake.length - 1];
    this.snake.push({ ...tail });
  }

  private checkCollision(): boolean {
    const head = this.snake[0];

    for (let i = 1; i < this.snake.length; i++) {
      if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
        return true;
      }
    }

    for (const bot of this.bots) {
      for (const segment of bot.body) {
        if (head.x === segment.x && head.y === segment.y) {
          return true;
        }
      }
    }

    return false;
  }

  private checkFoodCollision(): boolean {
    const head = this.snake[0];
    const foodIndex = this.foods.findIndex(
      (f) => f.x === head.x && f.y === head.y
    );
    if (foodIndex !== -1) {
      this.foods.splice(foodIndex, 1);
      return true;
    }
    return false;
  }

  private updateSpeed(): void {
    const speedMultiplier = 1 + (this.snake.length - 1) * 0.05;
    this.currentSpeed = Math.max(50, BASE_SPEED - this.snake.length * 3);
    this.onSpeedChange(speedMultiplier.toFixed(1) + 'x');

    if (this.gameRunning && this.gameLoop !== null) {
      clearInterval(this.gameLoop);
      this.gameLoop = window.setInterval(() => this.gameStep(), this.currentSpeed);
    }
  }

  private gameStep(): void {
    if (this.isPaused) return;

    this.clearCanvas();
    this.moveSnake();

    this.bots.forEach((bot) => {
      bot.think(this.foods);
      bot.move(this.foods);
    });

    if (this.checkCollision()) {
      this.endGame();
      return;
    }

    if (this.checkFoodCollision()) {
      this.score++;
      this.onScoreChange(this.score);
      this.growSnake();
      generateFoods(this.foods, this.snake, this.bots);
      this.updateSpeed();
      playSound(this.eatSound);
    }

    this.drawFoods();
    this.drawBots();
    this.drawSnake();
  }

  private endGame(): void {
    this.gameRunning = false;
    if (this.gameLoop !== null) {
      clearInterval(this.gameLoop);
    }

    playSound(this.crashSound);

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('snakeHighScore3D', String(this.highScore));
      this.onHighScoreChange(this.highScore);
    }

    this.onGameOver(this.score);
  }

  start(): void {
    if (!this.gameRunning && (this.dx !== 0 || this.dy !== 0)) {
      this.gameRunning = true;
      this.gameLoop = window.setInterval(() => this.gameStep(), this.currentSpeed);
    }
  }

  restart(): void {
    this.snake = [{ x: 15, y: 15 }];
    this.foods = [];
    this.bots = [];
    this.dx = 0;
    this.dy = 0;
    this.score = 0;
    this.onScoreChange(this.score);
    this.currentSpeed = BASE_SPEED;
    this.onSpeedChange('1.0x');
    this.gameRunning = false;
    this.isPaused = false;
    this.init();
  }

  setDirection(dx: number, dy: number): void {
    if (dx !== 0 && this.dx === 0) {
      this.dx = dx;
      this.dy = 0;
      this.start();
    } else if (dy !== 0 && this.dy === 0) {
      this.dx = 0;
      this.dy = dy;
      this.start();
    }
  }

  togglePause(): void {
    if (this.gameRunning) {
      this.isPaused = !this.isPaused;
    }
  }

  getScore(): number {
    return this.score;
  }

  getSnakeLength(): number {
    return this.snake.length;
  }
}
