/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  // find length of the list
  let cur: ListNode | null = head;
  let len = 0;
  while (cur) {
    cur = cur.next;
    len++;
  }

  /** if k > legth of the list, no need to rotate multiple times.
   * maximum rotation is equal to length-1 of the list.
   * if length of the list is n, then n rotation is the same as no rotation
   */
  k = k % len;
  if (k === 0) return head;

  let start: ListNode | null = null;
  let end: ListNode | null = null;
  cur = head;
  let i = 1;

  /**
   * mark the start and end of the part of the list to be rotated.
   * the start will be on len - k, and the end will be the end of the list.
   * move this part to the start of the list.
   */
  while (cur) {
    if (i === len - k) {
      start = cur;
    }

    if (cur.next === null) {
      end = cur;
    }

    cur = cur.next;
    i++;
  }

  if (start && end) {
    end.next = head;
    head = start.next;
    start.next = null;
  }

  return head;
}
// @lc code=end

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
