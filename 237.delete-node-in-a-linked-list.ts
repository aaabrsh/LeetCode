/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
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
 Do not return anything, modify it in-place instead.
 */

function deleteNode(node: ListNode | null): void {
  /** improving on the first solution, we don't need to shift every value to the left.
   * instead, we can jsut shift the first value and set its next value to the second one after it
   */

  node.val = node.next?.val;
  node.next = node.next?.next;
}

/*******************FIRST SOLUTION *******************/
// function deleteNode(node: ListNode | null): void {
//   /** since we have no access to the head, we shift every value
//    * after the given node one place to the left and delete the last node
//    */

//   let prev = node;
//   let cur = node?.next;

//   while (cur !== null) {
//     prev.val = cur.val;
//     if (!cur.next) {
//       prev.next = null;
//       break;
//     }
//     prev = cur;
//     cur = cur.next;
//   }
// }
// @lc code=end
