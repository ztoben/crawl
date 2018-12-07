import {normalizePosition} from './normalizePosition';
import {getTile, isBoundary, isVoid} from '..';
import any from '@travi/any';

const wallMessages = [
  "Yep, that's a wall...",
  'It appears to be some kind of wall',
  "You can't do that",
  'A large vertical slab blocks your way',
];

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
    logEvent(any.fromList(wallMessages));
    return selectedPosition;
  }

  return normalizePosition(newPosition);
}
