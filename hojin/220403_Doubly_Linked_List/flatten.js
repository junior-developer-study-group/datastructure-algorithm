/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head) => {
  let curNode = head;
  while (curNode) {
    if (curNode.child) {
      const nextNode = curNode.next;
      let childHead = flatten(curNode.child);
      let childTail = childHead;
      while (childTail.next) {
        childTail = childTail.next;
      }
      connect(curNode, childHead);
      connect(childTail, nextNode);
      curNode.child = null;
    }
    curNode = curNode.next;
  }
  return head;
};
function connect(prev, next) {
  if (prev) {
    prev.next = next;
  }
  if (next) {
    next.prev = prev;
  }
}
