function maxVowels(s: string, k: number): number {
    let n = s.length;
    let vowelLetter = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let maxCount = 0;
    
    for(let i = 0; i < k; i++) {
        if (vowelLetter.includes(s[i])) {
            count++;
        }
    }
    
    maxCount = count;

    for (let i = k; i < n; i++) {   
        if (vowelLetter.includes(s[i -k])) {
            count--;
        }

        if (vowelLetter.includes(s[i])) {
            count++;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};