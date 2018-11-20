import any from '@travi/any';
import {BOUNDARY, FLOOR, VOID, WALL} from './constants';
import {FLOOR_CONTENT} from './tileIndicators';
import {buildBorderContent} from './buildBorderContent';

export default function buildTileContent(type, position) {
  switch (type) {
    case BOUNDARY:
      return buildBorderContent(position);
    case FLOOR:
      return FLOOR_CONTENT;
    case WALL:
      return '';
    case VOID:
      return '\u25E6';
    default:
      return any.fromList(['>', '<', '*']);
  }
}
