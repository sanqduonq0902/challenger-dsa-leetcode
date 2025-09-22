function mergeAlternately(word1: string, word2: string): string {
    const arr1 = word1.split('');
    const arr2 = word2.split('');
    
    let n = Math.max(arr1.length, arr2.length);
    let i = 0, j = 0;
    let result = [];

    for (let x = 0; x < n; x++) {
        if (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        if (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
    }

    return result.join('');
};