import { describe, it, expect } from 'vitest';
import { wrapPosition, generateFoods } from '../utils';
import type { Position } from '../types';

describe('wrapPosition', () => {
  it('wraps x position when going left past boundary', () => {
    const result = wrapPosition({ x: -1, y: 5 });
    expect(result.x).toBe(29);
    expect(result.y).toBe(5);
  });

  it('wraps x position when going right past boundary', () => {
    const result = wrapPosition({ x: 30, y: 5 });
    expect(result.x).toBe(0);
    expect(result.y).toBe(5);
  });

  it('wraps y position when going up past boundary', () => {
    const result = wrapPosition({ x: 5, y: -1 });
    expect(result.x).toBe(5);
    expect(result.y).toBe(29);
  });

  it('wraps y position when going down past boundary', () => {
    const result = wrapPosition({ x: 5, y: 30 });
    expect(result.x).toBe(5);
    expect(result.y).toBe(0);
  });

  it('does not modify position within boundaries', () => {
    const result = wrapPosition({ x: 15, y: 15 });
    expect(result.x).toBe(15);
    expect(result.y).toBe(15);
  });
});

describe('generateFoods', () => {
  it('generates initial food count', () => {
    const foods: Position[] = [];
    const snake: Position[] = [{ x: 15, y: 15 }];
    const bots: { body: Position[] }[] = [];

    generateFoods(foods, snake, bots);

    expect(foods.length).toBe(8);
  });

  it('does not place food on snake position', () => {
    const foods: Position[] = [];
    const snake: Position[] = [{ x: 15, y: 15 }];
    const bots: { body: Position[] }[] = [];

    generateFoods(foods, snake, bots);

    const foodOnSnake = foods.some((f) => f.x === 15 && f.y === 15);
    expect(foodOnSnake).toBe(false);
  });

  it('fills up to initial count only', () => {
    const foods: Position[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
    ];
    const snake: Position[] = [{ x: 15, y: 15 }];
    const bots: { body: Position[] }[] = [];

    generateFoods(foods, snake, bots);

    expect(foods.length).toBe(8);
  });
});
