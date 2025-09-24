function uniqueOccurrences(arr: number[]): boolean {
    let mapArr = new Map();
    
    for (let num of arr) {
        mapArr.set(num, (mapArr.get(num) || 0) + 1);
    }

    const values = Array.from(mapArr.values());
    const setArr = new Set(values);

    return values.length === setArr.size;
};