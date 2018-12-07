import any from '@travi/any';
import {newGamePhrases} from './newGamePhrases';
import {voidPhrases} from './voidPhrases';
import {NEW_GAME, VOID_MOVEMENT} from './constants';

export function getRandomPhrase(type) {
  switch (type) {
    case NEW_GAME:
      return any.fromList(newGamePhrases);
    case VOID_MOVEMENT:
      return any.fromList(voidPhrases);
    default:
      return '';
  }
}
