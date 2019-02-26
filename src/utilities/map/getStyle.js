import {BOUNDARY, FLOOR} from '../tiles/constants';
import {CHEST} from '../chests/constants';

const boundaryStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  opacity: 100,
};
const floorStyle = {
  fontSize: 40,
  paddingTop: 4,
};
const chestStyle = {
  color: '#32CD32',
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
  if (CHEST === type) return chestStyle;

  return {
    opacity: discoveredPercent,
  };
}
