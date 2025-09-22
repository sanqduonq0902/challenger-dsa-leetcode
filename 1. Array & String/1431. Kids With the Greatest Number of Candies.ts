function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result = [];
    const n = candies.length;

    for (let i = 0; i < n; i++) {
        let extra = candies[i] + extraCandies;
        if (extra >= Math.max(...candies)) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};