/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let current1 = list1;
  let current2 = list2;
  let newList: ListNode | null = new ListNode();
  let head: ListNode | null = null;

  while (current1 != null || current2 != null) {
    if (current1 == null) {
      newList.next = current2;
      current2 = current2.next;
    } else if (current2 == null) {
      newList.next = current1;
      current1 = current1.next;
    } else {
      if (current1.val < current2.val) {
        newList.next = current1;
        current1 = current1.next;
      } else {
        newList.next = current2;
        current2 = current2.next;
      }
    }

    if (head == null) {
      head = newList.next;
    }

    newList = newList.next;
  }

  return head;
}
// @lc code=end
