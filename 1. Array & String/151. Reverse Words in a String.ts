function reverseWords(s: string): string {
    const arr = s.split(' ').filter(Boolean);
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join(' ');
};