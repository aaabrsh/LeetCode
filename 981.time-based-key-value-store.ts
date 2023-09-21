/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
class TimeMap {
  private timeMap: { [key: string]: { timestamp: number; value: string }[] };
  constructor() {
    this.timeMap = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.timeMap[key]) this.timeMap[key].push({ timestamp, value });
    else this.timeMap[key] = [{ timestamp, value }];
  }

  get(key: string, timestamp: number): string {
    if (!this.timeMap[key]) {
      return "";
    }

    const timestamps = this.timeMap[key];

    if (timestamps.length === 0 || timestamps[0].timestamp > timestamp) {
      return "";
    }

    let l = 0;
    let r = timestamps.length - 1;
    let closest = timestamps[0].value;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      const midT = timestamps[m];

      if (midT.timestamp === timestamp) return midT.value;

      if (midT.timestamp > timestamp) {
        r = m - 1;
      } else {
        closest = midT.value;
        l = m + 1;
      }
    }

    return closest ?? "";
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
