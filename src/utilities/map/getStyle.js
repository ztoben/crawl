import {BOUNDARY} from '../tiles/tileTypes';

const boundaryStyle = {
  fontSize: 18,
  fontWeight: 'bold'
};

export function getStyle(type) {
  if (BOUNDARY === type) return boundaryStyle;

  return {};
}
