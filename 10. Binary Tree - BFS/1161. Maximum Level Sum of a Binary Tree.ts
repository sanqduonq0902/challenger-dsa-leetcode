function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;
    
    let queue: TreeNode[] = [root];
    let maxLevel = 1;
    let maxSum = -Infinity;
    let level = 1;

    while (queue.length > 0) {
        let n = queue.length;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            let node = queue.shift()!;
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxLevel = level;
        }

        level++;
    }
    
    return maxLevel;
};