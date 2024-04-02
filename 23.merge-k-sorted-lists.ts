/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // create a new linked-list, iterate through all the nodes in lists array and find them their position in the new linked-list
  if (lists.length <= 1) return lists[0] ?? null;

  let newList: LN | null = null;

  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    let cur = list;
    if (!list) continue;

    if (!newList) {
      newList = new LN(list.val);
      cur = cur.next;
    }

    while (cur) {
      newList.insert(cur.val);
      cur = cur.next;
    }
  }

  return newList?.head ?? null;
}

class LN extends ListNode {
  head: ListNode;

  constructor(val?: number, next?: ListNode | null) {
    super(val, next);
    this.head = this;
  }

  insert(val: number) {
    const newNode = new ListNode(val);

    // insert at the start
    if (this.head.val > val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prev = this.head;
    let current = this.head.next;
    while (current) {
      if (current.val > val) {
        // insert at the middle
        prev.next = newNode;
        newNode.next = current;
        return;
      }
      prev = current;
      current = current.next;
    }

    // insert at the end
    prev.next = newNode;
    return;
  }
}
// @lc code=end
