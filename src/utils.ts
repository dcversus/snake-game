import type { Position } from './types';
import { TILE_COUNT_X, TILE_COUNT_Y, INITIAL_FOOD_COUNT } from './constants';

export function generateFoods(
  foods: Position[],
  snake: Position[],
  bots: { body: Position[] }[]
): void {
  while (foods.length < INITIAL_FOOD_COUNT) {
    const newFood: Position = {
      x: Math.floor(Math.random() * TILE_COUNT_X),
      y: Math.floor(Math.random() * TILE_COUNT_Y),
    };

    const collision =
      snake.some((s) => s.x === newFood.x && s.y === newFood.y) ||
      foods.some((f) => f.x === newFood.x && f.y === newFood.y) ||
      bots.some((bot) =>
        bot.body.some((s) => s.x === newFood.x && s.y === newFood.y)
      );

    if (!collision) {
      foods.push(newFood);
    }
  }
}

export function playSound(sound: HTMLAudioElement): void {
  sound.currentTime = 0;
  sound.volume = 0.3;
  sound.play().catch(() => {});
}

export function wrapPosition(pos: Position): Position {
  const wrapped = { ...pos };
  if (wrapped.x < 0) wrapped.x = TILE_COUNT_X - 1;
  if (wrapped.x >= TILE_COUNT_X) wrapped.x = 0;
  if (wrapped.y < 0) wrapped.y = TILE_COUNT_Y - 1;
  if (wrapped.y >= TILE_COUNT_Y) wrapped.y = 0;
  return wrapped;
}
