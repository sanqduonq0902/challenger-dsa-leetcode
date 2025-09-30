function minReorder(n: number, connections: number[][]): number {
    const graph: [number, number][][] = Array.from({ length: n }, () => []);

    for (const [u, v] of connections) {
        graph[u].push([v, 1]);
        graph[v].push([u, 0]);
    }

    let result = 0;
    const visited = new Array(n).fill(false);

    function dfs(node: number) {
        visited[node] = true;

        for (const [next, needReverse] of graph[node]) {
            if (!visited[next]) {
                result += needReverse; 
                dfs(next);
            }
        }
    }

    dfs(0);
    return result;
}