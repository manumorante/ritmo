export function percentMinMax(percent, min, max, decimals = 0) {
  const value = (percent * (max - min) / 100) + min;
  return decimals === 0 ? Math.round(value) : parseFloat(value.toFixed(decimals));
}