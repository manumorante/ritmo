export function percentMinMax(percent, min, max) {
  return (percent * (max - min)) / 100 + min
}
