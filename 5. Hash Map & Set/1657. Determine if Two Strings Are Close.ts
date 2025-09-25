function closeStrings(word1: string, word2: string): boolean {
    let n = word1.length;
    const arrWord1 = word1.split('');
    const arrWord2 = word2.split('');

    if (word1.length !== word2.length) return false;

    let setWord1 = new Set(arrWord1);
    let setWord2 = new Set(arrWord2);
    if (setWord1.size !== setWord2.size) return false;
    for (let s of arrWord2) {
        if (!setWord1.has(s)) return false;
    }

    let mapArr1 = new Map();
    let mapArr2 = new Map();
    for (let i = 0; i < n; i++) {
        mapArr1.set(word1[i], (mapArr1.get(word1[i]) || 0) + 1);
        mapArr2.set(word2[i], (mapArr2.get(word2[i]) || 0) + 1);
    }

    const freq1 = Array.from(mapArr1.values()).sort((a, b) => a - b);
    const freq2 = Array.from(mapArr2.values()).sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true;
};