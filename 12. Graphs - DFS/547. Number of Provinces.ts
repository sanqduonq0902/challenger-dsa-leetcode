function findCircleNum(isConnected: number[][]): number {
    let n = isConnected.length;
    let count = 0;
    let visited = new Array(n).fill(false);

    function dfs(city: number) {    
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) {
                visited[i] = true;
                dfs(i);
            }
        }
        
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i);
            count++;
        }
    }

    return count;
};