function compress(chars: string[]): number {
    let read = 0;
    let write = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;
        
        while (read < chars.length && chars[read] === char) {
            count++;
            read++;
        }

        chars[write] = char;
        write++;

        if (count > 1) {
            for (let c of count.toString()) {
                chars[write] = c;
                write++;
            }
        }
    }

    return write;
};