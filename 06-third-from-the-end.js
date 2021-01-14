// Write an algorithm to find the 3rd element from the end of a linked list.
// Note You may be tempted to add a length property to your linked list class.
// The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

const main = require("./02-singly-linked-list");

let SSL = main();

const thirdFromEnd = (list) => {
  let currNode = list.head;

  while (currNode) {
    if (currNode.next.next.next === null) {
      return currNode;
    }
    currNode = currNode.next;
  }
};

// console.log(thirdFromEnd(SSL).data) // Should be Hotdog
