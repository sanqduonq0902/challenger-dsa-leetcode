function removeStars(s: string): string {
    let n = s.length;
    const result = [];

    for(let i = 0; i < n; i++) {
        if (s[i] === '*') {
            result.pop();
        } 
        else {
            result.push(s[i]);
        }
    }
    
    return result.join('');
};