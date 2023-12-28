/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
  /**
   * using two pointers, if one pointer traverses the list faster
   * than the other, then if there is a loop in our list,
   * the faster pointer will have to meet the slow one at some point
   */

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}

/*******************FIRST SOLUTION *******************/
// using hash map
// function hasCycle(head: ListNode | null): boolean {
//   const hash: { [key: number]: ListNode[] } = {};

//   let cur = head;
//   while (cur) {
//     if (hash[cur.val]) {
//       const matches = hash[cur.val];
//       for (const match of matches) {
//         if (match === cur) {
//           return true;
//         }
//       }
//       hash[cur.val].push(cur);
//     } else {
//       hash[cur.val] = [cur];
//     }

//     cur = cur.next;
//   }

//   return false;
// }
// @lc code=end
