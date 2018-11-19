import {normalizePosition} from './normalizePosition';
import {getTile, isBoundary} from '..';

function getPositionAfterEvent(selectedPosition, event) {
  const newPosition = [...selectedPosition];

  switch (event.key) {
    case 'ArrowDown':
      newPosition[0]++;
      break;
    case 'ArrowUp':
      newPosition[0]--;
      break;
    case 'ArrowLeft':
      newPosition[1]--;
      break;
    case 'ArrowRight':
      newPosition[1]++;
      break;
  }
  return newPosition;
}

export function getNewPosition(map, selectedPosition, event) {
  const newPosition = getPositionAfterEvent(selectedPosition, event);

  const tile = getTile(map, newPosition);

  if (isBoundary(tile)) return selectedPosition;

  return normalizePosition(newPosition);
}
