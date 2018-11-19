import {BOUNDARY} from '../tiles/tileTypes';

const boundaryStyle = {
  fontSize: 12
};

export function getStyle(type) {
  if (BOUNDARY === type) return boundaryStyle;

  return {};
}
