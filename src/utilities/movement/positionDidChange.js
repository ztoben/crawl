export function positionDidChange(selectedPosition, newPosition) {
  return selectedPosition[0] !== newPosition[0] || selectedPosition[1] !== newPosition[1];
}
