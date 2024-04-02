/*
 * @lc app=leetcode id=2074 lang=typescript
 *
 * [2074] Reverse Nodes in Even Length Groups
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

function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let res = head;
  let cur = res.next; // the current node we are accessing
  let prev = res; // the node before the one we are accessing currently
  let start: ListNode = prev; // to mark the start of a group (node before the first node of the group)
  let end: ListNode | null = cur; // to mark the end of a group (node after the last node of the group)
  let temp_head: ListNode | null = null; // head of a list that temporarily hold the reversed list
  let temp: ListNode | null = null; // tail of a list that temporarily hold the reversed list
  let index = 2; // to count individual nodes
  let group = 1; // the current group we are on
  let group_members = 0; // counter for the nodes in a single group
  let next_group = 2; // the start index of the next group
  let reversing = false;

  while (cur) {
    if (index == next_group) {
      if (reversing && temp_head && temp) {
        // if we have been reversing, copy the reversed nodes into the final list
        start.next = temp_head;
        temp.next = end;
        prev = temp;
      }

      temp = null;
      temp_head = null;
      start = prev;
      group++;
      group_members = 0;
      next_group = index + group;
      reversing = !reversing;
    }

    // add to the reversed list
    const node = new ListNode(cur.val);
    if (!temp) {
      temp = node;
      temp_head = temp;
    } else {
      node.next = temp_head;
      temp_head = node;
    }

    group_members++;
    index++;
    prev = cur;
    cur = cur.next;
    end = cur;
  }

  if (group_members % 2 === 0 && temp && temp_head) {
    // if we have even number reversed nodes in the last group, add them to the final list
    start.next = temp_head;
  }

  return res;
}

// @lc code=end
