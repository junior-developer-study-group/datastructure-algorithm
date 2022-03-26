/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//Runtime: 124 ms, faster than 73.52%
//Memory Usage: 48.9 MB, less than 11.47%
const addTwoNumbers = (l1, l2) => {
  let sum = 0n,
    tenSqr = 1n;
  for (let node = l1; !!node; node = node.next) {
    sum += BigInt(node.val) * BigInt(tenSqr);
    tenSqr *= 10n;
  }
  tenSqr = 1n;
  for (let node = l2; !!node; node = node.next) {
    sum += BigInt(node.val) * BigInt(tenSqr);
    tenSqr *= 10n;
  }
  const head = new ListNode(sum % 10n);
  sum /= 10n;
  let current = head;
  while (sum > 0) {
    current.next = new ListNode(sum % 10n);
    current = current.next;
    sum /= 10n;
  }
  return head;
};
