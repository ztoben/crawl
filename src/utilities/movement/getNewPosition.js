import {normalizePosition} from './normalizePosition';
import {getTile, isBoundary, isVoid} from '..';
import {getRandomPhrase} from '../gameLog/getRandomPhrase';
import {VOID_MOVEMENT} from '../gameLog/constants';

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

export function getNewPosition(map, selectedPosition, event, logEvent) {
  const newPosition = getPositionAfterEvent(selectedPosition, event);

  const tile = getTile(map, newPosition);

  if (isBoundary(tile)) {
    logEvent("You're at the edge of the map.");
    return selectedPosition;
  }
  if (isVoid(tile)) {
    logEvent(getRandomPhrase(VOID_MOVEMENT));
    return selectedPosition;
  }

  return normalizePosition(newPosition);
}
