function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let result = [];

    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let j = n - 1; j >= 0; j--) {
        result[j] *= suffix;
        suffix *= nums[j];
    }

    return result;
};