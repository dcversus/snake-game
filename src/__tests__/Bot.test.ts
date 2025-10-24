import { describe, it, expect } from 'vitest';
import { BotSnake } from '../Bot';
import type { Position } from '../types';

describe('BotSnake', () => {
  it('initializes with correct position and direction', () => {
    const bot = new BotSnake(10, 10, '#FF3B30');

    expect(bot.body).toEqual([{ x: 10, y: 10 }]);
    expect(bot.dx).toBe(1);
    expect(bot.dy).toBe(0);
    expect(bot.color).toBe('#FF3B30');
  });

  it('finds nearest food', () => {
    const bot = new BotSnake(10, 10, '#FF3B30');
    const foods: Position[] = [
      { x: 15, y: 10 },
      { x: 5, y: 5 },
      { x: 11, y: 11 },
    ];

    const nearest = bot.findNearestFood(foods);

    expect(nearest).toEqual({ x: 11, y: 11 });
  });

  it('returns null when no food available', () => {
    const bot = new BotSnake(10, 10, '#FF3B30');
    const foods: Position[] = [];

    const nearest = bot.findNearestFood(foods);

    expect(nearest).toBeNull();
  });

  it('moves in set direction', () => {
    const bot = new BotSnake(10, 10, '#FF3B30');
    const foods: Position[] = [];
    bot.dx = 1;
    bot.dy = 0;

    bot.move(foods);

    expect(bot.body[0].x).toBe(11);
    expect(bot.body[0].y).toBe(10);
  });

  it('wraps around when moving past boundary', () => {
    const bot = new BotSnake(29, 15, '#FF3B30');
    const foods: Position[] = [];
    bot.dx = 1;
    bot.dy = 0;

    bot.move(foods);

    expect(bot.body[0].x).toBe(0);
    expect(bot.body[0].y).toBe(15);
  });

  it('grows when eating food', () => {
    const bot = new BotSnake(10, 10, '#FF3B30');
    const foods: Position[] = [{ x: 11, y: 10 }];
    bot.dx = 1;
    bot.dy = 0;

    const initialLength = bot.body.length;
    bot.move(foods);

    expect(bot.body.length).toBe(initialLength + 1);
    expect(foods.length).toBe(0);
  });
});
