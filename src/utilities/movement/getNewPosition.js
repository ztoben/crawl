import {normalizePosition} from './normalizePosition';
import {isBoundary} from '..';

export function getNewPosition(map, selectedPosition, event) {
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

  if (isBoundary(map, newPosition)) return selectedPosition;

  return normalizePosition(newPosition);
}
