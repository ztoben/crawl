import {range, selectRandomCoordinate} from '..';
import {TOP_LEFT, TOP_RIGHT} from './constants';
import any from '@travi/any';

function initializeDungeon(layer, boundingPoint) {
  const dungeon = [...layer];
  const [x, y] = boundingPoint;

  dungeon[x][y] = 'B';

  return dungeon;
}

function findBoundingPoint(dungeon) {
  for (let x = 0; x < dungeon.length; x++) {
    for (let y = 0; y < dungeon[0].length; y++) {
      if (dungeon[x][y] === 'B') return [x, y];
    }
  }

  return [0, 0];
}

function addTopLeftLayer(dungeon, layer, boundingX, boundingY) {
  const newWidth = dungeon.length + layer.length - (dungeon.length - boundingX);
  const newHeight = dungeon[0].length + layer[0].length - (dungeon[0].length - boundingY);
  const newDungeon = [];

  for (let x = 0; x <= newWidth; x++) {
    let row = [];
    for (let y = 0; y <= newHeight; y++) {
      row.push(x < dungeon.length && y < dungeon[x].length ? dungeon[x][y] : 'O');
    }
    newDungeon.push(row);
  }

  for (let x = boundingX; x < boundingX + layer.length - 1; x++) {
    for (let y = boundingY; y < boundingY + layer[0].length - 1; y++) {
      const tile = newDungeon[x][y];

      if (tile === 'O') newDungeon[x][y] = 'X';
    }
  }

  return newDungeon;
}

function addTopRightLayer(dungeon, layer, boundingX, boundingY) {
  const newWidth = dungeon.length + layer.length - (layer.length - boundingX);
  const newHeight = dungeon[0].length + layer[0].length - (dungeon[0].length - boundingY);
  const newDungeon = [];

  for (let x = 0; x < newWidth; x++) {
    let row = [];
    for (let y = 0; y < newHeight; y++) {
      const normalizedX = x + dungeon.length - newWidth;

      row.push(
        normalizedX >= 0 && normalizedX < newWidth && y < dungeon[0].length
          ? dungeon[normalizedX][y]
          : 'O'
      );
    }
    newDungeon.push(row);
  }

  const [newBoundingX, newBoundingY] = findBoundingPoint(newDungeon);

  for (let x = 0; x < newBoundingX; x++) {
    for (let y = newBoundingY; y < newBoundingY + layer[0].length - 1; y++) {
      const tile = newDungeon[x][y];

      if (tile === 'O') newDungeon[x][y] = 'X';
    }
  }

  return newDungeon;
}

function addLayer(dungeon, layer, boundingPoint, direction) {
  const [boundingX, boundingY] = boundingPoint;

  switch (direction) {
    case TOP_LEFT:
      return addTopLeftLayer(dungeon, layer, boundingX, boundingY);
    case TOP_RIGHT:
      return addTopRightLayer(dungeon, layer, boundingX, boundingY);
  }
}

export function flattenLayersToDungeon(layers) {
  const filledLayers = layers.map(layer => {
    return range(layer.width).map(() => {
      return range(layer.height).map(() => 'X');
    });
  });
  const topLayer = filledLayers[0];
  let dungeon = initializeDungeon(topLayer, selectRandomCoordinate(topLayer));

  for (let x = 1; x < filledLayers.length; x++) {
    /* TODO: Add other direction types and their implementations, randomly choose direction */
    dungeon = addLayer(
      dungeon,
      filledLayers[x],
      findBoundingPoint(dungeon),
      any.fromList([TOP_LEFT, TOP_RIGHT])
    );
  }

  return {
    width: dungeon.length,
    height: dungeon[0].length,
    dungeonMap: dungeon,
  };
}
