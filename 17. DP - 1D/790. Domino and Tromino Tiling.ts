function numTilings(n: number): number {
    const MOD: number = 1e9 + 7;

    let tilingWays: number[] = [1, 0, 0, 0];

    for (let i = 1; i <= n; ++i) {
        let newTilingWays: number[] = [0, 0, 0, 0];

        newTilingWays[0] = (tilingWays[0] + tilingWays[1] + tilingWays[2] + tilingWays[3]) % MOD;
        newTilingWays[1] = (tilingWays[2] + tilingWays[3]) % MOD;
        newTilingWays[2] = (tilingWays[1] + tilingWays[3]) % MOD;
        newTilingWays[3] = tilingWays[0];

        tilingWays = [...newTilingWays];
    }

    return tilingWays[0];
}

