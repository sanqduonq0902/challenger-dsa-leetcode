function maxArea(height: number[]): number {
    let n = height.length;
    let left = 0; 
    let right = n - 1;
    let maxArea = 0;

    while (left < right) {
        let width = right - left;
        let h = Math.min(height[right], height[left]);
        let S = width * h;
        maxArea = Math.max(maxArea, S);

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }

    return maxArea;
};