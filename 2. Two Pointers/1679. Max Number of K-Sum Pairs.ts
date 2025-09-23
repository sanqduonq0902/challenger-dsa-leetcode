function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    let count = 0;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === k) {
            count++;
            left++;
            right--;
        }
        else if (sum < k) {
            left++;
        } 
        else {
            right--;
        }
    }

    return count;
};