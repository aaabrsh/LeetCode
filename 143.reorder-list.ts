/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head) return;

  let cur = head;
  while (cur) {
    let temp = cur;
    let prev = cur;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;

    const next = cur.next;
    cur.next = temp;
    cur = cur.next;
    cur.next = next;
    cur = cur.next;
  }
}
// @lc code=end
