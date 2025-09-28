function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;
    
    function dfs(node: TreeNode | null, sum: number) {
        if (!node) return 0;

        let count = 0;
        if (node.val === sum) {
            count++;
        }

        count += dfs(node.left, sum - node.val);
        count += dfs(node.right, sum - node.val);

        return count;
    }

    return (
        dfs(root, targetSum) + 
        pathSum(root.left, targetSum) + 
        pathSum(root.right, targetSum)
    );
};