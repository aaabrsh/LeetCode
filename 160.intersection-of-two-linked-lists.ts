/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA == null || headB == null) return null;

  let a = headA;
  let b = headB;

  while (a != b) {
    // at the end of the list, just reset the pointer to the head of the other list
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
    // if both are null, they a != b is false and we return null (b/c a === null)
  }

  return a;
}
// @lc code=end
