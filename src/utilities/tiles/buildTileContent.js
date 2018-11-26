import {BOUNDARY, FLOOR, VOID, WALL} from './constants';
import {FLOOR_CONTENT} from './tileIndicators';
import {buildBorderContent} from './buildBorderContent';

export default function buildTileContent(type, position, discovered) {
  if (BOUNDARY === type) return buildBorderContent(position);
  if (!discovered) return '';

  switch (type) {
    case FLOOR:
      return FLOOR_CONTENT;
    case WALL:
      return '';
    case VOID:
      return '\u25E6';
  }

  return '';
}
