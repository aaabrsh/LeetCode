/*
 * @lc app=leetcode id=705 lang=typescript
 *
 * [705] Design HashSet
 */

// @lc code=start
class MyHashSet {
  hashSet: { [key: number]: boolean };
  constructor() {
    this.hashSet = {};
  }

  add(key: number): void {
    this.hashSet[key] = true;
  }

  remove(key: number): void {
    delete this.hashSet[key];
  }

  contains(key: number): boolean {
    return this.hashSet[key] ?? false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
