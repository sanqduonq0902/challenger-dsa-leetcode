class MyMinHeap<T> {
    private heap: T[];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.heap = [];
        this.comparator = comparator;
    }

    size(): number {
        return this.heap.length;
    }

    push(val: T): void {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }

    pop(): T | undefined {
        if (this.size() === 0) return undefined;
        const root = this.heap[0];
        const last = this.heap.pop()!;
        if (this.size() > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }
        return root;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    private siftUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.comparator(this.heap[i], this.heap[parent]) >= 0) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    private siftDown(i: number): void {
        const n = this.size();
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && this.comparator(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < n && this.comparator(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

function totalCost(costs: number[], k: number, candidates: number): number {
    let n = costs.length;
    let left = 0, right = n - 1;
    let total = 0;

    const leftHeap = new MyMinHeap<[number, number]>((a, b) =>
        a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    );
    const rightHeap = new MyMinHeap<[number, number]>((a, b) =>
        a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    );

    for (let i = 0; i < candidates && left <= right; i++) {
        leftHeap.push([costs[left], left]);
        left++;
    }
    for (let i = 0; i < candidates && left <= right; i++) {
        rightHeap.push([costs[right], right]);
        right--;
    }

    for (let hired = 0; hired < k; hired++) {
        let pick: [number, number];
        if (leftHeap.size() > 0 && rightHeap.size() > 0) {
            if (leftHeap.peek()![0] <= rightHeap.peek()![0]) {
                pick = leftHeap.pop()!;
                if (left <= right) {
                    leftHeap.push([costs[left], left]);
                    left++;
                }
            } else {
                pick = rightHeap.pop()!;
                if (left <= right) {
                    rightHeap.push([costs[right], right]);
                    right--;
                }
            }
        } else if (leftHeap.size() > 0) {
            pick = leftHeap.pop()!;
            if (left <= right) {
                leftHeap.push([costs[left], left]);
                left++;
            }
        } else {
            pick = rightHeap.pop()!;
            if (left <= right) {
                rightHeap.push([costs[right], right]);
                right--;
            }
        }

        total += pick[0];
    }

    return total;
}
