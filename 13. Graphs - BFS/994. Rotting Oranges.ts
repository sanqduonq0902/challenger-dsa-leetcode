function orangesRotting(grid: number[][]): number {
    const row = grid.length;
    const col = grid[0].length;
    const directions: number[] = [0, 1, 0, -1, 0];
    const queue: [number, number][] = [];
    let freshOrange = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);  
            } else if (grid[i][j] === 1) {
                freshOrange++;
            }
        }
    }

    if (freshOrange === 0) return 0;

    let minute = 0;

    while (queue.length > 0) {
        const size = queue.length;
        let spread = false; 

        for (let s = 0; s < size; s++) {
            const [r, c] = queue.shift()!;

            for (let index = 0; index < 4; index++) {
                const nextRow = r + directions[index];
                const nextCol = c + directions[index + 1];

                if (nextRow < 0 || nextRow >= row || nextCol < 0 || nextCol >= col) continue;

                if (grid[nextRow][nextCol] === 1) {
                    grid[nextRow][nextCol] = 2;
                    freshOrange--;
                    queue.push([nextRow, nextCol]);
                    spread = true;
                }
            }
        }

        if (spread) minute++; 
    }

    return freshOrange === 0 ? minute : -1;
}
