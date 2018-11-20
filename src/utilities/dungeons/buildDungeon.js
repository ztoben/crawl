import any from '@travi/any';
import {range} from '..';
import {
  MAX_DUNGEON_HEIGHT,
  MAX_DUNGEON_WIDTH,
  MIN_DUNGEON_HEIGHT,
  MIN_DUNGEON_WIDTH,
} from './constants';

export function buildDungeon() {
  const width = any.fromList(range(MIN_DUNGEON_WIDTH, MAX_DUNGEON_WIDTH - MIN_DUNGEON_WIDTH));
  const height = any.fromList(range(MIN_DUNGEON_HEIGHT, MAX_DUNGEON_HEIGHT - MIN_DUNGEON_HEIGHT));
  const doors = any.fromList(range(4));

  return {
    width,
    height,
    doors,
  };
}
