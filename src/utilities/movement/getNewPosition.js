import {normalizePosition} from './normalizePosition';
import {getTile, isBoundary, isVoid} from '..';
import {getRandomPhrase} from '../gameLog/getRandomPhrase';
import {VOID_MOVEMENT} from '../gameLog/constants';
import {isChest} from '../chests/isChest';
import {openChest} from '../chests/openChest';

function getPositionAfterEvent(selectedPosition, event) {
  const newPosition = [...selectedPosition];

  if (!event) return newPosition;

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

export function getNewPosition(map, selectedPosition, event, logEvent, store) {
  const newPosition = getPositionAfterEvent(selectedPosition, event);

  const tile = getTile(map, newPosition);

  if (isBoundary(tile)) {
    if (logEvent) logEvent("You're at the edge of the map.");
    return selectedPosition;
  }
  if (isVoid(tile)) {
    if (logEvent) logEvent(getRandomPhrase(VOID_MOVEMENT));
    return selectedPosition;
  }
  if (isChest(tile)) {
    return openChest({store, logEvent, type: tile.data.type, position: newPosition});
  }

  return normalizePosition(newPosition);
}
