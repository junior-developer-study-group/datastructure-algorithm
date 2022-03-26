/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
  let sz = 0;
  for (let node = head; !!node; node = node.next) {
    ++sz;
  }
  if (n === sz) {
    head = head.next;
  } else {
    let curNode = head;
    let nextNode = curNode.next;
    for (let i = 1; i < sz - n; ++i) {
      curNode = nextNode;
      nextNode = curNode.next;
    }
    curNode.next = nextNode.next;
  }
  return head;
};
