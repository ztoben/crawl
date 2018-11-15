export const width = 100;
export const height = 100;

export function initializeMap() {
  const map = [];

  for (let x = 0; x < width; x++) {
    let row = [];

    for (let y = 0; y < height; y++) {
      row.push(0);
    }

    map.push(row);
  }

  return map;
}
