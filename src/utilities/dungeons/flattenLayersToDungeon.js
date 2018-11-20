import {range, selectRandomCoordinate} from '..';
import {TOP_LEFT} from './constants';

function addLayer(dungeon, layer, boundingPoint, direction) {
  const [boundingX, boundingY] = boundingPoint;

  switch (direction) {
    case TOP_LEFT:
      const newWidth = dungeon.length + layer.length - (dungeon.length - boundingX);
      const newHeight = dungeon[0].length + layer[0].length - (dungeon[0].length - boundingY);
      const newDungeon = [];

      for (let x = 0; x < newWidth; x++) {
        let row = [];
        for (let y = 0; y < newHeight; y++) {
          row.push(x < dungeon.length && y < dungeon[x].length ? 'X' : 'O');
        }
        newDungeon.push(row);
      }

      for (let x = boundingX; x < newWidth; x++) {
        for (let y = boundingY; y < newHeight; y++) {
          newDungeon[x][y] = 'X';
        }
      }

      return newDungeon;
  }
}

export function flattenLayersToDungeon(layers) {
  const filledLayers = layers.map(layer => {
    return range(layer.width).map(() => {
      return range(layer.height).map(() => 'X');
    });
  });
  const topLayer = filledLayers[0];
  const boundingPoint = selectRandomCoordinate(topLayer);

  let dungeon = [...topLayer];

  for (let x = 1; x < filledLayers.length; x++) {
    /* TODO: Add other direction types and their implementations */
    dungeon = addLayer(dungeon, filledLayers[x], boundingPoint, TOP_LEFT);
  }

  return {
    width: dungeon.length,
    height: dungeon[0].length,
    dungeonMap: dungeon,
  };
}
