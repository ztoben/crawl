import {BOUNDARY, FLOOR, VOID} from './constants';
import {CHEST_CONTENT, FLOOR_CONTENT, MONSTER_CONTENT} from './tileIndicators';
import {buildBorderContent} from './buildBorderContent';
import {CHEST} from '../chests/constants';
import {MONSTER} from '../monsters/constants';

export function buildTileContent(type, position) {
  if (BOUNDARY === type) return buildBorderContent(position);

  switch (type) {
    case FLOOR:
      return FLOOR_CONTENT;
    case VOID:
      return '\u25E6';
    case CHEST:
      return CHEST_CONTENT;
    case MONSTER:
      return MONSTER_CONTENT;
  }

  return '';
}
