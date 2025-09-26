function asteroidCollision(asteroids: number[]): number[] {
    let n = asteroids.length;
    let result = [];

    for (const curr of asteroids) {
        if (curr > 0) {
            result.push(curr);
        }
        else {
            let alive = true;
            while(alive && result.length > 0 && result[result.length - 1] > 0) {
                let top = result[result.length - 1];
                if (top < Math.abs(curr)) {
                    result.pop();
                } 
                else if (top === Math.abs(curr)) {
                    result.pop();
                    alive = false;
                }
                else {
                    alive = false;
                }
            }

            if (alive) {
                result.push(curr);
            }         
        }
    }

    return result;
};