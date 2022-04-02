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
  if (!curNode) return head;
  while (curNode) {
    if (curNode.child) {
      const nextNode = curNode.next;
      let childHead = flatten(curNode.child);
      let childTail = childHead;
      for (childTail; !!childTail.next; childTail = childTail.next) {}
      curNode.next = childHead;
      childHead.prev = curNode;
      childTail.next = nextNode;
      if (nextNode) {
        nextNode.prev = childTail;
      }
      curNode.child = null;
    }
    curNode = curNode.next;
  }
  return head;
};
