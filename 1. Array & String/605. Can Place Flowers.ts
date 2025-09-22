function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let length = flowerbed.length;

    for (let i = 0; i < length; i++) {
        let left = (i === 0) ? 0 : flowerbed[i - 1];
        let right = (i === length - 1) ? 0 : flowerbed[i + 1];

        if (flowerbed[i] === 0 && left === 0 && right === 0) {
            flowerbed[i] = 1;
            n--;
        }
        if (n <= 0) {
            return true;
        }
    }
    return false;
};