function findDifference(nums1: number[], nums2: number[]): number[][] {
    const setArr1 = new Set(nums1);
    const setArr2 = new Set(nums2);

    let arr1 = Array.from(setArr1).filter(x => !setArr2.has(x));
    let arr2 = Array.from(setArr2).filter(x => !setArr1.has(x));

    return [arr1, arr2];
};