function decodeString(s: string): string {
    let result = [];
    const str = s.match(/\d+|[a-zA-Z]+|\[|\]/g);

    if (!str) return "";

    for(const strg of str) {
        if (strg === ']') {
            let substr = '';
            while (result.length > 0 && result[result.length - 1] !== '[') {
                substr = result.pop() + substr;
            }
            result.pop();

            let repeat = '';
            while(result.length > 0 && /^\d+$/.test(result[result.length - 1])) {
                repeat = result.pop() + repeat;
            }
            
            const count = parseInt(repeat, 10);

            result.push(substr.repeat(count));
        }
        else {
            result.push(strg);
        }
    }

    return result.join('');
};