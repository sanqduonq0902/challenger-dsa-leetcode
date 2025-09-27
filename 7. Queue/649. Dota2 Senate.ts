function predictPartyVictory(senate: string): string {
    let n = senate.length;
    let queueR = [];
    let queueD = [];

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            queueR.push(i);
        } else {
            queueD.push(i);
        }
    }

    while(queueR.length > 0 && queueD.length > 0) {
        const r: number = queueR.shift()!;
        const d: number = queueD.shift()!;

        if (r < d) {
            queueR.push(r + n);
        } 
        else {
            queueD.push(d + n);
        }
    }

    return queueR.length > 0 ? 'Radiant' : 'Dire';
};