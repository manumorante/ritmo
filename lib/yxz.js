export function yxz(y, x = 0, z = 0) {
  return {
    willChange: 'transform',
    transform: `translate3d(${x}px, ${y}px, ${z}px)`,
    transformStyle: 'preserve-3d',
  }
}
