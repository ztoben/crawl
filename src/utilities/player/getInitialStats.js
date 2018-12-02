import {ranges} from './initialStatRanges';
import {getStats} from '../helpers/getStats';

export function getInitialStats(classType) {
  return getStats(ranges, classType);
}
