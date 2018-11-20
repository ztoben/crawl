import {BOUNDARY, FLOOR} from '../tiles/constants';

const boundaryStyle = {
  fontSize: 18,
  fontWeight: 'bold',
};
const floorStyle = {
  fontSize: 38,
};

export function getStyle(type) {
  if (BOUNDARY === type) return boundaryStyle;
  if (FLOOR === type) return floorStyle;

  return {};
}
