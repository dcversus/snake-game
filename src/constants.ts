export const GRID_SIZE = 20;
export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 600;
export const TILE_COUNT_X = CANVAS_WIDTH / GRID_SIZE;
export const TILE_COUNT_Y = CANVAS_HEIGHT / GRID_SIZE;
export const BASE_SPEED = 150;
export const INITIAL_FOOD_COUNT = 8;
export const BOT_COUNT = 3;
export const BOT_COLORS = ['#FF3B30', '#FF9500', '#AF52DE'];

export const COLORS = {
  BACKGROUND: '#f6f6f6',
  PLAYER: '#007AFF',
  FOOD: '#34C759',
  TEXT_PRIMARY: '#04040b',
  TEXT_SECONDARY: '#9e9e9e',
} as const;
