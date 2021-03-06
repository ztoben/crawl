import any from '@travi/any';
import {range} from '..';
import {
  MAX_DUNGEON_HEIGHT,
  MAX_DUNGEON_WIDTH,
  MIN_DUNGEON_HEIGHT,
  MIN_DUNGEON_WIDTH,
} from './constants';
import {flattenLayersToDungeon} from './flattenLayersToDungeon';

export function buildDungeon() {
  const numberOfLayers = any.integer({min: 1, max: 5});
  const layers = [];

  for (let x = 0; x < numberOfLayers; x++) {
    layers.push({
      width: any.integer({min: MIN_DUNGEON_WIDTH, max: MAX_DUNGEON_WIDTH - MIN_DUNGEON_WIDTH}),
      height: any.integer({min: MIN_DUNGEON_HEIGHT, max: MAX_DUNGEON_HEIGHT - MIN_DUNGEON_HEIGHT}),
    });
  }

  return flattenLayersToDungeon(layers);
}
