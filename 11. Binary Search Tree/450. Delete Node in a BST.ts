function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } 
    else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    else {
        // Case 1: Node leaf
        if (!root.left && !root.right) return null;

        //Case 2: Node 1
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        //Case 3: Node 2
        let minNode = findMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }

    return root;
};

function findMin(node: TreeNode) {
    while (node.left) {
        node = node.left;
    }

    return node;
}