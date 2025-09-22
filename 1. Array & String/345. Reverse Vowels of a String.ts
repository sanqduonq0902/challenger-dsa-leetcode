function reverseVowels(s: string): string {
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    let vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    while (left < right) {
        if (!vowelArr.includes(arr[left])) {
            left++;
            continue;
        }
        
        if (!vowelArr.includes(arr[right])) {
            right--;
            continue;
        }
        
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
};