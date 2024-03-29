/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

class LRUCache {
  /**
   * use double linked-list where
   * the first value is the least recently used and
   * the last one is the most recently used value
   */
  cache: DLL | null;
  capacity: number;
  size: number;
  hash: { [key: number]: DLL };
  left: DLL | null;
  right: DLL | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.hash = {};
    this.size = 0;
    this.left = null;
    this.right = null;
  }

  get(key: number): number {
    const node = this.hash[key];
    if (!node || !this.right || !this.left) return -1;

    // move the current node to the end because it becomes the recently used value
    this.left = this.left?.next;
    this.right.next = node;
    node.next = null;
    node.prev = this.right;
    this.right = this.right.next;

    if (!this.left) this.left = node.prev;
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.size === 1) {
      this.left = this.cache;
      this.right = this.cache;
    }

    const node = new DLL(key, value);
    if (this.size === this.capacity) {
      if (this.left) {
        delete this.hash[this.left.key];
        this.left = this.left.next;
      }
    } else {
      this.size++;
    }

    if (!this.right) {
      this.left = node;
      this.right = node;
    } else {
      this.right.next = node;
      this.right = this.right.next;
    }
    this.hash[key] = node;
  }
}

// double linked-list class
class DLL {
  val: number;
  next: DLL | null;
  prev: DLL | null;
  key: number;
  constructor(key: number, val: number, next?: DLL | null, prev?: DLL | null) {
    this.key = key;
    this.val = val;
    this.next = next ? next : null;
    this.prev = prev ? prev : null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
