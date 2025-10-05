function hoursNeeded(piles: number[], k: number): number {
  let total = 0;
  for (const pile of piles) {
    total += Math.ceil(pile / k); 
  }
  return total;
}


function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const hours = hoursNeeded(piles, mid);

    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left; 
}
