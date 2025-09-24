function longestOnes(nums: number[], k: number): number {
    let n = nums.length;
    let left = 0, right = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (right = 0; right < n; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};