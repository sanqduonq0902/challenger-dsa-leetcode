function moveZeroes(nums: number[]): void {
    let write = 0, read = 0;
    let n = nums.length;

    for (read = 0; read < n; read++) {
        if (nums[read] !== 0) {
            nums[write] = nums[read];
            write++;
        }
    }

    while (write < n) {
        nums[write] = 0;
        write++;
    }
};