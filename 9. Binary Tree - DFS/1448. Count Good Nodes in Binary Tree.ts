function goodNodes(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, maxLength: number) {
        if (!node) return 0;

        let good = node.val >= maxLength ? 1 : 0;

        let max = Math.max(maxLength, node.val);

        good += dfs(node.left, max);
        good += dfs(node.right, max);

        return good;
    }
    
    return dfs(root, root!.val);
};