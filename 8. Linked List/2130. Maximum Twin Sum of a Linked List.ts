function pairSum(head: ListNode | null): number {
    let arr = [];
    let curr = head;

    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    
    let n = arr.length;
    let maxSum = 0;
    for (let i = 0; i < n / 2; i++) {
        let max = arr[i] + arr[n - 1 - i];
        maxSum = Math.max(maxSum, max);
    }

    return maxSum;
};