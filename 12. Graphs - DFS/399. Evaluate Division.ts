function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: Record<string, [string, number][]> = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const k = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, k]);
        graph[b].push([a, 1 / k]);
    }

    function dfs(curr: string, target: string, visited: Set<string>, accProduct: number): number {
        if (!(curr in graph)) return -1.0; 
        if (curr === target) return accProduct;

        visited.add(curr);

        for (const [next, weight] of graph[curr]) {
            if (!visited.has(next)) {
                const result = dfs(next, target, visited, accProduct * weight);
                if (result !== -1.0) return result;
            }
        }
        return -1.0;
    }

    const results: number[] = [];
    for (const [x, y] of queries) {
        if (!(x in graph) || !(y in graph)) {
            results.push(-1.0);
        } else {
            results.push(dfs(x, y, new Set(), 1.0));
        }
    }

    return results;
};