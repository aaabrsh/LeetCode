/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // The linked list is already sorted
  if (!head) return null;

  let cur: ListNode | null = head;
  let prev: ListNode | null = null;
  let duplicate: number = Infinity;
  let res: ListNode | null = null;

  while (cur) {
    if (cur.val === cur.next?.val) {
      // duplicate node
      duplicate = cur.val;
    } else if (cur.val !== duplicate) {
      // unique node
      if (prev) {
        prev.next = cur;
        prev = prev?.next;
      } else {
        prev = cur;
      }

      if (!res) res = cur; // to skip if the first nodes are duplicates
      duplicate = Infinity;
    } else if (!cur.next && prev) {
      // if the last nodes are duplicates
      prev.next = null;
    }

    cur = cur.next;
  }

  return res;
}
// @lc code=end
