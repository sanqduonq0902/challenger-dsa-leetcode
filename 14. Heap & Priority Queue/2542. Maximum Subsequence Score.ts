class MyMinHeap {
    private heap: number[] = [];

    size() {
        return this.heap.length;
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    push(val: number) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.size() === 0) return undefined;
        const root = this.heap[0];
        const last = this.heap.pop()!;
        if (this.size() > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }
        return root;
    }

    private siftUp(i: number) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i] >= this.heap[parent]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    private siftDown(i: number) {
        const n = this.size();
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

function maxScore(nums1: number[], nums2: number[], k: number): number {
    const n = nums1.length;
    const pairs: [number, number][] = [];

    for (let i = 0; i < n; i++) {
        pairs.push([nums2[i], nums1[i]]);
    }

    pairs.sort((a, b) => b[0] - a[0]);

    const heap = new MyMinHeap();
    let sum = 0;
    let res = 0;

    for (const [num2, num1] of pairs) {
        heap.push(num1);
        sum += num1;

        if (heap.size() > k) {
            sum -= heap.pop()!;
        }

        if (heap.size() === k) {
            res = Math.max(res, sum * num2);
        }
    }

    return res;
}
