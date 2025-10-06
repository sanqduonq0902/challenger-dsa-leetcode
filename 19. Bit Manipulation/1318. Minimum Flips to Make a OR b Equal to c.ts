function minFlips(a: number, b: number, c: number): number {
  let flips = 0;

  while (a > 0 || b > 0 || c > 0) {
    const aBit = a & 1;
    const bBit = b & 1;
    const cBit = c & 1;

    if ((aBit | bBit) !== cBit) {
      if (cBit === 1) {
        flips += 1;
      } else {
        flips += aBit + bBit;
      }
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return flips;
}

