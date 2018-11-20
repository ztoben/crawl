import any from '@travi/any';

export function selectRandomCoordinate(twoDimensionalArray) {
  const width = twoDimensionalArray.length;
  const height = twoDimensionalArray[0].length;

  const x = any.integer({min: 0, max: width});
  const y = any.integer({min: 0, max: height});

  return [x, y];
}
