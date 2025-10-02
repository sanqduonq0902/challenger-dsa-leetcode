function nearestExit(maze: string[][], entrance: number[]): number {
    const directions: number[] = [0, 1, 0, -1, 0];
    const row = maze.length;
    const col = maze[0].length;
    const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];

    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length > 0) {
        const [r, c, step] = queue.shift()!;
        const dir = 4;

        for (let i = 0; i < dir; i++) {
            let nextRow = r + directions[i];
            let nextCol = c + directions[i + 1];

            if (nextRow >= 0 && nextRow < row && nextCol >= 0 && nextCol < col && maze[nextRow][nextCol] === '.') {
                if (nextRow === 0 || nextCol === 0 || nextRow === row - 1 || nextCol === col - 1) {
                    return step + 1;
                } 
                maze[nextRow][nextCol] = '+';
                queue.push([nextRow, nextCol, step + 1]);
            }
        }
    }

    return -1;
};