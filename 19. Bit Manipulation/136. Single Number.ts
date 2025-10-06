function singleNumber(nums: number[]): number {
    let n = nums.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        result ^= nums[i];
    }
    
    return result;
};