function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];

    const phoneMap: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result: string[] = [];

    function backtracking(index: number, path: string[]) {
        if (path.length === digits.length) {
            result.push(path.join(''));
            return;
        }

        const letter = phoneMap[digits[index]];

        for (let choices of letter) {
            path.push(choices);
            backtracking(index + 1, path);
            path.pop();
        }
    }

    backtracking(0, []);
    
    return result;
};