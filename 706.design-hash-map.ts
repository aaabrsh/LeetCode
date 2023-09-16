/*
 * @lc app=leetcode id=706 lang=typescript
 *
 * [706] Design HashMap
 */

// @lc code=start
class MyHashMap {
  hashMap: { [key: number]: number };
  constructor() {
    this.hashMap = {};
  }

  put(key: number, value: number): void {
    this.hashMap[key] = value;
  }

  get(key: number): number {
    return this.hashMap[key] ?? -1;
  }

  remove(key: number): void {
    delete this.hashMap[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
