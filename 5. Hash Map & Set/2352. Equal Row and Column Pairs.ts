function equalPairs(grid: number[][]): number {
    let n = grid.length;
    let result = 0;
    let mapCol = new Map<string, number>();

    for (let j = 0; j < n; j++) {
        let col = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        const key = col.join(',');
        mapCol.set(key, (mapCol.get(key) || 0) + 1);
    }

    for (let i = 0; i < n; i++) {
        const row = grid[i];
        const key = row.join(',');
        if (mapCol.has(key)) {
            result += mapCol.get(key)!;
        }
    }

    return result;
};