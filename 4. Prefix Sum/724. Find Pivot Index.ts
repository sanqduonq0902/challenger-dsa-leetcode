function pivotIndex(nums: number[]): number {
    let n = nums.length;
    let total = 0;
    let leftSum = 0;

    for (let i = 0; i < n; i++) {
        total += nums[i];
    }

    for (let i = 0; i < n; i++) {
        if (leftSum === total - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};