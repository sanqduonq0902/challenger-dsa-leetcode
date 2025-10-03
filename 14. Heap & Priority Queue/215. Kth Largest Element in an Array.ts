class MyMinHeap {
    private heap: number[] = [];

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private parent(i: number) {
        return Math.floor((i - 1) / 2);
    }

    private left(i: number) {
        return 2 * i + 1;
    }

    private right(i: number) {
        return 2 * i + 2;
    }

    enqueue(value: number) {
        this.heap.push(value);
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    dequeue(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapify(0);
        return root;
    }

    private heapify(i: number) {
        let smallest = i;
        const l = this.left(i), r = this.right(i);
        if (l < this.heap.length && this.heap[l] < this.heap[smallest]) smallest = l;
        if (r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r;
        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapify(smallest);
        }
    }

    peek(): number {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }
}

function findKthLargest(nums: number[], k: number): number {
    const heap = new MyMinHeap();

    for (const num of nums) {
        heap.enqueue(num);
        if (heap.size() > k) {
            heap.dequeue();
        }
    }

    return heap.peek();
};
