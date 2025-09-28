function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    let result: number[] = [];
    let queue: TreeNode[] = [root];

    while (queue.length > 0) {
        let n = queue.length; 
        for (let i = 0; i < n; i++) {
            let node = queue.shift()!;

            if (i === n - 1) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
};