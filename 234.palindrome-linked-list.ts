/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
  let cur = head;
  const values: number[] = [];

  while (cur) {
    values.push(cur.val);
    cur = cur.next;
  }

  const mid = Math.floor(values.length / 2);
  let firstHalf = "";
  let secondHalf = "";
  if (values.length % 2 === 0) {
    // if length is even
    firstHalf = values.slice(0, mid).join("");
    secondHalf = values.slice(mid).reverse().join("");
  } else {
    // if length is odd
    firstHalf = values.slice(0, mid).join("");
    secondHalf = values
      .slice(mid + 1)
      .reverse()
      .join("");
  }

  return firstHalf === secondHalf;
}
// @lc code=end
