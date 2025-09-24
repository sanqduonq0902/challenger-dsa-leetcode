function largestAltitude(gain: number[]): number {
    let n = gain.length;
    let prefix = [];
    let maxHigh = 0;

    prefix[0] = 0; 
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + gain[i - 1];
        maxHigh = Math.max(maxHigh, ...prefix);
    }

    return maxHigh;
};