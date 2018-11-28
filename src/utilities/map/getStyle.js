import {BOUNDARY, FLOOR} from '../tiles/constants';

const boundaryStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  opacity: 100,
};
const floorStyle = {
  fontSize: 40,
  paddingTop: 4,
};

function getFloorStyle(discoveredPercent) {
  return {
    ...floorStyle,
    opacity: discoveredPercent,
  };
}

export function getStyle(type, discoveredPercent) {
  if (BOUNDARY === type) return boundaryStyle;
  if (FLOOR === type) return getFloorStyle(discoveredPercent);

  return {
    opacity: discoveredPercent,
  };
}
