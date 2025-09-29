function canVisitAllRooms(rooms: number[][]): boolean {
    const n = rooms.length;
    const visited = new Array(n).fill(false);

    function dfs(room: number) {
        visited[room] = true;
        for (let num of rooms[room]) {
            if (!visited[num]) {
                dfs(num);
            }
        }
    }

    dfs(0);

    return visited.every(x => x === true);
};