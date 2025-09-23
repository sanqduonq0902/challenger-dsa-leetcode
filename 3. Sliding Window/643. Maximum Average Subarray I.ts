function findMaxAverage(nums: number[], k: number): number {
    const n = nums.length;
    let window = 0;

    for (let i = 0; i < k; i++) {
        window += nums[i];
    }

    let maxWindow = window;

    for (let i = k; i < n; i++) {
        window = window - nums[i - k] + nums[i];
        maxWindow = Math.max(maxWindow, window);
    }

    return maxWindow / k;
};