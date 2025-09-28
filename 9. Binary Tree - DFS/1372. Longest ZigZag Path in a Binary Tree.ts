function longestZigZag(root: TreeNode | null): number {
    let maxDirect = 0;

    function dfs(node: TreeNode | null, direction: string, length: number) {
        if (!node) return;

        maxDirect = Math.max(maxDirect, length);

        if (direction === 'left') {
            dfs(node.right, 'right', length + 1);
            dfs(node.left, 'left', 1);
        }
        else {
            dfs(node.left, 'left', length + 1);
            dfs(node.right, 'right', 1);
        }
    }

    dfs(root!.left, 'left', 1);
    dfs(root!.right, 'right', 1);

    return maxDirect;
};