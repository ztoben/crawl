import any from '@travi/any';
import {BOUNDARY} from "./tileTypes";
import {buildBorderContent} from './buildBorderContent';

export default function buildTileContent(type, position) {
  if (type !== BOUNDARY) return any.fromList(['*', '-', '<', '>']);

  return buildBorderContent(position);
}
