function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    let m = potions.length;
    const result: number[] = [];

    for (let s of spells) {
        const need = Math.ceil(success / s);

        let left = 0, right = m - 1, pos = m;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] >= need) {
                pos = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result.push(m - pos);
    }

    return result;
};