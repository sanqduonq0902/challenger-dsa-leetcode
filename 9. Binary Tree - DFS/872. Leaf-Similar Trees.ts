function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    function dfs(root: TreeNode | null, arrLeaf: number[]) {
        if (!root) return;

        if (!root.left && !root.right) {
            arrLeaf.push(root.val);
            return;
        }

        dfs(root.left, arrLeaf);
        dfs(root.right, arrLeaf);
    }
    let tree1: number[] = [];
    let tree2: number[] = [];

    dfs(root1, tree1);
    dfs(root2, tree2);

    return tree1.join(',') === tree2.join(',');
};