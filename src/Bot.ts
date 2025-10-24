import type { Position, Direction } from './types';
import { TILE_COUNT_X, TILE_COUNT_Y } from './constants';

export class BotSnake {
  body: Position[];
  dx: number;
  dy: number;
  color: string;
  changeDirectionCounter: number;

  constructor(x: number, y: number, color: string) {
    this.body = [{ x, y }];
    this.dx = 1;
    this.dy = 0;
    this.color = color;
    this.changeDirectionCounter = 0;
  }

  think(foods: Position[]): void {
    this.changeDirectionCounter++;

    if (this.changeDirectionCounter > 30 || Math.random() < 0.05) {
      this.changeDirectionCounter = 0;

      const nearestFood = this.findNearestFood(foods);
      if (nearestFood && Math.random() < 0.7) {
        const head = this.body[0];
        const distX = nearestFood.x - head.x;
        const distY = nearestFood.y - head.y;

        if (Math.abs(distX) > Math.abs(distY)) {
          if (distX > 0 && this.dx === 0) {
            this.dx = 1;
            this.dy = 0;
          } else if (distX < 0 && this.dx === 0) {
            this.dx = -1;
            this.dy = 0;
          }
        } else {
          if (distY > 0 && this.dy === 0) {
            this.dy = 1;
            this.dx = 0;
          } else if (distY < 0 && this.dy === 0) {
            this.dy = -1;
            this.dx = 0;
          }
        }
      } else {
        const directions: Direction[] = [
          { dx: 1, dy: 0 },
          { dx: -1, dy: 0 },
          { dx: 0, dy: 1 },
          { dx: 0, dy: -1 },
        ];
        const validDirections = directions.filter(
          (d) => !(d.dx === -this.dx && d.dy === -this.dy)
        );
        const dir = validDirections[Math.floor(Math.random() * validDirections.length)];
        this.dx = dir.dx;
        this.dy = dir.dy;
      }
    }
  }

  findNearestFood(foods: Position[]): Position | null {
    let nearest: Position | null = null;
    let minDist = Infinity;
    const head = this.body[0];

    foods.forEach((food) => {
      const dist = Math.abs(food.x - head.x) + Math.abs(food.y - head.y);
      if (dist < minDist) {
        minDist = dist;
        nearest = food;
      }
    });

    return nearest;
  }

  move(foods: Position[]): void {
    const head = { x: this.body[0].x + this.dx, y: this.body[0].y + this.dy };

    if (head.x < 0) head.x = TILE_COUNT_X - 1;
    if (head.x >= TILE_COUNT_X) head.x = 0;
    if (head.y < 0) head.y = TILE_COUNT_Y - 1;
    if (head.y >= TILE_COUNT_Y) head.y = 0;

    this.body.unshift(head);

    const ateFood = foods.findIndex((f) => f.x === head.x && f.y === head.y);
    if (ateFood !== -1) {
      foods.splice(ateFood, 1);
    } else {
      this.body.pop();
    }

    for (let i = 1; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        this.body = [
          {
            x: Math.floor(Math.random() * TILE_COUNT_X),
            y: Math.floor(Math.random() * TILE_COUNT_Y),
          },
        ];
        this.dx = 1;
        this.dy = 0;
        return;
      }
    }
  }
}
