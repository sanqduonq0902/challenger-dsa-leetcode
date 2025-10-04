class MyHeap {
  private data: number[] = [];

  size(): number { return this.data.length; }
  peek(): number | undefined { return this.data[0]; }

  insert(x: number) {
    this.data.push(x);
    this.siftUp(this.data.length - 1);
  }

  extractMin(): number | undefined {
    if (this.data.length === 0) return undefined;
    if (this.data.length === 1) return this.data.pop();
    const res = this.data[0];
    this.data[0] = this.data.pop()!;
    this.siftDown(0);
    return res;
  }

  private siftUp(i: number) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.data[p] <= this.data[i]) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }

  private siftDown(i: number) {
    const n = this.data.length;
    while (true) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let smallest = i;
      if (l < n && this.data[l] < this.data[smallest]) smallest = l;
      if (r < n && this.data[r] < this.data[smallest]) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}

class SmallestInfiniteSet {
  private cur: number;
  private heap: MyHeap;
  private inHeap: Set<number>;

  constructor() {
    this.cur = 1;
    this.heap = new MyHeap();
    this.inHeap = new Set();
  }

  popSmallest(): number {
    if (this.heap.size() > 0) {
      const val = this.heap.extractMin()!;
      this.inHeap.delete(val);
      return val;
    } else {
      const val = this.cur;
      this.cur += 1;
      return val;
    }
  }

  addBack(num: number): void {
    if (num >= this.cur) return;
    if (this.inHeap.has(num)) return;
    this.heap.insert(num);
    this.inHeap.add(num);
  }
}
