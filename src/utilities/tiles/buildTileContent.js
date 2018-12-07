import {BOUNDARY, FLOOR, VOID} from './constants';
import {FLOOR_CONTENT} from './tileIndicators';
import {buildBorderContent} from './buildBorderContent';

export default function buildTileContent(type, position) {
  if (BOUNDARY === type) return buildBorderContent(position);

  switch (type) {
    case FLOOR:
      return FLOOR_CONTENT;
    case VOID:
      return '\u25E6';
  }

  return '';
}
